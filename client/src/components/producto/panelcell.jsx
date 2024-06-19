import React from 'react'

import ImageTituloTituloCell from './imagetitulotitulocell.jsx'
import ProductoCell from './productocell.jsx'

export default function ProductoPanelCell({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <ImageTituloTituloCell proporcional={proporcional}/>
            <ProductoCell proporcional={proporcional}/>
        </div>
    )
}