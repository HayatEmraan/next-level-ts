"use strict";
// constraints
const usr = (user) => {
    return `This is a user`;
};
const validUser = usr({ name: "John", age: 25, gender: "male" });
const invalidUser = usr({ name: "John", age: 25, gender: "male" });
