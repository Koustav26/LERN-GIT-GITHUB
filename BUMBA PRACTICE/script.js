// 1. REVERSE A NUMBER
/*
let rev = 0;
let num = 123456;
let lastDigit;

while (num != 0) {
  lastDigit = num % 10;
  //console.log(lastDigit);
  rev = rev * 10 + lastDigit;
  console.log(rev);
  num = Math.floor(num / 10);
  //console.log(num);
}

//console.log(rev);
*/
// 2. JAVASCRIPT PROGRAM TO CONVERT CELSIOUS TO FARENHEIT
/*
const celsiousValue = Number(prompt("Please input the temp. in celsious"));
let farenheitValue = 0;

if (celsiousValue >= 0) {
  farenheitValue = celsiousValue * 1.8 + 32;
  console.log(farenheitValue);
} else {
  console.log("wrong input");
}
*/

// 3. To generate a random number
/*
const a = Math.random();
console.log(a);
*/

// 4. check if a number is a positive , negetive or zero

/*

let num = Number(prompt("Please enter a number : "));

if (num > 0) {
  console.log("The number is positive");
} else if (num < 0) {
  console.log("The number is negetive");
} else {
  console.log("The number is ZERO");
}

*/

// 5. Check if a number is odd or even
/*
let num = Number(prompt("Please enter a number : "));

if (num % 2 === 0) {
  console.log("The number is even");
} else {
  console.log("The number is odd");
}
*/

// 6. Find the largest number among three number

/*
let number1 = Number(prompt("Enter the first number :"));
let number2 = Number(prompt("Enter the second number :"));
let number3 = Number(prompt("Enter the third number :"));

console.log(`The first Number is ${number1}`);
console.log(`The second Number is ${number2}`);
console.log(`The third Number is ${number3}`);

if (number1 > number2 && number1 > number3) {
  console.log(`${number1} = number 1 is biggest`);
} else if (number2 > number1 && number2 > number3) {
  console.log(`${number2} = number 2 is biggest`);
} else {
  console.log(`${number3} = number 3 is biggest`);
}
*/

//  7.  Check prime number

// let number = Number(prompt("Please enter the number :"));
// // let primeNumber = true;

// if (number === 0) {
//   console.log(`${number} is not a Prime Number`);
// } else if (number > 1) {
//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//       console.log(`${number} is not a prime number`);
//     } else {
//       console.log(`${number} is a prime number`);
//     }
//   }
//   //   if (primeNumber) {
//   //     console.log(`${number} is a prime number`);
//   //   } else {
//   //     console.log(`${number} is not a prime number`);
//   //   }
//   // } else {
//   //   console.log("The number is not a Prime Number");
// }

//  7. check the is prime or not
/*
const isPrime = function (n) {
  if (n < 2) {
    return console.log(`${n} is not a prime number`);
  }
  for (i = 2; i < n; i++) {
    if (n % i === 0) {
      return console.log(`${n} is not a prime number`);
    }
  }

  return console.log(`${n} is a prime number`);
};
isPrime(14);
*/
// 8. print all prime number at an interval
/*
const toPrint = function () {
  for (i = 1; i <= 10; i++) {
    console.log(i);
  }
};

toPrint();
*/

// 9. factorial of  number
/*
const inputNumber = Number(prompt("Enter the value :"));
let fact = 1;

if (inputNumber < 0) {
  console.log(`Error negetive number does not have factorial value`);
} else if (inputNumber === 0) {
  console.log(`The factorial of ${inputNumber} is : 1 `);
} else {
  for (let i = 1; i <= inputNumber; i++) {
    fact *= i;
  }
  console.log(`the factorial of ${inputNumber} is : ${fact}`);
}
*/

// 10. display the multiplication table
/*
const inputNumber = Number(prompt("Enter the number :"));

for (let i = 1; i <= 10; i++) {
  let number2 = inputNumber * i;
  console.log(`${inputNumber} * ${i} = ${number2}`);
}
*/

