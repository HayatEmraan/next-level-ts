"use strict";
class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const hayat = new Person("hayat", 18, "male");
class Student {
    constructor(name, age, department) {
        this.name = name;
        this.age = age;
        this.department = department;
    }
}
const emraan = new Student("emraan", 18, "IT");
emraan.department = "ICT";
