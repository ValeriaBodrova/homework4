//task1

let number = parseInt(prompt("Enter a number"));
let number2 = parseInt(prompt("Enter another number"));

if (number > number2) {
    alert(`${number} > ${number2}`);
} else {
    alert(`${number} < ${number2}`);
}


//task2

let distance1 = parseInt(prompt("Enter the distance in kilometers"));
let distance2 = parseInt(prompt("Enter the distance in foots"));

let count = distance2 * 0.0003048;

if (distance1 > count) {
    alert(`Second distance(${distance2}ft) < first distance(${distance1}km)  `);
} else {
    alert(`First distance(${distance1}km) < second distance(${distance2}ft)`);
}

//task3

let numA = parseInt(prompt("Enter a number(a)"));
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

let numberTask4 = parseInt(prompt("Enter a number"));

let typeOfDigit = numberTask4 / 2;
let int = Math.trunc(typeOfDigit);
let lastDigit = numberTask4 % 10;

if (typeOfDigit === int) {
    alert(`The number is even. Last digit: ${lastDigit}`);
} else {
    alert(`The number is odd. Last digit: ${lastDigit}`);
}