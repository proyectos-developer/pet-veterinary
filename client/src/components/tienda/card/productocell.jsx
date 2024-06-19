import React, { useState } from 'react'

import icono_star from '../../../assets/iconos/icono_calificacion_yellow_96.png'
import icono_star_empty from '../../../assets/iconos/icono_calificacion_empty_yellow_96.png'

import icono_heart_red from '../../../assets/iconos/icono_heart_red_96.png'
import icono_view_red from '../../../assets/iconos/icono_view_red_96.png'

import icono_heart_white from '../../../assets/iconos/icono_heart_white_96.png'
import icono_view_white from '../../../assets/iconos/icono_view_white_96.png'
import { useNavigate } from 'react-router-dom'

export default function CardProductoCell({proporcional, opcion}) {

    const navigate = useNavigate()

    const [seleccion_producto, setSeleccionProducto] = useState(false)
    const [boton_carrito, setBotonCarrito] = useState (false)

    const [boton_favoritos, setBotonFavoritos] = useState(false)
    const [boton_view, setBotonView] = useState(false)

    return (
        <div className='shadow rounded' style={{width: '100%', height: 'auto'}}>
            <div style={{width: '100%',  height: 'auto'}}>
                <div className='position-relative' style={{width: '100%',  height: 300 / proporcional}}>
                    <div className='rounded-top' style={{width: '100%', height: 300 / proporcional, background: '#efefef'}}
                        onMouseOver={() => setSeleccionProducto(true)} onMouseLeave={() => setSeleccionProducto(false)}>
                        {
                            opcion !== 0 ? (
                                <div className='position-absolute' style={{width: 150 / proporcional, height: 60 / proporcional, 
                                    background: opcion === 1 ? 'rgba(165, 209, 195, 0.6)' : opcion === 2 ? 'rgba(215, 188, 163, 0.6)' : 'rgba(93, 55, 54, 0.6)', 
                                    top: 32 / proporcional, right: -20 / proporcional, borderRadius: 16 / proporcional}}>
                                    <p style={{fontSize: 24 / proporcional, lineHeight: `${60 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white', 
                                                cursor: 'default', fontWeight: 900, fontFamily: 'Amatic SC, sans-serif', textAlign: 'center'}}>
                                        NUEVO
                                    </p>
                                </div>
                            ) : null
                        }
                        {
                            seleccion_producto ? (
                                <div className='position-absolute top-50 start-50 translate-middle' style={{width: '80%', height: 60 / proporcional, 
                                    background: boton_carrito ? 'transparent' : 'red', borderRadius: 8 / proporcional, zIndex: 9999,
                                    cursor: 'pointer', border: '1px solid red'}}
                                    onMouseOver={() => setBotonCarrito(true)} onMouseLeave={() => setBotonCarrito(false)}>
                                    <p style={{fontSize: 20 / proporcional, lineHeight: `${60 / proporcional}px`, marginBottom: 0 / proporcional, color: boton_carrito ? 'red' : 'white', 
                                                fontWeight: 600, fontFamily: 'Open Sans, sans-serif', textAlign: 'center'}}>
                                        AGREGAR A CARRITO
                                    </p>
                                </div>
                            ) : null
                        }
                        {
                            seleccion_producto ? (
                                <div className='position-absolute bottom-0 start-50 translate-middle' style={{width: '100%', height: 32 / proporcional, zIndex: 9999}}>
                                    <div className='d-flex justify-content-center' style={{width: 'auto', height: 32 / proporcional}}>
                                        <img src={boton_favoritos ? icono_heart_white: icono_heart_red} 
                                            style={{width: 32 / proporcional, height: 32 / proporcional, padding: boton_favoritos ? 6 / proporcional : 0,
                                                cursor: 'pointer', background: boton_favoritos ? 'red' : 'transparent', marginRight: 20 / proporcional,
                                                borderTopRightRadius: 8 / proporcional, borderTopLeftRadius: 8 / proporcional}}
                                                onMouseOver={() => setBotonFavoritos(true)} onMouseLeave={() => setBotonFavoritos(false)}/>
                                        <img src={boton_view ? icono_view_white: icono_view_red} 
                                            style={{width: 32 / proporcional, height: 32 / proporcional, padding: boton_view ? 6 / proporcional : 0,
                                                cursor: 'pointer', background: boton_view ? 'red' : 'transparent',
                                                borderTopRightRadius: 8 / proporcional, borderTopLeftRadius: 8 / proporcional}}
                                                onClick={() => {navigate ('/producto/producto'); window.scrollTo(0, 0)}}
                                                onMouseOver={() => setBotonView(true)} onMouseLeave={() => setBotonView(false)}/>
                                    </div>
                                </div>
                            ) : null
                        }
                    </div>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', padding: 20 / proporcional}}>
                    <div style={{width: 'auto', height: 'auto'}}>
                        <p style={{fontSize: 24 / proporcional, lineHeight: `${28 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(66, 66, 66)', 
                                    cursor: 'default', fontWeight: 900, fontFamily: 'Nunito, sans-serif', textAlign: 'center'}}>
                            Nombre producto
                        </p>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                            <img src={icono_star} style={{width: 20 / proporcional, height: 20 / proporcional, marginRight: 5 / proporcional}}/>
                            <img src={icono_star} style={{width: 20 / proporcional, height: 20 / proporcional, marginRight: 5 / proporcional}}/>
                            <img src={icono_star} style={{width: 20 / proporcional, height: 20 / proporcional, marginRight: 5 / proporcional}}/>
                            <img src={icono_star_empty} style={{width: 20 / proporcional, height: 20 / proporcional, marginRight: 5 / proporcional}}/>
                            <img src={icono_star_empty} style={{width: 20 / proporcional, height: 20 / proporcional}}/>
                        </div>
                        <p style={{fontSize: 21 / proporcional, lineHeight: `${21 / proporcional}px`, marginBottom: 0 / proporcional, color: 'red', 
                                    cursor: 'default', fontWeight: 900, fontFamily: 'Nunito, sans-serif', textAlign: 'center'}}>
                            $58
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}