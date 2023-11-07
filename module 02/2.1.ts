// typescript type assertion

let anything: any;

anything = 1;
anything = "hello";

(anything as string).toUpperCase();

const myFunc = (x: string | number): number | string | undefined => {
  if (typeof x === "string") return x.toLowerCase();
  if (typeof x === "number") return x.toFixed();
};
const result1 = myFunc(100) as number;
const result2 = myFunc("100") as string;

try {
} catch (error) {
  console.log(
    (
      error as {
        message: string;
      }
    ).message
  );
}
