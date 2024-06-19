import React from 'react'

import FotoPrincipalCell from './fotopricipalcell.jsx'
import FotosSecundariasCell from './fotossecundariascell.jsx'
import DetallesCell from './detallescell.jsx'
import CaracteristicasCell from './caracteristicascell.jsx'
import ProductosRelacionadosCell from './productosrelacionadoscell.jsx'

export default function ProductoCell({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 120 / proporcional, paddingBottom: 120 / proporcional, 
            paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
            <div style={{width: '100%', height: 'auto'}}>
                <FotoPrincipalCell proporcional={proporcional}/>
            </div>
            <div style={{width: '100%', height: 'auto'}}>
                <FotosSecundariasCell proporcional={proporcional}/>
            </div>
            <div style={{width: '100%', height: 'auto'}}>
                <DetallesCell proporcional={proporcional}/>
            </div>
            <div style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                <CaracteristicasCell proporcional={proporcional}/>
            </div>
            <div style={{width: '100%', height: 'auto'}}>
                <ProductosRelacionadosCell proporcional={proporcional}/>
            </div>
        </div>
    )
}