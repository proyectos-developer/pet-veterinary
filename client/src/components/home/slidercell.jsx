import React, { useState } from 'react'

import image_00 from '../../assets/images/home_slider_1920_00.png'
import image_01 from '../../assets/images/home_slider_1920_01.png'
import image_02 from '../../assets/images/home_slider_1920_02.png'
import image_03 from '../../assets/images/home_slider_1920_03.png'

import icono_left from '../../assets/iconos/icono_carousel_left_white_96.png'
import icono_right from '../../assets/iconos/icono_carousel_right_white_96.png'

export default function SliderHomeCell({proporcional}) {

    const [seleccion_arrow, setSeleccionArrow] = useState('')

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div id="carouselSliderHome" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval='3000'>
                        <div className='position-relative' style={{width: '100%', height: 1000 / proporcional, backgroundImage: `url(${image_00})`, backgroundSize: 'cover', backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat' }}>
                            <div style={{width: '100%', height: '100%', background: 'rgba(39, 39, 39, 0.5)'}}/>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval='3000'>
                        <div className='position-relative' style={{width: '100%', height: 1000 / proporcional, backgroundImage: `url(${image_01})`, backgroundSize: 'cover', backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat' }}>
                            <div style={{width: '100%', height: '100%', background: 'rgba(39, 39, 39, 0.5)'}}/>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval='3000'>
                        <div className='position-relative' style={{width: '100%', height: 1000 / proporcional, backgroundImage: `url(${image_02})`, backgroundSize: 'cover', backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat' }}>
                            <div style={{width: '100%', height: '100%', background: 'rgba(39, 39, 39, 0.5)'}}/>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval='3000'>
                        <div className='position-relative' style={{width: '100%', height: 1000 / proporcional, backgroundImage: `url(${image_03})`, backgroundSize: 'cover', backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat' }}>
                            <div style={{width: '100%', height: '100%', background: 'rgba(39, 39, 39, 0.5)'}}/>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselSliderHome" data-bs-slide="prev">
                    <img className='rounded-pill' onMouseOver={() => setSeleccionArrow('left')} onMouseLeave={() => setSeleccionArrow('')}
                        src={icono_left} 
                        style={{width: 64 / proporcional, height: 64 / proporcional, background: seleccion_arrow === 'left' ? 'red' : 'transparent', 
                                padding: seleccion_arrow === 'left' ? 10 / proporcional : 0}}/>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselSliderHome" data-bs-slide="next">
                    <img className='rounded-pill' onMouseOver={() => setSeleccionArrow('right')} onMouseLeave={() => setSeleccionArrow('')}
                        src={icono_right} 
                        style={{width: 64 / proporcional, height: 64 / proporcional, background: seleccion_arrow === 'right' ? 'red' : 'transparent', 
                                padding: seleccion_arrow === 'right' ? 10 / proporcional : 0}}/>
                </button>
            </div>
        </div>
    )
}