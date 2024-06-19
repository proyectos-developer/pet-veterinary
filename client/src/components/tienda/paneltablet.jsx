import React from 'react'

import ImageTituloTablet from './imagetitulotablet.jsx'
import TiendaTablet from './tiendatablet.jsx'

export default function NuestraTiendaPanelTablet({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <ImageTituloTablet proporcional={proporcional}/>
            <TiendaTablet proporcional={proporcional}/>
        </div>
    )
}