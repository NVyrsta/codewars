"use strict";

///////////////////////////////////////////////////
///////////////////////////////////////////////////
// let obj = {
//     a: "Hi",
//     b: 20,
// };
// let a = "b";
// console.log(obj[a]);
// console.log(obj["a"]);

///////////////////////////////////////////////////

// Reverse words
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"
// const foo = (str) => {
//     const res = str.split(" ").map((a) => a.split("").reverse().join(""));
//     return res.join(" ");
// };
// console.log(foo("This is an example!"));
// console.log(foo("double  spaces"));
///////////////////////////////////////////////////

///////////////////////////////////////////////////
// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.
// What We're Testing
// We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
// Advanced users may find this extremely easy and can easily write this in one line.
// const sum = (arr) => arr.reduce((acc, cur) => acc + cur, 0);
// console.log(sum([1, 5.2, 4, 0, -1]));
///////////////////////////////////////////////////

///////////////////////////////////////////////////
// String repeat
// Write a function called repeatStr which repeats the given string string exactly n times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
// const repeatStr = (n, s) => s.repeat(n);
// console.log(repeatStr(5, "I"));
// console.log(repeatStr(5, "Hello"));
///////////////////////////////////////////////////

///////////////////////////////////////////////////
// Summing a number's digits
// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// const sumDigits = (n) => {
//     const s = ("" + n).split(``);
//     if (s[0] === "-") s.shift();
//     const sum = s.reduce((acc, i) => acc + +i, 0);
//     return sum;
// };
// console.log(sum(10));
// console.log(sum(99));
// console.log(sum(-32));
///////////////////////////////////////////////////

///////////////////////////////////////////////////
// Stop gninnipS My sdroW!
// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"
// const spinWords = (str) => {
//     const arr = [];
//     str = str.split(" ");
//     for (let i = 0; i < str.length; i++) {
//         if (str[i].length > 4) arr.push(str[i].split("").reverse().join(""));
//         else arr.push(str[i]);
//     }
//     return arr.join(" ");
// };
// console.log(spinWords("Just kidding there is still one more"));
// console.log(spinWords("Hey fellow warriors"));
///////////////////////////////////////////////////

///////////////////////////////////////////////////
// Is a number prime?
// Define a function that takes one integer argument and returns logical value true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Requirements
// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be given negative numbers as well (or 0).
// NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 (or similar, depends on language version). Looping all the way up to n, or n/2, will be too slow.
// Example
// is_prime(1)  /* false */
// is_prime(2)  /* true  */
// is_prime(-1) /* false */
// const is_prime = (n) => {
//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) return false;
//     }
//     return n > 1;
// };
// console.log(is_prime(7));
// console.log(is_prime(75));
// console.log(is_prime(-1));
///////////////////////////////////////////////////

///////////////////////////////////////////////////
// Array.diff
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.
// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
// arrayDiff([1,2,2,2,3],[2]) == [1,3]
// function arrayDiff(a, b) {
//     return a.filter((elem) => !b.includes(elem));
// }
// const arrayDiff = (arr, x) => {
//     if (x.length === 0) return arr;
//     if (arr.length === 0) return [];
//     if (x.length > 1) {
//         for (let i = 0; i < x.length; i++) {
//             [...arr].filter((e) => e !== +x);
//         }
//         return arr;
//     } else return [...arr].filter((e) => e !== +x);
// };
// console.log(arrayDiff([1, 2, 2, 2, 3], [2]));
// console.log(arrayDiff([1, 2], [1]));
// console.log(arrayDiff([1, 2, 3], [1, 2]));
// console.log(arrayDiff([], [1, 2]));
// console.log(arrayDiff([1, 2, 3], []));
///////////////////////////////////////////////////

///////////////////////////////////////////////////

// String ends with?
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false
// const solution = (str, end) =>
//     end === "" ? true : str.slice(-end.length) === end;

// console.log(solution("abc", ""));
// console.log(solution("abc", "d"));
// console.log(solution("karnaval", "val"));
///////////////////////////////////////////////////

///////////////////////////////////////////////////
// Convert string to camel case
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
// const conv = (s) => {
//     s.find("-");
//     let ns = "";
//     if (s.indexOf("_")) {
//         ns = s.replaceAll("_", "");

