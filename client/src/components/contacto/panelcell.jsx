import React from 'react'

import ImageTituloCell from './imagetitulocell.jsx'
import ContactoCell from './contactocell.jsx'

export default function ContactoPanelCell({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <ImageTituloCell proporcional={proporcional}/>
            <ContactoCell proporcional={proporcional}/>
        </div>
    )
}