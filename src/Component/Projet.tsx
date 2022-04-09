import { useState } from 'react';

import '../Ressource/CSS/projet.css'

type ProjetProps={
    projects:{
        titre: string
        technos: string[]
        annee: number
        description: string
    }[]
}
export const Projet =(props:ProjetProps)=>{
    const [openBody, setOpenBody] = useState(true)

    const clickHeader = () => {
        setOpenBody(!openBody)
    }
    return(
        <div className="parcourContainer"> 
            <div 
                className="headerContainer"
                onClick={clickHeader}
            >
                <h2>Les projets</h2>
            </div>
            {
                openBody ?
                
                <div className="corp">
                {
                    props.projects.map((proj)=>{
                        return(
                            <div className="fond">
                                <h4> {proj.titre}</h4>
                                <div className='technoList'>
                                    {proj.technos.map((e) => (
                                    <span className='techno'>{e}</span>
                                        ))}
                                    en <span id='anne'>  {proj.annee}</span><br />
                                </div>
                                
                                <span>{proj.description}</span>
                            </div>
                        )
                    })
                }
            </div>

                : null
            }

            
        </div>
    )
}