//         return ns;
//     }
//     if (s.find("-")) {
//         ns = s.split("-");
//         console.log(ns);
//         for (let i = 1; i < ns.length; i++) {
//             ns[i] = ns[i][0].toUpperCase() + ns[i].slice(1);
//         }
//         return ns;
//     }
// };
// function toCamelCase(str) {
//     str = str.split("");
//     return str
//         .map(function(el, i) {
//             if (el == "-" || el == "_") {
//                 el = str[i + 1].toUpperCase();
//                 str.splice(i + 1, 1);
//             }
//             return el;
//         })
//         .join("");
// }
// console.log(toCamelCase("the-stealth-warrior"));
// console.log(toCamelCase("The_Stealth_Warrior"));

///////////////////////////////////////////////////

///////////////////////////////////////////////////
// Split Strings
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']
// const sp = (s) => {
//     const arr = [];
//     if (s.length % 2 !== 0) s = s + "_";
//     for (let i = 0; i < s.length; i += 2) {
//         arr.push(s[i] + s[i + 1]);
//     }
//     return arr;
// };
// console.log(sp("abcdef"));
// console.log(sp("abc"));
///////////////////////////////////////////////////

///////////////////////////////////////////////////
// What century is it?
// Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

// Examples
// "1999" --> "20th"
// "2011" --> "21st"
// "2154" --> "22nd"
// "2259" --> "23rd"
// "1124" --> "12th"
// "2000" --> "20th"
// const cen = (s) =>
//     Math.ceil(+s / 100) +
//     (Math.ceil(+s / 100) < 20 ?
//         "th" :
//     ["th", "st", "nd", "rd"][Math.ceil(+s / 100) % 10] || "th");

// function whatCentury(year) {
//     const c = Math.floor(+year / 100);
//     if (c < 20) return c + "th";
//     switch (c % 10) {
//         case 1:
//             return c + "st";
//         case 2:
//             return c + "nt";
//         case 3:
//             return c + "rd";
//         default:
//             return c + "th";
//     }
// }
// console.log(whatCentury("1999"));
// console.log(whatCentury("2011"));
// console.log(whatCentury("2154"));
// console.log(whatCentury("2259"));
// console.log(whatCentury("1124"));
// console.log(whatCentury("2000"));
///////////////////////////////////////////////////

///////////////////////////////////////////////////
// Create Phone Number
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!
// const createPhoneNumber = (arr) => {
//     arr = arr.join("");
//     return `(${arr.slice(0, 3)}) ${arr.slice(3, 6)}-${arr.slice(6)}`;
// };
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
///////////////////////////////////////////////////

///////////////////////////////////////////////////
// const litres = (t) => Math.floor(t / 2);
///////////////////////////////////////////////////

///////////////////////////////////////////////////
// Array plus array
// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.
// const arrayPlusArray = (arr1, arr2) =>
//   arr1.reduce((acc, n) => acc + n, 0) + arr2.reduce((acc, n) => acc + n, 0);
// function arrayPlusArray(...arrays) {
//     return [].concat(...arrays).reduce((a, b) => a + b, 0);
// }
// console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])); //21
// console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6])); //-21
// console.log(arrayPlusArray([0, 0, 0], [4, 5, 6])); //15
// console.log(arrayPlusArray([100, 200, 300], [400, 500, 600])); //2100
///////////////////////////////////////////////////

///////////////////////////////////////////////////
// const makeUpperCase = (str) => str.toUpperCase();
///////////////////////////////////////////////////

///////////////////////////////////////////////////
// Reversed sequence
// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]
// const rev = (n) => {
//     const arr = [];
//     for (let i = n; i > 0; i--) {
//         arr.push(i);
//     }
//     return arr;
// };
// console.log(rev(5));
///////////////////////////////////////////////////

///////////////////////////////////////////////////
// Calculate average
// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.
// const average = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length || 0;
// console.log(average([]));
// console.log(average([2, 4, 6]));
///////////////////////////////////////////////////

///////////////////////////////////////////////////
// Exes and Ohs
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false
// const XO = (str) => {
//     str = str.toLowerCase().split("");
//     const oArr = str.filter((l) => l === "o");
//     const xArr = str.filter((l) => l === "x");
//     return oArr.length === xArr.length;
// };
// console.log(XO("zpzpzpp"));
// console.log(XO("ooxx"));
// console.log(XO("zzoo"));
// console.log(XO("zzooxXX"));
// console.log(XO("zzooxX"));
///////////////////////////////////////////////////

