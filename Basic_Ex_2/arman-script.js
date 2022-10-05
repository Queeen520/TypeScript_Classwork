"use strict";
let fullName = {
    fName: "Arman ",
    lName: "Sarrafi-Nour"
};
document.write(fullName.fName, fullName.lName);
let nameArray = [fullName.fName, fullName.lName];
nameArray.forEach(() => {
    console.log(fullName.fName);
    console.log(fullName.fName);
    console.log(fullName.fName);
    console.log(fullName.fName);
    console.log(fullName.fName);
});
for (let i = 1; i <= 10; i++) {
    setTimeout(() => {
        console.log(fullName.lName);
    }, 5000);
}
