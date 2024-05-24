import React from 'react'

import ImageTitulo from './imagetitulo.jsx'

export default function NuestraTiendaPanelTablet({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <ImageTitulo proporcional={proporcional}/>
        </div>
    )
}