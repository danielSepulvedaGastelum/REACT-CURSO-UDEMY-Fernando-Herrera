export interface Hero {
    id: number;
    name: string;
    owner: Owner;
}

// El type es una regla que yo me pongo que solo existe en TS
type Owner = 'DC'| 'Marvel';

export const heroes: Hero[] = [
  {
    id: 1,
    name: 'Batman',
    owner: 'DC',
  },
  {
    id: 2,
    name: 'Spiderman',
    owner: 'Marvel',
  },
  {
    id: 3,
    name: 'Superman',
    owner: 'DC',
  },
  {
    id: 4,
    name: 'Flash',
    owner: 'DC',
  },
  {
    id: 5,
    name: 'Wolverine',
    owner: 'Marvel',
  },
  {
    id: 6,
    name: 'Green antern',
    owner: 'DC',
  },
];



// la Exportación por defecto  puedes renombrar desde donde se está importando este módulo
// export default heroes;





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export interface Hero2 {
    id: number;
    name: string;
    owner: Owner2;
}

 export enum Owner2 {
  DC = 'DC',    // pone 0 por default
  Marvel = 'Marvel', //pone 1 por default
} 


export const heroes2: Hero2[] = [
  {
    id: 1,
    name: 'Batman',
    owner: Owner2.DC,
  },
  {
    id: 2,
    name: 'Spiderman',
    owner: Owner2.Marvel,
  },
  {
    id: 3,
    name: 'Superman',
    owner: Owner2.DC,
  },
  {
    id: 4,
    name: 'Flash',
    owner: Owner2.DC,
  },
  {
    id: 5,
    name: 'Wolverine',
    owner: Owner2.Marvel,
  },
  {
    id: 6,
    name: 'Green antern',
    owner: Owner2.DC,
  },
];