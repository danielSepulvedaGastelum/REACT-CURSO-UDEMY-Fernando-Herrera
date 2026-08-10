//En la desestructuración de arreglos si importa el orden en la que se hace la desestructuración

const characterName = [ 'Goku' , 'Vegeta' , 'Trunks'];

const [ p1, p2, p3 ] = characterName;

console.log({p1, p2, p3});


// Esta es la forma de desestructurar para obtener la seguna posición del arreglo
const [, pp2 ] =  characterName;

console.log({pp2});


// al agregar el: as const le dices a Ts que siempre la primera posición del arreglo va a ser String y la segunda un number
const retunrsArrayFn = () =>{
    return [ 'ABC' , 123 ] as const;
}

const [ letters, numbers ] = retunrsArrayFn();

console.log( letters, numbers + 100);


//------------------- TAREA -----------------------

const useState = ( nameProp: string ) =>{
    return [ 
        nameProp , 
        (nameProp2: string) =>{
            console.log(nameProp2);
        }, 
      ] as const;
}

const [ name, setName ] = useState('Goku');
console.log(name);
setName('Vegeta');