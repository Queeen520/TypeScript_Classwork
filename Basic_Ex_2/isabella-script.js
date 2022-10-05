"use strict";
/* 1. Print your full name in the browser (you will have an object that has 2 properties fName and lName).
2. Print your first name 10 times in the browser using a forEach loop (don't forget that forEach loop work on arrays, so you can put the object in an array and repeat it).
3. A function should be triggered 5 seconds after opening the page that prints your last name in the console 10 times.*/
const obj = [{ firstName: "Isabella", lastName: "Windhbaer" }];
console.log(obj);
let br = "<br>";
obj.forEach(obj => document.write(obj.firstName));
obj.forEach(obj => document.write(obj.firstName));
obj.forEach(obj => document.write(obj.firstName));
br;
obj.forEach(obj => document.write(obj.firstName));
br;
obj.forEach(obj => document.write(obj.firstName));
br;
obj.forEach(obj => document.write(obj.firstName));
// obj.forEach(element => document.write(element.firstName));
