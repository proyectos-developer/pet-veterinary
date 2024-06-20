import React from 'react'

import ImageTituloTablet from './imagetitulotablet.jsx'
import PostTablet from './posttablet.jsx'

export default function PostPanelTablet({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <ImageTituloTablet proporcional={proporcional}/>
            <PostTablet proporcional={proporcional}/>
        </div>
    )
}