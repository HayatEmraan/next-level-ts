// constraints

interface USR {
  name: string;
  age: number;
  gender: string;
}

const usr = <
  T extends {
    name: string;
    age: number;
  }
>(
  user: T
): string => {
  return `This is a user`;
};

const validUser: string = usr<USR>({ name: "John", age: 25, gender: "male" });
const invalidUser: string = usr({ name: "John", age: 25, gender: "male" });
