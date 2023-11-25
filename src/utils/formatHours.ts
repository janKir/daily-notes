export function formatHours(
  hours: number,
  options: { alwaysSign?: boolean } = {},
): string {
  const absHours = Math.abs(hours);
  const h = Math.floor(absHours);
  const m = Math.round((absHours - h) * 60);
  const sign = options.alwaysSign && hours > 0 ? "+" : hours < 0 ? "-" : "";

  return `${sign}${h}:${m.toString().padStart(2, "0")}`;
}
