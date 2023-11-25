import { parseHours } from "./parseHours";

describe("parseHours", () => {
  it.each([
    ["10", 10],
    ["0", 0],
  ])("should parse plain int number %s", (input: string, expected: number) => {
    expect(parseHours(input)).toBe(expected);
  });

  it.each([
    ["10.5", 10.5],
    ["0.5", 0.5],
    ["1.25", 1.25],
    ["6.75", 6.75],
  ])(
    "should parse float number with . decimal separator %s",
    (input: string, expected: number) => {
      expect(parseHours(input)).toBe(expected);
    },
  );

  it.each([
    ["10,5", 10.5],
    ["0,5", 0.5],
    ["1,25", 1.25],
    ["6,75", 6.75],
  ])(
    "should parse float number with , decimal separator %s",
    (input: string, expected: number) => {
      expect(parseHours(input)).toBe(expected);
    },
  );

  it.each([
    ["10:30", 10.5],
    ["0:30", 0.5],
    ["1:15", 1.25],
    ["6:45", 6.75],
  ])(
    "should parse float number with hh:mm format %s",
    (input: string, expected: number) => {
      expect(parseHours(input)).toBe(expected);
    },
  );
});
