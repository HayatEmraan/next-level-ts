"use strict";
// function with generic
const userFunc = (num1, num2) => {
    return {
        num1,
        num2,
    };
};
const result65 = userFunc(1, 2);
const personFunc = (name, age) => {
    return [name, age];
};
const result44 = personFunc("sachin", 24);
