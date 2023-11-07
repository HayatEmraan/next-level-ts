// Reference Type --> Object

const person: {
  name: string;
  age: number;
  isAdmin: boolean;
} = {
  name: "hayat",
  age: 18,
  isAdmin: true,
};

const student: {
  name: string;
  age: number;
  isStudent: boolean;
  uniName: "BIT"; // Type Literal
  address?: {
    // optional property
    street: string;
    city: string;
    country: string;
  };
} = {
  name: "hayat",
  uniName: "BIT",
  age: 18,
  isStudent: true,
};

const student2: {
  readonly name: string;
  age: number;
  isStudent: boolean;
  uniName: "BIT"; // Type Literal
  address?: {
    // optional property
    street: string;
    city: string;
    country: string;
  };
} = {
  name: "hayat",
  uniName: "BIT",
  age: 18,
  isStudent: true,
  address: {
    street: "street",
    city: "city",
    country: "country",
  },
};
