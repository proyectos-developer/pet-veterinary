import React from 'react'

import ImageTitulo from './imagetitulo.jsx'
import Blog from './blog.jsx'

export default function BlogPanel({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <ImageTitulo proporcional={proporcional}/>
            <Blog proporcional={proporcional}/>
        </div>
    )
}