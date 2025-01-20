import { errorDivideZero } from './03-errors';

//Expresiones ---> yo le pregunto algo a JS ¿? ---> y me responde con un valor

22 / 11;

//Sentencias (statements) ---> son órdenes/instrucciones

const r = 33 / 7;
console.log(r);
console.log(r.toFixed(2));

// Expresiones: operadores
//unario: porque solo usa un operario, dime si no es tru
console.log(!true);
let x = 2;
let y = -2;
console.log(+x, -x);
console.log(+y, -y);

//binario: porque usa dos operando
console.log(2 + 2);

//ternario: si true es verdadero devuelve tru, si no devuelve false
console.log(true ? 'True' : 'False');
let age = 15;
console.log(age >= 18 ? 'Mayor de edad' : 'Menor');
age = 23;
console.log(age >= 18 ? 'Mayor de edad' : 'Menor');

let a = 22;
let b = 22;
Object.is(a, b); //true
console.log(Object.is(a, b));
a = {};
b = {};
Object.is(a, b); //false
console.log(Object.is(a, b));
a = 0;
b = -0;
Object.is(a, b); //false
console.log(Object.is(a, b));
let e = NaN;
let f = NaN;
Object.is(e, f); //true
console.log(Object.is(e, f));

//Operador de identidad (===)
//es siempre igual que Object.is  EXCEPTO
NaN === NaN; // devuelve false
0 === -0; // devuelve false

if (isNaN(x)) {
  console.log('Valor no válido');
}

// NO USARLO, no sabemos lo que va a darnos
22 == '22';
0 != [];

{
  function divide(a, b) {
    if (b === 0) {
      //'No se puede dividir por 0';
      throw errorDivideZero;
    }
    return a / b;
  }

  try {
    const r = divide(3, 0);
    console.log(r * 2);
  } catch (error) {
    console.error(error.message);
  }

  console.log('Fin del programa');
}

//TIPOS PRIMITIVOS y OBJETOS ENVOLVENTES

//intenta asignar un propiedad con valor igual a 1. Si a los obj
{
}
