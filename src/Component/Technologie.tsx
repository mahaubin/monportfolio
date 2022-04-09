import { useState } from 'react';

type TechnoProps={
    techno:string[]
}
export const Technologie = (props:TechnoProps) =>{
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
                <h2>Technologies</h2>
            </div>
            {
                openBody ?
                <div className="ecole">
                    { props.techno.map((tec) => (
                    <div className="itemes">{tec}</div>
                    ))}
                </div>
                : null
            }

            
            
        </div>
    )
}