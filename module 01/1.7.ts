// spread and rest operator
const numbers3: number[] = [1, 2, 3, 4, 5];
const numbers4: number[] = [6, 7, 8, 9, 10];

const numbers5: number[] = [...numbers3, ...numbers4];
numbers3.push(...numbers4);

const student5 = {
  name: "hayat",
  age: 18,
};

const student5bio = {
  ...student5,
  university: "BIT",
  uniAge: 3,
};

const restArr: [string, number, ...string[]] = ["hayat", 18, "BIT", "BIT"];

const restStr: (string | number)[] = ["hayat", 18, "BIT", "BIT"];

const restFunc = (...num: number[]): number[] => {
  return num;
};

console.log(restFunc(1, 2, 3, 4, 5));

console.log(student5bio);
