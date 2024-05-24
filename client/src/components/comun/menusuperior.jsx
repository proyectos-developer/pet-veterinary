import React, { useState } from 'react'

import icono_search from '../../assets/iconos/icono_search_white_96.png'
import icono_heart from '../../assets/iconos/icono_heart_white_96.png'
import icono_shop from '../../assets/iconos/icono_shop_white_96.png'
import icono_menu from '../../assets/iconos/icono_menu_dots_white_96.png'

import icono_comments from '../../assets/iconos/icono_comments_white_96.png'
import icono_location from '../../assets/iconos/icono_location_white_96.png'
import icono_phone from '../../assets/iconos/icono_phone_white_96.png'
import icono_camera from '../../assets/iconos/icono_camera_white_96.png'

import icono_logo from '../../assets/icono_logo_white_128.png'

import {useLocation, useNavigate} from 'react-router-dom'

export default function MenuSuperior({proporcional}) {

    const navigate = useNavigate()
    const location = useLocation()

    const [seleccion_menu, setSeleccionMenu] = useState('')
    const [seleccion_sub_menu, setSeleccionSubMenu] = useState('')

    return (
        <div className='shadow rounded-bottom' style={{width: '100%', height: 155 / proporcional}}>
            <div style={{width: '100%', height: 35 / proporcional, background: 'rgba(39, 39, 39, 0.4)'}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 35 / proporcional, paddingLeft: 120 / proporcional, paddingRight: 120 / proporcional, 
                        paddingTop: 10 / proporcional, paddingBottom: 10 / proporcional}}>
                    <div className='d-flex justify-content-start' style={{width: '50%', height: 15 / proporcional}}>
                        <img src={icono_comments} style={{width: 18 / proporcional, height: 18 / proporcional, marginRight: 10 / proporcional,
                                cursor: 'pointer'}}/>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white', fontWeight: 500, 
                            fontFamily: 'Open Sans, sans-serif', marginRight: 30 / proporcional, cursor: 'pointer'}}>
                            FAQ
                        </p>
                        <img src={icono_location} style={{width: 18 / proporcional, height: 18 / proporcional, marginRight: 10 / proporcional,
                                cursor: 'pointer'}}/>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white', fontWeight: 500, 
                            fontFamily: 'Open Sans, sans-serif', marginRight: 30 / proporcional, cursor: 'pointer'}}>
                            Location
                        </p>
                        <img src={icono_phone} style={{width: 18 / proporcional, height: 18 / proporcional, marginRight: 10 / proporcional,
                                cursor: 'pointer'}}/>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white', fontWeight: 500, 
                            fontFamily: 'Open Sans, sans-serif', marginRight: 30 / proporcional, cursor: 'pointer'}}>
                            Tips de cuidados
                        </p>
                        <img src={icono_camera} style={{width: 18 / proporcional, height: 18 / proporcional, marginRight: 10 / proporcional,
                                cursor: 'pointer'}}/>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white', fontWeight: 500, 
                            fontFamily: 'Open Sans, sans-serif', cursor: 'pointer'}}>
                            Fotos del día
                        </p>
                    </div>
                    <div className='d-flex justify-content-end' style={{width: '50%', height: 15 / proporcional}}>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white', fontWeight: 500, 
                            fontFamily: 'Open Sans, sans-serif', marginRight: 30 / proporcional, curso: 'default'}}>
                            CALL CENTER (51 999 XXXXXX)
                        </p>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white', fontWeight: 500, 
                            fontFamily: 'Open Sans, sans-serif', marginRight: 30 / proporcional, cursor: 'pointer'}}>
                            Español
                        </p>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white', fontWeight: 500, 
                            fontFamily: 'Open Sans, sans-serif', cursor: 'pointer'}} >
                            Mi cuenta
                        </p>
                    </div>
                </div>
            </div>
            <div style={{width: '100%', height: 120 / proporcional, background: 'transparent'}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 120 / proporcional, paddingLeft: 120 / proporcional, paddingRight: 120 / proporcional, 
                        paddingTop: 30 / proporcional, paddingBottom: 30 / proporcional}}>
                    <div style={{width: '22.5%', height: 60 / proporcional}}>
                        <div className='d-flex justify-content-start' style={{width: 'auto', height: 'auto'}}>
                            <img src={icono_logo} style={{width: 60 / proporcional, height: 60 / proporcional, marginRight: 10 / proporcional}}/>
                            <p style={{fontSize: 40 / proporcional, lineHeight: `${60 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white', cursor: 'pointer', fontWeight: 700, 
                                fontFamily: 'Open Sans, sans-serif'}} onClick={() => {navigate('/'); window.scrollTo(0, 0)}}>
                                PET SHOP
                            </p>
                        </div>
                    </div>
                    <div style={{width: '55%', height: 60 / proporcional}}>
                        <div className='d-flex justify-content-center' style={{width: '100%', height: 60 / proporcional}}>
                            <div className='d-flex justify-content-center position-relative' style={{width: '20%', height: 60 / proporcional}}
                                onMouseOver={() => setSeleccionMenu('inicio')} onMouseLeave={() => setSeleccionMenu('')}
                                onClick={() => navigate ('/')}>
                                <p className={`${(seleccion_menu === 'inicio' || location.pathname.split('/')[1] === 'inicio') ? 'rounded bg-white shadow-lg' : ''}`} 
                                    style={{width: (seleccion_menu === 'inicio' || location.pathname.split('/')[1] === 'inicio') ? '80%' : 'auto', 
                                            paddingLeft: (seleccion_menu === 'inicio' || location.pathname.split('/')[1] === 'inicio') ? 10 / proporcional : 0, 
                                            paddingRight: (seleccion_menu === 'inicio' || location.pathname.split('/')[1] === 'inicio') ? 10 / proporcional : 0, 
                                            fontSize: 18 / proporcional, lineHeight: `${60 / proporcional}px`, 
                                            marginBottom: 0 / proporcional, color: (seleccion_menu === 'inicio' || location.pathname.split('/')[1] === 'inicio') ? 'red' : 'white', cursor: 'default', 
                                            fontWeight: (seleccion_menu === 'inicio' || location.pathname.split('/')[1] === 'inicio') ? 700 : 500, 
                                            fontFamily: 'Nunito, sans-serif', textAlign: 'center', cursor: 'pointer'}}>
                                    INICIO
                                </p>
                            </div>
                            <div className='d-flex justify-content-center position-relative' style={{width: '20%', height: 60 / proporcional}}
                                onMouseOver={() => setSeleccionMenu('nosotros')} onMouseLeave={() => setSeleccionMenu('')}>
                                <p className={`${seleccion_menu === 'nosotros' || location.pathname.split('/')[1] === 'nosotros' ? 'rounded bg-white shadow-lg' : ''}`} 
                                    style={{width: seleccion_menu === 'nosotros' || location.pathname.split('/')[1] === 'nosotros' ? '80%' : 'auto', 
                                            paddingLeft: seleccion_menu === 'nosotros' || location.pathname.split('/')[1] === 'nosotros' ? 10 / proporcional : 0, 
                                            paddingRight: seleccion_menu === 'nosotros' || location.pathname.split('/')[1] === 'nosotros' ? 10 / proporcional : 0, 
                                            fontSize: 18 / proporcional, lineHeight: `${60 / proporcional}px`, 
                                            marginBottom: 0 / proporcional, color: seleccion_menu === 'nosotros' || location.pathname.split('/')[1] === 'nosotros' ? 'red' : 'white',
                                            cursor: 'default', fontWeight: seleccion_menu === 'nosotros' || location.pathname.split('/')[1] === 'nosotros' ? 700 : 500, 
                                            fontFamily: 'Nunito, sans-serif', textAlign: 'center', cursor: 'pointer'}}>
                                    ACERCA DE
                                </p>
                                {
                                    seleccion_menu === 'nosotros' ? (
                                        <div className='position-absolute' style={{width: 250 / proporcional, height: 'auto', zIndex: 9999, top: 60 / proporcional, paddingTop: 30 / proporcional}}>
                                            <div className='shadow rounded' style={{width: '100%', height: 'auto', background: 'white', padding: 30 / proporcional}}>
                                                <div className='d-flex justify-content-center position-relative' style={{width: '100%', height: 22 / proporcional, marginBottom: 10 / proporcional}}
                                                    onMouseOver={() => setSeleccionSubMenu('nosotros')} onMouseLeave={() => setSeleccionSubMenu('')}
                                                    onClick={() => navigate ('/acerca-de/nosotros')}>
                                                    <p className=''
                                                        style={{width: seleccion_sub_menu === 'nosotros' || location.pathname.split('/')[2] === 'nosotros' ? '100%' : 'auto', 
                                                                paddingLeft: seleccion_sub_menu === 'nosotros' || location.pathname.split('/')[2] === 'nosotros' ? 10 / proporcional : 0, 
                                                                paddingRight: seleccion_sub_menu === 'nosotros' || location.pathname.split('/')[2] === 'nosotros' ? 10 / proporcional : 0, 
                                                                fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, 
                                                                marginBottom: 0 / proporcional, color: seleccion_sub_menu === 'nosotros' || location.pathname.split('/')[2] === 'nosotros' ? 'red' : 'rgb(66, 66, 66)',
                                                                cursor: 'default', fontWeight: seleccion_sub_menu === 'nosotros' || location.pathname.split('/')[2] === 'nosotros' ? 700 : 500, 
                                                                fontFamily: 'Amatic SC, sans-serif', textAlign: 'left', cursor: 'pointer'}}>
                                                        NOSOTROS
                                                    </p>
                                                </div>
                                                <div className='d-flex justify-content-center position-relative' style={{width: '100%', height: 22 / proporcional, marginBottom: 10 / proporcional}}
                                                    onMouseOver={() => setSeleccionSubMenu('equipo')} onMouseLeave={() => setSeleccionSubMenu('')}
                                                    onClick={() => navigate ('/acerca-de/nuestro-equipo')}>
                                                    <p className=''
                                                        style={{width: seleccion_sub_menu === 'equipo' || location.pathname.split('/')[2] === 'nuestro-equipo' ? '100%' : 'auto', 
                                                                paddingLeft: seleccion_sub_menu === 'equipo' || location.pathname.split('/')[2] === 'nuestro-equipo' ? 10 / proporcional : 0, 
                                                                paddingRight: seleccion_sub_menu === 'equipo' || location.pathname.split('/')[2] === 'nuestro-equipo' ? 10 / proporcional : 0, 
                                                                fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, 
                                                                marginBottom: 0 / proporcional, color: seleccion_sub_menu === 'equipo' || location.pathname.split('/')[2] === 'nuestro-equipo' ? 'red' : 'rgb(66, 66, 66)',
                                                                cursor: 'default', fontWeight: seleccion_sub_menu === 'equipo' || location.pathname.split('/')[2] === 'nuestro-equipo' ? 700 : 500, 
                                                                fontFamily: 'Amatic SC, sans-serif', textAlign: 'left', cursor: 'pointer'}}>
                                                        NUESTRO EQUIPO
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ) : null
                                }
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '20%', height: 60 / proporcional}}
                                onMouseOver={() => setSeleccionMenu('tienda')} onMouseLeave={() => setSeleccionMenu('')}
                                onClick={() => navigate ('/nuestra-tienda')}>
                                <p className={`${(seleccion_menu === 'tienda' || location.pathname.split('/')[1] === 'nuestra-tienda') ? 'rounded bg-white shadow-lg' : ''}`} 
                                    style={{width: (seleccion_menu === 'tienda' || location.pathname.split('/')[1] === 'nuestra-tienda') ? '80%' : 'auto', 
                                            paddingLeft: (seleccion_menu === 'tienda' || location.pathname.split('/')[1] === 'nuestra-tienda') ? 10 / proporcional : 0, 
                                            paddingRight: (seleccion_menu === 'tienda' || location.pathname.split('/')[1] === 'nuestra-tienda') ? 10 / proporcional : 0, 
                                            fontSize: 18 / proporcional, lineHeight: `${60 / proporcional}px`, 
                                            marginBottom: 0 / proporcional, color: (seleccion_menu === 'tienda' || location.pathname.split('/')[1] === 'nuestra-tienda') ? 'red' : 'white', 
                                            cursor: 'default', 
                                            fontWeight: (seleccion_menu === 'tienda' || location.pathname.split('/')[1] === 'nuestra-tienda') ? 700 : 500, 
                                            fontFamily: 'Nunito, sans-serif', textAlign: 'center', cursor: 'pointer'}}>
                                    TIENDA
                                </p>
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '20%', height: 60 / proporcional}}
                                onMouseOver={() => setSeleccionMenu('blog')} onMouseLeave={() => setSeleccionMenu('')}
                                onClick={() => navigate ('/nuestro-blog')}>
                                <p className={`${seleccion_menu === 'blog' || location.pathname.split('/')[1] === 'nuestro-blog' ? 'rounded bg-white shadow-lg' : ''}`} 
                                    style={{width: seleccion_menu === 'blog' || location.pathname.split('/')[1] === 'nuestro-blog' ? '80%' : 'auto', 
                                            paddingLeft: seleccion_menu === 'blog' || location.pathname.split('/')[1] === 'nuestro-blog' ? 10 / proporcional : 0, 
                                            paddingRight: seleccion_menu === 'blog' || location.pathname.split('/')[1] === 'nuestro-blog' ? 10 / proporcional : 0, 
                                            fontSize: 18 / proporcional, lineHeight: `${60 / proporcional}px`, 
                                            marginBottom: 0 / proporcional, color: seleccion_menu === 'blog' || location.pathname.split('/')[1] === 'nuestro-blog' ? 'red' : 'white', 
                                            cursor: 'default', 
                                            fontWeight: seleccion_menu === 'blog' || location.pathname.split('/')[1] === 'nuestro-blog' ? 700 : 500, 
                                            fontFamily: 'Nunito, sans-serif', textAlign: 'center', cursor: 'pointer'}}>
                                    BLOG
                                </p>
                            </div>
                            <div className='d-flex justify-content-center' style={{width: '20%', height: 60 / proporcional}}
                                onMouseOver={() => setSeleccionMenu('contacto')} onMouseLeave={() => setSeleccionMenu('')}
                                onClick={() => navigate ('/contactanos')}>
                                <p className={`${(seleccion_menu === 'contacto' || location.pathname.split('/')[1] === 'contactanos') ? 'rounded bg-white shadow-lg' : ''}`} 
                                    style={{width: (seleccion_menu === 'contacto' || location.pathname.split('/')[1] === 'contactanos') ? '90%' : 'auto', 
                                            paddingLeft: (seleccion_menu === 'contacto' || location.pathname.split('/')[1] === 'contactanos') ? 10 / proporcional : 0, 
                                            paddingRight: (seleccion_menu === 'contacto' || location.pathname.split('/')[1] === 'contactanos') ? 10 / proporcional : 0, 
                                            fontSize: 18 / proporcional, lineHeight: `${60 / proporcional}px`, 
                                            marginBottom: 0 / proporcional, color: (seleccion_menu === 'contacto' || location.pathname.split('/')[1] === 'contactanos') ? 'red' : 'white', 
                                            cursor: 'default', 
                                            fontWeight: (seleccion_menu === 'contacto' || location.pathname.split('/')[1] === 'contactanos') ? 700 : 500, 
                                            fontFamily: 'Nunito, sans-serif', textAlign: 'center', cursor: 'pointer'}}>
                                    CONTÁCTANOS
                                </p>
                            </div>
                        </div>
                    </div>
                    <div style={{width: '22.5%', height: 60 / proporcional}}>
                        <div className='d-flex justify-content-end' style={{width: '100%', height: 60 / proporcional}}>
                            <img src={icono_search} style={{width: 32 / proporcional, height: 32 / proporcional, margin: 14 / proporcional,
                                    cursos: 'pointer'}}/>
                            <img src={icono_heart} style={{width: 32 / proporcional, height: 32 / proporcional, margin: 14 / proporcional,
                                    cursos: 'pointer'}}/>
                            <img src={icono_shop} style={{width: 32 / proporcional, height: 32 / proporcional, margin: 14 / proporcional,
                                    cursos: 'pointer'}}/>
                            <img src={icono_menu} style={{width: 32 / proporcional, height: 32 / proporcional, margin: 14 / proporcional,
                                    marginRight: 0, cursos: 'pointer'}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
