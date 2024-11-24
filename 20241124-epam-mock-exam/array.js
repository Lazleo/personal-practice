// Array and String Manipulations

// 6.	Unique Elements
// Write a function getUnique(arr) that returns only the unique elements in an array.
// Input: [1, 2, 2, 3, 4, 4] → Output: [1, 3]

console.log("6.	Unique Elements: ");

function getUnique(arr) {
  console.log(arr);
  // WTF?
}

getUnique([1, 2, 2, 3, 4, 4]);

console.log("chatGPT answer: ");

// give me an explanation
function getUniqueGPT(arr) {
  return arr.filter((item) => arr.indexOf(item) === arr.lastIndexOf(item));
}
console.log(getUniqueGPT([1, 2, 2, 3, 4, 4]));

// 	7.	Anagram Check
// Write a function isAnagram(str1, str2) that checks if two strings are anagrams of each other.
// Input: "listen", "silent" → Output: true

console.log("7.	Anagram Check: ");

function isAnagram(str1, str2) {
  console.log(str1, str2);
  let str1Letters = [];
  let str2Letters = [];
  let anagram = false;
  for (let i = 0; i < str1.length; i++) {
    str1Letters.push(str1[i]);
  }
  console.log(str1Letters);
  for (let i = 0; i < str2.length; i++) {
    str2Letters.push(str2[i]);
  }
  console.log(str2Letters);
  str1Letters.forEach((letter) => {
    anagram = str2Letters.includes(letter);
  });
  if (anagram && str1.length === str2.length) {
    console.log(true);
  } else console.log(false);
}

isAnagram("listen", "silent");
isAnagram("apples", "silent"); //WRONG

console.log("chatGPT answer: ");

function isAnagramGPT(str1, str2) {
  const format = (str) => str.toLowerCase().split("").sort().join("");
  return format(str1) === format(str2);
}
console.log(isAnagramGPT("listen", "silent"));

// 	8.	Flatten Array
// Write a function flatten(arr) that flattens a nested array.
// Input: [1, [2, 3], [4, [5]]] → Output: [1, 2, 3, 4, 5]

console.log("8.	Flatten Array: ");

function flatten(arr) {
  arr.forEach((item) => {
    console.log(item);
  });
}

flatten([1, [2, 3], [4, [5]]]);

console.log("chatGPT answer: ");

// give me an explanation
function flattenGPT(arr) {
  return arr.flat(Infinity);
}
console.log(flattenGPT([1, [2, 3], [4, [5]]]));

// 	9.	Remove Duplicates
// Write a function removeDuplicates(arr) that removes duplicates from an array.
// Input: [1, 2, 2, 3, 4] → Output: [1, 2, 3, 4]
console.log("9.	Remove Duplicates: ");
console.log("chatGPT answer: ");
// give me an explanation
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4]));

// OR

function removeDuplicates2(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates2([1, 2, 2, 3, 4]));

// 	10.	Count Vowels
// Write a function countVowels(str) that counts the number of vowels in a string.
// Input: "hello" → Output: 2

console.log("10.	Count Vowels: ");

const vowels = ["a", "e", "i", "o", "u"];

function countVowels(str) {
  console.log(str);
  let strLetters = [];
  let vowelsNr = 0;
  for (let i = 0; i < str.length; i++) {
    strLetters.push(str[i]);
  }
  strLetters.forEach((letter) => {
    if (vowels.includes(letter)) vowelsNr++;
  });
  console.log(vowelsNr);
}

countVowels("hello");

console.log("chatGPT answer: ");

function countVowelsGPT(str) {
  const vowels = "aeiou";
  return str.split("").filter((char) => vowels.includes(char.toLowerCase()))
    .length;
}
console.log(countVowelsGPT("hello"));
