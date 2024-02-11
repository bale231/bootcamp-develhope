// let user = {
//   name: "Cosimo",
//   age: 30,
// };

// let newUser = user;

// newUser.name = "Paolo";
// console.log(newUser);
// console.log(user);


let user = {
  name: "Cosimo",
  age: 30,
};
let newUser = {};
for (let name in user){
  newUser[name] = user[name]
}

newUser.name = "Paolo";

console.log(newUser);
console.log(user);