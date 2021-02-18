import {Imdb} from "./imdb";
import {Movie} from "./Movie";
import {Professional} from "./professionalClass";


let pf_1 : Professional = new Professional("Nicole kidman", 53, "femenino", 69, 180, "pelirrojo", "azul", "caucasica", false, "USA", 0, "actriz");
let pf_2 : Professional = new Professional("Ewan McGregor", 49, "masculino", 76, 177, "castaño", "azul", "caucasica", false, "UK", 0, "actor");
let pf_3 : Professional = new Professional("will Smith", 52, "masculino", 89, 188, "moreno", "negros", "afroamericano", false, "USA", 0, "actor");
let pf_4 : Professional = new Professional("Julia Roberts", 53, "masculino", 67, 175, "castaño", "marron", "caucasica", false, "USA", 3, "actor");

let pf_5 : Professional = new Professional("Peter Jackson", 59, "masculino", 90, 170, "castaño", "marron", "caucasica", false, "New Zealand", 2, "director");
let pf_6 : Professional = new Professional("Antonio Manué", 26, "masculino", 90, 160, "cnegro", "verde", "africano", true, "Groenlandia", 1, "director");
let pf_7 : Professional = new Professional("De la Iglesia", 71, "femenino", 90, 181, "negro", "marron", "asiatico", true, "Mongolia", 2, "director");

let pf_8 : Professional = new Professional("Percival", 102, "masculino", 90, 170, "castaño", "verde", "caucasica", true, "New Zealand", 2, "writer");
let pf_9 : Professional = new Professional("Pancracia", 33, "femenino", 90, 138, "castaño", "marron", "latina", true, "Croacia", 0, "writer");
let pf_10 : Professional = new Professional("Marina", 62, "femenino", 90, 150, "negro", "azul", "latina", true, "San Marino", 0, "writer");

let movie1: Movie = new Movie ("El silencio de los Corderos", 1991, "Estadounidense", "Terror");
movie1.language = "inglés";
movie1.platform = "Netflix";
movie1.mainCharacterName = "Hannibal";
movie1.isMCU = false;
movie1.distributor = "Metro Golding Mayer";
movie1.producer = "Metro Golding Mayer";
movie1.actors = [pf_1, pf_2];
movie1.director = pf_5;
movie1.writer = pf_8;


let movie2: Movie = new Movie ("Ciudadano Kane", 1941, "Estadounidense", "Drama");
movie1.language = "inglés";
movie1.platform = "Prime Video";
movie1.mainCharacterName = "Charles Kane";
movie1.isMCU = false;
movie1.distributor = "20th Century Fox";
movie1.producer = "George Orwell Ent";
movie1.actors = [pf_1, pf_4, pf_3];
movie1.director = pf_6;
movie1.writer = pf_9;


let movie3: Movie = new Movie ("El paciente inglés", 1996, "Británica", "Drama");
movie1.language = "inglés";
movie1.platform = "Netflix";
movie1.mainCharacterName = "Hannibal";
movie1.isMCU = false;
movie1.distributor = "Metro Golding Mayer";
movie1.producer = "Metro Golding Mayer";
movie1.actors = [pf_2, pf_4];
movie1.director = pf_7;
movie1.writer = pf_10;


let peliculas:Movie[]=[movie1,movie2, movie3]

let imdb1:Imdb= new Imdb (peliculas);

console.log(imdb1); 