// 11.  print the fibonacci series
/*
const inputNumber = Number(prompt("Enter the number :"));
let n1 = 0;
let n2 = 1;
let nextTerm = 0;
for (i = 0; i <= inputNumber; i++) {
  console.log(n1);
  nextTerm = n1 + n2;
  n1 = n2;
  n2 = nextTerm;
}
*/
// 12.  123456 find the sum of digit
/*
let value = 123;
let sum = 0;
while (value) {
  sum += value % 10;

  value = Math.floor(value / 10);
}
console.log(sum);
*/
// 13. check armstrong number of n number
/*
let inputNumber = prompt("Enter a positve integer");
let lengthOfDigit = inputNumber.length;
let sum = 0;
let temp = inputNumber;
while (temp > 0) {
  let remainder = temp % 10;
  sum += remainder ** lengthOfDigit;
  temp = parseInt(temp / 10);
}
if (sum == inputNumber) {
  console.log(`${inputNumber} This is an armstrong number`);
} else {
  console.log(`${inputNumber} This is not an armstrong Number`);
}
*/

// 14. find armstrong number of an interval
/*
let number1 = Number(prompt("Enter the lower number :"));
let number2 = Number(prompt("Enter the highest number : "));
let numberOfDigit;

for (let i = number1; i <= number2; i++) {
  numberOfDigit = i.toString().length;
  let sum = 0;
  let temp = i;
  while (temp > 0) {
    let remainder = temp % 10;
    sum += remainder ** numberOfDigit;
    temp = parseInt(temp / 10);
  }
  if (sum == i) {
    console.log(i);
  }
}
*/
/*
let cart = {
  product1: 300,
  product2: 100,
  product3: 900,
  product4: 700,
};
let key;
let maxkey = Object.keys(cart)[0];
for (key in cart) {
  if (cart[key] > cart[maxkey]) {
    maxkey = key;
  }
}

console.log("product with highest cost is ", key);
*/
//  15. mini calculator
/*
let operator = prompt(`Please enter a operator (either + , - , * , /) :`);
let number1 = Number(prompt("Enter the first number :"));
let number2 = Number(prompt("Enter the second number :"));
let result;
if (operator === " + ") {
  result = number1 + number2;
} else if (operator === "-") {
  result = number1 - number2;
} else if (operator === "*") {
  result = number1 * number2;
} else {
  result = number1 / number2;
}

console.log(`${number1}  ${operator}  ${number2}  = ${result}`);
*/

// 16. find the sum of natureal number
/*
let number1 = Number(prompt("Enter the positive number :"));

let result = 0;

for (let i = 1; i <= number1; i++) {
  result = result + i;
}
console.log(result);
*/

// 17. check the numbers have same lastdigit
/*
const number1 = Number(prompt("enter the first number"));
const number2 = Number(prompt("enter the second number"));
const number3 = Number(prompt("enter the third number"));

let result1 = number1 % 10;
let result2 = number2 % 10;
let result3 = number3 % 10;

if (result1 == result2 && result1 == result3) {
  console.log(`${number1} ${number2} ${number3} last digits are same..`);
} else {
  console.log(`${number1} ${number2} ${number3} last digits are not same..`);
}
*/

/// 18. find H.C.F OR G.C.D
/*
const number1 = Number(prompt("enter the first number"));
const number2 = Number(prompt("enter the second number"));
let hcf;
for (let i = 1; i <= number1 && i <= number2; i++) {
  if (number1 % i == 0 && number2 % i == 0) {
    hcf = i;
  }
}
console.log(`the hcf of ${number1} & ${number2} is ${hcf}`);
let lcm = (number1 * number2 ) / hcf
console.log(lcm );

*/

////   19. find LCM
/*
const number1 = Number(prompt("enter the first number"));
const number2 = Number(prompt("enter the second number"));
let lcm;

let min = number1 > number2 ? number1 : number2;
while (true) {
  if (min % number1 == 0 && min % number2 == 0) {
    console.log(`${number1} ${number2} lcm is ${min}`);
    break;
  }
  min++;
}

*/
// 20. reverse a number
/*
let number1 = 1234560;
let lastDigit;
let rev = 0;

while (number1 !== 0) {
  lastDigit = number1 % 10;
  rev = rev * 10 + lastDigit;
  number1 = Math.floor(number1 / 10);
  console.log(number1);
}
console.log(rev);
*/
// 21. find the factors of a number

