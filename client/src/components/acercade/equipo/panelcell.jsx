import React from 'react'

import ImageTituloCell from './imagetitulocell.jsx'
import ConoceEquipoCell from './conoceequipocell.jsx'
import NuestroEquipoCell from './nuestroequipocell.jsx'
import ComentariosCell from './comentarioscell.jsx'

export default function NuestroEquipoPanelCell({proporcional}) {
    
    return (
        <div style={{width: '100%', height: 'auto'}}>
            <ImageTituloCell proporcional={proporcional}/>
            <ConoceEquipoCell proporcional={proporcional}/>
            <NuestroEquipoCell proporcional={proporcional}/>
            <ComentariosCell proporcional={proporcional}/>
        </div>
    )
}