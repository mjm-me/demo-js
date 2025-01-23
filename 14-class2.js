// Clase define factura (Invoice)
// Numero de factura
// Concepto
// Numero
// precio unidad
// print: La factura:
//  - Su numero
//  - El concepto X número --- precio
//  - Total + IVA

class Company {
  #nif;
  #name;

  constructor(nif, name) {
    this.#nif = nif;
    this.#name = name;
  }

  get nif() {
    return this.#nif.toUpperCase();
  }
  get name() {
    return this.#name;
  }
}

export class Invoice {
  // propiedades y métodos static
  static #brand = new Company('68323392y', 'Boracay');
  static #lastId = 0;
  static #getID() {
    const year = new Date().getFullYear();
    const id = String(year) + '/' + String(++this.#lastId);
    return id;
  }

  // declaración de propiedades preferiblemente privadas
  #id = Invoice.#getID();
  #client;
  #products; // Array de productos
  #iva;

  // constructor
  constructor(client, products, iva = 1.21) {
    this.#products = products;
    this.#iva = iva;
    this.#client = client;
  }

  // Método para obtener el cliente
  get client() {
    return this.#client;
  }

  // Método para obtener detalles de la factura
  getDetails() {
    return {
      id: this.#id,
      client: {
        name: this.#client.name,
        nif: this.#client.nif,
      },
      products: this.#products,
      iva: this.#iva,
    };
  }

  #calculateTotalPrice() {
    return this.#products.reduce((total, product) => {
      return total + product.amount * product.unityPrice;
    }, 0);
  }

  printInvoice() {
    const price = this.#calculateTotalPrice();
    const total = price * this.#iva;

    let productDetails = '';
    this.#products.forEach((product) => {
      productDetails += `${product.name} + ${product.amount} unidades a ${product.unityPrice}€ \n`;
    });

    const invoice = `
        ${Invoice.#brand.name}
        Nif: ${Invoice.#brand.nif}

        Datos cliente
        Nombre: ${this.#client.name}
        Nif: ${this.#client.nif}

        Factura ${this.#id}
        ${productDetails}
        Total.................. ${price}€
        ----------------------------------------------
        Total + IVA ........... ${total}
        `;
    console.log(invoice);
  }
}

// Ejemplo de uso
const client1 = new Company('5656565843D', 'Acme');
const products1 = [
  { name: 'apples', amount: 20, unityPrice: 4 },
  { name: 'oranges', amount: 10, unityPrice: 3 },
];
const invoice1 = new Invoice(client1, products1, 1.04);

const products2 = [
  { name: 'mobile', amount: 1, unityPrice: 400 },
  { name: 'charger', amount: 2, unityPrice: 55 },
];
const invoice2 = new Invoice(new Company('6567565843D', 'CAS'), products2);

console.log(invoice1.getDetails(), invoice2.getDetails());
invoice1.printInvoice();
invoice2.printInvoice();

// Relaciones entre clases
// Agregación / Composición v. Asociación
// Herencia

// Añadimos
// - la empresa (NIF - nombre)
// - el cliente (NIF - nombre)

// - Diversos conceptos --> Array
// - Se refleja todo a imprimir la factura

// - La posibilidad de añadirlos mediante un método
