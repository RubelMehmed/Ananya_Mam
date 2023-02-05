// class Customer {
//   constructor(a, b, c, d) {
//     this.id = a;
//     this.name = b;
//     this.prof = c;
//     this.items = d;
//   }
//   print() {
//     document.write(
//       this.id + ": " + this.name + " " + this.prof + " " + this.items
//     );
//   }
// }
// let clientDetails = new Customer(11, "raju", "business", [
//   "alu",
//   "potol",
//   "peyaj",
// ]);

// clientDetails.print();

// console.log(clientDetails);

//with prompt for==========================>

class Customers {
  constructor(a, b, c, d) {
    this.id = a;
    this.name = b;
    this.prof = c;
    this.items = d;
  }
  print() {
    document.write(
      this.id + ": " + this.name + " " + this.prof + " " + this.items
    );
  }
}
const itemArr = [];
for (let i = 0; i < 4; i++) {
  const el = prompt("Enter item: ");
  itemArr.push(el);
}
let clientDetails = new Customers(
  Number(prompt("Enter Customer id : ")),
  prompt("Enter Customer Name : "),
  prompt("Enter profession : "),
  itemArr
);
// let clientDetail = new Customers(11, "raju", "business", [
//   "alu",
//   "potol",
//   "peyaj",
// ]);

clientDetails.print();

console.log(clientDetails);