// let x = 20;
// let factor;
// for (let i = 1; i <= x; i++) {
//   if (x % i == 0) {
//     console.log(i);
//   }
// console.log(i);
// }

//22. guess a random number

// const randomNumber = Math.trunc(Math.random() * 6);
// console.log(randomNumber);

// 23. SOAL EXAM COAD (COUNT THE SAME CHARECTER AT A STRING)
/*
function char_count(str, letter) {
  var letter_Count = 0;
  for (var position = 0; position < str.length; position++) {
    if (str.charAt(position) == letter) {
      letter_Count += 1;
    }
  }
  return letter_Count;
}

console.log(char_count("koustavbasak", "a"));
*/
// prime number
/*
const primeNumber = Number(prompt("enter the number"));
let isPrime = true;

if (primeNumber === 1) {
  console.log("This is not a prime number");
} else if (primeNumber > 1) {
  for (let i = 2; i < primeNumber; i++) {
    if (primeNumber % i == 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log("This is a prime number");
  } else {
    console.log("this is not a prime number");
  }
} else if (primeNumber < 1) {
  console.log("This is a negative number");
}
*/
//armstrong number
/*
let inputNumber = prompt("enter a positive integer");
let numberLength = inputNumber.length;
let sum = 0;
let temp = inputNumber;

while (temp > 0) {
  let remainder = temp % 10;
  sum += remainder ** numberLength;
  temp = parseInt(temp / 10);
}
if (sum == inputNumber) {
  console.log("The number is armstrong number");
} else {
  console.log("This is not a armstrong number");
}
*/

// fibonaci series
/*
const number = Number(prompt("Enter the series number"));
let n1 = 0;
let n2 = 1;
let nextTerm;
for (let i = 1; i <= number; i++) {
  console.log(n1);
  nextTerm = n1 + n2;
  n1 = n2;
  n2 = nextTerm;
}

// console.log();
*/

// krisnamurthy number

//const number = Number(prompt("enter a positive number"));
// let fact = 1;

// factorial of a number

// if the number is krisnamurthy
/*
function iskrisnamurthy(n) {
  let sum = 0;
  let temp;
  temp = n;
  while (temp != 0) {
    sum = sum + factorial(temp % 10);
    temp = parseInt(temp / 10);
  }
  if (sum == n) {
    console.log("is a strong number");
  } else {
    console.log("it is not a strong number");
  }
}

// console.log(iskrisnamurthy(145));

function factorial(n) {
  if (n == 1) {
    return 1;
  }
  return n * iskrisnamurthy(n - 1);
}
*/

/////////////////////////////practice 2///////////////////////////////

//  1. write a program to print a string
/*
  const inputString = prompt('hello world');
  console.log(inputString);
*/
//  2. write a program to accept values of two numbers and print their addition/ substraction/multiply/divide
/*
  const number1 = Number(prompt('Enter the first number :')):
  const number2 = Number(prompt('Enter the second number :'));
  let result;
  result = number1 + number2;
  console.log(`addition is ${result}`);
  */
// 3. print area of a circle
/*
   const radious = Number(prompt('Enter the radious of the circle:'));
   let area ;
   area = 3.142 * (radious*radious);
   console.log(`Area of a circle is ${area}`);
*/

//  4.  area of a triangle
/*
    const base = Number(prompt('Enter the base of the triangle :'));
    const height = Number(prompt('Enter the height of the triangle :'));
    let area;
    area = .5 *base * height;
    console.log(`Area of a triangle is: ${area} `);
*/
///  5. print simple interest
/*
const principle = Number(prompt("Enter the principle ammount:"));
const intrate = Number(prompt("Enter the interest rate :"));
const time = Number(prompt("Enter the time frame:"));
let simpleInt;

simpleInt = (principle * intrate * time) / 100;
console.log(`The simple interest is :${simpleInt}`);
*/

