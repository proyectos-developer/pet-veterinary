import React from 'react'

import ImageTituloCell from './imagetitulocell.jsx'
import PostCell from './postcell.jsx'

export default function PostPanelCell({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <ImageTituloCell proporcional={proporcional}/>
            <PostCell proporcional={proporcional}/>
        </div>
    )
}