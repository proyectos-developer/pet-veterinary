import React from 'react'

import ImageTitulo from './imagetitulo.jsx'
import Tienda from './tienda.jsx'

export default function NuestraTiendaPanel({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <ImageTitulo proporcional={proporcional}/>
            <Tienda proporcional={proporcional}/>
        </div>
    )
}