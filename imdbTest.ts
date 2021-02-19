import {Imdb} from "./imdb";
import {Movie} from "./Movie";
import {Professional} from "./professionalClass";


// ----->> PELICULAS <<------

    // Pelicula 1 -------------------------- EL SILENCIO DE LOS CORDEROS
        //actores 
        let ac_1 : Professional = new Professional("Jodie Foster", 58, "femenino", 54, 160, "Castaño", "azul", "caucasica", false, "USA", 0, "actriz");
        let ac_2 : Professional = new Professional("Anthony Hopkinsr", 83, "masculino", 76, 177, "castaño", "azul", "caucasica", false, "UK", 1, "actor");
        let ac_3 : Professional = new Professional("Ted Levine", 63, "masculino", 87, 180, "castaño", "azul", "caucasica", false, "USA", 0, "actor");
        //director
        let dr_1 : Professional = new Professional("Jonathan Demme", 73, "masculino", 90, 170, "castaño", "marron", "caucasica", false, "USA", 0, "director");
        //escritor
        let wr_1 : Professional = new Professional("Thomas Harris", 80, "masculino", 93, 177, "castaño", "marron", "caucasica", true, "USA", 0, "writer");

    let movie1: Movie = new Movie ("El silencio de los Corderos", 1991, "Estadounidense", "Terror");
    movie1.language = "inglés";
    movie1.platform = "Netflix";
    movie1.mainCharacterName = "Hannibal";
    movie1.isMCU = false;
    movie1.distributor = "Metro Golding Mayer";
    movie1.producer = "Metro Golding Mayer";
    movie1.actors = [ac_1, ac_2, ac_3];
    movie1.director = dr_1;
    movie1.writer = wr_1;

    //Pelicula 2 ---------------------------- MOULING ROUGE
        //actores
        let ac_4 : Professional = new Professional("Nicole kidman", 53, "femenino", 69, 180, "pelirrojo", "azul", "caucasica", false, "USA", 0, "actriz");
        let ac_5 : Professional = new Professional("Ewan McGregor", 49, "masculino", 76, 177, "castaño", "azul", "caucasica", false, "UK", 0, "actor");
        let ac_6 : Professional = new Professional("Jim Broadbent", 71, "masculino", 90, 189, "castaño", "azul", "caucasica", false, "UK", 0, "actor");
        //director
        let dr_2 : Professional = new Professional("Baz Luhrmann", 58, "masculino", 90, 170, "castaño", "marron", "caucasica", false, "Australia", 0, "director");
        //escritor
        let wr_2 : Professional = new Professional("Craig pearce", 68, "masculino", 93, 177, "castaño", "marron", "caucasica", true, "USA", 0, "writer");

    let movie2: Movie = new Movie ("Mouling Rouge", 2001, "Estadounidense", "Musical");
    movie2.language = "inglés";
    movie2.platform = "Netflix";
    movie2.mainCharacterName = "Satine";
    movie2.isMCU = false;
    movie2.distributor = "Metro Golding Mayer";
    movie2.producer = "Metro Golding Mayer";
    movie2.actors = [ac_4, ac_5, ac_6];
    movie2.director = dr_2;
    movie2.writer = wr_2;

    //Pelicula  3 ---------------------------- IRON MAN 1
        //actores
        let ac_7 : Professional = new Professional("Robert Downet Jr", 55, "masculino", 73, 174, "castaño", "marron", "caucasica", false, "USA", 0, "actroz");
        let ac_8 : Professional = new Professional("Gwyneth Paltrow", 48, "femenino", 65, 175, "rubio", "azul", "caucasica", false, "USA", 0, "actriz");
        let ac_9 : Professional = new Professional("Don Cheadle", 56, "masculino", 72, 172, "negro", "negro", "afroamericana", false, "USA", 0, "actor");
        //director
        let dr_3 : Professional = new Professional("Jon Favreau", 54, "masculino", 100, 185, "castaño", "marron", "caucasica", false, "Australia", 0, "director");
        //escritor
        let wr_3 : Professional = new Professional("Stan Lee", 95, "masculino", 93, 177, "castaño", "marron", "caucasica", true, "USA", 0, "writer");

    let movie3: Movie = new Movie ("Iron Man", 2008, "Estadounidense", "accion/Sci-Fi");
    movie3.language = "inglés";
    movie3.platform = "Netflix";
    movie3.mainCharacterName = "Tony Strak";
    movie3.isMCU = true;
    movie3.distributor = "Metro Golding Mayer";
    movie3.producer = "Metro Golding Mayer";
    movie3.actors = [ac_7, ac_8, ac_9];
    movie3.director = dr_3;
    movie3.writer = wr_3;



let peliculas:Movie[]=[movie1,movie2, movie3]

let imdb1:Imdb= new Imdb (peliculas);


imdb1.mostrarMovies(); 

const fs = require('fs');

const content =JSON.stringify(imdb1);

fs.writeFileSync('./imdbBBDD.json', JSON.stringify(imdb1));
console.log(JSON.parse(fs.readFileSync('./imdbBBDD.json')));

imdb1.escribirEnFicheroJSON("imbdJSON.json")

console.log(imdb1.obtenerInstanciaIMDB("imbdJSON.json"));

