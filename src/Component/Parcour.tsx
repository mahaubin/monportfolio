import { useState } from 'react';

import '../Ressource/CSS/parcour.css'

type ParcourProps={
    prcr:string[]
}
export const Parcour = (props:ParcourProps)=>{ 
    const [openBody, setOpenBody] = useState(true)

    const clickHeader = () => {
        setOpenBody(!openBody)
    }
    return(
        <div className='parcourContainer'>
            <div 
                className='headerContainer'
                onClick={clickHeader}
            >
                <h2>Parcours Académiques</h2>
            </div>
            {
                openBody ?
                <div className='ecole'>
                    {props.prcr.map((e) => (
                    <div className='itemes'>{e}</div>
                    ))}
                </div>
                : null
            }
            
            
        </div>
    )
}