///////////////////////////////////////////////////
// Scrolling Text
// Let's create some scrolling text!
// Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.
// Example
// scrollingText("codewars") should return:
// [ "CODEWARS",
//   "ODEWARSC",
//   "DEWARSCO",
//   "EWARSCOD",
//   "WARSCODE",
//   "ARSCODEW"
//   "RSCODEWA",
//   "SCODEWAR" ]
// const scrollingText = (str) => {
//     str = str.toUpperCase();
//     const arr = str.split();
//     for (let i = 1; i < str.length; i++) {
//         arr.push(str.substring(i) + str.substring(0, i));
//     }
//     return arr;
// };
// console.log(scrollingText("codewars"));
///////////////////////////////////////////////////

///////////////////////////////////////////////////
// Convert a Boolean to a String
// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

// const foo = (b) => b + "";
// console.log(foo(true));
///////////////////////////////////////////////////

///////////////////////////////////////////////////

// Find the divisors!
// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// Example:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"
// const divisors = (n) => {
//     const arr = [];
//     for (let i = n - 2; i > 2; i--) {
//         if (n % (n - i) === 0) arr.push(Number(n - i));
//     }
//     return arr.length === 0 ? `${n} is prime` : arr;
// };
// console.log(divisors(15));
///////////////////////////////////////////////////

///////////////////////////////////////////////////
// Sum of Digits / Digital Root
// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
// function foo(n) {
//     n = eval(n.toString().split("").join("+"));
//     if (n > 9) {
//         return foo(n);
//     }
//     return n;
// }
// console.log(foo(942));
///////////////////////////////////////////////////

///////////////////////////////////////////////////

// Even or Odd
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
// const even_or_odd = (n) => (n % 2 === 0 ? "Even" : "Odd");
// console.log(even_or_odd(9));
///////////////////////////////////////////////////

///////////////////////////////////////////////////
// Paul is an excellent coder and sits high on the CW leaderboard. He solves kata like a banshee but would also like to lead a normal life, with other activities. But he just can't stop solving all the kata!!
// Given an array (x) you need to calculate the Paul Misery Score. The values are worth the following points:
// kata = 5
// Petes kata = 10
// life = 0
// eating = 1
// The Misery Score is the total points gained from the array. Once you have the total, return as follows:
// < 40 = 'Super happy!'
// < 70 >= 40 = 'Happy!'
// < 100 >= 70 = 'Sad!'
// > 100 = 'Miserable!'
// function paul(arr) {
//     let map = {};
//     for (let i = 0; i < arr.length; i++) {
//         let item = arr[i];
//         map[item] = map[item] + 1 || 1;
//     }
//     const sum = 0;
//     console.log(map);

//     return ans;
// }
// console.log(paul(["life", "eating", "life"])); //super happy
// console.log(
//     paul([
//         "Petes kata",
//         "Petes kata",
//         "eating",
//         "Petes kata",
//         "Petes kata",
//         "eating",
//     ])
// );
///////////////////////////////////////////////////

///////////////////////////////////////////////////
// Mumbling
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.
// const accum = (str) => {
//     const arr = [str[0].toUpperCase()];
//     for (let i = 1; i < str.length; i++) {
//         arr.push(str[i].toUpperCase() + str[i].toLowerCase().repeat(i));
//     }
//     return arr.join("-");
// };
// console.log(accum("RqaEzty"));
///////////////////////////////////////////////////

///////////////////////////////////////////////////
// Opposite number
// Very simple, given an integer or a floating - point number, find its opposite.
// Examples:
//     1: -1
// 14: -14

///////////////////////////////////////////////////

///////////////////////////////////////////////////
// A Needle in the Haystack
// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:
// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// should return "found the needle at position 5"
// const findNeedle = (arr) =>
//     `found the needle at position ${arr.indexOf("needle")}`;
// console.log(
//     findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])
// );
///////////////////////////////////////////////////

///////////////////////////////////////////////////
// Two to One
// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
// const x = "xyaabbbccccdefww";
// const y = "xyaabbbccccdefww";
// const longest = (a, b) => {
//     const res = [...new Set(a + b)].sort().join("");
//     return res;
// };
// console.log(longest(a, a));
// console.log(longest(x, x));
///////////////////////////////////////////////////

///////////////////////////////////////////////////
// Invert values
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// const invert = (arr) => arr.map((n) => -n);
// console.log(invert([1, -2, 3, -4, 5]));
// console.log(invert([]));
///////////////////////////////////////////////////

///////////////////////////////////////////////////
// Build Tower
// Build Tower
// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// Tower block is represented as *

