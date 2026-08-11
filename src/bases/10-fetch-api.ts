// no es olbigación poner el type, pero en el caso de usarlo se pone antes de los {} porque solo son interfases las que se van a importar en esas llaves
import type { GyphyRandomeResponse, Gif } from '../data/giphy.response'

const API_KEY = 'fmnp4Sdso73DtONJDyd61hFOirL4Vain';

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`);



// myRequest.then( response => { 
//     // console.log(response);

//     //json() es otra promesa
//     // response.json().then( data =>{
//     //     console.log(data);
//     // });
// })
// .catch( err => {
//     console.error(err);
// });





// myRequest
// .then( response => response.json())
// .then( data => {
//     console.log(data);
//     const imageUrl = data.data.images.original.url;
//     console.log(imageUrl);

//     const imageElement = document.createElement('img');

//     imageElement.src = imageUrl;

//     document.body.append(imageElement);

// })
// .catch( err => {
//     console.error(err);
// });







// Vamos a postman y copiamos todo el JSON de la respuesta de la API para tenerlo en el portapapeles
// regresamos a VSCode
// creamos un archivo .ts en donde vayamos a guardar la interfase de la respuesta de la API
// Ctrl + p
// >past Json as Code                     Se ejecuta ese comando comando, tenemos que tener la extención instalada: Past JSON as Code


// Escribimos esta función para separar responsabilidades de la petición a una API
const createImageInsideDOM = ( url: string) =>{
    const imageElement = document.createElement('img');
    imageElement.src = url;
    document.body.append(imageElement);
}

myRequest
.then( response => response.json())
.then( ( { data } : GyphyRandomeResponse ) => {
    // Esta linea ahora se hace con el tipado estricto, te recomienda todos los niveles del JSON y no puede ser diferente
    const imageUrl = data.images.original.url;
    createImageInsideDOM (imageUrl);
})
.catch( err => {
    console.error(err);
});

