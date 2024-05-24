import React from 'react'

import SliderHome from './slider.jsx'
import NosotrosOcasion from './nosotrosocasion.jsx'
import Cuidados from './cuidados.jsx'
import Consultanos from './consultanos.jsx'

export default function HomePanel({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <SliderHome proporcional={proporcional}/>
            <NosotrosOcasion proporcional={proporcional}/>
            <Cuidados proporcional={proporcional}/>
            <Consultanos proporcional={proporcional}/>
        </div>
    )
}