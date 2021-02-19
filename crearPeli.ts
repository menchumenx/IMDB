
import {Movie} from "./Movie"
import {Imdb} from "./imdb";

//creoamo objeto calse pelicula.
let movieFinal:Movie =new Movie ("Titulo", 5, "nacionalidad", "genero");
//creamos objeto IMbd vacio. 
let imdb2:Imdb = new Imdb([]);
//leemos el archivo Json creado anteriormente y lo guardamos en el objeto Imdb que hemos creado.
imdb2 = imdb2.obtenerInstanciaIMDB("imdbBBDD.json");

//metodo para añadir info a partir de terminal.
var readlineSync = require('readline-sync');

movieFinal.title = readlineSync.question('Titulo de pelicula? ');
movieFinal.releaseYear = readlineSync.question('Anyo de estreno? ')
movieFinal.nationality = readlineSync.question('Nacionalidad? ');
movieFinal.genre = readlineSync.question('Genero? ');
movieFinal.language = readlineSync.question('Idioma? ');
movieFinal.platform = readlineSync.question('Plataforma de visualizacion? ');
movieFinal.mainCharacterName = readlineSync.question('Nombre del personaje principal? ');
movieFinal.distributor = readlineSync.question('Cual es su distribuidor? ');
movieFinal.producer = readlineSync.question('Quien la produce? ');

//una vez recogida la info añadimos esta info al objeto contenedor del contenido del archivo Json
imdb2.peliculas.push(movieFinal);
//reescribimos el archivo con la información nueva añadida.
imdb2.escribirEnFicheroJSON("imdbBBDD.json");




//------------------------> PAGINA DE INTERES -------------------------->
            //https://www.npmjs.com/package/readline-sync
 

//----------------------------------------------------------------------> PRUEBAS
// movieFinal.title = readlineSync.question('Titulo de pelicula? ');
// movieFinal.releaseYear = readlineSync.question('Anyo de estreno? ')
// movieFinal.nationality = readlineSync.question('Nacionalidad? ');
// movieFinal.genre = readlineSync.question('Genero? ');
// movieFinal.language = readlineSync.question('Idioma? ');
// movieFinal.platform = readlineSync.question('Plataforma de visualizacion? ');
// movieFinal.mainCharacterName = readlineSync.question('Nombre del personaje principal? ');
// movieFinal.isMCU = readlineSync.question('Es de Marvel? ');
// var array:boolean[] = [true, false],
// movieFinal.isMCU = readlineSync.keyInSelect(array, 'Es de Marvel? ');

// movieFinal.distributor = readlineSync.question('Cual es su distribuidor? ');
// movieFinal.producer = readlineSync.question('Quien la produce? ');


// movieFinal.actors = readlineSync.question('Quien actua? '),
// movieFinal.director = readlineSync.question('Quien la dirige? '),

// movieFinal.director.name = readlineSync.question('Nombre del director? ');;
// movieFinal.director.age = readlineSync.question('Edad del director? ');
// movieFinal.director.genre =readlineSync.question('Género del director? '); 
// movieFinal.director. weigth = readlineSync.question('Peso del director? ');
// movieFinal.director.height =readlineSync.question('Altura del director? '); 
// movieFinal.director.hairColor = readlineSync.question('Color de pelo del director? ');
// movieFinal.director.eyeColor =readlineSync.question('Color de ojos del director? ');
// movieFinal.director.race = readlineSync.question('Raza del director? ');

// movieFinal.director.isRetired = readlineSync.question('Está retirado?');
// let array:boolean[] = [ true, false],
// index = readlineSync.keyInSelect(array, "Esta retirado? ");

// movieFinal.director.nationally = readlineSync.question('Nacionalidad del director?'); 
// movieFinal.director.oscarsNumbers = readlineSync.question('Tiene Oscars?');
// movieFinal.director.profession = readlineSync.question('Profesion? ');



// movieFinal.writer = readlineSync.question('Quien la escribió? ');

 
// var favFood = readlineSync.question('What is your favorite food? ', {
//   hideEchoBack: true // The typed text on screen is hidden by `*` (default).
// });
// console.log('Oh, ' + userName + ' loves ' + favFood + '!');