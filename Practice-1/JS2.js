let age = 22;
let firstName = "harshit";
console.log(typeof age); //finding the type of the age

age = age + "";
console.log(typeof age); //number --> string

let string = +"34";
console.log(typeof string); //string --> number by using + or -

let marks = "95";
marks = Number(marks); //string --> number
console.log(typeof marks);

let num1 = 34;
let num2 = 67;
let num_string1 = num1 + num2;
console.log(num_string1);

let num3 = "34";
let num4 = "67";
let num_string2 = +num3 + +num4;
console.log(num_string2);

let age1 = 19;
let name = "Ankur";
let about = "Hello I am " + name + " and I am " + 19 + " years old "; 
console.log(about);
let about2 = `Hello I am ${name} and my age is ${age}`;
console.log(about2);

