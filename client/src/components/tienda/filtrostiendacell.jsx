import React, { useState } from 'react'

import icono_facebook from '../../assets/iconos/icono_facebook_red_96.png'
import icono_instagram from '../../assets/iconos/icono_instagram_red_96.png'
import icono_tiktok from '../../assets/iconos/icono_tiktok_red_96.png'

import CardProductoRelacionadoCell from './card/productorelacionadocell.jsx'

export default function FiltrosTiendaTablet({proporcional}) {

    const [seleccion_tag, setSeleccionTag] = useState('')
    
    return (
        <div className='' style={{width: '100%', height: 'auto'}}>
            <div style={{width: '100%', height: 'auto', background: '#f7f7f5', padding: 20 / proporcional, marginBottom: 50 / proporcional}}>
                <div className='d-flex justify-content-center rounded' style={{width: '50%', height: 60 / proporcional, background: 'red', marginBottom: 20 / proporcional}}>
                    <p style={{fontSize: 24 / proporcional, lineHeight: `${60 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white', 
                                cursor: 'default', fontWeight: 900, fontFamily: 'Open Sans, sans-serif', textAlign: 'center'}}>
                        Categorías
                    </p>
                </div>
                <div style={{width: '100%', height: 'auto'}}>
                    <div className='d-flex' style={{width: '100%', height: 30 / proporcional, marginBottom: 20 / proporcional}}>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(66, 66, 66)', 
                                    cursor: 'default', fontWeight: 400, fontFamily: 'Open Sans, sans-serif', marginRight: 5 / proporcional}}>
                            Accesorios
                        </p>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(66, 66, 66)', 
                                    cursor: 'default', fontWeight: 400, fontFamily: 'Open Sans, sans-serif', marginRight: 5 / proporcional}}>
                            ...............................................
                        </p>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(66, 66, 66)', 
                                    cursor: 'default', fontWeight: 400, fontFamily: 'Open Sans, sans-serif'}}>
                            5
                        </p>
                    </div>
                    <div className='d-flex' style={{width: '100%', height: 30 / proporcional, marginBottom: 20 / proporcional}}>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(66, 66, 66)', 
                                    cursor: 'default', fontWeight: 400, fontFamily: 'Open Sans, sans-serif', marginRight: 5 / proporcional}}>
                            Gatos
                        </p>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(66, 66, 66)', 
                                    cursor: 'default', fontWeight: 400, fontFamily: 'Open Sans, sans-serif', marginRight: 5 / proporcional}}>
                            .......................................................
                        </p>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(66, 66, 66)', 
                                    cursor: 'default', fontWeight: 400, fontFamily: 'Open Sans, sans-serif'}}>
                            5
                        </p>
                    </div>
                    <div className='d-flex' style={{width: '100%', height: 30 / proporcional, marginBottom: 20 / proporcional}}>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(66, 66, 66)', 
                                    cursor: 'default', fontWeight: 400, fontFamily: 'Open Sans, sans-serif', marginRight: 5 / proporcional}}>
                            Ropa
                        </p>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(66, 66, 66)', 
                                    cursor: 'default', fontWeight: 400, fontFamily: 'Open Sans, sans-serif', marginRight: 5 / proporcional}}>
                            ........................................................
                        </p>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(66, 66, 66)', 
                                    cursor: 'default', fontWeight: 400, fontFamily: 'Open Sans, sans-serif'}}>
                            4
                        </p>
                    </div>
                    <div className='d-flex' style={{width: '100%', height: 30 / proporcional, marginBottom: 20 / proporcional}}>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(66, 66, 66)', 
                                    cursor: 'default', fontWeight: 400, fontFamily: 'Open Sans, sans-serif', marginRight: 5 / proporcional}}>
                            Perros
                        </p>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(66, 66, 66)', 
                                    cursor: 'default', fontWeight: 400, fontFamily: 'Open Sans, sans-serif', marginRight: 5 / proporcional}}>
                            ......................................................
                        </p>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(66, 66, 66)', 
                                    cursor: 'default', fontWeight: 400, fontFamily: 'Open Sans, sans-serif'}}>
                            3
                        </p>
                    </div>
                    <div className='d-flex' style={{width: '100%', height: 30 / proporcional, marginBottom: 20 / proporcional}}>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(66, 66, 66)', 
                                    cursor: 'default', fontWeight: 400, fontFamily: 'Open Sans, sans-serif', marginRight: 5 / proporcional}}>
                            Nutrición
                        </p>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(66, 66, 66)', 
                                    cursor: 'default', fontWeight: 400, fontFamily: 'Open Sans, sans-serif', marginRight: 5 / proporcional}}>
                            ..................................................
                        </p>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(66, 66, 66)', 
                                    cursor: 'default', fontWeight: 400, fontFamily: 'Open Sans, sans-serif'}}>
                            0
                        </p>
                    </div>
                    <div className='d-flex' style={{width: '100%', height: 30 / proporcional, marginBottom: 20 / proporcional}}>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(66, 66, 66)', 
                                    cursor: 'default', fontWeight: 400, fontFamily: 'Open Sans, sans-serif', marginRight: 5 / proporcional}}>
                            Juguetes
                        </p>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(66, 66, 66)', 
                                    cursor: 'default', fontWeight: 400, fontFamily: 'Open Sans, sans-serif', marginRight: 5 / proporcional}}>
                            ..................................................
                        </p>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(66, 66, 66)', 
                                    cursor: 'default', fontWeight: 400, fontFamily: 'Open Sans, sans-serif'}}>
                            1
                        </p>
                    </div>
                </div>
            </div>
            <div style={{width: '100%', height: 'auto', background: '#f7f7f5', padding: 20 / proporcional, marginBottom: 50 / proporcional}}>
                <div className='d-flex justify-content-start rounded' style={{width: '80%', height: 80 / proporcional, background: 'red', marginBottom: 20 / proporcional,
                    padding: 10 / proporcional, paddingLeft: 20 / proporcional}}>
                    <p style={{fontSize: 24 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white', 
                                cursor: 'default', fontWeight: 900, fontFamily: 'Open Sans, sans-serif', textAlign: 'start'}}>
                        Productos<br/>Relacionados
                    </p>
                </div>
                <div className='' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                    <CardProductoRelacionadoCell proporcional={proporcional}/>
                    <CardProductoRelacionadoCell proporcional={proporcional}/>
                    <CardProductoRelacionadoCell proporcional={proporcional}/>
                </div>
            </div>
            <div style={{width: '100%', height: 'auto', background: '#f7f7f5', padding: 20 / proporcional, marginBottom: 50 / proporcional}}>
                <div className='d-flex justify-content-center rounded' style={{width: '50%', height: 60 / proporcional, background: 'red', marginBottom: 20 / proporcional}}>
                    <p style={{fontSize: 24 / proporcional, lineHeight: `${60 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white', 
                                cursor: 'default', fontWeight: 900, fontFamily: 'Open Sans, sans-serif', textAlign: 'center'}}>
                        TAGS
                    </p>
                </div>
                <div className='' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                    <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 15 / proporcional}}>
                        <div style={{width: '49%', height: 'auto'}}>
                            <p style={{fontSize: 25 / proporcional, lineHeight: `${25 / proporcional}px`, marginBottom: 0 / proporcional, color: seleccion_tag === 'carrier' ? 'red' :'#424242', 
                                        cursor: 'pointer', fontWeight: 500, fontFamily: 'Open Sans, sans-serif', textAlign: 'center'}}
                                        onMouseOver={() => setSeleccionTag('carrier')} onMouseLeave={() => setSeleccionTag('')}>
                                CARRIER
                            </p>
                        </div>
                        <div className='d-flex justify-conten-center' style={{width: '2%', height: 'auto'}}>
                            <div style={{width: 2 / proporcional, height: 25 / proporcional, background: '#424242'}}/>
                        </div>
                        <div style={{width: '49%', height: 'auto'}}>
                            <p style={{fontSize: 25 / proporcional, lineHeight: `${25 / proporcional}px`, marginBottom: 0 / proporcional, color: seleccion_tag === 'collars' ? 'red' :'#424242', 
                                        cursor: 'pointer', fontWeight: 500, fontFamily: 'Open Sans, sans-serif', textAlign: 'center'}}
                                        onMouseOver={() => setSeleccionTag('collars')} onMouseLeave={() => setSeleccionTag('')}>
                                COLLARS
                            </p>
                        </div>
                    </div>
                    <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 15 / proporcional}}>
                        <div style={{width: '49%', height: 'auto'}}>
                            <p style={{fontSize: 25 / proporcional, lineHeight: `${25 / proporcional}px`, marginBottom: 0 / proporcional, color: seleccion_tag === 'healthy' ? 'red' :'#424242', 
                                        cursor: 'pointer', fontWeight: 500, fontFamily: 'Open Sans, sans-serif', textAlign: 'center'}}
                                        onMouseOver={() => setSeleccionTag('healthy')} onMouseLeave={() => setSeleccionTag('')}>
                                HEALTHY
                            </p>
                        </div>
                        <div className='d-flex justify-conten-center' style={{width: '2%', height: 'auto'}}>
                            <div style={{width: 2 / proporcional, height: 25 / proporcional, background: '#424242'}}/>
                        </div>
                        <div style={{width: '49%', height: 'auto'}}>
                            <p style={{fontSize: 25 / proporcional, lineHeight: `${25 / proporcional}px`, marginBottom: 0 / proporcional, color: seleccion_tag === 'leashes' ? 'red' :'#424242', 
                                        cursor: 'pointer', fontWeight: 500, fontFamily: 'Open Sans, sans-serif', textAlign: 'center'}}
                                        onMouseOver={() => setSeleccionTag('leashes')} onMouseLeave={() => setSeleccionTag('')}>
                                LEASHES
                            </p>
                        </div>
                    </div>
                    <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 15 / proporcional}}>
                        <div style={{width: '49%', height: 'auto'}}>
                            <p style={{fontSize: 25 / proporcional, lineHeight: `${25 / proporcional}px`, marginBottom: 0 / proporcional, color: seleccion_tag === 'narture' ? 'red' :'#424242', 
                                        cursor: 'pointer', fontWeight: 500, fontFamily: 'Open Sans, sans-serif', textAlign: 'center'}}
                                        onMouseOver={() => setSeleccionTag('narture')} onMouseLeave={() => setSeleccionTag('')}>
                                NARTURE
                            </p>
                        </div>
                        <div className='d-flex justify-conten-center' style={{width: '2%', height: 'auto'}}>
                            <div style={{width: 2 / proporcional, height: 25 / proporcional, background: '#424242'}}/>
                        </div>
                        <div style={{width: '49%', height: 'auto'}}>
                            <p style={{fontSize: 25 / proporcional, lineHeight: `${25 / proporcional}px`, marginBottom: 0 / proporcional, color: seleccion_tag === 'pillows' ? 'red' :'#424242', 
                                        cursor: 'pointer', fontWeight: 500, fontFamily: 'Open Sans, sans-serif', textAlign: 'center'}}
                                        onMouseOver={() => setSeleccionTag('pillows')} onMouseLeave={() => setSeleccionTag('')}>
                                PILLOWS
                            </p>
                        </div>
                    </div>
                    <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 15 / proporcional}}>
                        <div style={{width: '49%', height: 'auto'}}>
                            <p style={{fontSize: 25 / proporcional, lineHeight: `${25 / proporcional}px`, marginBottom: 0 / proporcional, color: seleccion_tag === 'supplies' ? 'red' :'#424242', 
                                        cursor: 'pointer', fontWeight: 500, fontFamily: 'Open Sans, sans-serif', textAlign: 'center'}}
                                        onMouseOver={() => setSeleccionTag('supplies')} onMouseLeave={() => setSeleccionTag('')}>
                                SUPPLIES
                            </p>
                        </div>
                        <div className='d-flex justify-conten-center' style={{width: '2%', height: 'auto'}}>
                            <div style={{width: 2 / proporcional, height: 25 / proporcional, background: '#424242'}}/>
                        </div>
                        <div style={{width: '49%', height: 'auto'}}>
                            <p style={{fontSize: 25 / proporcional, lineHeight: `${25 / proporcional}px`, marginBottom: 0 / proporcional, color: seleccion_tag === 'tools' ? 'red' :'#424242', 
                                        cursor: 'pointer', fontWeight: 500, fontFamily: 'Open Sans, sans-serif', textAlign: 'center'}}
                                        onMouseOver={() => setSeleccionTag('tools')} onMouseLeave={() => setSeleccionTag('')}>
                                TOOLS
                            </p>
                        </div>
                    </div>
                    <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 15 / proporcional}}>
                        <div style={{width: '49%', height: 'auto'}}>
                            <p style={{fontSize: 25 / proporcional, lineHeight: `${25 / proporcional}px`, marginBottom: 0 / proporcional, color: seleccion_tag === 'toys' ? 'red' :'#424242', 
                                        cursor: 'pointer', fontWeight: 500, fontFamily: 'Open Sans, sans-serif', textAlign: 'center'}}
                                        onMouseOver={() => setSeleccionTag('toys')} onMouseLeave={() => setSeleccionTag('')}>
                                TOYS
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div style={{width: '100%', height: 'auto', background: '#f7f7f5', padding: 20 / proporcional, marginBottom: 50 / proporcional}}>
                <div className='d-flex justify-content-center rounded' style={{width: '50%', height: 60 / proporcional, background: 'red', marginBottom: 20 / proporcional}}>
                    <p style={{fontSize: 24 / proporcional, lineHeight: `${60 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white', 
                                cursor: 'default', fontWeight: 900, fontFamily: 'Open Sans, sans-serif', textAlign: 'center'}}>
                        SOCIAL
                    </p>
                </div>
                <div className='d-flex' style={{width: '100%', height: 'auto'}}>
                    <img src={icono_facebook} style={{width: 20 / proporcional, height: 20 / proporcional, marginRight: 10 / proporcional}}/>
                    <img src={icono_instagram} style={{width: 20 / proporcional, height: 20 / proporcional, marginRight: 10 / proporcional}}/>
                    <img src={icono_tiktok} style={{width: 20 / proporcional, height: 20 / proporcional}}/>
                </div>
            </div>
        </div>
    )
}