// Python: return a list;
// JavaScript: returns an Array;
// C#: returns a string[];
// PHP: returns an array;
// C++: returns a vector<string>;
// Haskell: returns a [String];
// Ruby: returns an Array;
// Lua: returns a Table;
// Have fun!

// for example, a tower of 3 floors looks like below

// [
//   '  *  ',
//   ' *** ',
//   '*****'
// ]
// and a tower of 6 floors looks like below

// [
//   '     *     ',
//   '    ***    ',
//   '   *****   ',
//   '  *******  ',
//   ' ********* ',
//   '***********'
// ]

// const towerBuilder = (nFloors) => {
//     const arr = [];
//     let message = "";
//     for (let i = 0; i < nFloors; i++) {
//         message += "*";
//         message.padStart(nFloors / 2, " ").padEnd(nFloors / 2, " ");
//         arr.push(message);
//         console.log(arr[i].length);
//     }
//     return arr;
// };
// function towerBuilder(nFloors) {
//     let space = "";
//     let star = "";
//     const result = [];
//     for (let i = 1; i <= nFloors; i++) {
//         space = " ".repeat(nFloors - i);
//         star = "*".repeat(2 * i - 1);
//         result.push(space + star + space);
//     }
//     return result;
// }
// console.log(towerBuilder(6));
///////////////////////////////////////////////////

///////////////////////////////////////////////////
// Grasshopper - Summation
// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
// For example:
// summation(2) -> 3
// 1 + 2
// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
// const summation = (n) => {
//     let sum = 1;
//     for (let i = 2; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// };
// console.log(summation(8));
// console.log(summation(1));
///////////////////////////////////////////////////

///////////////////////////////////////////////////
// Is n divisible by x and y?
// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

// Examples:
// 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
// 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
// 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
// 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5

// const foo = (n, x, y) => n % x === 0 && n % y === 0;

// console.log(foo(3, 3, 4));
// console.log(foo(12, 3, 4));
// console.log(foo(8, 3, 4));
// console.log(foo(48, 3, 4));
///////////////////////////////////////////////////

///////////////////////////////////////////////////

// Beginner friendly: Lowercase letters
// Convert a string to lowercase letters.

// Example: convert "Hello world!" to "hello world!"
// const small = (str) => str.toLowerCase();
// console.log(small("Hello world!"));
///////////////////////////////////////////////////

///////////////////////////////////////////////////

// Regex validate PIN code
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false
// const valid = (str) => {
//     Number(str);
//     return str.length === 4 || str.length === 6 ? true : false;
// };
// function validatePIN(pin) {
//     return (
//         typeof pin === "string" &&
//         Number.isInteger(+pin) && [4, 6].includes(pin.length)
//     );
// }
// // const valid = (str) => (str.length === 4 || str.length === 6 ? true : false);
// console.log(validatePIN("12.346"));
// console.log(validatePIN("12345"));
// console.log(validatePIN("a234"));
///////////////////////////////////////////////////
// Tribonacci Sequence
// Well met with Fibonacci bigger brother, AKA Tribonacci.
// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(
// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:
// [1, 1 ,1, 3, 5, 9, 17, 31, ...]
// But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:
// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
// Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.
// Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)
// If you enjoyed this kata more advanced and generalized version of it can be found in the Xbonacci kata
// [Personal thanks to Professor Jim Fowler on Coursera for his awesome classes that I really recommend to any math enthusiast and for showing me this mathematical curiosity too with his usual contagious passion :)]
// const tribonacci = (arr, n) => {
//     if (n === 0) return [];
//     else if (typeof n == "number") return [1];
//     for (let i = 3; i < n; i++) {
//         arr.push(arr[i - 1] + arr[i - 2] + arr[i - 3]);
//     }
//     return arr;
// };
// function tribonacci(arr, n) {
//   const trib = arr;
//   for (i = 3; i < n; i++) {
//     trib.push(trib[i - 1] + trib[i - 2] + trib[i - 3]);
//   }
//   return trib.slice(0, n);
// }
// console.log(tribonacci([300, 200, 100], 0), []);
// console.log(tribonacci([1, 1, 1], 10), [1, 1, 1, 3, 5, 9, 17, 31, 57, 105]);
// console.log(tribonacci([0, 0, 1], 10), [0, 0, 1, 1, 2, 4, 7, 13, 24, 44]);
// Test.assertSimilar
// Test.assertSimilar
// Test.assertSimilar(tribonacci([0,1,1],10),[0,1,1,2,4,7,13,24,44,81])
// Test.assertSimilar(tribonacci([1,0,0],10),[1,0,0,1,1,2,4,7,13,24])
// Test.assertSimilar(tribonacci([0,0,0],10),[0,0,0,0,0,0,0,0,0,0])
// Test.assertSimilar(tribonacci([1,2,3],10),
// Test.assertSimilar(tribonacci([3,2,1],10),[3,2,1,6,9,16,31,56,103,190])
// Test.assertSimilar(tribonacci([1,1,1],1),[1])
// Test.assertSimilar
// Test.assertSimilar
// })
///////////////////////////////////////////////////

