// mapped types

type PSR = {
  name: string;
  age: number;
  gender: string;
  address: {
    city: string;
    state: string;
    country: string;
  };
};

type PSR2<T> = {
  [key in keyof T]: T[key];
};

type PSR4 = Pick<PSR, "name" | "age" | "address">;

type PSR5 = PSR2<PSR4>;

const PSR3: PSR5 = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    state: "NY",
    country: "USA",
  },
};

// const PSR3: PSR2 = {
//   name: "John",
//   age: "30",
//   address: "123 Main St",
// };
