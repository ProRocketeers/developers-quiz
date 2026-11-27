import { useEffect, useState } from "react";
import { verifyCourseMaterialPassword } from "../utils/verifyCourseMaterialPassword";

const VERIFICATION_DELAY_MS = 400;

export type PasswordStatus =
  | "empty"
  | "checking"
  | "valid"
  | "invalid"
  | "unavailable";

export function useCourseMaterialsPassword(password: string): PasswordStatus {
  const [verification, setVerification] = useState<{
    checkedPassword: string;
    status: "valid" | "invalid" | "unavailable";
  } | null>(null);

  useEffect(() => {
    if (password === "") {
      return;
    }
    const abortController = new AbortController();
    const timer = setTimeout(async () => {
      try {
        const isValid = await verifyCourseMaterialPassword(
          password,
          abortController.signal,
        );
        setVerification({
          checkedPassword: password,
          status: isValid ? "valid" : "invalid",
        });
      } catch (error) {
        if (abortController.signal.aborted) {
          return;
        }
        console.error("Course material password verification failed", error);
        setVerification({ checkedPassword: password, status: "unavailable" });
      }
    }, VERIFICATION_DELAY_MS);

    return () => {
      clearTimeout(timer);
      abortController.abort();
    };
  }, [password]);

  if (password === "") {
    return "empty";
  }
  return verification?.checkedPassword === password
    ? verification.status
    : "checking";
}
