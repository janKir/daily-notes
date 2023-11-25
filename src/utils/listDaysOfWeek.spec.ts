import { DayOfWeek } from "../models/day-of-week/types";
import { listDaysOfWeek } from "./listDaysOfWeek";

describe("listDaysOfWeek", () => {
  it("should return all days of week starting with Monday", () => {
    // Arrange
    const startWith = DayOfWeek.Mon;
    const expected = [
      DayOfWeek.Mon,
      DayOfWeek.Tue,
      DayOfWeek.Wed,
      DayOfWeek.Thu,
      DayOfWeek.Fri,
      DayOfWeek.Sat,
      DayOfWeek.Sun,
    ];
    // Act
    const actual = listDaysOfWeek(startWith);
    // Assert
    expect(actual).toEqual(expected);
  });

  it("should return all days of week starting with Tuesday", () => {
    // Arrange
    const startWith = DayOfWeek.Tue;
    const expected = [
      DayOfWeek.Tue,
      DayOfWeek.Wed,
      DayOfWeek.Thu,
      DayOfWeek.Fri,
      DayOfWeek.Sat,
      DayOfWeek.Sun,
      DayOfWeek.Mon,
    ];
    // Act
    const actual = listDaysOfWeek(startWith);
    // Assert
    expect(actual).toEqual(expected);
  });

  it("should return all days of week starting with Wednesday", () => {
    // Arrange
    const startWith = DayOfWeek.Wed;
    const expected = [
      DayOfWeek.Wed,
      DayOfWeek.Thu,
      DayOfWeek.Fri,
      DayOfWeek.Sat,
      DayOfWeek.Sun,
      DayOfWeek.Mon,
      DayOfWeek.Tue,
    ];
    // Act
    const actual = listDaysOfWeek(startWith);
    // Assert
    expect(actual).toEqual(expected);
  });

  it("should return all days of week starting with Thursday", () => {
    // Arrange
    const startWith = DayOfWeek.Thu;
    const expected = [
      DayOfWeek.Thu,
      DayOfWeek.Fri,
      DayOfWeek.Sat,
      DayOfWeek.Sun,
      DayOfWeek.Mon,
      DayOfWeek.Tue,
      DayOfWeek.Wed,
    ];
    // Act
    const actual = listDaysOfWeek(startWith);
    // Assert
    expect(actual).toEqual(expected);
  });

  it("should return all days of week starting with Friday", () => {
    // Arrange
    const startWith = DayOfWeek.Fri;
    const expected = [
      DayOfWeek.Fri,
      DayOfWeek.Sat,
      DayOfWeek.Sun,
      DayOfWeek.Mon,
      DayOfWeek.Tue,
      DayOfWeek.Wed,
      DayOfWeek.Thu,
    ];
    // Act
    const actual = listDaysOfWeek(startWith);
    // Assert
    expect(actual).toEqual(expected);
  });

  it("should return all days of week starting with Saturday", () => {
    // Arrange
    const startWith = DayOfWeek.Sat;
    const expected = [
      DayOfWeek.Sat,
      DayOfWeek.Sun,
      DayOfWeek.Mon,
      DayOfWeek.Tue,
      DayOfWeek.Wed,
      DayOfWeek.Thu,
      DayOfWeek.Fri,
    ];
    // Act
    const actual = listDaysOfWeek(startWith);
    // Assert
    expect(actual).toEqual(expected);
  });

  it("should return all days of week starting with Sunday", () => {
    // Arrange
    const startWith = DayOfWeek.Sun;
    const expected = [
      DayOfWeek.Sun,
      DayOfWeek.Mon,
      DayOfWeek.Tue,
      DayOfWeek.Wed,
      DayOfWeek.Thu,
      DayOfWeek.Fri,
      DayOfWeek.Sat,
    ];
    // Act
    const actual = listDaysOfWeek(startWith);
    // Assert
    expect(actual).toEqual(expected);
  });
});
