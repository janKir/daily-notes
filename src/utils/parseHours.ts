export function parseHours(input: string): number | undefined {
  const trimmed = input.trim();

  if (!trimmed) {
    return undefined;
  }

  if (trimmed.includes(":")) {
    const colonMatch = trimmed.match(/(\d+)(:(\d\d))?/);
    if (colonMatch) {
      const hours = Number.parseInt(colonMatch[1], 10);
      const minutes = Number.parseInt(colonMatch[3] || "0", 10);
      return hours + minutes / 60;
    }
  }

  const parsedFloat = Number.parseFloat(trimmed.replace(",", "."));
  if (Number.isNaN(parsedFloat)) {
    return undefined;
  }

  return parsedFloat;
}
