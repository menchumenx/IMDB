import {Movie} from "./Movie";

export class Imdb
{
    public peliculas: Movie[];

    constructor(peliculas:Movie[])
    {
        this.peliculas=peliculas;
    }

mostrarMovies(){
    let peliculas:string=""
    for (let i=0; i<this.peliculas.length; i++)
        {
            peliculas+=this.peliculas[i].showData();
        }
    }
}
