const obj1: {
  name: string;
  age: number;
  isStudent: boolean;
  isMarried: boolean;
} = {
  name: "hayat",
  age: 18,
  isStudent: true,
  isMarried: false,
};

const obj2: {
  name: string;
  age: number;
  isStudent: boolean;
  isMarried: boolean;
  address?: {
    street: string;
    city: string;
  };
} = {
  name: "hayat",
  age: 18,
  isStudent: true,
  isMarried: false,
  address: {
    street: "street",
    city: "city",
  },
};

// type alias
type CommonObj = {
  name: string;
  age: number;
  isStudent: boolean;
  isMarried: boolean;
  address?: {
    street: string;
    city: string;
  };
};

const obj3: CommonObj = {
  name: "hayat",
  age: 18,
  isStudent: true,
  isMarried: false,
  address: {
    street: "street",
    city: "city",
  },
};

type CommonObj2 = (num1: number, num2: number) => number;

const addFunc: CommonObj2 = (num1, num2) => num1 + num2;
