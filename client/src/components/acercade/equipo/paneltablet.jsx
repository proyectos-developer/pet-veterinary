import React from 'react'

import ImageTituloTablet from './imagetitulotablet.jsx'
import ConoceEquipoTablet from './conoceequipotablet.jsx'
import NuestroEquipoTablet from './nuestroequipotablet.jsx'
import ComentariosTablet from './comentariostablet.jsx'

export default function NuestroEquipoPanelTablet({proporcional}) {
    
    return (
        <div style={{width: '100%', height: 'auto'}}>
            <ImageTituloTablet proporcional={proporcional}/>
            <ConoceEquipoTablet proporcional={proporcional}/>
            <NuestroEquipoTablet proporcional={proporcional}/>
            <ComentariosTablet proporcional={proporcional}/>
        </div>
    )
}