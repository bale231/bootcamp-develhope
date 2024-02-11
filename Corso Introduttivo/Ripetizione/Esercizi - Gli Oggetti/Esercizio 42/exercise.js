function Smartphone(brand, name, price) {
    this.brand = brand,
    this.name = name,
    this.price = price
}

let iOs = new Smartphone("iPhone", "14 Pro", 1339);
let android = new Smartphone("Samsung", "S23 Ultra", 1220);

console.log(iOs);
console.log(android);