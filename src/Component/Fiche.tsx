import '../Ressource/CSS/Fiche.css'
import photo from "../Ressource/image/image.jpg"; 

type FicheProps={
    travaille:string
}

export const Fiche = (props:FicheProps)=>{ 
    return(
        <div className="contenuFiche">
            <div className="image">
                <img  src={photo} alt="profil" width="300px"/>
            </div>
            <div>
                <h2>{props.travaille}</h2>
            </div>
            
        </div>
    )
}