// type

type Person = {
  name: string;
  age: number;
  gender: string;
};

type role = {
  role: string;
};

type Employee = Person &
  role & {
    salary: number;
    department: string;
  };

const employee: Employee = {
  name: "John",
  age: 30,
  gender: "male",
  role: "admin",
  salary: 50000,
  department: "IT",
};

// interface

interface User1 {
  name: string;
  age: number;
  gender: string;
}

interface role1 {
  role: string;
}

interface employeeBio extends User1, role1 {
  salary: number;
  department: string;
}

type employeedb = role1 & {
  salary: number;
  department: string;
};

// js ---> object => array, object, function

interface NumberArr {
  [value: number]: number;
}

const indexArr: NumberArr = [1, 2, 3, 4, 5, 6];

interface ObjectFunc {
  (num1: number, num2: number): number;
}

const objFunc: ObjectFunc = function (num1, num2) {
  return num1 + num2;
}
