"use strict";
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 1; i <= 10; i++) {
    console.log("this is table" + i);
    for (let j = 1; j <= 10; j++) {
        let result = j * i;
        console.table(result);
    }
}
