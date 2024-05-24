import React from 'react'

import ImageTitulo from './imagetitulo.jsx'
import ConoceEquipo from './conoceequipo.jsx'
import NuestroEquipo from './nuestroequipo.jsx'
import Comentarios from './comentarios.jsx'

export default function NuestroEquipoPanel({proporcional}) {
    
    return (
        <div style={{width: '100%', height: 'auto'}}>
            <ImageTitulo proporcional={proporcional}/>
            <ConoceEquipo proporcional={proporcional}/>
            <NuestroEquipo proporcional={proporcional}/>
            <Comentarios proporcional={proporcional}/>
        </div>
    )
}