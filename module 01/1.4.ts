// string types

const firstName = "hayat"; // automatically infered as string
const lastName: string = "hasan"; // explicit type

// number types

const numbers = [1, 2, 3, 4, 5]; // automatically infered as number
const numbersArray: number[] = [1, 2, 3, 4, 5]; // explicit type

// boolean types

const isAdmin = true; // automatically infered as boolean
const isNothing: boolean = false; // explicit type

// null and undefined

const nullValue = null; // automatically infered as null
const nullValueExplicit: null = null; // explicit type

const undefinedValue = undefined; // automatically infered as undefined
const undefinedValueExplicit: undefined = undefined; // explicit type

// any type

let anyValue;
anyValue = 1;
anyValue = "hello";
anyValue = true;

// any type with explicit type

let anyValueExplicit: any = 1;
anyValueExplicit = "hello";
anyValueExplicit = true;

// tuple types

const tupleType = [1, "hello"]; // automatically infered as [number, string]
let tupleTypeExplicit: boolean | ([number, string]); // explicit type
let tupleTypeArray: [number, string] = [1, "hello"];
tupleTypeExplicit = false;
