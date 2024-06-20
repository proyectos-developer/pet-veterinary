import React from 'react'

import ImageTituloTablet from './imagetitulotablet.jsx'
import ContactoTablet from './contactotablet.jsx'

export default function ContactoPanelTablet({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <ImageTituloTablet proporcional={proporcional}/>
            <ContactoTablet proporcional={proporcional}/>
        </div>
    )
}