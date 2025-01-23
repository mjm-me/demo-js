// Hablamos de métodos cuando nos referimos a funciones que existen en el interior de una clase

// Forma larga
class Animal1 {
  hablar = function () {
    return 'Cuak';
  };
}

// Forma corta (recomendado)
class Animal {
  hablar() {
    return 'Cuak';
  }
}

//Una vez declarado el método hablar() dentro de la clase Animal, podemos instanciar el objeto mediante un new Animal() y tener ese método disponible
// Creación de una instancia u objeto (pato)
const pato = new Animal();
pato.hablar(); // 'Cuak'

// Creación de otra instancia u objeto (donald)
const donald = new Animal();
donald.hablar(); // 'Cuak'

console.log(pato, donald);

/******** métodos públicos ***********/
{
  class Personaje {
    name = 'Mario';

    constructor() {
      this.hablar();
    }

    hablar() {
      console.log("It's me, Mario!");
    }
  }

  const mario = new Personaje(); // It's me, Mario! (se ha accedido a hablar() desde dentro de la clase)
  mario.hablar(); // It's me, Mario! (se ha accedido a hablar() desde fuera de la clase)
}

/******** métodos privados ***********/
class Personaje1 {
  name = 'Mario';

  constructor() {
    this.#hablar();
  }

  #hablar() {
    console.log("It's me, Mario!");
  }
}

{
  class Personaje1 {
    name = 'Mario';

    constructor() {
      this.#hablar1();
    }

    #hablar1() {
      console.log("It's me, Mario!");
    }
  }

  const mario1 = new Personaje1(); // It's me, Mario! (se ha accedido a #hablar() desde dentro de la clase)

  // Da error, no se permite acceder a un método privado desde fuera de la clase
  // Uncaught SyntaxError: Private field '#hablar' must be declared in an enclosing class
  mario.#hablar1();

  // Da error, el método hablar() no existe, ya que el nombre del método es #hablar()
  // Uncaught TypeError: mario.hablar is not a function
  mario.hablar1();
}
