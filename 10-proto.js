const user = {
  name: 'Pepe',
  age: 22,
  greet: function () {
    console.log(`Hola, soy ${this.name} y tengo ${this.age} años`);
  },
};

console.log(user.__proto__.__proto__);

const person = {
  teeth: 32,
};

user.__proto__ = teeth;

console.log(user.teeth);
