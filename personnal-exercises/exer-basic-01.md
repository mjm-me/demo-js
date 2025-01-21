# Calculadora de gastos de viaje

Escribe un programa que calcule el coste total de un viaje, incluyendo los gastos de alojamiento, alimentación y entretenimiento.

- Solicita al usuario que ingrese los gastos estimados para cada categoría.
- Calcula el coste total sumando todos los gastos.
- Muestra el coste total al usuario.
- Ejemplo de entrada: Gastos de alojamiento: 200€, Gastos de alimentación: 150€, Gastos de entretenimiento: 100€.
- Salida esperada: El coste total del viaje es 450€.

## solución

parseFloat
es una función de JavaScript que convierte una cadena de texto en un número de punto flotante (decimal).
Esta función es útil cuando tienes datos en formato de cadena y necesitas trabajar con ellos como números.
Puedes usarlo en situaciones donde necesitas convertir una cadena que representa un número decimal a un valor numérico para poder realizar operaciones matemáticas con ella.

El código let alojamiento = parseFloat(prompt("Ingrese el coste estimado de alojamiento: ")); hace lo siguiente:

1. Muestra un cuadro de diálogo pidiendo al usuario que ingrese el coste estimado de alojamiento.
2. Convierte la cadena de texto ingresada por el usuario en un número decimal utilizando parseFloat.
3. Asigna el valor convertido a la variable alojamiento.
