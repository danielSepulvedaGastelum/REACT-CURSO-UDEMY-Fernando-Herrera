// no es olbigación poner el type, pero en el caso de usarlo se pone antes de los {} porque solo son interfases las que se van a importar en esas llaves
import type { GyphyRandomeResponse, Gif } from '../data/giphy.response'

const API_KEY = 'fmnp4Sdso73DtONJDyd61hFOirL4Vain';

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`);

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