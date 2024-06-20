import React from 'react'

import ImageTitulo from './imagetitulo.jsx'
import Contacto from './contacto.jsx'

export default function ContactoPanel({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <ImageTitulo proporcional={proporcional}/>
            <Contacto proporcional={proporcional}/>
        </div>
    )
}