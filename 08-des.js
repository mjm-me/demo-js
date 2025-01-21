const createArray = () => [1, 2];
const createObject = () => ({
  address: { street: 'calle del Pez', city: 'Soria' },
});

//esto es completamente correcto
//const data = createArray();
//const first = data[0];
//const second = [1];

// DESESTRUCTURACIÖN , misma manera de escribirlo, intercambiando el orden
const [first, second] = createArray();
const {
  name: userName,
  age,
  address: { street, city },
} = createObject();

console.log(userName, age, street, city);

/******************************/
{
  function makeFoo({ name, age }) {
    console.log(name, age);
  }

  const obj = {
    name: 'Pepe',
    age: 2,
    address: { street: 'calle del Pez', city: 'Soria' },
  };

  makeFoo(obj);
}

/*********** LOS SPRED de los ... *******************/
const add = (a, b) => a + b;

const data = [12, 10];
console.log(add(...rest));

const addPlus = (a, b, ...rest) => {
  console.log(a + b);
  console.log(rest); //este siempre lo devuelve en un array, es un rest
};

addPlus(1, 2, [3, [4, 6], 7, 8], 10);

const media = (...values) => {
  //let total = 0;
  //values.forEach((item) => (total += item)); //manera de proceso de acumulación

  const total = values.reduce((a, b) => a + b);
  return total / values.length;
};

console.log(media(1, 2, 3, 4, 6, 7, 8));