//// 6. accept a number from user and print its square & cube
/*
const number = Number(prompt("Enter the Number :"));
let sqResult, cubeResult;

sqResult = number * number;
console.log(`squeare : ${sqResult}`);
cubeResult = number * number * number;
console.log(`cube : ${cubeResult}`);
*/
// const square = function (number) {
//   result = number * number;
//   return result;
//   console.log(result);
// };

// const cube = function (number) {
//   result = number * number * number;
//   return result;
// };
// console.log(result);

// 7.  write a program to accept two values a & b and interchange their values
/*
let a = Number(prompt("Enter the value of a :"));
let b = Number(prompt("Enter the value of b :"));
let temp;

temp = a;
a = b;
b = temp;
console.log(`a is ${a}`);
console.log(`b is ${b}`);
*/

/// 8. write a program to accept roll no and marks of 3 subjects of a student calcule total marks  average
/*
const rollNumber = Number(prompt("Enter the roll number :"));
const subject1 = Number(prompt("Enter the subject 1 number :"));
const subject2 = Number(prompt("Enter the subject 2 number :"));
const subject3 = Number(prompt("Enter the subject 3 number :"));
let result;
let average;

result = subject1 + subject2 + subject3;
average = result / 3;

console.log(`${rollNumber} 
total marks = ${result}
average mark =${average} `);
*/

// 9. from 2 number largest from them

// 10. print the number is positive or negetive

//11. check if it is >10

//12. odd or even

// 13. program to check number is divisible by 5 or not

//14. check the number is multiple of 7 or not
/*
const number = Number(prompt("Enter the number :"));

if (number % 7 === 0) {
  console.log("The number is a multiple of 7");
} else {
  console.log("the number is not ");
}
*/
//15. write a program to compair two number and print

//16. take 3 number from user and print them in ascending & decending order

//17. calculate the roots of a qudratic equation
/*
let a = 2;
let b = 3;
let c = 4;
let x = 2;
let r1, r2;

if (x > 0) {
  x = b * b - 4 * a * c;
  r1 = ((-b + x) / 2) * a;
  r2 = ((-b - x) / 2) * a;
  console.log(`r1 =${r1} 
     r2 = ${r2}`);
} else if (x === 0) {
  x = b * b - 4 * a * c;
  r1 = ((-b + x) / 2) * a;
  console.log(`r1 =${r1}`);
} else {
  console.log("roots are imaginary");
}
*/
// 18. take input from user and calculate total marks, average, grade
//grade 100 - 80 = A,80 - 60 = B, 60 - 40 = C, >40 = fail
/*
const rollNumber = Number(prompt("Enter the roll number :"));
const subject1 = Number(prompt("Enter the subject 1 number :"));
const subject2 = Number(prompt("Enter the subject 2 number :"));
const subject3 = Number(prompt("Enter the subject 3 number :"));
let result;
let average;

result = subject1 + subject2 + subject3;
average = result / 3;
if (100 < average > 80) {
  console.log(`${rollNumber} get A grade`);
} else if (80 < average > 60) {
  console.log(`${rollNumber} get B grade`);
} else if (60 < average > 40) {
  console.log(`${rollNumber} get C grade`);
} else {
  console.log(`${rollNumber} fail in the exam.`);
}

console.log(`${rollNumber} 
total marks = ${result}
average mark =${average} `);
*/

/// 19. accept from user`s marital staus, gender and age to check if he is eligible for marriage or not.
/*
let isMarriade = prompt("Enter yes/ no for your marital staus :");
const age = Number(prompt("Enter your age :"));
let gender = prompt("enter your gender :");

 isMarriade = 'male';


if(isMarriade == 'male' && gender)



// if (ismarriade !== false && gender === male && age > 18) {
//   console.log(`Male user is eligible for marriage.`);
// } else if (ismarriade !== true && gender === female && age > 18) {
//   console.log(`Female user is eligible for marriage.`);
// }
*/

// 20. print 1 to n number using while loop
/*
let n = Number(prompt("Enter the value of n :"));
let i = 0;

while (i <= n) {
  i++;
  console.log(i);
}
*/

// 21. print n to 1 using do while loop
/*
let n = Number(prompt("Enter the value of n :"));
let i = n;
do {
  console.log(i);
  i--;
} while (i >= 1);
*/

