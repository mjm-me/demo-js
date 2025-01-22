// "number"
console.log(typeof 2);
// "string"
console.log(typeof 'hello');
// "undefined"
console.log(typeof undefined);
// "object"
console.log(typeof {});
// "object"
console.log(typeof []);
// "function"
console.log(typeof ((x) => x * 2));
// "object"
console.log(typeof []);
// "object"
console.log(typeof new Date());
// "object"
console.log(typeof /(hello|goodbye)/);

//Primitive Values, such as numbers and strings, are not objects.
'hi'.toUpperCase();

typeof value === 'date';

let pet = 'Narwhal';
pet = 'The Kraken';
console.log(pet);

const count = 101;
pet = count + ' Dalmatians';
console.log(pet);

/************** */
function double(x) {
  return x * 2;
}
let money = 10;
let newMoney = double(money);

console.log(newMoney);
