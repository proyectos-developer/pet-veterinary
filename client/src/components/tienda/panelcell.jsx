import React from 'react'

import ImageTituloCell from './imagetitulocell.jsx'
import TiendaCell from './tiendacell.jsx'

export default function NuestraTiendaPanelCell({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <ImageTituloCell proporcional={proporcional}/>
            <TiendaCell proporcional={proporcional}/>
        </div>
    )
}