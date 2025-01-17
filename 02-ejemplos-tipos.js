{
  // Object: Representa un objeto con propiedades
  var persona = {
    nombre: 'Eva',
    edad: 18,
    ciudad: 'Cuenca',
  };
  console.log('Objeto Persona:', persona);

  // Array: Representa una colección ordenada de valores
  var frutas = ['manzana', 'naranja', 'plátano'];
  console.log('Array de Frutas:', frutas);

  // Function: Representa una función reutilizable
  function saludar(nombre) {
    console.log('¡Hola, ' + nombre + '!, ¿cómo estás?');
  }
  saludar('Andrea');

  const a = 5;
  const b = 9;

  let result = a + b;

  function sumar(result) {
    console.log('El resultado de la suma es: ' + result);
  }

  sumar(result); // Llamada a la función sumar

  //escrito de diferente manera
  const x = 2;
  const z = 2;

  let result2 = x + z;

  function sumar2(result2) {
    return 'El resultado de la suma es: ' + result2;
  }

  console.log(sumar2(result2)); // Llamada a la función sumar y luego imprimir el resultado

  // Date: Representa una fecha y hora específicas
  var fechaActual = new Date();

  console.log('Fecha Actual:', fechaActual);
}

{
  //Reglas para nombres de variables
  //NO se pueden usar palabras clave reservadas, como: @, #, %, &...
  let talla = 25;
  let nombreCompleto = 'Juan Pérez';
  let _precioProducto = 50.99;
  let $descuento = 10;

  //Mostrar variables en una cadena

  let nombre = 'Andrea';
  let edad = 30;
  // Concatenación de cadenas utilizando el operador +
  let mensaje = 'Hola, mi nombre es ' + nombre + ' y tengo ' + edad + ' años.';
  console.log(mensaje);

  let name = 'Pili';
  let age = 3;
  // Plantilla de cadena utilizando backticks (`) y ${}
  let message = `Hola, mi nombre es ${name} y tengo ${age} años.`;
  console.log(message);
}

{
}
