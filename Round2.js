
/*
ROUND 2: STRINGS

1. reverseString(str)
Pseudocode:
Start with an empty string
Read characters from the end to the beginning
Add each character to the result
Return the result
*/
function reverseString(str) {
  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
}

console.log(reverseString("Kigali")); // ilagiK
console.log(reverseString("abc")); // cba
console.log(reverseString("")); // empty string


/*
2. countChar(str, char)
Pseudocode:
Make both inputs lowercase
Check every character
Count matching characters
Return the count
*/
function countChar(str, char) {
  let count = 0;
  const text = str.toLowerCase();
  const target = char.toLowerCase();

  for (let i = 0; i < text.length; i++) {
    if (text[i] === target) {
      count++;
    }
  }

  return count;
}

console.log(countChar("Banana", "a")); // 3
console.log(countChar("Hello", "L")); // 2
console.log(countChar("", "a")); // 0


/*
3. isPalindrome(str)
Pseudocode:
Make the text lowercase
Remove spaces and punctuation
Compare characters from both ends
Return true if they match
*/
function isPalindrome(str) {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  for (let i = 0; i < clean.length / 2; i++) {
    if (clean[i] !== clean[clean.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome("Never odd or even")); // true
console.log(isPalindrome("Hello")); // false
console.log(isPalindrome("")); // true


/*
4. titleCase(str)
Pseudocode:
Split the sentence into words
Make the first letter of each word uppercase
Make the other letters lowercase
Join the words and return the sentence
*/
function titleCase(str) {
  const words = str.toLowerCase().split(" ");

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 0) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
  }

  return words.join(" ");
}

console.log(titleCase("welcome to kigali tech hub"));
// Welcome To Kigali Tech Hub

console.log(titleCase("HELLO world")); // Hello World
console.log(titleCase("")); // empty string


/*
5. maskPhone(phone)
Pseudocode:
Check that the phone has 10 digits and starts with 07
If invalid, return "Invalid"
Keep the first 3 and last 3 digits
Replace the middle 4 digits with stars
*/
function maskPhone(phone) {
  if (!/^07\d{8}$/.test(phone)) {
    return "Invalid";
  }

  return phone.slice(0, 3) + "****" + phone.slice(-3);
}

console.log(maskPhone("0788123456")); // 078****456
console.log(maskPhone("0712345678")); // 071****678
console.log(maskPhone("07812")); // Invalid


/*
6. longestWord(sentence)
Pseudocode:
Split the sentence into words
Remember the first word as the longest
Replace it only when a longer word appears
Return the longest word
*/
function longestWord(sentence) {
  const trimmed = sentence.trim();

  if (trimmed === "") return "";

  const words = trimmed.split(/\s+/);
  let longest = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }

  return longest;
}

console.log(longestWord("I love JavaScript")); // JavaScript
console.log(longestWord("code with loops")); // loops
console.log(longestWord("")); // empty string


/*
7. compress(str)
Pseudocode:
If the string is empty, return an empty string
Count matching characters next to each other
Add each character and its count to the result
Return the result
*/
function compress(str) {
  if (str === "") return "";

  let result = "";
  let count = 1;

  for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      result += str[i - 1] + count;
      count = 1;
    }
  }

  return result;
}

console.log(compress("aaabccdddd")); // a3b1c2d4
console.log(compress("xyz")); // x1y1z1
console.log(compress("")); // empty string
