"use strict";
// spread and rest operator
const numbers3 = [1, 2, 3, 4, 5];
const numbers4 = [6, 7, 8, 9, 10];
const numbers5 = [...numbers3, ...numbers4];
numbers3.push(...numbers4);
const student5 = {
    name: "hayat",
    age: 18,
};
const student5bio = Object.assign(Object.assign({}, student5), { university: "BIT", uniAge: 3 });
const restArr = ["hayat", 18, "BIT", "BIT"];
const restStr = ["hayat", 18, "BIT", "BIT"];
const restFunc = (...num) => {
    return num;
};
console.log(restFunc(1, 2, 3, 4, 5));
console.log(student5bio);
