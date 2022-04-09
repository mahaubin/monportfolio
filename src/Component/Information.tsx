import "../Ressource/CSS/Information.css"

type InformationProps={
    nom:string,
    prenom:string
    dateNaissance:string
    age:number
    telephone:string[]
    mail:string
}

export const Information = (props:InformationProps)=>{ 
    return(
        <div className="contenuInfo">
            <div>
                { props.nom } { props.prenom } 
            </div>
            <div>
                { props.dateNaissance}  ({ props.age} ans) 
            </div>
            <div>
                { props.mail} 
            </div>
            <div>
                { props.telephone.map((s) => (
                <span className="separation">{s}</span>
                ))}
            </div>
            
        </div>
    )
}