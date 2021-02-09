export class session{
  id:number
  nom:string
  date_debut:string
  date_fin:string
  plannig:string

  constructor (id:number,nom:string, date_debut:string, date_fin:string, plannig:string){
          this.id = id
          this.nom=nom
          this.date_debut=date_debut
          this.date_fin=date_fin
          this.plannig=plannig

      }
}
