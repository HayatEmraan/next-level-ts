// generic type

const rollNumber5: Array<number> = [1, 2, 3, 4, 5, 6];
const nameList: Array<string> = ["John", "Jane", "Jim"];
const boolList: Array<boolean> = [true, false];

type genericArr<T> = Array<T>;

const rollNumber6: genericArr<number> = [1, 2, 3, 4, 5, 6];
const nameList2: genericArr<string> = ["John", "Jane", "Jim"];

interface User45 {
  name: string;
  age: number;
  gender: string;
}

const user45: genericArr<User45> = [
  {
    name: "John",
    age: 30,
    gender: "male",
  },
  {
    name: "Jane",
    age: 25,
    gender: "female",
  },
];

type genericTuple<T, U> = [T, U];

const nameAge: genericTuple<string, number> = ["John", 30];
const brandAge: genericTuple<number, string> = [30, "John"];

const userGeneric: genericTuple<
  User45,
  { name: string; age: string; gender: string }
> = [
  {
    name: "John",
    age: 30,
    gender: "male",
  },
  {
    name: "Jane",
    age: "25",
    gender: "female",
  },
];
