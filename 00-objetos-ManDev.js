//https://lenguajejs.com/javascript/objetos/que-son/

{
  const player = {
    name: 'Manz',
    life: 99,
    power: 10,
  };

  // Notación con puntos (preferida)
  console.log(player.name); // Muestra "Manz"
  console.log(player.life); // Muestra 99

  // Notación con corchetes
  console.log(player['name']); // Muestra "Manz"
  console.log(player['power']); // Muestra 10
}

{
  //También podemos añadir propiedades al objeto
  // FORMA 1: A través de notación con puntos
  const player1 = {};

  player1.name = 'Manz';
  player1.life = 99;
  player1.power = 10;

  // FORMA 2: A través de notación con corchetes
  const player = {};

  player['name'] = 'Manz';
  player['life'] = 99;
  player['power'] = 10;

  console.log(player1);
  console.log(player);
}

{
  //Métodos de un objeto
  //Si dentro de una variable del objeto metemos una función (o una variable que contiene una función), tendríamos lo que se denomina un método de un objeto
  const user = {
    name: 'Manz',
    talk: function () {
      return 'Hola';
    },
  };

  user.name; // Es una variable (propiedad), devuelve "Manz"
  user.talk(); // Es una función (método), se ejecuta y devuelve "Hola"

  console.log(user.name);
  console.log(user.talk);
}

{
  //El método .toString()
  //un método que intenta representar la información de ese objeto en un string
  const objeto = {};
  objeto.toString(); // Devuelve "[object Object]"
  // (representación textual de un objeto genérico)

  console.log(objeto);
}
