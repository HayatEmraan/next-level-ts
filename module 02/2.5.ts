// function with generic

const userFunc = <T, U>(num1: T, num2: U): { num1: T; num2: U } => {
  return {
    num1,
    num2,
  };
};

const result65 = userFunc<number, number>(1, 2);

const personFunc = <T, U>(name: T, age: U): [T, U] => {
  return [name, age];
};

const result44 = personFunc<string, number>("sachin", 24);

