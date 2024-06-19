import React from 'react'

import SliderHomeCell from './slidercell.jsx'
import NosotrosOcasionCell from './nosotrosocasioncell.jsx'
import CuidadosCell from './cuidadoscell.jsx'
import ConsultanosCell from './consultanoscell.jsx'

export default function HomePanel({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <SliderHomeCell proporcional={proporcional}/>
            <NosotrosOcasionCell proporcional={proporcional}/>
            <CuidadosCell proporcional={proporcional}/>
            <ConsultanosCell proporcional={proporcional}/>
        </div>
    )
}