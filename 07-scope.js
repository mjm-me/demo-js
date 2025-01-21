function add(a, b) {
  const r = a + b;
  return r;
}

const subtraction = function add(a = 0, b = 0) {
  const r = a - b;
  return r;
};

//debugger; //cuando lo pongo hace que el código se vaya parando en esa línea y me sirve para chequear mi código

console.log('Inicio');

const x = 12;
const y = 2;
const z = add(x, y); //los argumentos no son x e y, son 12 y 2

{
  const modifyObject = (obj) => {
    obj.job = 'none';
  };

  const user = {
    name: 'Pepe',
    age: 22,
    job: 'developer',
  };

  modifyObject(user);
  console.log(user.job); // devuelve none - porque ace referencia al mismo obj
}

{
  const modifyObject = ({ ...obj }) => {
    obj.job = 'none';
  };

  const user = {
    name: 'Pepe',
    age: 22,
    job: 'developer',
  };

  modifyObject(user);
  console.log(user.job); // devuelve developer porque lo he sacado a un obj nuevo
}
