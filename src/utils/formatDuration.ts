export const formatDuration = (durationMs?: number | null): string => {
  if (durationMs === null || durationMs === undefined || Number.isNaN(durationMs)) {
    return "—";
  }

  const safeMs = Math.max(0, durationMs);
  const totalSeconds = safeMs / 1000;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds - minutes * 60;
  const secondsText = seconds.toFixed(1).replace(/\.0$/, "");

  if (minutes > 0) {
    return `${minutes}m ${secondsText}s`;
  }

  return `${secondsText}s`;
};
