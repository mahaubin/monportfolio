import Projet from "./Projet"

export default interface Personne {
  nom: string
  prenom: string
  dateNaissance: string
  age:number
  telephone:string[]
  mail:string
  profession: string
  parcours: string[]
  technos: string[]
  projets: Projet[]
}
