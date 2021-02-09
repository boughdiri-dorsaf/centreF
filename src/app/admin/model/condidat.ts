export class Condidat {

  id :number
  numcin:number
  nom :String
  prenom : string
  email : string
  photo : string
  cv : string
  mdp : string

  constructor(id :number, numcin:number, nom :String, prenom : string, email:string, mdp:string, cv:string, photo:string){
    this.id = id
    this.numcin = numcin
    this.nom = nom
    this.prenom = prenom
    this.email = email
    this.photo = photo
    this.cv = cv
    this.mdp = mdp
  }

}
