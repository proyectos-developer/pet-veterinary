import React from 'react'

import CardProductoTablet from '../tienda/card/productotablet.jsx'

export default function ProductosRelacionadosTablet({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                <p style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 50 / proporcional, color: '#424242', cursor: 'default', 
                    fontWeight: 900, fontFamily: 'Nunito, sans-serif'}}>
                    Productos relacionados
                </p>
            </div>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                <div className='d-flex justify-content-center' style={{width: '48%', height: 'auto'}}>
                    <CardProductoTablet proporcional={proporcional} opcion={0}/>
                </div>
                <div className='d-flex justify-content-center' style={{width: '48%', height: 'auto'}}>
                    <CardProductoTablet proporcional={proporcional} opcion={0}/>
                </div>
            </div>
        </div>
    )
}