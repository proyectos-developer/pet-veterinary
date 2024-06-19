import React from 'react'

import image_comentarios from '../../../assets/images/image_comentarios_960.png'

import icono_light from '../../../assets/iconos/icono_light_white_96.png'
import icono_hueso from '../../../assets/iconos/icono_hueso_white_96.png'

export default function ComentariosTablet({proporcional}) {

    return (
        <div style={{width: '100%', height: 600 / proporcional}}>
            <div className='d-flex justify-conent-between' style={{width: '100%', height: 600 / proporcional}}>
                <div style={{width: '50%', height: 600 / proporcional, background: '#ff0000'}}>
                    <div className='position-relative' style={{width: '100%', height: 600 / proporcional}}>
                        <div className='position-absolute' style={{top: 48 / proporcional, left: 48 / proporcional, width: 64 / proporcional, height: 64 / proporcional}}>
                            <img src={icono_hueso} style={{width: 64 / proporcional, height: 64 / proporcional}}/>
                        </div>
                        <div className='position-absolute' style={{top: 48 / proporcional, right: 48 / proporcional, width: 64 / proporcional, height: 64 / proporcional}}>
                            <img src={icono_light} style={{width: 64 / proporcional, height: 64 / proporcional}}/>
                        </div>
                    </div>
                </div>

                <div style={{width: '50%', height: 600 / proporcional}}>
                    <div className='position-relative' style={{width: '100%', height: 600 / proporcional}}>
                        <img src={image_comentarios} style={{width: '100%', height: 600 / proporcional}}/>
                        <div className='position-absolute top-0 start-0' 
                            style={{width: '100%', height: 600 / proporcional, background: 'rgba(39, 39, 39, 0.6)'}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}