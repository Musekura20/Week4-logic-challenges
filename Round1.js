
/*
ROUND 1: NUMBERS AND CONDITIONS

1. isLeapYear(year)
Pseudocode:
IF year is divisible by 400, return true
IF year is divisible by 100, return false
Otherwise, return whether year is divisible by 4
*/
function isLeapYear(year) {
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  return year % 4 === 0;
}

console.log(isLeapYear(2024)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(2000)); // true


/*
2. getBMICategory(weightKg, heightM)
Pseudocode:
IF height is 0 or less, return "Invalid height"
Calculate BMI
Return the correct BMI category
*/
function getBMICategory(weightKg, heightM) {
  if (heightM <= 0) return "Invalid height";

  const bmi = weightKg / (heightM * heightM);

  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Normal";
  if (bmi < 30) return "Overweight";
  return "Obese";
}

console.log(getBMICategory(50, 1.7)); // Underweight
console.log(getBMICategory(65, 1.7)); // Normal
console.log(getBMICategory(70, 0)); // Invalid height


/*
3. motoFare(km)
Pseudocode:
IF distance is 0 or less, return 0
IF distance is at most 2 km, return 300
Otherwise, add 107 for each extra kilometre
Round up partial kilometres
*/
function motoFare(km) {
  if (km <= 0) return 0;
  if (km <= 2) return 300;

  return 300 + Math.ceil(km - 2) * 107;
}

console.log(motoFare(2)); // 300
console.log(motoFare(3)); // 407
console.log(motoFare(0)); // 0


/*
4. convertSeconds(total)
Pseudocode:
Calculate hours, minutes, and seconds
Make minutes and seconds two digits
Return the formatted time
*/
function convertSeconds(total) {
  if (!Number.isInteger(total) || total < 0) {
    return "Invalid";
  }

  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;

  return `${hours}h ${String(minutes).padStart(2, "0")}m ${String(seconds).padStart(2, "0")}s`;
}

console.log(convertSeconds(7509)); // 2h 05m 09s
console.log(convertSeconds(60)); // 0h 01m 00s
console.log(convertSeconds(0)); // 0h 00m 00s


/*
5. changeMaker(amount)
Pseudocode:
Start with the largest note or coin
Find how many fit into the remaining amount
Subtract that value
Continue with smaller notes and coins
Return the counts
*/
function changeMaker(amount) {
  if (!Number.isInteger(amount) || amount < 0) {
    return "Invalid amount";
  }

  const values = [5000, 2000, 1000, 500, 100, 50, 20, 10, 5, 1];
  const result = [];
  let remaining = amount;

  for (let i = 0; i < values.length; i++) {
    const count = Math.floor(remaining / values[i]);

    if (count > 0) {
      result.push(`${count}×${values[i]}`);
    }

    remaining = remaining % values[i];
  }

  return result.length > 0 ? result.join(", ") : "0";
}

console.log(changeMaker(7385));

console.log(changeMaker(16)); // 1×10, 1×5, 1×1
console.log(changeMaker(0)); // 0
