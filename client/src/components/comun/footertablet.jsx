import React, { useState } from 'react'

import image_footer from '../../assets/images/image_footer_405.png'
import icono_logo from '../../assets/icono_logo_red_128.png'

import icono_facebook from '../../assets/iconos/icono_facebook_red_96.png'
import icono_tiktok from '../../assets/iconos/icono_tiktok_red_96.png'
import icono_instagram from '../../assets/iconos/icono_instagram_red_96.png'

import image_footer_00 from '../../assets/images/image_footer_150_00.png'
import image_footer_01 from '../../assets/images/image_footer_150_01.png'
import image_footer_02 from '../../assets/images/image_footer_150_02.png'
import image_footer_03 from '../../assets/images/image_footer_150_03.png'
import image_footer_04 from '../../assets/images/image_footer_150_04.png'
import image_footer_05 from '../../assets/images/image_footer_150_05.png'

import { useNavigate } from 'react-router-dom'

export default function FooterTablet({proporcional}) {

    const navigate = useNavigate()

    const [seleccion_menu, setSeleccionMenu] = useState('')
    const [seleccion_cuenta, setSeleccionCuenta] = useState('')

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional, paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                <div style={{width: '48%', height: 'auto'}}>
                    <div style={{width: '100%', height: 480 / proporcional, backgroundImage: `url(${image_footer})`, backgroundPosition: 'center', backgroundSize: 'cover', 
                            backgroundRepeat: 'no-repeat'}}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 64 / proporcional, marginBottom: 50 / proporcional}}>
                            <img src={icono_logo} style={{width: 64 / proporcional, height: 64 / proporcional, marginRight: 10 / proporcional}}/>
                            <p style={{fontSize: 40 / proporcional, lineHeight: `${64 / proporcional}px`, marginBottom: 0 / proporcional, color: 'red', cursor: 'default', fontWeight: 700, 
                                fontFamily: 'Open Sans, sans-serif'}}>
                                PET SHOP
                            </p>
                        </div>
                        <div className='d-flex justify-content-start' style={{width: '100%', height: 64 / proporcional, marginBottom: 50 / proporcional}}>
                            <p style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(143, 144, 147)', 
                                cursor: 'default', fontWeight: 500, fontFamily: 'Open Sans, sans-serif'}}>
                                PawFriends is a ready-to go basis for your site & a theme that’s sure to be your new best friend.
                            </p>
                        </div>
                        <div className='d-flex justify-content-start' style={{width: '100%', height: 64 / proporcional, marginBottom: 50 / proporcional}}>
                            <a href='https://www.facebook.com' target='_black'>
                                <img src={icono_facebook} style={{width: 48 / proporcional, height: 48 / proporcional, cursor: 'pointer', marginRight: 20 / proporcional}}/>
                            </a>
                            <a href='https://www.facebook.com' target='_black'>
                                <img src={icono_instagram} style={{width: 48 / proporcional, height: 48 / proporcional, cursor: 'pointer', marginRight: 20 / proporcional}}/>
                            </a>
                            <a href='https://www.facebook.com' target='_black'>
                                <img src={icono_tiktok} style={{width: 48 / proporcional, height: 48 / proporcional, cursor: 'pointer'}}/>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{width: '48%', height: 'auto', padding: 20 / proporcional}}>
                    <p style={{fontSize: 30 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 50 / proporcional, color: '#4a4a4a', 
                        cursor: 'default', fontWeight: 900, fontFamily: 'Nunito, sans-serif', wordWrap: 'break-word'}}>
                        Menú
                    </p>
                    <p style={{fontSize: 20 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 20 / proporcional, color: seleccion_menu === 'inicio' ? 'red' : '#8f9093', 
                        cursor: 'pointer', fontWeight: seleccion_menu === 'inicio' ? 700 : 500, fontFamily: 'Open Sans, sans-serif'}}
                        onMouseOver={() => setSeleccionMenu('inicio')} onMouseLeave={() => setSeleccionMenu('')}
                        onClick={() => navigate ('/')}>
                        Inicio
                    </p>
                    <p style={{fontSize: 20 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 20 / proporcional, color: seleccion_menu === 'nosotros' ? 'red' : '#8f9093', 
                        cursor: 'pointer', fontWeight: seleccion_menu === 'nosotros' ? 700 : 500, fontFamily: 'Open Sans, sans-serif'}}
                        onMouseOver={() => setSeleccionMenu('nosotros')} onMouseLeave={() => setSeleccionMenu('')}
                        onClick={() => navigate ('/')}>
                        Nosotros
                    </p>
                    <p style={{fontSize: 20 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 20 / proporcional, color: seleccion_menu === 'tienda' ? 'red' : '#8f9093', 
                        cursor: 'pointer', fontWeight: seleccion_menu === 'tienda' ? 700 : 500, fontFamily: 'Open Sans, sans-serif'}}
                        onMouseOver={() => setSeleccionMenu('tienda')} onMouseLeave={() => setSeleccionMenu('')}
                        onClick={() => navigate ('/')}>
                        Tienda
                    </p>
                    <p style={{fontSize: 20 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 20 / proporcional, color: seleccion_menu === 'blog' ? 'red' : '#8f9093', 
                        cursor: 'pointer', fontWeight: seleccion_menu === 'blog' ? 700 : 500, fontFamily: 'Open Sans, sans-serif'}}
                        onMouseOver={() => setSeleccionMenu('blog')} onMouseLeave={() => setSeleccionMenu('')}
                        onClick={() => navigate ('/')}>
                        Blog
                    </p>
                    <p style={{fontSize: 20 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 20 / proporcional, color: seleccion_menu === 'contacto' ? 'red' : '#8f9093', 
                        cursor: 'pointer', fontWeight: seleccion_menu === 'contacto' ? 700 : 500, fontFamily: 'Open Sans, sans-serif'}}
                        onMouseOver={() => setSeleccionMenu('contacto')} onMouseLeave={() => setSeleccionMenu('')}
                        onClick={() => navigate ('/')}>
                        Contáctanos
                    </p>
                </div>
            </div>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>

                <div style={{width: '48%', height: 'auto', padding: 20 / proporcional}}>
                    <p style={{fontSize: 30 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 50 / proporcional, color: '#4a4a4a', 
                        cursor: 'default', fontWeight: 900, fontFamily: 'Nunito, sans-serif', wordWrap: 'break-word'}}>
                        Mi cuenta
                    </p>
                    <p style={{fontSize: 20 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 20 / proporcional, color: seleccion_cuenta === 'pedido' ? 'red' : '#8f9093', 
                        cursor: 'pointer', fontWeight: seleccion_cuenta === 'pedido' ? 700 : 500, fontFamily: 'Open Sans, sans-serif'}}
                        onMouseOver={() => setSeleccionCuenta('pedido')} onMouseLeave={() => setSeleccionCuenta('')}
                        onClick={() => navigate ('/')}>
                        Seguir mi pedido
                    </p>
                    <p style={{fontSize: 20 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 20 / proporcional, color: seleccion_cuenta === 'terminos' ? 'red' : '#8f9093', 
                        cursor: 'pointer', fontWeight: seleccion_cuenta === 'terminos' ? 700 : 500, fontFamily: 'Open Sans, sans-serif'}}
                        onMouseOver={() => setSeleccionCuenta('terminos')} onMouseLeave={() => setSeleccionCuenta('')}
                        onClick={() => navigate ('/')}>
                        Términos y condiciones
                    </p>
                    <p style={{fontSize: 20 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 20 / proporcional, color: seleccion_cuenta === 'favoritos' ? 'red' : '#8f9093', 
                        cursor: 'pointer', fontWeight: seleccion_cuenta === 'favoritos' ? 700 : 500, fontFamily: 'Open Sans, sans-serif'}}
                        onMouseOver={() => setSeleccionCuenta('favoritos')} onMouseLeave={() => setSeleccionCuenta('')}
                        onClick={() => navigate ('/')}>
                        Mis favoritos
                    </p>
                    <p style={{fontSize: 20 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 20 / proporcional, color: seleccion_cuenta === 'comentarios' ? 'red' : '#8f9093', 
                        cursor: 'pointer', fontWeight: seleccion_cuenta === 'comentarios' ? 700 : 500, fontFamily: 'Open Sans, sans-serif'}}
                        onMouseOver={() => setSeleccionCuenta('comentarios')} onMouseLeave={() => setSeleccionCuenta('')}
                        onClick={() => navigate ('/')}>
                        Envíanos tus comentarios
                    </p>
                </div>

                <div style={{width: '48%', height: 'auto', padding: 20 / proporcional}}>
                    <p style={{fontSize: 30 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 50 / proporcional, color: '#4a4a4a', 
                        cursor: 'default', fontWeight: 900, fontFamily: 'Nunito, sans-serif', wordWrap: 'break-word'}}>
                        Instagram
                    </p>

                    <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                        <img src={image_footer_00} style={{width: '32%', height: '32%', borderTopLeftRadius: 8 / proporcional, marginRight: 10 / proporcional}}/>
                        <img src={image_footer_01} style={{width: '32%', height: '32%', marginRight: 10 / proporcional}}/>
                        <img src={image_footer_02} style={{width: '32%', height: '32%', borderBottomLeftRadius: 8 / proporcional}}/>
                    </div>

                    <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto', marginBottom: 10 / proporcional}}>
                        <img src={image_footer_03} style={{width: '32%', height: '32%', borderTopRightRadius: 8 / proporcional, marginRight: 10 / proporcional}}/>
                        <img src={image_footer_04} style={{width: '32%', height: '32%', marginRight: 10 / proporcional}}/>
                        <img src={image_footer_05} style={{width: '32%', height: '32%', borderBottomRightRadius: 8 / proporcional}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}