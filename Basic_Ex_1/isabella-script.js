"use strict";
// Make a multiplication table using TypeScript loops from an array with number values 1 to 10
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 1; i <= array.length; i++) {
    console.log(i + " x 1 = " + i);
}
for (let i = 1; i <= array.length; i++) {
    console.log(i + " x 2 = " + i * 2);
}
