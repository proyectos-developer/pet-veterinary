import React from 'react'

import FotoPrincipalTablet from './fotopricipaltablet.jsx'
import FotosSecundariasTablet from './fotossecundariastablet.jsx'
import DetallesTablet from './detallestablet.jsx'
import CaracteristicasTablet from './caracteristicastablet.jsx'
import ProductosRelacionadosTablet from './productosrelacionadostablet.jsx'

export default function ProductoTablet({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 120 / proporcional, paddingBottom: 120 / proporcional, 
            paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                <div style={{width: '74%', height: 'auto'}}>
                    <FotoPrincipalTablet proporcional={proporcional}/>
                </div>
                <div style={{width: '24%', height: 'auto'}}>
                    <FotosSecundariasTablet proporcional={proporcional}/>
                </div>
            </div>
            <div style={{width: '100%', height: 'auto'}}>
                <DetallesTablet proporcional={proporcional}/>
            </div>
            <div style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                <CaracteristicasTablet proporcional={proporcional}/>
            </div>
            <div style={{width: '100%', height: 'auto'}}>
                <ProductosRelacionadosTablet proporcional={proporcional}/>
            </div>
        </div>
    )
}