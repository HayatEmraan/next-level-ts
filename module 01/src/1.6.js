"use strict";
// function typescript
function myFunc() {
    console.log("hello");
}
function myAdd(num1, num2) {
    return num1 + num2;
}
const arrowAdd = (num1, num2) => num1 + num2;
// function method
const myMethod = {
    name: "hayat",
    balance: 100,
    add(num1) {
        return `${this.name} has ${this.balance + num1}`;
    },
};
const methodWithArrow = {
    name: "emraan",
    roll: 109,
    addRoll: (num) => `My roll is ${methodWithArrow.roll + num}`,
};
const arr = [1, 2, 3, 4, 5];
const arrReduce = arr.reduce((acc, curr) => acc + curr, 0);
myAdd(1, 2);
