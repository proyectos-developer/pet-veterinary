import React from 'react'

import CardProductoCell from '../tienda/card/productocell.jsx'

export default function ProductosRelacionadosCell({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                <p style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 50 / proporcional, color: '#424242', cursor: 'default', 
                    fontWeight: 900, fontFamily: 'Nunito, sans-serif'}}>
                    Productos relacionados
                </p>
            </div>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional}}>
                <CardProductoCell proporcional={proporcional} opcion={0}/>
            </div>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                <CardProductoCell proporcional={proporcional} opcion={0}/>
            </div>
        </div>
    )
}