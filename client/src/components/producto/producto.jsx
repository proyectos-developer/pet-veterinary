import React from 'react'

import FotoPrincipal from './fotopricipal.jsx'
import FotosSecundarias from './fotossecundarias.jsx'
import Detalles from './detalles.jsx'
import Caracteristicas from './caracteristicas.jsx'
import ProductosRelacionados from './productosrelacionados.jsx'

export default function Producto({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 120 / proporcional, paddingBottom: 120 / proporcional, paddingLeft: 150 / proporcional, paddingRight: 150 / proporcional}}>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                <div style={{width: '10%', height: 'auto'}}>
                    <FotosSecundarias proporcional={proporcional}/>
                </div>
                <div style={{width: '50%', height: 'auto'}}>
                    <FotoPrincipal proporcional={proporcional}/>
                </div>
                <div style={{width: '40%', height: 'auto'}}>
                    <Detalles proporcional={proporcional}/>
                </div>
            </div>
            <div style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                <Caracteristicas proporcional={proporcional}/>
            </div>
            <div style={{width: '100%', height: 'auto'}}>
                <ProductosRelacionados proporcional={proporcional}/>
            </div>
        </div>
    )
}