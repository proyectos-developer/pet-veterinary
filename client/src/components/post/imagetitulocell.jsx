import React from 'react'

import image_blog from '../../assets/images/image_blog_499.png'

export default function ImageTitulo({proporcional}) {

    return (
        <div style={{width: '100%', height: 600 / proporcional}}>
            <div className='position-relative' style={{width: '100%', height: 600 / proporcional}}>
                <div style={{width: '100%', height: 600 / proporcional, backgroundImage: `url(${image_blog})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                    
                </div>
                <div className='position-absolute top-0 start-0' style={{width: '100%', height: 600 / proporcional, background: 'rgba(39, 39, 39, 0.4)'}}/>
            </div>
        </div>
    )
}