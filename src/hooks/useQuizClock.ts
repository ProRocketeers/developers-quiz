import { useEffect, useState } from "react";

const MS_PER_MINUTE = 60_000;
const TICK_INTERVAL_MS = 1000;

export function useQuizClock(timeLimitMinutes: number) {
  const [startedAt] = useState(() => Date.now());
  const [now, setNow] = useState(startedAt);

  useEffect(() => {
    const timer = window.setInterval(
      () => setNow(Date.now()),
      TICK_INTERVAL_MS,
    );
    return () => window.clearInterval(timer);
  }, []);

  const elapsedMs = Math.max(0, now - startedAt);
  const remainingMs = Math.max(0, timeLimitMinutes * MS_PER_MINUTE - elapsedMs);
  return { startedAt, elapsedMs, remainingMs };
}
