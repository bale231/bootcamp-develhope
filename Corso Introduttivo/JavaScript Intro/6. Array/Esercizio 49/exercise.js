const students = [
  student1 = { id: 1, name: "Luca", surname: "Rossi", age: 20 },
  student2 = { id: 2, name: "Mario", surname: "Bianchi", age: 24 },
  student3 = { id: 3, name: "Giovanni", surname: "Brambilla", age: 30 }
];

let removeObj = students.pop();
console.log(students)

let addObj = students.push({ id: 3, name: "Francesco", surname: "Verdi", age: 41 });
console.log(students)