
// para indicar el tipo de dato que resuleve la procesa se usa <> y se pone en medio el tipo de dato

const myPromise = new Promise <number>( ( resolve, reject ) => {

    setTimeout( () => {
        //! Yo quiero mi dinero de regreso!!
        // resolve(100);
        reject('Mi amigo se perdió');
    }, 2000); // 2 Segundos
} );

// .then() es cuando la promesa se resulve: resolve()

//.catch() es cuando la promesa se rechaza: reject()

//.finally() esta siempre se va a ejecutar sin importar si se resulve o se rechaza la promesa

myPromise.then((myMoney) => {
    console.log(`Tengo mi dinero de regreso ${myMoney}`);
})
.catch( reason => {
    console.warn(reason);
})
.finally( () =>{
    console.log('Pues a seguir con mi vida');
});

