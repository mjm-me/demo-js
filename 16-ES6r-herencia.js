class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hola, soy ${this.name} y tengo ${this.age} años`);
  }
}

class User extends Person {
  static usersNumber = 0;
  static countUsers = function () {
    User.usersNumber++;
  };

  constructor(name, age, role) {
    super(name, age);
    this.role = role;
    User.countUsers();
  }

  greet() {
    super.greet();
    console.log(`Mi nivel de usuario es ${this.role}`);
  }
}

User.usersNumber = 0;
User.countUsers = function () {
  User.usersNumber++;
};


const user1 = new Person('Pepe', 22, 'admin');
const user2 = new Person('Juan', 24, 'user');

console.log(user1, user2);

user1.greet();
user2.greet();

console.log(User.usersNumber);
