// function typescript

function myFunc() {
  console.log("hello");
}

function myAdd(num1: number, num2: number): number {
  return num1 + num2;
}

const arrowAdd = (num1: number, num2: number): number => num1 + num2;

// function method

const myMethod: {
  name: string;
  balance: number;
  add(num1: number): string;
} = {
  name: "hayat",
  balance: 100,
  add(num1: number): string {
    return `${this.name} has ${this.balance + num1}`;
  },
};

const methodWithArrow: {
  name: string;
  roll: number;
  addRoll: (num: number) => string;
} = {
  name: "emraan",
  roll: 109,
  addRoll: (num: number): string => `My roll is ${methodWithArrow.roll + num}`,
};

const arr: number[] = [1, 2, 3, 4, 5];

const arrReduce: number = arr.reduce(
  (acc: number, curr: number): number => acc + curr,
  0
);

myAdd(1, 2);
