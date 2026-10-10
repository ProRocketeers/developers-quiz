import { useEffect } from "react";
import type { RefObject } from "react";

export function useBeforeUnloadWarning(
  isActive: boolean,
  isSuppressedRef: RefObject<boolean>,
) {
  useEffect(() => {
    if (!isActive) {
      return;
    }
    const warnBeforeUnload = (event: BeforeUnloadEvent) => {
      if (!isSuppressedRef.current) {
        event.preventDefault();
      }
    };
    window.addEventListener("beforeunload", warnBeforeUnload);
    return () => window.removeEventListener("beforeunload", warnBeforeUnload);
  }, [isActive, isSuppressedRef]);
}
