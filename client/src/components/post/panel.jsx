import React from 'react'

import ImageTitulo from './imagetitulo.jsx'
import Post from './post.jsx'

export default function PostPanel({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <ImageTitulo proporcional={proporcional}/>
            <Post proporcional={proporcional}/>
        </div>
    )
}