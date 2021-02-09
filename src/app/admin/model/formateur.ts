export class formateur {
  id :number
  numcin:number
  nom :String
  prenom : string
  email : string
  mdp : string
  cv : string
  specialite : string
  tarifhorraire : number
  numtlf : number
  photo : string

  constructor(id :number, numcin:number, nom :String, prenom : string, email:string, mdp:string, cv:string, specialite:string, tarifhorraire:number, numtlf:number, photo:string){
    this.id = id
    this.numcin = numcin
    this.nom = nom
    this.prenom = prenom
    this.email = email
    this.mdp = mdp
    this.cv = cv
    this.specialite = specialite
    this.tarifhorraire = tarifhorraire
    this.numtlf = numtlf
    this.photo = photo
  }

}
