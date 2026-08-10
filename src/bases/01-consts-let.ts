// Por default usar mejor siempre const en vea de let para evitar cargar la mitar del peso de la configuración
// En el momento que se vaya a cambiar el valor cambiar a let

const firstName: string = 'Daniel';
const lastName: string = 'Sepulveda';

let diceNumber = 5;
diceNumber = 3;

const containsLettetH = lastName.includes('S');

console.log({containsLettetH, diceNumber, firstName, lastName});
