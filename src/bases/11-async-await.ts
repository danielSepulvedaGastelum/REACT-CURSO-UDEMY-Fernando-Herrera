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


const getRandomeGifUrl = async (): Promise<string>=>{
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`);
    // : GyphyRandomeResponse para especificar que lo que se recive es de este tipo pero solo se puede usar esto si lo que se recive 
    // en la promesa de .json() es un GyphyRandomeResponse, de lo contratio es un error
    const { data }: GyphyRandomeResponse = await response.json();
    return data.images.original.url;
}




// getRandomeGifUrl().then(
//     url => createImageInsideDOM(url)
// );


// Si solo pasas argumento que solo se pasan como referencia a una función se puede simplificar así, mandando la sgunda función como referencia:
getRandomeGifUrl().then(createImageInsideDOM);
