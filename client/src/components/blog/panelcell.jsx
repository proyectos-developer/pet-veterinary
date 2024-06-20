import React from 'react'

import ImageTituloCell from './imagetitulocell.jsx'
import BlogCell from './blogcell.jsx'

export default function BlogPanelCell({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <ImageTituloCell proporcional={proporcional}/>
            <BlogCell proporcional={proporcional}/>
        </div>
    )
}