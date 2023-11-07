"use strict";
// constraints keyof
const ZX = "age";
const pr = {
    name: "ZX",
    age: 18,
    gender: "male",
};
const pr2 = (obj, key) => {
    return obj[key];
};
const pr3 = pr2(pr, "name");
