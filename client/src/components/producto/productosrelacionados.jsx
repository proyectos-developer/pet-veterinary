import React from 'react'

import CardProducto from '../tienda/card/producto'

export default function ProductosRelacionados({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                <p style={{fontSize: 30 / proporcional, lineHeight: `${40 / proporcional}px`, marginBottom: 50 / proporcional, color: '#424242', cursor: 'default', 
                    fontWeight: 900, fontFamily: 'Nunito, sans-serif'}}>
                    Productos relacionados
                </p>
            </div>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                <div className='d-flex justify-content-center' style={{width: '24%', height: 'auto'}}>
                    <CardProducto proporcional={proporcional} opcion={0}/>
                </div>
                <div className='d-flex justify-content-center' style={{width: '24%', height: 'auto'}}>
                    <CardProducto proporcional={proporcional} opcion={0}/>
                </div>
                <div className='d-flex justify-content-center' style={{width: '24%', height: 'auto'}}>
                    <CardProducto proporcional={proporcional} opcion={0}/>
                </div>
                <div className='d-flex justify-content-center' style={{width: '24%', height: 'auto'}}>
                    <CardProducto proporcional={proporcional} opcion={0}/>
                </div>
            </div>
        </div>
    )
}