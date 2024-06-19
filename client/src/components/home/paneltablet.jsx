import React from 'react'

import SliderHomeTablet from './slidertablet.jsx'
import NosotrosOcasionTablet from './nosotrosocasiontablet.jsx'
import CuidadosTablet from './cuidadostablet.jsx'
import ConsultanosTablet from './consultanostablet.jsx'

export default function HomePanelTablet({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <SliderHomeTablet proporcional={proporcional}/>
            <NosotrosOcasionTablet proporcional={proporcional}/>
            <CuidadosTablet proporcional={proporcional}/>
            <ConsultanosTablet proporcional={proporcional}/>
        </div>
    )
}