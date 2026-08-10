function greet( name: string): string {
    return `Hola ${name}`;
}

// const greet2 = (name:string): string =>{
//     return `Hola ${name}`;
// };
const greet2 = (name: string) => `Hola ${name}`;

const message = greet('Goku');
const message2 = greet2('Vegeta');

console.log( message, message2);

interface User {
    uid: string;
    userName: string;
    age?: number;
    addNumber?: () => void;
}

function getUser(): User {
    return {
        uid: 'ABC-123',
        userName: 'El_chaka23',
        age: 10
    };
}

// const getUser2 = (): User =>{
//     return {
//         uid: 'ABC-123',
//         userName: 'El_chaka23'
//     };
// };
const getUser2 = (): User => ({
    uid: 'ABC-123', 
    userName: 'El_chaka23'
});



const user = getUser();
const user2 = getUser2();

console.log(user, user2);




const myNumbers: number[] = [1,2,3,4,5];

// myNumbers.forEach( function (value ){
//     console.log(value);
// })

// myNumbers.forEach( value => console.log(value));


// myNumbers.forEach( (value, index, arr) => {
//     console.log(value, index, arr);
// });
myNumbers.forEach(console.log);