///////////////////////////////////////////////////
// Beginner - Lost Without a Map
// Given an array of integers, return a new array with each value doubled.
// For example:
// [1, 2, 3] --> [2, 4, 6]
// const double = (arr) => arr.map((n) => n * 2);
// console.log(double([1, 2, 3]));
///////////////////////////////////////////////////

///////////////////////////////////////////////////
// Sum of positive
// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.
// const positiveSum = (arr) =>
//     arr.filter((n) => n >= 0).reduce((a, b) => a + b, 0);
// console.log(positiveSum([1, -4, 7, 12]));
// console.log(positiveSum([]));

///////////////////////////////////////////////////

///////////////////////////////////////////////////

// Odd or Even?
// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"
// const oddOrEven = (arr) =>
//     arr.reduce((a, b) => a + b, 0) % 2 === 0 ? "even" : "odd";
// console.log(oddOrEven([0, -1, -5]));
// console.log(oddOrEven([0, 1, 4]));
// console.log(oddOrEven([0]));
///////////////////////////////////////////////////

///////////////////////////////////////////////////

// Unique In Order
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// const unique = (str) => [...str].filter((v, i) => v !== str[i + 1]);
// const unique = (str) => {
//     const arr = [];
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== str[i - 1]) arr.push(str[i]);
//     }
//     return arr;
// };
// console.log(unique("AAAABBBCCDAABBB"));
// console.log(unique("ABBCcAD"));
// console.log(unique([1, 2, 2, 3, 3]));
///////////////////////////////////////////////////

///////////////////////////////////////////////////
// function sumOfIntegersInString(s) {
//     return (s.match(/[0-9]+/g) || []).reduce((a, b) => (a += +b), 0);
// }
// console.log(
//     sumOfIntegersInString("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy")
// );
///////////////////////////////////////////////////

///////////////////////////////////////////////////
// function distanceBetweenPoints(a, b) {
//     return Math.hypot(a.x - b.x, a.y - b.y);
// }
///////////////////////////////////////////////////

///////////////////////////////////////////////////
// Abbreviate a Two Word Name
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F
// const abbreviate = (str) => {
//     const [...abb] = str.toUpperCase().split(" ");
//     console.log(abb);
//     const [nam, s] = [abb[0].slice(0, 1), abb[1].slice(0, 1)];
//     return [nam, s].join(".");
// };
// console.log(abbreviate("Sam Harris"));
// console.log(abbreviate("patrick feeney"));
// console.log(abbreviate("patrick feeney"));
///////////////////////////////////////////////////

///////////////////////////////////////////////////

// Descending Order
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321
// const descendingOrder = (n) =>
//     +("" + n)
//     .split("")
//     .map(Number)
//     .sort((a, b) => a - b)
//     .reverse()
//     .join("");
// console.log(descendingOrder(42145));
// console.log(descendingOrder(145263));
// console.log(descendingOrder(123456789));
// console.log(descendingOrder(1201));
///////////////////////////////////////////////////

//////////////////////////////////////////////////
// Find the missing letter
// #Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.
// Example:
// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'
// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"
// (Use the English alphabet with 26 letters!)
// Have fun coding it and please don't forget to vote and rank this kata! :-)
// I have also created other katas. Take a look if you enjoyed this kata!
// const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const alphabet = "abcdefghijklmnopqrstuvwxyz";
// const missingLetter = (arr) => {
//     const sample = arr.join("").toLowerCase();
//     const alpha = alphabet.slice(alphabet.indexOf(sample[0]));
//     for (let i = 0; i < alpha.length; i++) {
//         if (sample[i] !== alpha[i]) return alpha[i];
//     }
// };

// console.log("miss", missingLetter(["a", "b", "c", "d", "f"]));
// console.log("miss", missingLetter(["O", "Q", "R", "S"]));
//////////////////////////////////////////////////

//////////////////////////////////////////////////
// Convert number to reversed array of digits
// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]
// const convert = (n) => {
//     const [...arr] = ("" + n).split("").reverse().join("");
//     return [...arr].map(Number);
// };
// console.log(convert(348597));
// console.log(convert(0));
//////////////////////////////////////////////////

