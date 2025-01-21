const createArray = () => [1, 2];
const createObject = () => ({
  name: 'Pepe',
  age: 2,
  address: { street: 'c/ Pez', city: 'Soria' },
});

//esto es completamente correcto
//const data = createArray();
//const first = data[0];
//const second = [1];

// DESESTRUCTURACIÖN , misma manera de escribirlo, intercambiando el orden
const [fist, second] = createArray();
const {
  name: userName,
  age,
  address: { street, city },
} = createObject();

console.log(userName, age, street, city);

/******************************/
{
  function makeFoo({ name, age }) {
    name = 'Rosa';
    age = 34;
    console.log('Desde makeFoo', name, age);
  }

  const obj = {
    name: 'Pepe',
    age: 2,
    address: { street: 'c/ Pez', city: 'Soria' },
  };

  makeFoo(obj);
  console.log('Original', obj);
}

/*********** LOS SPRED de los ... *******************/
function makeFooWithData([a, b]) {
  console.log('Desde makeFooWithData', a, b);
}

makeFooWithData(['Pepe', 'Juan']);

const add = (a, b) => a + b;

const data = [12, 10];
console.log(add(...data)); // spreed operator

const addPlus = (a, b, ...c) => {
  // rest operator
  console.log(a + b);
  console.log(c);
};

addPlus(1, 2, 3, 4, 6, 7, 8);

const media = (...values) => {
  // let total  = 0
  // values.forEach(item => total += item)
  const flatValues = values.flat();
  const total = flatValues.reduce((a, b) => a + b);
  return total / flatValues.length;
};

console.log(media(1, 2, [3, 4], 6, 7, 8));
