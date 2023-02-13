export function formatHours(
  hours: number,
  options: { alwaysSign?: boolean } = {}
): string {
  const h = Math.floor(hours);
  const m = Math.round((hours - h) * 60);
  const sign = options.alwaysSign && hours >= 0 ? "+" : "";

  return `${sign}${h}:${m.toString().padStart(2, "0")}`;
}
