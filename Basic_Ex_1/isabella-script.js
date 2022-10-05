"use strict";
// Make a multiplication table using TypeScript loops from an array with number values 1 to 10
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i <= array.length; i++) {
    if (i < array.length) {
        let result = 1 * array[i];
        console.table("1X " + result);
    }
}
