
export class Professional {

// declaracion de propiedades 
 public name : string;
 public age : number;
 public genre : string;
 public weigth : number;
 public height : number;
 public hairColor : string;
 public eyeColor : string;
 public race : string;
 public isRetired : boolean;
 public nationally : string;
 public oscarsNumbers : number;
 public profession : string;

 // constructor
    constructor(name:string, age:number, genre:string, weigth:number, height:number, hairColor:string, eyeColor:string, race:string, isRetired:boolean, nationally:string, oscarsNumbers:number, profession:string)
    {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this. weigth = weigth;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationally = nationally;
        this.oscarsNumbers = oscarsNumbers;
        this.profession = profession;
    }

// metotos
public printProfessional():string{
    return ("NOMBRE: " + this.name + "\n" + "EDAD: " + this.age + "\n" + "GENERO: " + this.genre + "\n" + "PESO: " +this.weigth + "\n" + "ALTURA: " + this.height + "\n" +
    "COLOR DE PELO: " + this.hairColor + "\n" + "COLOR DE OJOS: " + this.eyeColor + "\n" + "RAZA: " + this.race + "\n" + "ESTA RETIRADO: " + this.isRetired + "\n" +
    "NACIONALIDAD: "  + this.nationally + "\n" + "OSCARS: " + this.oscarsNumbers + "\n" + "PROFESION: " + this.profession + "\n" );
    }

}




