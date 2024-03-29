for (let i = 1; i <= 10; i++) {
  if (i === 4) {
    break;
  }
  console.log(i);
}
for (let i = 1; i <= 10; i++) {
  if (i === 4) {
    continue;
  }
  console.log(i);
}
console.log("This piece of code runs at last");

let fruits = ["apple", "mango", "grapes"];
let numbers = [1, 2, 3, 4];
let mixed = [1, 2, 2.3, "string", null, undefined];
let school = [3, "ankur", null, undefined, "yash"];
console.log(mixed);
console.log(school);
console.log(numbers);
console.log(fruits[2]);
let obj = {}; // object literal
console.log(fruits);
fruits[1] = "banana";
console.log(fruits);
console.log(typeof fruits);
console.log(typeof obj);
console.log(Array.isArray(fruits));
console.log(Array.isArray(obj));
console.log(Array.isArray(obj));

let fruits = ["apple", "mango", "grapes"];
console.log(fruits);
fruits.push("banana");
console.log(fruits);
let poppedFruit = fruits.pop();
console.log(fruits);
console.log("popped fruits is", poppedFruit);

fruits.unshift("banana");
fruits.unshift("myfruit");
console.log(fruits);

let removedFruit = fruits.shift();
console.log(fruits);
console.log("removed fruits is ", removedFruit);

let array1 = ["items", "items2"];
let array2 = array1.slice(0).concat(["item3", "item4"]);
console.log(array2);
