/* Create an array of names, this array should only accept strings.

1. Print only the index of the elements.
2. Print only the values. 
3. Print both index and values. */

const arr: string[] = ["isabella", "mark", "lisa", "tim"]
console.log(arr);

//Print only the index of the elements
function printIndex() {
    for (let i in arr){
        console.table(i);
        document.write(i);
    }
}
printIndex();


// Print only the values
function printValues() {
for (let i of arr) {
    console.table(i);
    document.write(i);
}
}
printValues();

// 3. Print both index and values
function printBoth() {
    printIndex();
    printValues();
}

printBoth();

