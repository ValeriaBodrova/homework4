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