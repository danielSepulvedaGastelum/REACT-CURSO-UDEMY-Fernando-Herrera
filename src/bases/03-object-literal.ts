interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address: Address
}

interface Address {
    postalCode: string;
    city: string
}

const ironman: Person = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        postalCode: '85134',
        city: 'New York'
    }
};



console.log(ironman);

// const spiderman = { ...ironman };
// const spiderman = structuredClone(ironman);

// spiderman.firstName = 'Petter';
// spiderman.lastName = 'Parker';
// spiderman.age = 22;
// spiderman.address.city = 'Obregon';

// console.log(ironman, spiderman);