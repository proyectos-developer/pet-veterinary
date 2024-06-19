import React from 'react'

import image_shop from '../../assets/images/image_shop_991.png'

export default function ImageTituloTablet({proporcional}) {

    return (
        <div style={{width: '100%', height: 800 / proporcional}}>
            <div className='position-relative' style={{width: '100%', height: 800 / proporcional}}>
                <div style={{width: '100%', height: 800 / proporcional, backgroundImage: `url(${image_shop})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                    
                </div>
                <div className='position-absolute top-0 start-0' style={{width: '100%', height: 800 / proporcional, background: 'rgba(39, 39, 39, 0.4)'}}/>
            </div>
        </div>
    )
}