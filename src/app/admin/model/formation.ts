export class formation{
    id:number;
    titre:string;
    description :string;
    chargehorraire:number
    programme:string;
    niveau:string
    tags:String;

    constructor(id:number,titre:string, description :string, chargehorraire:number, programme:string, niveau:string, tags:String){
      this.id=id
      this.titre=titre
      this.description=description;
      this.chargehorraire=chargehorraire;
      this.programme=programme;
      this.niveau=niveau;
      this.tags=tags;
    }
}
