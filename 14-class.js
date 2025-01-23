class User {
  static usersNumber = 5;
  static countUsers() {
    User.usersNumber++;
  }
  static {
    console.log('Load class USER');
  }

  #name;
  #age;
  constructor(name, age) {
    this.#name = name;
    this.#age = age;
    User.countUsers();
  }

  // get name() {
  //     return this.#name;
  // }

  // set name(name) {
  //     this.#name = name;
  // }

  greet() {
    console.log(`Hola, soy ${this.#name} y tengo ${this.#age} años`);
  }

  grow() {
    this.#age++;
  }
}

const user1 = new User('Pepe', 22);
const user2 = new User('Juan', 24);

console.log(user1, user2);
user1.address = 'Soria';
// // user1.#name = 'Jose';
// // delete user1.#name;
console.log(user1, user2);

user1.grow();
user1.greet();
user2.greet();

console.log(User.usersNumber);

// user1.name = 'Jose';
// console.log(user1.name);

// Clase que define una factura (Invoice)
//en cada factura hay que tener un nº  de factura que será el siguiente al anterior definido
//factura básica con un concepto: número y precio unidad
//método print que enseñará por consola la factura en sí:
//  - su número
//  - el concepto X número --- precio
//  - el total + IVA

class Company {
  //declaración de propiedades preferiblemente privadas
  #nif;
  #company;

  // constructor this se refiere a la factura1, la factura 2
  constructor(nif, company) {
    this.#nif = nif;
    this.#company = company;
  }
}


class Invoice {
  //propiedades y métodos static

  static #brand = new Company('12345678Z', 'Correos');

  //static lastID, aquí el this es especial, significa this clase
  static #lastId = 0;
  static #getID() {
    const year = new Date().getFullYear();
    const id = String(year) + '/' + String(++this.#lastId);
    return id;
  }

  //declaración de propiedades preferiblemente privadas
  #id = Invoice.#getID();
  #client;
  #product;
  #amount;
  #unitPrice;
  #iva;

  // constructor this se refiere a la factura1, la factura 2
  constructor(client, product, amount, unitPrice, iva = 1.21) {
    this.#client = client;
    this.#product = product;
    this.#amount = amount;
    this.#unitPrice = unitPrice;
    this.#iva = iva;
  }

  printInvoice() {
    const price = this.#amount * this.#unitPrice;
    const total = price * this.#iva;

    const invoice = `

    ${Invoice.#brand.name}

    Factura ${this.#id}
    ${this.#product} + ${this.#amount} unidades a ${this.#unitPrice} euros
    Total...............${price} euros
    -------------------------------
    Total + IVA..........${total}
    `;
    console.log(invoice);
  }
}

const client1 = new Company ('45690124W', 'Acme')
const invoice1 = new Invoice('client1', 'apple', 20, 4, 1.04);
const invoice2 = new Invoice(new Company ('45690124W', 'Acme')'mobile', 1, 1200, 20); //como no le doy el iva toma la que ya está establecida

console.log(invoice1, invoice2);
invoice1.printInvoice();

//{
//id: '',
//product: 'apple',
//amount: 20,
//unitPrice:
//}

