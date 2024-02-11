function Smartphone(brand, name, price){
    this.brand = brand;
    this.name = name;
    this.price = price;
}

let iOs = new Smartphone ("iPhone", "15 Pro", 1057);
let android = new Smartphone ("Samsung", "S23 Ultra", 899);

console.log(iOs);
console.log(android)
