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
