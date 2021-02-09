/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

function area (num1, num2) {
  return num1 * num2
}

console.log(area(2, 2))

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

function crazySum (int1, int2) {
  return int1 + int2
}

console.log(crazySum(4, 4))

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19.
It should return triple their absolute difference if the given number is greater than 19.
*/

const crazyDiff = (val1, val2) => Math.abs(val1, val2)

console.log(crazyDiff(2, 4))

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

function boundary (n) {
  if (n <= 100 && n >= 20) {
    return true
  } else if (n === 400) {
    return false
  }
}

console.log(boundary(25))

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

// const striveify = (str1) =>

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

const check3and7 = (posNum) => !!(posNum % 7 === 0 || posNum % 3 === 0)

console.log(check3and7(4))

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

function reverse (str) {
  return [...str].reverse().join('')
}

console.log(reverse('Strive'))

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

function upperFirst (fullString) {
  const firstLetter = fullString.charAt(0)
  console.log(`Char at zero is: ${firstLetter}`)
  const firstLetterUppercase = firstLetter.toUpperCase()
  const excludedfirstLetter = fullString.slice(1)
  const capitalizeString = firstLetterUppercase + excludedfirstLetter
  return capitalizeString
}

console.log(upperFirst('Strive my day up'))

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/