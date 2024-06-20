import React from 'react'

import ImageTituloTablet from './imagetitulotablet.jsx'
import BlogTablet from './blogtablet.jsx'

export default function BlogPanelTablet({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <ImageTituloTablet proporcional={proporcional}/>
            <BlogTablet proporcional={proporcional}/>
        </div>
    )
}