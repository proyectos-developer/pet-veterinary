import React from 'react'

import ImageTituloCell from './imagetitulocell.jsx'
import NecesitaMascotaCell from './necesitamascotacell.jsx'
import EncuentranosCell from './encuentranoscell.jsx'

export default function SobreNosotrosPanelCell({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <ImageTituloCell proporcional={proporcional}/> 
            <NecesitaMascotaCell proporcional={proporcional}/>
            <EncuentranosCell proporcional={proporcional}/>
        </div>
    )
}