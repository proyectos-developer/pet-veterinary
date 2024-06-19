import React from 'react'

import image_equipo from '../../../assets/images/image_equipo_499.png'

export default function ImageTituloCell({proporcional}) {

    return (
        <div style={{width: '100%', height: 600 / proporcional}}>
            <div className='position-relative' style={{width: '100%', height: 600 / proporcional}}>
                <div style={{width: '100%', height: 600 / proporcional, backgroundImage: `url(${image_equipo})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                    
                </div>
                <div className='position-absolute top-0 start-0' style={{width: '100%', height: 600 / proporcional, background: 'rgba(39, 39, 39, 0.4)'}}/>
            </div>
        </div>
    )
}