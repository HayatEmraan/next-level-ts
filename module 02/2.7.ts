// constraints keyof

type UR = {
  name: string;
  age: number;
  gender: string;
};

type TS = keyof UR;

const ZX: TS = "age";

const pr: UR = {
  name: "ZX",
  age: 18,
  gender: "male",
};

const pr2 = <T, U extends keyof T>(obj: T, key: U): T[U] => {
  return obj[key];
};

const pr3 = pr2(pr, "name");
