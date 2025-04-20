import { currentAgeForBirthYear } from "../utils";

describe("currentAgeForBirthYear", () => {
  it("returns the age of a person based on the year of birth", () => {
    // Arrange
    const currentYear = new Date().getFullYear();
    const birthYear = 1984;
    const expectedAge = currentYear - birthYear;

    // Act
    const actualAge = currentAgeForBirthYear(birthYear);

    // Assert
    expect(actualAge).toEqual(expectedAge);
  });

  it("returns 0 for someone born this year", () => {
    // Arrange
    const currentYear = new Date().getFullYear();
    
    // Act
    const age = currentAgeForBirthYear(currentYear);
    
    // Assert
    expect(age).toEqual(0);
  });

  it("handles future birth years by returning negative age", () => {
    // Arrange
    const futureYear = new Date().getFullYear() + 5;
    
    // Act
    const age = currentAgeForBirthYear(futureYear);
    
    // Assert
    expect(age).toEqual(-5);
  });

  it("throws an error when birth year is not a number", () => {
    // Arrange
    const invalidBirthYear = "1984";
    
    // Act & Assert
    expect(() => currentAgeForBirthYear(invalidBirthYear)).toThrow("Birth year must be a number");
  });
});