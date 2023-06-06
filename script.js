//task1

let number = parseInt(prompt("Task1.Enter a number"));
let number2 = parseInt(prompt("Enter another number"));

if (number > number2) {
    alert(`${number} > ${number2}`);
} else {
    alert(`${number} < ${number2}`);
}


//task2

let distance1 = parseInt(prompt("Task.2Enter the distance in kilometers"));
let distance2 = parseInt(prompt("Enter the distance in foots"));

let count = distance2 * 0.0003048;

if (distance1 > count) {
    alert(`Second distance(${distance2}ft) < first distance(${distance1}km)  `);
} else {
    alert(`First distance(${distance1}km) < second distance(${distance2}ft)`);
}

//task3

let numA = parseInt(prompt("Task3.Enter a number(a)"));
let numB = parseInt(prompt("Enter another number(b)"));

let count1 = numB / numA;
let integer1 = Math.trunc(count1);

let count2 = numA / numB;
let integer2 = Math.trunc(count2);

if (count1 === integer1 && count2 !== integer2) {
    alert("Number a is a divisor of number b and Number b is not a divisor of number a");
} else if (count2 === integer2 && count1 !== integer1) {
    alert("Number b is a divisor of number a and Number a is not a divisor of number b ");
} else if(count1 !== integer1 && count2 !== integer2){
    alert("Number b is not a divisor of number a and Number a is not a divisor of number b ");
}

//task4

let numberTask4 = parseInt(prompt("Task4.Enter a number"));

let typeOfDigit = numberTask4 / 2;
let int = Math.trunc(typeOfDigit);
let lastDigit = numberTask4 % 10;

if (typeOfDigit === int) {
    alert(`The number is even. Last digit: ${lastDigit}`);
} else {
    alert(`The number is odd. Last digit: ${lastDigit}`);
}

//task5

let numberTask5 = parseInt(prompt("Task5.Enter two-digit number"));

let firstDigit = Math.floor(numberTask5 % 100 / 10);
let lastDigit1 = numberTask5 % 10;

if (firstDigit > lastDigit1) {
    alert(`first digit(${firstDigit}) > second digit(${lastDigit1})`);
} else if(firstDigit < lastDigit1){
    alert(`first digit(${firstDigit}) < second digit(${lastDigit1})`);
} else if(firstDigit === lastDigit1){
    alert(`first digit(${firstDigit}) = second digit(${lastDigit1})`);
}

//task6

let num61 = parseInt(prompt("Task6.Enter three-digit number"));

let num62 = num61 % 1000;
let num63 = num61 % 100;
let num64 = num61 % 10;

let sum = num62 + num63 + num64;

let divide = sum / 2;
let int61 = Math.round(divide);

let divide2 = sum / 5;
let int62 = Math.round(divide2);

let product = num62 * num63 * num64;

if (divide === int61){ 
    alert("The sum of the digits of the number is even");
} else {
    alert("The sum of the digits of the number is odd");
}
if (divide2 === int62) {
    alert("Sum of digits of number is multiple of five");
} else {
    alert("Sum of digits of number is not multiple of five");
}
if (product > 100) {
    alert("Product of digits of number is more than 100");
} else {
    alert("Product of digits of number is less than 100");
}