

const person = {
    name: 'Tony',
    age: 45,
    key: 'ironman',
}

// const name = person.name;
// const age = person.age;
// const key = person.key;


// con el nanme: ironmanName se puede desesctrucurar y cambiar el nombre de la variable en la misma linea
const { name: ironmanName, age, key } = person;

console.log(ironmanName, age, key);



interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string;
    // rank: string | undefined;
}

const useContext = ( {key, name, age, rank = 'sin rango' }: Hero) =>{



    return {
        keyName: key,
        user: {
            name,
            age,
        },
        rank: rank,
    }
}


// Esto no es tan recomendable para la legibilidad del código
// const context = useContext(person);
// const { 
//     rank, 
//     keyName, 
//     user: { name }  
// } = useContext(person);


// Esta opcion es mejor para la legibilidad del codigo para desestructurar un objeto anidado
const { 
    rank, 
    keyName, 
    user,
} = useContext(person);
const { name } = user;

console.log(rank, keyName, name);