//////////////////////////////////////////////////

// Isograms
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)
// const isIsogram = (str) => {
//     return new Set(str.toLowerCase()).size === str.toLowerCase().length ?
//         true :
//         false;
// };
// console.log(isIsogram("Dermatoglyphics"));
// console.log(isIsogram("aba"));
// console.log(isIsogram("moOse"));
//////////////////////////////////////////////////

//////////////////////////////////////////////////
// Highest and Lowest
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// const highAndLow = (str) => {
//     const res = str.split(" ");
//     const [max, min] = [Math.max(...res), Math.min(...res)];
//     return [max, min].join(" ");
// };
// console.log(highAndLow("1 2 3 4 5")); // return "5 1"
// console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
// console.log(highAndLow("1 9 3 4 -5")); // return "9 -5"
//////////////////////////////////////////////////

//////////////////////////////////////////////////
// Convert a Number to a String!
// We need a function that can transform a number into a string.

// What ways of achieving this do you know?

// Examples:
// 123 --> "123"
// 999 --> "999"
// const convert = (n) => n + "";
// const convert = String;
// console.log(convert(2));
// console.log(2);
//////////////////////////////////////////////////

//////////////////////////////////////////////////
// Detect Pangram
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// const isPangram = (str) => {
//     const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
//     str.toLowerCase();
//     return alphabets.every((l) => str.includes(l));
// };
// function isPangram(string) {
//   return "abcdefghijklmnopqrstuvwxyz"
//     .split("")
//     .every((x) => string.toLowerCase().includes(x));
// }

// console.log(isPangram("Detect Pangram"));
// console.log(isPangram("abcd efgh, FD-\fhjh`` ijkl mnop qrst uvwx yz"));
// console.log(isPangram(`Is 'How quickly daft jumping zebras vex.' a pangram?`));
//////////////////////////////////////////////////

//////////////////////////////////////////////////
// Remove First and Last Character
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
// const removeChar = (str) => str.substring(1, str.length - 1);
// const removeChar = (str) => str.slice(1, -1);
// console.log(removeChar("delete"));
//////////////////////////////////////////////////

//////////////////////////////////////////////////
// Your order, please
// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""
// function order(words) {
//     return words
//         .split(" ")
//         .sort(function(a, b) {
//             return a.match(/[0-9]/) - b.match(/[0-9]/);
//         })
//         .join(" ");
// }
// const res = [];
// const newAr = str.split(" ");
// for (let i = 0; i < newAr.length; i++) {
//     res.push(newAr[1]);
// }
// console.log(str);
// console.log(newAr);
// return res;
// console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
//////////////////////////////////////////////////

//////////////////////////////////////////////////
// Century From Year
// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// const century = (n) => Math.ceil(n / 100);
// console.log(century(1705));
// console.log(century(1900));
// console.log(century(1601));
// console.log(century(2000));
//////////////////////////////////////////////////

//////////////////////////////////////////////////

// Basic Mathematical Operations
// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

// function calc(o, a, b) {
//     return eval(a + o + b);
// }
// const calc = (o, v1, v2) => eval(`${v1}${o}${v2}`);

// console.log(calc("+", 4, 7)); // --> 11
// console.log(calc("-", 15, 18)); // --> -3
// console.log(calc("*", 5, 5)); // --> 25
// console.log(calc("/", 49, 7)); // --> 7

//////////////////////////////////////////////////

//////////////////////////////////////////////////
// Return Negative
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1); // return -1
// makeNegative(-5); // return -5
// makeNegative(0); // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

// const makeNegative = (n) => (n > 0 ? -n : n);
// console.log(makeNegative(1)); // return -1
// console.log(makeNegative(-5)); // return -5
// console.log(makeNegative(0)); // return 0
// console.log(makeNegative(0.12)); // return -0.12

//////////////////////////////////////////////////

//////////////////////////////////////////////////
// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.
// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.
// Examples
// For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].
// [4, 3, 2, 5] would return [4, 3, 2, 6]
// const upArray = (arr) => {
//     const newArr = `${+arr.join("") + 1}`.split("").map((v) => Number(v));
//     for (const n of newArr) {
//         if (n) return newArr;
//         else return null;
//     }
// };

