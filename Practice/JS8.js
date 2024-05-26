let name = "Ankur";
console.log(name);
function getFullName(firstName, lastName) {
  console.log(arguments);
  let hobbies = "Playing Football";
  console.log(hobbies);
  const fullName = firstName + " " + lastName;
  return fullName;
}
console.log("--------------------")
function sum(a, b) {
  console.log(a + b);
}
sum(3, 4);
console.log("--------------------")
const personName = getFullName("harshit", "sharma");
console.log(personName);
console.log("--------------------")
const lastName = "Konan";
const printName = function () {
  const firstName = "Ankur";
  function myFunction() {
    console.log(firstName);
    console.log(lastName);
  }
  myFunction();
};
printName();