// 22. print first n even number
/*
const n = Number(prompt("enter the last number"));
let i = 1;
let even = 2;
while (i <= n) {
  console.log(even);
  even += 2;
  i++;
}
*/

// 23. print first n number of odd number
/*
const n = Number(prompt("enter the last number"));
let i = 1;
let odd = 1;
while (i <= n) {
  console.log(odd);
  odd = odd + 2;
  i++;
}
*/
// 24. print a number in reverse order(12345 == 54321)
/*
let number = Number(prompt("enter the number:"));
let reverse = 0;
let lastDigit;

while (number != 0) {
  lastDigit = number % 10;
  reverse = reverse * 10 + lastDigit;
  number = Math.floor(number / 10);
}
console.log(reverse);
*/

// 25. user input number and sum of digits (123 = 6)
/*
let number = Number(prompt("enter the number:"));
let lastDigit;
let sum = 0;

while (number != 0) {
  lastDigit = number % 10;
  sum = sum + lastDigit;
  number = Math.floor(number / 10);
}
console.log(sum);
*/
// 26. armstrong number
/*
let number = prompt("Enter the number:");
let power = number.length;
let temp = number;
let sum = 0;

while (temp > 0) {
  let rem = temp % 10;
  sum += rem ** power;
  temp = parseInt(temp / 10);
}
// console.log(sum);
if (sum == number) {
  console.log("armsstrong number");
} else {
  console.log("not a armstrong number");
}
*/

// 27. write a program to print table of a given number.
/*
inputNumber = Number(prompt("Enter the number"));
let n = 10;
let result;
let i = 1;
for (i = 1; i <= n; i++) {
  result = i * inputNumber;
  console.log(`${inputNumber} * ${i} = ${result}`);
}
*/
// 28. write a program to print sum of given first n number
/*
let inputNumber = Number(prompt("Enter the number: "));
let i = 1;
let sum;
for (i = 1; i <= inputNumber; i++) {
  sum = i + i;
  console.log(`${sum} = ${i} + ${i}`);
}
*/
// 29.
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
/*
let inputNumber = Number(prompt("Enter the value:"));
let string = "";
for (let i = 1; i <= inputNumber; i++) {
  for (let j = 1; j <= i; j++) {
    string = string + j;
  }
  string += "\n";
}
console.log(string);
*/
//30.
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
/*
let inputNumber = 5;
let string = "";
for (let i = 1; i <= inputNumber; i++) {
  for (let j = 1; j <= i; j++) {
    string += i;
  }
  string += "\n";
}
console.log(string);
*/

// 31.
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// let inputNumber = 4;
// let string = "";
// let count = 1;
// for (let i = 1; i <= inputNumber; i++) {
//   for (let j = 1; j <= i; j++) {
//     string += count;
//     count++;
//   }
//   string += "\n";
// }
// console.log(string);

// 32.
// 12345
// 1234
// 123
// 12
// 1
/*
let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i + 1; j++) {
    string += j;
  }
  string += "\n";
}
console.log(string);
*/

// 33.
// 54321
// 5432
// 543
// 54
// 5
/*
let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i + 1; j++) {
    string += n - j + 1;
  }
  string += "\n";
}
console.log(string);
*/
// 34.
// 12345
//  2345
//   345
//    45
//     5
// let n = 5;
// let string = "";

// for (let i = 1; i <= n; i++) {
//   for (let k = 1; k < i; k++) {
//     string = string + " ";
//   }
//   for (let j = i; j <= n; j++) {
//     string = string + j;
//   }

//   string += "\n";
// }

// console.log(string);
//35.
// *****
// *****
// *****
// *****
// *****
/*
let n = 5;
let string = "";
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
*/
// 36.
//     *
//    **
//   ***
//  ****
// *****
/*
let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < n - i; j++) {
    string = string + " ";
  }
  for (let k = 0; k < i; k++) {
    string = string + "*";
  }
  string += "\n";
}
console.log(string);
*/
// 37.
// *
// **
// ***
// ****
// *****
/*
let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) { //[j<= n-i for opposite pattern]
    string = string + "*";
  }
  string += "\n";
}
console.log(string);
*/
// 38.
// *****
// *   *
// *   *
// *   *
// *****
/*
let n = 5;
let string = "";
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (i === 0 || i === n - 1) {
      string += "*";
    } else if (j === 0 || j === n - 1) {
      string += "*";
    } else {
      string += " ";
    }
  }
  string += "\n";
}
console.log(string);
*/