// const upArray = (arr) =>
//     isNaN(+`${+arr.join("") + 1}`) ?
//     null :
//     `${+arr.join("") + 1}`.split("").map((v) => Number(v));
// const upArray = (arr) => {
//     return `${+arr.join("") + 1}`.split("").map((v) => Number(v));
// };

// console.log(upArray([2, 3, 9]));
// console.log(
//     upArray([
//         9, 3, 5, 4, 9, 7, 2, 9, 7, 9, 7, 9, 4, 7, 4, 0, 1, 7, 9, 2, 1, 8, 0, 9, 2,
//         4, 6, 3, 1, 4, 3, 3, 3, 0, 8, 3, 3, 6, 1, 7,
//     ])
// );
// console.log(upArray([1, -9]));
//////////////////////////////////////////////////

//////////////////////////////////////////////////
// Friend or Foe?
// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
// i.e.
// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.
// function friend(arr) {
//     return arr.filter((n) => n.length === 4);
// }

// const friend = (arr) => arr.filter((n) => n.length === 4);

// console.log(friend(["Ryan", "Kieran", "Mark"]));
// console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]));
//////////////////////////////////////////////////

//////////////////////////////////////////////////
// Find the middle element
// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.
// The input to the function will be an array of three distinct numbers (Haskell: a tuple).
// For example:
// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.
// Another example (just to make sure it is clear):
// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

// function gimme(arr) {
//     const copyArr = arr.slice().sort((a, b) => a - b);
//     return arr.indexOf(copyArr[1]);
// }
// console.log(gimme([5, 10, 14]), "1");
// console.log(gimme([2, 3, 1]), "0");
//////////////////////////////////////////////////

//////////////////////////////////////////////////
// Get the Middle Character
// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
// #Examples:
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"
// #Input
// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.
// #Output
// The middle character(s) of the word represented as a string.
// const getMiddle = (s) =>
//     s.length % 2 == 0 ?
//     s.substring(s.length / 2 - 1, s.length / 2 + 1) :
//     s.substring(Math.floor(s.length / 2), Math.floor(s.length / 2) + 1);

// function getMiddle(s) {
//     if (s.length % 2 == 0) return s.substring(s.length / 2 - 1, s.length / 2 + 1);
//     else
//         return s.substring(Math.floor(s.length / 2), Math.floor(s.length / 2) + 1);
// }

// console.log(getMiddle("middle"));
// console.log(getMiddle("testing"));
// console.log(getMiddle("test"));
// console.log(getMiddle("A"));
//////////////////////////////////////////////////

//////////////////////////////////////////////////
// The highest profit wins!
// Story
// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.
// Task
// Write a function that returns both the minimum and maximum number of the given list/array.
// Examples
// minMax([1,2,3,4,5])   == [1,5]
// minMax([2334454,5])   == [5, 2334454]
// minMax([1])           == [1, 1]
// Remarks
// All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.
// function minMax(arr) {
//     const [min, max] = [Math.min(...arr), Math.max(...arr)];
//     return [min, max];
// }
// console.log(minMax([1, 2, 3, 4, 5]));
// console.log(minMax([2334454, 5]));
// console.log(minMax([1]));
//////////////////////////////////////////////////

//////////////////////////////////////////////////
// Find the stray number
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
// Complete the method which accepts such an array, and returns that single different number.
// The input array will always be valid! (odd-length >= 3)
// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

// function strayNum(arr) {
//     return +arr.filter((v) => arr.indexOf(v) === arr.lastIndexOf(v));
// }
// const stray = (nums) => nums.reduce((a, b) => a ^ b);

// console.log(strayNum([17, 17, 3, 17, 17, 17, 17]));
// console.log(strayNum([1, 1, 2]));
// console.log(stray([1, 1, 2]));
// //////////////////////////////////////////////////

//////////////////////////////////////////////////
// Sum of two lowest positive integers
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.
// function sumOf(arr) {
//     arr.sort((a, b) => a - b);
//     return arr[0] + arr[1];
// }
// console.log(sumOf([19, 5, 42, 2, 77]));
// console.log(sumOf([10, 343445353, 3453445, 3453545353453]));
//////////////////////////////////////////////////

//////////////////////////////////////////////////
// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input

// Input will consist of a list of lists containing two items each. Each list contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Example Input

// [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]

// Output

// Output will consist of a list of string values (in Haskell: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example Output

// ["Open", "Open", "Senior", "Open", "Open", "Senior"]

