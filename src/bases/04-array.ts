
const myArray: number[] = [1,2,3,4,5,6,7,8,9];

myArray.push(+'10'); //Esto hace la conversión de un String a un Number
myArray.push(11);
myArray.push(12);

console.log(myArray);

for(const myNumber of myArray){
    console.log(myNumber + 10);
}








// const myArray2: (string | number)[] = [1,2,3,4,5,6,7,8,9];
const myArray2: number[] = [1,2,3,4,5,6,7,8,9];

// const myArray3 = [ ...myArray2];
const myArray3 = structuredClone(myArray2) ;

myArray3.push(15);


console.log({myArray2, myArray3})




// Para declarar un array vacio poner siempre el tipo de dato
const myArray4: number[] = [];

console.log({myArray4})