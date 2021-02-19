import {Movie} from "./Movie"

let movieFinal:Movie =new Movie ("Titulo", 5, "nacionalidad", "genero");

// let titulo = movieFinal.title

// process.stdout.write("Escribe el título" + data)

// process.stdin.on("data", function(data)
// {
//     process.stdout.write(data.toString());
// });

// var readline = require('readline');

// var rl = readline.createInterface(
// 	process.stdin, process.stdout);

// const request = require('request');

// request("string", (movieFinal.title, movieFinal.releaseYear, movieFinal.nationality, movieFinal.genre) => {
    
    
   
//     movies = JSON.parse(body);
//     movies.forEach(movie => {
//         console.log(`${movie['title']}, ${movie['release_date']}`);
//     });
// });

var readlineSync = require('readline-sync');
 
movieFinal.title = readlineSync.question('¿Titulo de pelicula? ');
movieFinal.releaseYear = readlineSync.question('¿Año de estreno? ')
movieFinal.nationality = readlineSync.question('¿Nacionalidad? ');
movieFinal.genre = readlineSync.question('¿Género? ');
movieFinal.language = readlineSync.question('¿Idioma? ');
movieFinal.platform = readlineSync.question('¿Plataforma de visualización? ');
movieFinal.mainCharacterName = readlineSync.question('¿Nombre del personaje principal? ');
movieFinal.isMCU = readlineSync.question('¿Es de Marvel? ');
movieFinal.distributor = readlineSync.question('¿Cuál es su distribuidor? ');
movieFinal.producer = readlineSync.question('¿Quién la produce? ');
//movieFinal.actors = readlineSync.question('¿Quién actúa? ');
// movieFinal.director = readlineSync.question('¿Quién la dirige? ');
// movieFinal.writer = readlineSync.question('¿Quién la escribió? ');

 
// var favFood = readlineSync.question('What is your favorite food? ', {
//   hideEchoBack: true // The typed text on screen is hidden by `*` (default).
// });
// console.log('Oh, ' + userName + ' loves ' + favFood + '!');

console.log(movieFinal);

