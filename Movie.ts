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
        let director:string = this.director.printProfessional();
        let escritor:string = this.writer.printProfessional();
        let actores:string = "";
        for (let i=0; i<this.actors.length; i++)
        {
            actores += this.actors[i].printProfessional()
        }

        console.log(`TÍTULO: ${this.title} \n \nAÑO DE ESTRENO: ${this.releaseYear} \n \nActores: \n${actores} \n \nNACIONALIDAD: ${this.nationality} \nDIRECTOR: ${director} 
            \nESCRITOR: ${escritor} \nIDIOMA: ${this.language} \nPLATAFORMA: ${this.platform} \n¿ES DE MARVEL?: ${this.isMCU}\nPERSONAJE PRINCIPAL: ${this.mainCharacterName}
            \nPRODUCTOR: ${this.producer}\nDISTRIBUIDOR: ${this.distributor}\nGÉNERO: ${this.genre}\n \n \n `);
    }


}   