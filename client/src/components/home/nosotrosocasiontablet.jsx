import React from 'react'

import home_foto_00 from '../../assets/images/home_foto_480_00.png'
import home_foto_01 from '../../assets/images/home_foto_480_01.png'
import home_foto_02 from '../../assets/images/home_foto_960.png'

import image_huellas_digitales from '../../assets/images/image_huellas_digitales_480.png'

import SliderBodyTablet from './sliderbodytablet.jsx'

export default function NosotrosOcasionTablet({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>

            <div className='d-flex justify-content-between' style={{width: '100%', height: 400 / proporcional}}>
                <div className='position-relative' style={{width: '50%', height: 400 / proporcional}}>
                    <img src={home_foto_00} style={{width: '100%', height: 400 / proporcional}}/>
                    <div className='position-absolute top-0 start-0' style={{width: '100%', height: 400 / proporcional, background: 'rgba(39, 39, 39, 0.4)'}}/>
                </div>

                <div className='' style={{width: '50%', height: 400 / proporcional}}>
                    <SliderBodyTablet proporcional={proporcional}/>
                </div>
            </div>


            <div className='d-flex justify-content-between' style={{width: '100%', height: 400 / proporcional}}>
                <div className='' style={{width: '50%', height: 400 / proporcional, background: 'rgba(39, 39, 39, 0.2)'}}>
                    <img src={image_huellas_digitales} style={{width: '100%', height: 400 / proporcional, opacity: 0.6}}/>
                </div>
                
                <div className='position-relative' style={{width: '50%', height: 400 / proporcional}}>
                    <img src={home_foto_01} style={{width: '100%', height: 400 / proporcional}}/>
                    <div className='position-absolute top-0 start-0' style={{width: '100%', height: 400 / proporcional, background: 'rgba(39, 39, 39, 0.4)'}}/>
                </div>
            </div>

            <div className='position-relative' style={{width: '100%', height: 600 / proporcional}}>
                <img src={home_foto_02} style={{width: '100%', height: 600 / proporcional}}/>
                <div className='position-absolute top-0 start-0' style={{width: '100%', height: 600 / proporcional, background: 'rgba(39, 39, 39, 0.4)'}}/>
            </div>
        </div>
    )
}