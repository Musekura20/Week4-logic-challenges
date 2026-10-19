
/*
BOSS ROUND

1. validatePassword(pw)

Pseudocode:
Create an empty errors array
Check if the password has at least 8 characters
Check every character using a loop
Check uppercase, lowercase, digits, special characters, and spaces
Add error messages for failed rules
Return the result
*/

function validatePassword(pw) {
  const errors = [];

  let hasUppercase = false;
  let hasLowercase = false;
  let hasDigit = false;
  let hasSpecial = false;
  let hasSpace = false;

  if (pw.length < 8) {
    errors.push("Must be at least 8 characters long.");
  }

  for (let i = 0; i < pw.length; i++) {
    const char = pw[i];

    if (char >= "A" && char <= "Z") {
      hasUppercase = true;
    } else if (char >= "a" && char <= "z") {
      hasLowercase = true;
    } else if (char >= "0" && char <= "9") {
      hasDigit = true;
    } else if (char === " ") {
      hasSpace = true;
    } else if ("!@#$%^&*".includes(char)) {
      hasSpecial = true;
    }
  }

  if (!hasUppercase) {
    errors.push("Must contain an uppercase letter.");
  }

  if (!hasLowercase) {
    errors.push("Must contain a lowercase letter.");
  }

  if (!hasDigit) {
    errors.push("Must contain a digit.");
  }

  if (!hasSpecial) {
    errors.push("Must contain a special character.");
  }

  if (hasSpace) {
    errors.push("Must not contain spaces.");
  }

  return {
    valid: errors.length === 0,
    errors: errors
  };
}

console.log(validatePassword("Hello123!"));
console.log(validatePassword("hello"));
console.log(validatePassword("Hello 123!"));


/*
2. romanNumeral(n)

Pseudocode:
Check if the number is between 1 and 3999
Create lists of Roman numeral values and symbols
Start with the largest value
While the number is greater than or equal to that value:
Add its symbol and subtract the value
Continue through the lists
Return the Roman numeral
*/

function romanNumeral(n) {
  if (n < 1 || n > 3999 || !Number.isInteger(n)) {
    return "Invalid";
  }

  const values = [
    1000, 900, 500, 400, 100, 90, 50,
    40, 10, 9, 5, 4, 1
  ];

  const symbols = [
    "M", "CM", "D", "CD", "C", "XC", "L",
    "XL", "X", "IX", "V", "IV", "I"
  ];

  let result = "";

  for (let i = 0; i < values.length; i++) {
    while (n >= values[i]) {
      result = result + symbols[i];
      n = n - values[i];
    }
  }

  return result;
}

console.log(romanNumeral(1994)); // MCMXCIV
console.log(romanNumeral(4));    // IV
console.log(romanNumeral(0));    // Invalid


/*
3. nationalIdCheck(id)

Pseudocode:
Check that the ID contains exactly 16 characters
Check that every character is a digit
Check that the first digit is 1
Read digits 2 to 5 as the birth year
Check that the year is valid
Check that the sixth digit is 7 or 8
Return true if all checks pass
Otherwise, return the first error message
*/

function nationalIdCheck(id) {
  if (id.length !== 16) {
    return "ID must contain exactly 16 digits.";
  }

  for (let i = 0; i < id.length; i++) {
    if (id[i] < "0" || id[i] > "9") {
      return "ID must contain digits only.";
    }
  }

  if (id[0] !== "1") {
    return "The first digit must be 1.";
  }

  const birthYear = Number(id.slice(1, 5));
  const currentYear = new Date().getFullYear();

  if (birthYear < 1900 || birthYear > currentYear) {
    return "Birth year must be between 1900 and the current year.";
  }

  if (id[5] !== "7" && id[5] !== "8") {
    return "The sixth digit must be 7 or 8.";
  }

  return true;
}

console.log(nationalIdCheck("1199871234567890"));
console.log(nationalIdCheck("2199871234567890"));
console.log(nationalIdCheck("123"));
