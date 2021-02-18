import {Imdb} from "./imdb";
import {Movie} from "./Movie";

let movie1: Movie = new Movie ("El silencio de los Corderos", 1991, "Estadounidense", "Terror");
let movie2: Movie = new Movie ("Ciudadano Kane", 1941, "Estadounidense", "Drama");
let movie3: Movie = new Movie ("El paciente inglés", 1996, "Británica", "Drama");

let peliculas:Movie[]=[movie1,movie2, movie3]

let imdb1:Imdb= new Imdb (peliculas);

console.log(imdb1);