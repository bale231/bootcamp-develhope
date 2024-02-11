let user = {
  name: "Cosimo",
  age: 30,
};

let clone = {};

for(let key in user) {
  clone[key] = user [key];
}

let newUser = clone;
newUser.name = "Luigi";

console.log(newUser);
console.log(user);