// 39.
//     *
//    **
//   ***
//  ****
// *****

// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < n - i; j++) {
//     string += " ";
//   }
//   for (let k = 0; k < i; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);
// // 40.
// *****
// ****
// ***
// **
// *
/*
let n = 5;
let string = "";
for (let i = 0; i < n; i++) {
  for (let k = 0; k < n - i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
*/
// 41.
// *
// **
// * *
// *  *
// *   *
// ******
/*
let n = 6;
let string = "";
for (i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    if (i === n) {
      string += "*";
    } else if (j == 0 || j == i - 1) {
      string += "*";
    } else {
      string += " ";
    }
  }
  string += "\n";
}

console.log(string);
*/

// 54321
// 5432
// 543
// 54
// 5
/*
let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i + 1; j++) {
    string += n - j + 1;
  }
  string += "\n";
}
console.log(string);
*/

// 54321
// 4321
// 321
// 21
// 1
/*
let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i + 1; j++) {
    string += n - i - j + 2;
  }
  string += "\n";
}
console.log(string);
*/

//     1
//    123
//   12345
//  1234567
// 123456789
/*
let n = 5;
let string = "";
// external loop
for (let i = 1; i < n; i++) {
  // creating spaces
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  // creating numbers
  for (let k = 1; k <= 2 * i - 1; k++) {
    string += "*";
  }
  string += "\n";
}
// reverse pyramid
for (let i = 1; i <= n - 1; i++) {
  for (let j = 1; j < i + 1; j++) {
    string += " ";
  }
  for (let k = 1; k <= 2 * (n - i) - 1; k++) {
    string += "*";
  }
  string += "\n";
}

console.log(string);
*/
//
/*
let n = 5;
let string = "";
// External loop
for (let i = 1; i < n; i++) {
  // Internal loop
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    string += "*";
  }

  string += "\n";
}
console.log(string);
*/
//
// *****
// *****
// *****
// *****
// *****
// let n = 5;
// let string = "";
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);
//
// *****
// *   *
// *   *
// *   *
// *****
/*
let n = 5;
let string = "";
for (i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (i === 0 || i === n - 1) {
      string += "*";
    } else if (j === 0 || j === n - 1) {
      string += "*";
    } else {
      string += " ";
    }
  }
  string += "\n";
} 
console.log(string);
*/
//
//     *
//    **
//   ***
//  ****
// *****
/*
let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (j = 0; j < n - i; j++) {
    string += " ";
  }
  for (let k = 0; k < i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
*/
//

// *
// **
// ***
// ****
// *****
/*
let n = 5;
let string = "";
for (let i = 0; i <= n; i++) {
  // for (j = 0; j < n - 1; j++) {
  //   string += " ";
  // }
  for (let k = 0; k < i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
*/
/*
let n = 5;
let string = "";
for (let i = 0; i < n; i++) {
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  for (let k = 0; k < i * 2 + 1; k++) {
    string += "*";
  }
  string += "\n";
}
for (let i = 0; i < n; i++) {
  for (let j = 0; j <= n - 1; j++) {
    string += " ";
  }
  for (let k = n * 1 - 1; k <= 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
*/
/////// ARMSTRONG NUMBER
/*
const inputNumber = prompt("Enter the Number :");
let power = inputNumber.length;
let temp = inputNumber;
let sum = 0;

while (temp > 0) {
  let rem = temp % 10;
  sum = sum + rem ** power;
  temp = parseInt(temp / 10);
}
if (sum == inputNumber) {
  console.log("this is an armstrong number");
} else {
  console.log("This is not a armstrong number");
}
*/
const arr = [1, 2, 3, 4, 5, 6];
console.log(arr);
const arr2 = arr.slice(1);
console.log(arr2);
// console.clear();