// function openOrSenior(data) {
//     return data.map(([age, handicap]) =>
//         age > 54 && handicap > 7 ? "Senior" : "Open"
//     );
// }
// console.log(
//     openOrSenior([
//         [18, 20],
//         [45, 2],
//         [61, 12],
//         [37, 6],
//         [21, 21],
//         [78, 9],
//     ])
// );
//////////////////////////////////////////////////

/////////////////////////////////////////////////
// Find the unique number
// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.
// The tests contain some very huge arrays, so think about performance.
// This
// function findUniq(arr) {
//     return +arr.filter((v) => arr.indexOf(v) === arr.lastIndexOf(v));
// }
// console.log(findUniq([1, 1, 1, 2, 1, 1]));
// console.log(findUniq([0, 0, 0.55, 0, 0]));

/////////////////////////////////////////////////

/////////////////////////////////////////////////
// 7 kyu
// You're a square!
// A square of squares
// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!
// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.
// Task
// Given an integral number, determine if it's a square number:
// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false
// function isSquare(num) {
//     return Number.isInteger(Math.sqrt(num));
// }
// console.log(isSquare(-1));
/////////////////////////////////////////////////

/////////////////////////////////////////////////
// Write Number in Expanded Form
// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// function expandedForm(num) {
//     const arr = num.toString().split("");
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] != "0") {
//             for (let l = arr.length - i; l > 1; l--) {
//                 arr[i] += "0";
//             }
//         }
//     }
//     return arr.filter((value) => !value.startsWith(0)).join(" + ");
// }
// console.log(expandedForm(70304));
/////////////////////////////////////////////////

/////////////////////////////////////////////////
// Jaden Casing Strings
// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.
// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
// Example:
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
// function capitalizeFirstLetter(str) {
//     return str
//         .split(" ")
//         .map((word) => word[0].toUpperCase() + word.slice(1))
//         .join(" ");
// }
// console.log(
//     capitalizeFirstLetter("How can mirrors be real if our eyes aren't real")
// );
// String.prototype.toJadenCase = function () {
//   let result = this.split(" ");
//   for (i = 0; i < result.length; i++) {
//     result[i] = result[i].charAt(0).toUpperCase() + result[i].substring(1);
//   }
//   return result.join(" ");
// };
/////////////////////////////////////////////////

/////////////////////////////////////////////////
// Disemvowel Trolls
// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
//   Note: for this kata y isn't considered a vowel.

// function removeAllVowels(str) {
//     return str
//         .split("")
//         .filter((letter) => !"aeiouAEIOU".includes(letter))
//         .join("");
// }
// console.log(removeAllVowels("This website is for losers LOL!"));
///////////////////////////////////////////////

//////////////////////////////////////////////
// Sort the odd
// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
// function sortOddNumbers(arr) {
//     let i = 0;
//     const res = [];
//     const oddArray = arr.filter((num) => num % 2 !== 0).sort();
//     arr.forEach((num) => {
//         if (num % 2 === 0) res.push(num);
//         else {
//             res.push(oddArray[i]);
//             i++;
//         }
//     });
//     console.log(res);
//     return res;
// }
// const arr = [5, 3, 2, 8, 1, 4]; // to: [1, 3, 2, 8, 5, 4]
// function sortOddsOnly(arr) {
//     const odds = arr.filter((x) => x % 2).sort((a, b) => a - b);
//     console.log(odds);
//     return arr.map((x) => (x % 2 ? odds.shift() : x));
// }
// sortOddsOnly(arr);
// console.log(sortOddsOnly(array));
////////////////////////////////////////////////

/////////////////////////////////
// Square Every Digit
// function squareEveryDigit(num) {
//     return +num
//         .toString()
//         .split("")
//         .map((n) => n ** 2)
//         .join("");
// }
// console.log(squareEveryDigit(3212));

/////////////////////////////////////////
// Vowel Count
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

// const countVowels = (str) =>
//     Array.from(str).filter((letter) => "aeiou".includes(letter)).length;
// console.log(countVowels("my pyx"));

////////////////////////////////////////////////
// Beginner Series #3 Sum of Numbers
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
// Note: a and b are not ordered!
// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// const getSum = (a, b) => {
//     let res = 0;
//     if (b < a)[a, b] = [b, a];
//     while (a <= b) res += a++;
//     return res;
// };
// console.log(getSum(1, 0)); //1
// console.log(getSum(1, 2)); //3 ///////////
// console.log(getSum(0, 1)); //1
// console.log(getSum(1, 1)); //1
// console.log(getSum(-1, 0)); //-1 //////////
// console.log(getSum(-1, 2)); //2
//////////////////////////////////////////////////