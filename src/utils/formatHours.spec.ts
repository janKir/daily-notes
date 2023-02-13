import { formatHours } from "./formatHours";

describe("formatHours", () => {
  it.each([
    [1, "1:00"],
    [1.5, "1:30"],
    [1.25, "1:15"],
    [10.1, "10:06"],
  ])("should return 2 digit for minutes %s", (hours, expected) => {
    expect(formatHours(hours)).toBe(expected);
  });

  it.each([
    [-1, "-1:00"],
    [-1.5, "-1:30"],
    [-1.25, "-1:15"],
    [-10.1, "-10:06"],
    [-5.75, "-5:45"],
  ])("should format negative hours %s", () => {
    expect(formatHours(-1)).toBe("-1:00");
  });

  it.each([
    [1, "+1:00"],
    [1.5, "+1:30"],
    [-5.75, "-5:45"],
  ])("should format hours with alwaysSign option %s", (hours, expected) => {
    expect(formatHours(hours, { alwaysSign: true })).toBe(expected);
  });

  it("should not add sign to 0 with alwaysSign option", () => {
    expect(formatHours(0, { alwaysSign: true })).toBe("0:00");
  });
});
