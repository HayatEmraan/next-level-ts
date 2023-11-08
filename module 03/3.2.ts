class Parent {
  name: string = "ab";
  age: number = 38;
  gender: string = "male";
}

class Child extends Parent {
  cName: string = "cd";
  cAge: number = 16;
  cGender: string = "female";
}

const zh = new Child();

console.log(zh.age);

class Car {
  carname: string;
  constructor(brand: string) {
    this.carname = brand;
  }
  present() {
    return "I have a " + this.carname;
  }
}

class Model extends Car {
  model: string;

  constructor(brand: string, mod: string) {
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
  name: string;
  model: string;
  year: number;
  constructor(name: string, model: string, year: number) {
    this.name = name;
    this.model = model;
    this.year = year;
  }
  buyPerson(name: string) {
    return `${name} bought this car on ${this.year}`;
  }
}

class Car1 extends Vehicle {
  constructor(name: string, model: string, year: number) {
    super(name, model, year);
  }
}

const mycar1 = new Car1("Ford", "Mustang", 2020);

console.log(mycar1.buyPerson("Ab"));
