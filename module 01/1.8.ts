// typescript object destructuring
const person9 = {
  name: "hayat",
  age: 18,
  isAdmin: true,
  country: {
    name: "bangladesh",
    capital: {
      name: "dhaka",
      population: 200000,
    },
  },
};

const {
  name: myName,
  age,
  country: {
    capital: { name: cityName, population },
  },
} = person9;

// array destructuring
const myFriends = ["hayat", "hasan", "sakib"];

const [my1, my2, my3] = myFriends;
const [my4, ...rest] = myFriends;
