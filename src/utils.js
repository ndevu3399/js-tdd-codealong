// Your code here
export function currentAgeForBirthYear(birthYear) {
    // Input validation
    if (typeof birthYear !== "number") {
      throw new Error("Birth year must be a number");
    }
  
    // Calculate age
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
  }