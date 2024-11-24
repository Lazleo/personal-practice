// JavaScript Fundamentals
//
// 1.	FizzBuzz
// Write a function that prints numbers from 1 to 100.
// 	•	For multiples of 3, print “Fizz”.
// 	•	For multiples of 5, print “Buzz”.
// 	•	For multiples of both, print “FizzBuzz”.

console.log("1. FizzBuzz: ");

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i, "FizzBuzz");
  } else if (i % 3 === 0 || i % 5 === 0) {
    if (i % 3 === 0) {
      console.log(i, "Fizz");
    } else if (i % 5 === 0) {
      console.log(i, "Buzz");
    }
  } else {
    console.log(i);
  }
}

// 	2.	Reverse a String
// Write a function reverseString(str) that takes a string as input and returns it reversed.
// Input: "hello" → Output: "olleh"
console.log("2. Reverse a string: ");

function reverseString(str) {
  console.log(str);
  const length = str.length;
  let reverse = "";
  for (let i = length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  console.log(reverse);
}

reverseString("hello");

console.log("chatGPT answer: ");

function reverseStringGPT(str) {
  return str.split("").reverse().join("");
}
console.log(reverseStringGPT("hello"));

// 	3.	Sum of an Array
// Write a function sumArray(arr) that returns the sum of all numbers in an array.
// Input: [1, 2, 3, 4] → Output: 10
console.log("3.	Sum of an Array: ");

function sumArray(arr) {
  console.log(arr);
  const result = arr.reduce((sum, item) => {
    return (sum += item);
  }, 0);
  console.log(result);
}

sumArray([1, 2, 3, 4]);

console.log("chatGPT answer: ");

function sumArrayGPT(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumArrayGPT([1, 2, 3, 4]));

// 	4.	Palindrome Check
// Write a function isPalindrome(str) to check if a string is a palindrome.
// Input: "madam" → Output: true

console.log("4.	Palindrome Check: ");

function isPalindrome(str) {
  console.log(str);
  let palindrome = false;
  const diff = str.length % 2 === 0 ? 1 : 0;
  const length = Math.floor(str.length / 2);
  for (let i = 0; i < length; i++) {
    if (str[i] === str[2 * length - diff - i]) {
      palindrome = true;
    } else {
      palindrome = false;
      console.log(palindrome);
      return;
    }
  }
  console.log(palindrome);
}

isPalindrome("madam");

console.log("chatGPT answer: ");

function isPalindromeGPT(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log(isPalindromeGPT("madam"));

// 	5.	Find Maximum
// Write a function findMax(arr) that takes an array of numbers and returns the largest number.
// Input: [3, 5, 1, 8, 2] → Output: 8

console.log("5.	Find Maximum: ");

function findMax(arr) {
  console.log(arr);
  const result = arr.reduce((max, item) => {
    if (item >= max) max = item;
    return max;
  }, arr[0]);
  console.log(result);
}

findMax([3, 5, 1, 8, 2]);

console.log("chatGPT answer: ");

function findMaxGPT(arr) {
  return Math.max(...arr);
}
console.log(findMaxGPT([3, 5, 1, 8, 2]));
