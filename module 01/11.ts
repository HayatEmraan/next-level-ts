const num13: number = 10;

if (num13 === 10) {
  console.log("10");
} else {
  console.log("not 10");
}

const num15: number = num13 ? 10 : 20;

const isAuthenticated: null = null;
const result15 = isAuthenticated ?? "Guest";

const result16 = "";
const result18 = result16 ?? "Guest";
