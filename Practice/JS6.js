let num1 = 6;
let num2 = num1;
console.log("value is num1 is", num1);
console.log("value is num2 is", num2);
num1++;
console.log("after incrementing num1");
console.log("value is num1 is", num1);
console.log("value is num2 is", num2);

let array1 = ["item1", "item2"];
let array2 = array1;
console.log("array1", array1);
console.log("array2", array2);
array1.push("item3");
console.log("after pushing element to array 1");
console.log("array1", array1);
console.log("array2", array2);

let array5 = ["items5", "items6"];
let array6 = array1.slice(0).concat(["item7", "item8"]);
console.log(array6);


let array3 = ["item3", "item4"];
let oneMoreArray = ["item9", "item10"];
let array4 = [...array3, ...oneMoreArray];
console.log(array3 === array4);
console.log(array3);
console.log(array4);

