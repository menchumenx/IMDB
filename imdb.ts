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
escribirEnFicheroJSON(nombreFichero:string)
    {
    const fs = require('fs')
    fs.writeFileSync(nombreFichero, JSON.stringify(this))
    }

obtenerInstanciaIMDB(nombreFichero:string):Imdb
{
    let instancia:Imdb;
    const fs = require('fs')
    instancia = JSON.parse(fs.readFileSync(nombreFichero));
    return instancia;
}

}
