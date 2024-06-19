import React, { useState } from 'react'

import icono_star from '../../assets/iconos/icono_calificacion_yellow_96.png'
import icono_empty_star from '../../assets/iconos/icono_calificacion_empty_yellow_96.png'
import icono_huella from '../../assets/iconos/icono_huella_red_96.png'

import { useNavigate } from 'react-router-dom'

export default function DetallesTablet({proporcional}) {

    const navigate = useNavigate()

    const [cantidad, setCantidad] = useState('')
    const [boton_carrito, setBotonCarrito] = useState(false)

    return (
        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 25 / proporcional}}>
            <div style={{width: '100%', height: '100%'}}>
                <div style={{width: '100%', height: 'auto'}}>
                    <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                        <p style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 0 / proporcional, color: '#424242', cursor: 'default', 
                            fontWeight: 900, fontFamily: 'Open Sans, sans-serif'}}>
                            Nombre producto
                        </p>
                    </div>
                    <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto'}}>
                        <div className='d-flex' 
                            style={{width: 'auto', height: 26 / proporcional, marginTop: 2 / proporcional, marginBottom: 2 / proporcional, marginRight: 10 / proporcional}}>
                            <img src={icono_star} style={{width: 22 / proporcional, height: 22 / proporcional, marginRight: 15 / proporcional}}/>
                            <img src={icono_star} style={{width: 22 / proporcional, height: 22 / proporcional, marginRight: 15 / proporcional}}/>
                            <img src={icono_star} style={{width: 22 / proporcional, height: 22 / proporcional, marginRight: 15 / proporcional}}/>
                            <img src={icono_empty_star} style={{width: 22 / proporcional, height: 22 / proporcional, marginRight: 15 / proporcional}}/>
                            <img src={icono_empty_star} style={{width: 22 / proporcional, height: 22 / proporcional}}/>
                        </div>
                        <div style={{width: 'auto', height: 'auto', cursor: 'pointer', marginBottom: 20 / proporcional}} onClick={() => navigate ('/comentarios')}>
                            <p style={{fontSize: 20 / proporcional, lineHeight: `${26 / proporcional}px`, marginBottom: 0 / proporcional, color: '#424242', 
                                    fontWeight: 500, fontFamily: 'Open Sans, sans-serif'}}>
                                (1 calificación de cliente)
                            </p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                        <div style={{width: 'auto', height: 'auto', marginRight: 10 / proporcional}}>
                            <p style={{fontSize: 24 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(190, 190, 190)', cursor: 'default', 
                                fontWeight: 900, fontFamily: 'Open Sans, sans-serif', textDecoration: 'line-through'}}>
                                $34
                            </p>
                        </div>
                        <div style={{width: 'auto', height: 'auto'}}>
                            <p style={{fontSize: 24 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'red', cursor: 'default', 
                                fontWeight: 900, fontFamily: 'Open Sans, sans-serif', textDecoration: 'line-through'}}>
                                $29
                            </p>
                        </div>
                    </div>
                    <div style={{width: 'auto', height: 'auto', marginBottom: 50 / proporcional}}>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(143, 144, 147)', cursor: 'default', 
                            fontWeight: 400, fontFamily: 'Open Sans, sans-serif',}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio ut sem nulla pharetra diam.
                        </p>
                    </div>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                        <div style={{width: '50%', height: 60 / proporcional}}>
                            <input 
                                type='number'
                                className='form-control'
                                style={{width: '90%', height: 60 / proporcional, fontSize: 18 / proporcional, color: 'rgb(66, 66, 66)', fontWeight: 400}}
                                value={cantidad}
                                onChange={(event) => setCantidad(event.target.value)}
                                id='cantidad'
                                placeholder='Cantidad'/>
                        </div>
                        <div className='d-flex justify-content-center' style={{width: '50%', height: 60 / proporcional}}>
                            <button className='btn rounded' style={{width: '90%', height: 60 / proporcional, background: boton_carrito ? 'white' : 'red', fontSize: 20 / proporcional, fontWeight: 600, 
                                    color: boton_carrito ? 'red' :'white', border: '1px solid red'}}
                                    onMouseOver={() => setBotonCarrito (true)} onMouseLeave={() => setBotonCarrito(false)}>
                                Agregar a carrito
                            </button>
                        </div>
                    </div>
                    <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional, cursor: 'pointer'}}>
                        <p style={{fontSize: 26 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0 / proporcional, color: 'red', 
                            fontWeight: 600, fontFamily: 'Open Sans, sans-serif', marginRight: 10 / proporcional}}>
                            Agregar a lista de favoritos
                        </p>
                        <img src={icono_huella} style={{width: 32 / proporcional, height: 32 / proporcional, margin: 2 / proporcional}}/>
                    </div>
                    <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(66, 66, 66);', 
                            fontWeight: 400, fontFamily: 'Open Sans, sans-serif', marginRight: 30 / proporcional}}>
                            SKU:
                        </p>
                        <p style={{fontSize: 25 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'red', 
                            fontWeight: 400, fontFamily: 'Open Sans, sans-serif',}}>
                            23784
                        </p>
                    </div>
                    <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(66, 66, 66);', 
                            fontWeight: 400, fontFamily: 'Open Sans, sans-serif', marginRight: 30 / proporcional}}>
                            CATEGORÍA:
                        </p>
                        <p style={{fontSize: 25 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'red', 
                            fontWeight: 400, fontFamily: 'Open Sans, sans-serif',}}>
                            Perros
                        </p>
                    </div>
                    <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto'}}>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(66, 66, 66);', 
                            fontWeight: 400, fontFamily: 'Open Sans, sans-serif', marginRight: 30 / proporcional}}>
                            TAG:
                        </p>
                        <p style={{fontSize: 25 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'red', 
                            fontWeight: 400, fontFamily: 'Open Sans, sans-serif',}}>
                            Supplies
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}