const user = {
  name: 'Pepe',
  age: 22,
  greet: function () {
    console.log(`Hola, soy ${this.name} y tengo ${this.age} años`);
  },
};

const user2 = {
  name: 'Joana',
  age: 90,
  greet2: function () {
    console.log(`Hola, soy ${this.name} y tengo ${this.age} años`);
  },
};

user.greet();
user.greet();

/*******************/
{
  const propName = 'name';

  const user2 = {
    name: 'Joana',
    age: 90,
  };
}

{
  let foo;
  console.log(foo);
}

{
  let baz = {};
  console.log(baz.address); //aunque no exista la propiedad, hace como si existe y me devuelve: undefined
  console.log(baz.address.street); //es una propiedad de un no objeto, porque le pedimos una propiedad a un undefined que por supuesto NO existe
  console.log(baz.address?.street);
}
