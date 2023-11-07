"use strict";
// typescript type assertion
let anything;
anything = 1;
anything = "hello";
anything.toUpperCase();
const myFunc = (x) => {
    if (typeof x === "string")
        return x.toLowerCase();
    if (typeof x === "number")
        return x.toFixed();
};
const result1 = myFunc(100);
const result2 = myFunc("100");
try {
}
catch (error) {
    console.log(error.message);
}
