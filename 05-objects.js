const user = {
  name: 'Pepe',
  age: 22,
  job: 'engineer',
  address: {
    street: 'calle del Álamo',
    city: 'Soria',
  },
};

console.log(Object.keys(user)); //lista de claves
console.log(Object.values(user)); //lista de valores
console.log(Object.entries(user)); //es más o menos la estructura que tiene un form data
// //devuelve [ [ 'name', 'Pepe' ], [ 'age', 22 ], [ 'job', 'engineer' ] ]

const data = [
  ['name', 'Juan'],
  ['age', 18],
  ['job', 'designer'],
  ['address', { street: 'calle del Roble', city: 'Soria' }],
];

console.log(Object.fromEntries(data));

// ARRAYS
{
  console.log(typeof []); //object
  console.log(typeof new Error()); //object

  const data = [1, 2, 3];
  data.prop = 'Estoy en un array';
  console.log(data.length); //solo devolverá 3
  data.iterate = () => {
    for (let i = 0; i < data.length; i++) {
      console.log(data[i]);
    }
  };

  console.log(data);
  data.iterate();
}

{
  //un string es iterable SOLO de lectura. Cuenta la posición que le pido y me dice qué carácter es
  const text = 'string es iterable de lectura';
  console.log(text[10]); //me dice que la i es quien ocupa la posición 10

  // los arrays son iterables de lectura y escritura
  const data = [1, 2, 3, 4, 5, 6, 7, 8];
  data[5] *= 10;
  console.log(data);

  // rareza length es de lectura y escritura
  const group = [1, 2, 3, 4, 5, 6, 7, 8];
  console.log(data.length);
  group.length = 4;
  console.log(data);

  //con push, el array muta porque añade al final uno nuevo
  const clase = [1, 2, 3, 4, 5, 6, 7, 8];
  clase.push(23);
  console.log(clase);
  const clase2 = clase.concat([45, 79]);
  console.log(clase);
  console.log(clase2);
}

{
  //todas éstas hacen lo mismo
  const data = [10, 20, 30, 40];
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    console.log(element);
  }

  for (const item of data) {
    console.log(item);
  }
  data.forEach((item, i) => console.log(i, item)); //no modifica el array original
  // recibe un callback en cada vuelta da el item, indice y valor completo
  //const x1 = data.filter(); //siempre devuelve un array, si no encuentra nada estará vacío
  //const x2 = data.find(); //si no encuentra nada devuelve undefined
  //const x3 = data.map(); //devuelve un array del mismo número que el original

  const r = data.reduce((p, c) => p + c);
  console.log(r);
}
{
  const data = Array.of(1, 2, 3);
  console.log(data);
  const data2 = Array.from(data); // [...data]
  data2.push(4);
  console.log(data);
  console.log(data2);
}
{
  const data = [21, 21, 21, 22, 22, 23, 24, 24];
  const dataFinal = [...new Set(data)];
  console.log(dataFinal);
}
