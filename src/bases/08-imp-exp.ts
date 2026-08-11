// Esta es la importación cuando en la exportación del modulo se hizo: export default
// import   misHeroesFavoritos   from "../data/heroes.data"

// Esta es la forma de importar este modulo y cambiar su nombre en el caso de que sea necesario
// import  { heroes as misHeroesFavoritos  }  from "../data/heroes.data"
// import  { heroes }  from "../data/heroes2.data"

// con la importación de interfases como Hero se agrega el prefico type, sirve para identificar cuales son tipos y cuales son modulos funcionales
import  { heroes, type Hero, heroes2, type Hero2, type Owner2}  from "../data/heroes.data"


const getHersoById = (id: number): Hero | undefined =>{
    const hero = heroes.find( (hero) => {
        return hero.id === id;
    } );

    // Esto es para evitar que  pueda retornara un valor undefinded, solo retorna cuando hay valor de hero o si no renorna una excepción
    // if ( !hero ){
    //     throw new Error( `No existe un heroe con el id ${id}`);
    // }

    return hero;
}

// console.log(getHersoById(6));


export const getHeroByOwner = (owner: Owner2): Hero2[] =>  {
    const hero = heroes2.filter( (hero) =>{
        return hero.owner === owner;
    } );

    return hero;
}

// esto exactamente lo mismo
// export const getHeroByOwner = (owner: Owner2): Hero2[] => heroes2.filter( hero => hero.owner === owner );
