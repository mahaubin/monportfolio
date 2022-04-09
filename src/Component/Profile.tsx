import '../model/Personne'
import Personne from '../model/Personne'

import '../Ressource/CSS/profile.css'
import { Fiche } from './Fiche'
import { Information } from './Information'
import { Parcour } from './Parcour'
import { Projet } from './Projet'
import { Technologie } from './Technologie'


const prsn: Personne = {
    nom: 'RAKOTOVAHINY',
    prenom: 'Maha Aubin',
    dateNaissance: '14/03/1994',
    age:28,
    telephone:[
      "0325968293",
      "0344473547"
    ],
    mail:"mahaubin@gmail.com",
    parcours: [
      'IST-Diégo',
      'Saint Garbiel'
    ],
    profession: 'Développeur Web FullStack',
    projets: [
      {
        annee: 2015,
        description: "Site qui permet aux étudiants de s'inscrire à l'université de Majunga",
        technos: ["PHP","HTML & CSS"],
        titre: "Conception d'un site web d'inscription en ligne de l'université de Mahajanga"
      },
      {
        annee: 2021,
        description: "Enregistre les achats et ventes et aussi l'envoyer dans Dolibarr en ligne ",
        technos: ["Flutter"],
        titre: "Développement d'application de journal sur terrain"
      },
    ],
    technos: ['React', 'PHP',"Bootstrap 3","HTML 5 & CSS3"]
  }




export const Profile = () =>{
    return(
        <div className='container'>
          <div className="ligne1">
            <Fiche travaille={prsn.profession}/>
            <Information 
                nom={prsn.nom} 
                prenom={prsn.prenom} 
                dateNaissance={prsn.dateNaissance} 
                age={prsn.age}
                telephone={prsn.telephone}
                mail={prsn.mail}
            />
          </div>
            
            <Parcour prcr={prsn.parcours}/>
            <Technologie techno={prsn.technos}/>
            <Projet projects={prsn.projets}/>
        </div>
    )
}