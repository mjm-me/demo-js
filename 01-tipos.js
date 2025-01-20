'use string';

// DATOS Y SUS TIPOS
{
  //------- 7 tipos inmutables ----------
  console.log('Pepe', typeof 'Pepe');
  console.log(22, typeof 22);
  console.log(22n, typeof 22n);
  console.log(true, typeof true);
  console.log(undefined, typeof undefined);
  console.log(null, typeof null); // es MENTIRA es un BUG del lenguaje original
  console.log(Symbol(), typeof Symbol());
  //------- tipo instanciable /lo creo yo ---------
  console.log({}, typeof {});
  console.log(() => {}, typeof (() => {}));

  //------- demostración de que null no es un objeto ---------
  console.log(({}.foo = 22)); // le doy una propiedad a una función
  //console.log(('Pepe'.foo = 22)); //no se puede hacer
  //console.log((22.foo = 22)); //no se puede hacer
  //console.log((22n.foo = 22)); //no se puede hacer
  //console.log((undefined.foo = 22)); //no se puede hacer
  //console.log((null.foo = 22)); //no se puede hacer
}

// VARIABLES
{
  // declararles y asignarles valor
  let biz; //declaración, si no le asigno un valor saldría undefined
  //foo = 22; //asignación
  console.log({ biz });

  let baz = 666; // declaración y asignación
  console.log({ baz });

  const pi = 3.1415;

  //el tipo depende del valor
  //el tipo cambia si le asigna otro valor
  let foo;
  console.log(foo, typeof foo);
  foo = 'Pepe';
  console.log({ foo }, typeof foo);
  foo = 22;
  console.log({ foo }, typeof foo);
  foo = 22n;
  console.log({ foo }, typeof foo);
  foo = true;
  console.log({ foo }, typeof foo);
  foo = undefined;
  console.log({ foo }, typeof foo);
  foo = null;
  console.log({ foo }, typeof foo);
  foo = Symbol();
  console.log({ foo }, typeof foo);
}

{
  const IVA_VALUES = {
    base: 1.21,
    reducido: 1.1,
    superReducido: 1.04,
  };

  // Object.freeze(IVA_VALUES);

  IVA_VALUES.base = 1;

  let price = 22;
  let total = price * IVA_VALUES.base;
  console.log(total);

  const data = [1, 2, 3];
}

// undefined and null --> nullish
{
  let foo; // implícito, no intencional -> undefined
  console.log({ foo });
  let baz = (() => {})();
  console.log({ baz });

  foo = 'Nina';
  foo = null;
  console.log({ foo });
  baz = (() => null)();
  console.log({ baz });
}

// strings
{
  let user = 'Pepe "el tuerto"';
  user = "Pepe \n 'el tuerto'"; // la \n es un salto de línea

  console.log(user);

  // template string para mostrar el mismo salto de línea
  const title = `El tesoro de
  ${user}`;
  console.log(title);
}
{
  // numbers
  let n = 1;
  n = -1;
  n = 2.4;
  n = 1_200_325; // el 1.200.325
  n = 1.2e6;
  console.log(n);

  console.log(Number.MAX_VALUE);
  console.log(Number.MIN_VALUE);

  console.log(Number.MAX_SAFE_INTEGER);
  console.log(Number.MIN_SAFE_INTEGER);

  n = 9_007_199_254_740_991;
  console.log(n);
  console.log(n + 1);
  console.log(n + 2);

  // bigNumber
  n = 9_007_199_254_740_991n;
  console.log(n);
  console.log(n + 1n);
  console.log(n + 2n);
}

{
  // números "raritos"

  // con bigNumber --> lo habitual en programación nos da un RangeError
  // const rare2 = 0n / 0n;
  // console.log(rare2, typeof rare2);

  let rare = 0 / 0;
  console.log(rare, typeof rare); //NaN

  console.log(isNaN(rare)); //true
  console.log(Number.isNaN(rare)); //true

  // con conversión de tipos
  console.log(isNaN('Pepe')); //true
  // sin conversión de tipos
  console.log(Number.isNaN('Pepe')); //false

  rare = 1 / 0;
  console.log(rare, typeof rare); //Infinity

  rare = -1 / 0;
  console.log(rare, typeof rare); // -Infinite

  rare = -0;
  console.log(rare, typeof rare); // -0
}

