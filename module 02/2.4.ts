// dynamic generic type with interface

interface User55<T> {
  name: string;
  age: number;
  gender: string;
  department: T;
}

const user55: User55<string> = {
  name: "John",
  age: 30,
  gender: "male",
  department: "IT",
};

type User65<T> = {
  name: string;
  age: number;
  gender: string;
  department: T;
};

const User65: User65<number> = {
  name: "John",
  age: 30,
  gender: "male",
  department: 123,
};

type User75<T, U> = {
  name: string;
  age: number;
  gender: string;
  department: T;
  role: U;
};

const user75: User75<string, string> = {
  name: "John",
  age: 30,
  gender: "male",
  department: "IT",
  role: "admin",
};
