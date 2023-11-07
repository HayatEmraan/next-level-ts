// union type

type Profession1 = "engineer" | "frontend developer";

const profession1: Profession1 = "engineer";

type Skills = {
  name: string[];
  age: number;
  isStudent: boolean;
};

type Skills2 = {
  name: string[];
  age: number;
  isStudent: boolean;
  address?: {
    street: string;
    city: string;
  };
};

// Intersection type
type Skills3 = Skills & Skills2;

const skills: Skills3 = {
  name: ["HTML", "CSS", "JS"],
  age: 18,
  isStudent: true,
  address: {
    street: "street",
    city: "city",
  },
};
