//declaración ---------------------
function makeFoo(param) {
  console.log(param);
}

//asignación ---------------------
const makeBaz = function (param) {
  //expresión funcional anónima
  console.log(param);
};

const makeBazArrow = (param) => console.log(param);
//expresión funcional anónima

//ejemplo de uso de expresión funcional anónima de arrow
[1, 2, 3].map((item) => item ** 3);

const add = (a, b) => {
  return a + b;
}; //también valdría con return su dejo {}

// Arrow y objetos ------------------
const makeObject = (name, age) => {
  return { name: name, age: age };
};
// para poder quitarle el return y las {}, como la salida es un objeto lo tengo que poner entre ()
const makeObject1 = (name, age) => ({ name: name, age: age });
// la versión más moderna sería atajos de arrow functions y atajos de objetos:
const makeObject2 = (name, age) => ({ name, age });

const fooX = makeObject() //tendría las propiedades name:undefined, age:undefined
const fooXX = makeObject;

//Uso, ejecución --------------------
const foo = makeFoo(`Hola`); // devuelve undefined, función es de tipo void
console.log(typeof foo); // devuelve un dato undefined

makeBaz('Adios');
