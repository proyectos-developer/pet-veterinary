import React from 'react'

import ImageTitulo from './imagetitulo.jsx'
import Producto from './producto.jsx'

export default function ProductoPanel({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <ImageTitulo proporcional={proporcional}/>
            <Producto proporcional={proporcional}/>
        </div>
    )
}