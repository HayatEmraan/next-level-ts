"use strict";
// string types
const firstName = "hayat"; // automatically infered as string
const lastName = "hasan"; // explicit type
// number types
const numbers = [1, 2, 3, 4, 5]; // automatically infered as number
const numbersArray = [1, 2, 3, 4, 5]; // explicit type
// boolean types
const isAdmin = true; // automatically infered as boolean
const isNothing = false; // explicit type
// null and undefined
const nullValue = null; // automatically infered as null
const nullValueExplicit = null; // explicit type
const undefinedValue = undefined; // automatically infered as undefined
const undefinedValueExplicit = undefined; // explicit type
// any type
let anyValue;
anyValue = 1;
anyValue = "hello";
anyValue = true;
// any type with explicit type
let anyValueExplicit = 1;
anyValueExplicit = "hello";
anyValueExplicit = true;
// tuple types
const tupleType = [1, "hello"]; // automatically infered as [number, string]
let tupleTypeExplicit; // explicit type
let tupleTypeArray = [1, "hello"];
tupleTypeExplicit = false;
