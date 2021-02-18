import {Professional} from "./professionalClass"

export class Movie
{
    public title:string;
    public releaseYear:number;
    public actors:Professional[];
    public nationality:string;
    public director:Professional;
    public writer:Professional;
    public language:string;
    public platform:string;
    public isMCU:boolean;
    public mainCharacterName:string;
    public producer:string;
    public distributor:string;
    public genre:string;

    constructor(title:string, releaseYear:number, nationality:string, genre:string)
    {
        this.title=title;
        this.releaseYear=releaseYear;
        this.nationality = nationality;
        this.genre=genre;
    }

    showData()
    {
        let actores:string = ""
        for (let i=0; i<this.actors.length; i++)
        {
            actores += this.actors[i].printProfessional()
        }

        console.log(`Título: ${this.title} \n Año de estreno: ${this.releaseYear} \n Actores: \n ${actores} \n Nacionalidad: ${this.nationality} \n Director: ${this.director} 
            \n Escritor: ${this.writer} \n Idioma: ${this.language} \n Plataforma: ${this.platform} \n ¿Es de Marvel?: ${this.isMCU}\n Nombre personaje principal: ${this.mainCharacterName}
            \n Productor: ${this.producer}\n Distribuidor: ${this.distributor} \n Género: ${this.genre} \n`);
    }


}   