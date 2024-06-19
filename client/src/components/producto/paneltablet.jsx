import React from 'react'

import ImageTituloTituloTablet from './imagetitulotitulotablet.jsx'
import ProductoTablet from './productotablet.jsx'

export default function ProductoPanelTablet({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <ImageTituloTituloTablet proporcional={proporcional}/>
            <ProductoTablet proporcional={proporcional}/>
        </div>
    )
}