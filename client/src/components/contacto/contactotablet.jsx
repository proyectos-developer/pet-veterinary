import React from 'react'

import image_00 from '../../assets/images/image_contactanos_v1_750.png'

export default function ContactoTablet({proporcional}) {
    
    return (
        <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
            <div style={{width: '48%', height: 'auto'}}>
                <img src={image_00} style={{width: '100%', height: 350 / proporcional}}/>
            </div>
            <div style={{width: '48%', height: 'auto'}}>
                
            </div>
        </div>
    )
}
