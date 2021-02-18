

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
        console.log(this);
    }


}   