"use strict";
class Parent {
    constructor() {
        this.name = "ab";
        this.age = 38;
        this.gender = "male";
    }
}
class Child extends Parent {
    constructor() {
        super(...arguments);
        this.cName = "cd";
        this.cAge = 16;
        this.cGender = "female";
    }
}
const zh = new Child();
console.log(zh.age);
class Car {
    constructor(brand) {
        this.carname = brand;
    }
    present() {
        return "I have a " + this.carname;
    }
}
class Model extends Car {
    constructor(brand, mod) {
        super(brand);
        this.model = mod;
    }
    show() {
        return this.present() + ", it is a " + this.model;
    }
}
const mycar = new Model("Ford", "Mustang");
console.log(mycar.carname);
class Vehicle {
    constructor(name, model, year) {
        this.name = name;
        this.model = model;
        this.year = year;
    }
    buyPerson(name) {
        return `${name} bought this car on ${this.year}`;
    }
}
class Car1 extends Vehicle {
    constructor(name, model, year) {
        super(name, model, year);
    }
}
const mycar1 = new Car1("Ford", "Mustang", 2020);
console.log(mycar1.buyPerson("Ab"));
