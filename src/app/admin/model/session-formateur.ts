export class sessionFormateur{
  cin_formateur:number
  nom_formateur:string
  id_session:number
  nom_session:string

  constructor (cin_formateur:number, nom_formateur:string, id_session:number, nom_session:string){
          this.cin_formateur=cin_formateur
          this.nom_formateur=nom_formateur
          this.id_session=id_session
          this.nom_session=nom_session

      }
}
