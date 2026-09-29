const prompt = require('prompt-sync')();

 //exercise 1

// function mintwo(a, b) {
//     if (a < b) {
//         return a;
//     }
//     else {
//         return b;
//     }
// }

// function minthree(a, b, c) {
//     return mintwo(mintwo(a, b), c);
// }

// function min(a, b, c = null) {
//     if (c === null) {
//         return mintwo(a, b);
//     }
//     else {
//         return minthree(a, b, c);
//     }
// }

// let a = Number(prompt("Enter first number: "));
// let b = Number(prompt("Enter second number: "));

// console.log("Minimum of two:", mintwo(a, b));

// let c = Number(prompt("Enter third number: "));

// console.log("Minimum of three:", minthree(a, b, c));
// console.log("Minimum using optional parameter:", min(a, b));
// console.log("Minimum using optional parameter:", min(a, b, c));



//exercise 2


// function isEven(n) {
//     n = Math.abs(n);

//     if (n === 0) {
//         return true;
//     }

//     if (n === 1) {
//         return false;
//     }

//     return isEven(n-2);
// }

// console.log("\nPrompt 2:");
// console.log("50 is even:", isEven(50));
// console.log("75 is even:", isEven(75));
// console.log("-1 is even:", isEven(-1));



// //exercise 3


// function nthTerm(n) {
//     return 2 * n * n - 2 * n + 2;
// }

// function factorial(n) {
//     if (n === 1) {
//         return 1;
//     }

//     return n * factorial(n - 1);
// }

// function fibonacci(n) {
//     if (n === 1 || n === 2) {
//         return 1;
//     }

//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

// function hcf(a, b) {
//     if (b === 0) {
//         return Math.abs(a);
//     }

//     return hcf(b, a % b);
// }

// function lcm(a, b) {
//     return Math.abs(a * b) / hcf(a, b);
// }

// console.log(nthTerm(5));
// console.log(factorial(6));
// console.log(fibonacci(7));
// console.log(hcf(12, 18));
// console.log(lcm(12, 18));



//exercise 4


// function getNumber(message) {
//     let number;
//     do {
//      number = Number(prompt(message));
//     if (isNaN(number)) {
//         console.log("Please enter a valid number.");
// }
//     } while (isNaN(number));
//     return number;
// }

// function add(a, b) {
//     return a + b;
// }

// function subtract(a, b) {
//     return a - b;
// }

// function multiply(a, b) {
//     return a * b;
// }

// function divide(a, b) {
//     return a / b;
// }

// function calculator() {
//     let choice;
//     do {
//         console.log("Please select an option");
//         console.log("Press 1 to add.");
//         console.log("Press 2 to subtract.");
//         console.log("Press 3 to multiply.");
//         console.log("Press 4 to divide.");
//         console.log("Press 5 to quit.");

//         choice = prompt("Enter your selected option (1-5 preferably): ");

//         if (choice === "1" || choice === "2" || choice === "3" || choice === "4") {
//             let num1 = getNumber("Enter first number: ");
//             let num2 = getNumber("Enter second number: ");

//             if (choice === "1") {
//                 console.log("Output:", add(num1, num2));
//             }
//             else if (choice === "2") {
//                 console.log("Output:", subtract(num1, num2));
//             }
//             else if (choice === "3") {
//                 console.log("Output:", multiply(num1, num2));
//             }
//             else if (choice === "4") {
//                 console.log("Output:", divide(num1, num2));
//             }
//         }
//         else if (choice !== "5") {
//             console.log("Please select a VALIDDD option.");
//         }
//     } while (choice !== "5");
//     console.log("girl bye this ended.");
// }
// calculator();



// //exercise 5

// function multiplicationTables() {
//     while (true) {
//         let x = Number(prompt("Enter x: "));
//         let a = Number(prompt("Enter a: "));
//         let b = Number(prompt("Enter b: "));

//         if (isNaN(x) || isNaN(a) || isNaN(b)) {
//             console.log("Invalid input. Program ended.");
//             break;
//         }

//         for (let i = a; i <= b; i++) {
//             console.log(x + " * " + i + " = " + (x * i));
//         }
//         console.log();
//     }
// }
// multiplicationTables();


//exercise 6


// function multiplicationTables() {
//     while (true) {
//         let x = prompt("Enter x: ");
//         let y = prompt("Enter y: ");
//         let a = prompt("Enter a: ");
//         let b = prompt("Enter b: ");

//         if (isNaN(x) || isNaN(y) || isNaN(a) || isNaN(b)) {
//             console.log("Invalid input. Program ended.");
//             break;
//         }

//         x = Number(x);
//         y = Number(y);
//         a = Number(a);
//         b = Number(b);

//         let output = "";
//         for (let i = x; i <= y; i++) {
//             for (let j = a; j <= b; j++) {
//                 output += i + " * " + j + " = " + (i * j) + "\n";
//             }
//             output += "\n\n";
//         }
//         console.log(output);
//     }
// }
// multiplicationTables();


