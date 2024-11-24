// Logical and Math Problems

// 	11.	Factorial
// Write a function factorial(n) that returns the factorial of a number.
// Input: 5 → Output: 120

console.log("11.	Factorial: ");

function factorial(n) {
  console.log(n);
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  console.log(result);
}

factorial(5);

console.log("chatGPT answer: ");

function factorialGPT(n) {
  return n === 0 ? 1 : n * factorialGPT(n - 1);
}
console.log(factorialGPT(5));

// 	12.	Fibonacci
// Write a function fibonacci(n) that returns the first n Fibonacci numbers.
// Input: 5 → Output: [0, 1, 1, 2, 3]

console.log("12.	Fibonacci: ");

function fibonacci(n) {
  console.log(n);
  let result = [];
  for (let i = 0; i <= n; i++) {
    result.push(i);
    if (result.length > 2) {
      result[i] = result[i - 1] + result[i - 2];
    }
  }
  console.log(result);
}

fibonacci(5);

// 	13.	Prime Numbers
// Write a function isPrime(num) that checks if a number is prime.
// Input: 7 → Output: true

console.log("13.	Prime Numbers");

function isPrime(num) {
  console.log(num);
  let prime = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      prime = false;
    }
  }
  if (num > 1) {
    console.log(prime);
  } else console.log(false);
}

isPrime(7);

console.log("chatGPT answer: ");

function isPrimeGPT(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(isPrimeGPT(7));

// 	14.	Sum of Digits
// Write a function sumDigits(num) that calculates the sum of all digits in a number.
// Input: 123 → Output: 6

console.log("14.	Sum of Digits: ");

function sumDigits(num) {
  console.log(num);
  let strNum = "" + num;
  let digits = [];
  for (let i = 0; i < strNum.length; i++) {
    digits.push(num % 10 ^ i);
  }
  console.log(digits);
  result = digits.reduce((sum, item) => {
    return (sum += item);
  }, 0);
  console.log(result);
}

sumDigits(123);

console.log("chatGPT answer: ");

function sumDigitsGPT(num) {
  return num
    .toString()
    .split("")
    .reduce((sum, digit) => sum + Number(digit), 0);
}
console.log(sumDigitsGPT(123));

// 	15.	Binary to Decimal
// Write a function binaryToDecimal(bin) that converts a binary string to a decimal number.
// Input: "101" → Output: 5

console.log("15.	Binary to Decimal: ");

function binaryToDecimal(bin) {
  console.log(bin);
  let strBin = "" + bin;
  console.log(strBin);
  let digits = [];
  //   let result = 0;
  for (let i = 0; i < strBin.length; i++) {
    digits.push(bin % 10 ^ i);
  }
  console.log(digits);
  //   for (let i = 0; i < digits.length; i++) {
  //     result += (digits[i] * 2) ^ i;
  //   }
  //   console.log(result);
}

binaryToDecimal(101);

console.log("chatGPT answer: ");

function binaryToDecimalGPT(bin) {
  return parseInt(bin, 2);
}
console.log(binaryToDecimalGPT("101"));
