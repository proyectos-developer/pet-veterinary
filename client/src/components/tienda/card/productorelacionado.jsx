import React from 'react'

export default function CardProductoRelacionado({proporcional}) {

    return (
        <div style={{width: '100%', height: 80 / proporcional, marginBottom: 20 / proporcional}}>
            <div className='d-flex' style={{width: '100%', height: 80 / proporcional}}>
                <div className='rounded' style={{width: 80 / proporcional, height: 80 / proporcional, background: '#bdbdbd', marginRight: 20 / proporcional}}/>
                <div style={{width: 'auto', height: 'auto'}}>
                    <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: '#4a4a4a', 
                                cursor: 'default', fontWeight: 700, fontFamily: 'Open Sans, sans-serif', textAlign: 'start'}}>
                        Nombre producto
                    </p>
                    <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'red', 
                                cursor: 'default', fontWeight: 700, fontFamily: 'Open Sans, sans-serif', textAlign: 'start'}}>
                        $ 120.00
                    </p>
                </div>
            </div>
        </div>
    )
}