// CONVERSIÓN CASTING(explícita) Y COERTION(implícita)
{
  let n = 1;
  let x = '2';

  let result = n / Number(x); //casting
  console.log(result);

  // JS tiene un tipado débil --> SIEMPRE hace coerción

  let result2 = n + x; //coerción
  console.log(result2, typeof result2); //12 devuelve el 1 y un 2 juntos
}

// CONVERSIÓN CASTING(explícita) Y COERTION(implícita)
{
  let n = 1;
  let x = '2';

  let result = n / Number(x); //casting
  console.log(result);

  // JS tiene un tipado débil --> SIEMPRE hace coerción

  let result2 = n + x; //coerción
  console.log(result2, typeof result2); //12 devuelve el 1 y un 2 juntos
}

// truly v. falsy v. nullish
{
  console.log(Boolean(false));
  console.log(Boolean(0));
  console.log(Boolean(-0));
  console.log(Boolean(0n));
  console.log(Boolean(''));
  console.log(Boolean(NaN));
  //también son nullish (??)
  console.log(Boolean(undefined));
  console.log(Boolean(null));
}

// coerción de primitivos a objetos
{
  let foo = 'ROSA';
  console.log(foo.toLowerCase());
}

// los Objetos y las funciones que también son objetos
{
  //functions
  function foo() {} //declaración
  const baz = function () {}; //asignación expresión funcional anónima
  const arrowFoo = () => {}; // asignación de una arrow function que es de tipo anónimo

  // uso, ejecuto, invoco, la función
  //operador de invocación es el paréntesis ()
  foo();
  baz();
  arrowFoo();

  // son objetos de primera clase
  foo.title = 'Función declarada';
  baz.title = 'Función por asignación';
  arrowFoo.title = 'Arrow función';

  console.log(foo, baz, arrowFoo);
}
{
  //objects
  const obj1 = new Object(); //manera más formal pero no se usa

  ///objeto literal (JSON) : Douglas Crockford
  const obj = {
    name: 'Kika',
    age: 51,
    isUser: true,
  };

  obj1.name = 'Kika';
  obj1.age = 51;
  obj1.isUser = true;

  //obj1 = (), TypeError:Assignement
  console.log(obj1, obj);

  obj1.name = 'Nicola';
  delete obj1.isUser;

  console.log(obj);
}

{
  //Cómo accedo a las propiedades -dot notation-
  const obj = {
    name: 'Kika',
    age: 51,
    isUser: true,
  };

  console.log(obj.age);

  //Cómo accedo a las propiedades -bracket notation-
  const propertyName = 'name';

  console.log(obj[propertyName]);

  for (const key in obj) {
    console.log(`La propiedad ${key} vale ${obj[key]}`);
  }
}

{
  //ARRAYS
  const data = [1, 2, 3];
  const data2 = new Array(1, 2, 3);

  console.log(typeof data, typeof data2);

  data.name = 'Array de números';
  console.log(data, data2);
}

//Mutabilidad
{
  //reasignación de valores inmutables
  let y = 22;
  let x = 22;
  x = 24;

  // const + valor primitivo inmutable = CONSTANTE
  const c = 23;
  //c = 34; NUNCA se puede hacer  daría un error: Error TypeError: Assignement to constant variable

  //const + objeto = NO es CONSTANTE, es mutable
  const obj = {};
  //obj = {}; NUNCA se puede hacer  daría un error: Error TypeError: Assignement to constant variable
  obj.name = 'Lola'; //SÏ se puede  cambiar las propiedades del objeto

  //const + objeto + Object.freeze = CONSTANTE
  const EMPRESA = { brand: 'APPLE', address: 'calle del álamo' };
  Object.freeze(EMPRESA); //consigo que la empresa sea constante y no se pueda cambiar nunca su valor
}

//OBJETOS
{
  //  Métodos (de instancia)
  const greet = () => 'Hola Mundo';
  const obj = {
    greet: function () {
      return 'Hola Mundo';
    },
  };

  console.log(obj.greet());
  [].at(-1);
  ''.toLowerCase();
}
{
  // Métodos estáticos (de clase)
  const obj = {
    greet: function () {
      return 'Hola Mundo';
    },
  };

  Object.freeze(obj);

  const data = [];
  console.log(typeof data);

  Array.isArray(data); // true

  Math.random();
  // new JSON();
}
{
  // Wrapper objects de los primitivos

  const d = '2';
  console.log(22 / d);

  let foo = 'Hola';

  // const z = new String()

  // Ejemplo de coercion a String
  console.log(foo.toLowerCase());
  console.log(foo);

  let n = 22;
  console.log(n.toFixed(2));

  let big = 2n;
  big.toString();
}
