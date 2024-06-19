import React from 'react'

import ImageTituloTablet from './imagetitulotablet.jsx'
import NecesitaMascotaTablet from './necesitamascotatablet.jsx'
import EncuentranosTablet from './encuentranostablet.jsx'

export default function SobreNosotrosPanelTablet({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <ImageTituloTablet proporcional={proporcional}/> 
            <NecesitaMascotaTablet proporcional={proporcional}/>
            <EncuentranosTablet proporcional={proporcional}/>
        </div>
    )
}