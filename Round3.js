
/*
ROUND 3: LOOPS AND PATTERNS

1. sumTo(n)
Pseudocode:
Start sum at 0
Add every number from 1 to n
Return sum
*/
function sumTo(n) {
  if (n < 1) return 0;

  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

console.log(sumTo(5)); // 15
console.log(sumTo(1)); // 1
console.log(sumTo(0)); // 0


/*
2. sumToFormula(n)
Pseudocode:
If n is less than 1, return 0
Calculate n * (n + 1) / 2
Return the answer
*/
function sumToFormula(n) {
  if (n < 1) return 0;

  return n * (n + 1) / 2;
}

console.log(sumToFormula(5)); // 15
console.log(sumToFormula(100)); // 5050
console.log(sumToFormula(0)); // 0


/*
3. isPrime(n)
Pseudocode:
Numbers below 2 are not prime
Check divisors from 2 up to the square root of n
If one divides evenly, return false
Otherwise, return true
*/
function isPrime(n) {
  if (n < 2) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(7)); // true
console.log(isPrime(9)); // false
console.log(isPrime(1)); // false


/*
4. printPyramid(rows)
Pseudocode:
For each row:
Print the correct number of spaces
Print the correct number of stars
Move to the next line
*/
function printPyramid(rows) {
  if (!Number.isInteger(rows) || rows <= 0) return;

  for (let i = 1; i <= rows; i++) {
    const spaces = " ".repeat(rows - i);
    const stars = "*".repeat(2 * i - 1);

    console.log(spaces + stars);
  }
}

printPyramid(4);
//    *
//   ***
//  *****
// *******


/*
5. fibonacci(n)
Pseudocode:
Start with 0 and 1
Add the current number to the result
Calculate the next number by adding the previous two
Repeat until there are n numbers
Return the numbers separated by commas
*/
function fibonacci(n) {
  if (!Number.isInteger(n) || n <= 0) return "";

  let a = 0;
  let b = 1;
  const result = [];

  for (let i = 0; i < n; i++) {
    result.push(a);

    const next = a + b;
    a = b;
    b = next;
  }

  return result.join(", ");
}

console.log(fibonacci(8)); // 0, 1, 1, 2, 3, 5, 8, 13
console.log(fibonacci(1)); // 0
console.log(fibonacci(0)); // empty string


/*
6. guessingGameSimulator(secret)
Pseudocode:
Set the possible range from 1 to 100
Guess the middle of the range
Print the guess
If correct, return the number of guesses
Otherwise, reduce the range and repeat
*/
function guessingGameSimulator(secret) {
  if (!Number.isInteger(secret) || secret < 1 || secret > 100) {
    return "Secret must be an integer from 1 to 100";
  }

  let low = 1;
  let high = 100;
  let guesses = 0;

  while (low <= high) {
    const guess = Math.floor((low + high) / 2);
    console.log("Guess:", guess);
    guesses++;

    if (guess === secret) return guesses;

    if (guess < secret) {
      low = guess + 1;
    } else {
      high = guess - 1;
    }
  }

  return guesses;
}

console.log("Guesses needed:", guessingGameSimulator(73));
console.log("Guesses needed:", guessingGameSimulator(1));
console.log("Guesses needed:", guessingGameSimulator(100));
