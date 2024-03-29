let winningnumber = 14;
let userguess = 56;
if (winningnumber === userguess) {
  console.log("Congratulation!!! and Celebrations!!!");
} else {
  if (winningnumber > userguess) {
    console.log("Too low!!!");
  } else {
    console.log("Too high!!!");
  }
}

let tempInDegree = 50;
if (tempInDegree > 40) {
  console.log("too hot");
} else if (tempInDegree > 30) {
  console.log("lets go for swim");
} else if (tempInDegree > 20) {
  console.log("weather is cool");
} else if (tempInDegree > 10) {
  console.log("it is very cold outside");
} else {
  console.log("extremely cold");
}
console.log("hello");

let age = 10;
switch (age) {
  case 1:
    console.log("Good");
  case 2:
    console.log("very good");
  case 3:
    console.log("Very very good");
  case 4:
    console.log("very very good");
  case 10:
    console.log("Excellent");
}

let i = 0;
while (i <= 9) {
  console.log(i);
  i++;
}
consolelof(`Current value of i is ${i}`);
console.log("hello");

let num = 100;
let total = 0; //1 + 2 +3
let i = 0;
while (i <= 100) {
  total = total + i;
  i++;
}
console.log(total);

let total = (num * (num + 1)) / 2;
console.log(total);

for (let i = 0; i <= 9; i++) {
  console.log(i);
}
console.log("value of i is ", i);

let total = 0;
let num = 100;
for (let i = 1; i <= num; i++) {
  total = total + i;
}
console.log(total);
