import React, { useState } from 'react'

import image_nosotros_00 from '../../../assets/images/image_nosotros_01_1920.png'
import image_nosotros_01 from '../../../assets/images/image_nosotros_02_1920.png'
import image_mosaico from '../../../assets/images/image_mosaico_520.png'

import icono_huella from '../../../assets/iconos/icono_huella_red_96.png'
import icono_check from '../../../assets/iconos/icono_check_red_96.png'
import { useNavigate } from 'react-router-dom'

export default function NecesitaMascotaTablet ({proporcional}) {
    
    const navigate = useNavigate()

    const [boton_contacto, setBotonContacto] = useState(false) 

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional, paddingLeft: 20 / proporcional,
            paddingRight: 20 / proporcional}}>
            <div style={{width: '100%', height: 'auto', marginBottom: 25 / proporcional}}>
                <img src={image_nosotros_00} style={{width: '100%', height: 250 / proporcional, marginBottom: 50 / proporcional, borderRadius: 8 / proporcional}}/>
                <p style={{fontSize: 26 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 20 / proporcional, color: '#4a4a4a', cursor: 'default', fontWeight: 900, 
                    fontFamily: 'Open Sans, sans-serif'}}>
                    Todo lo que tu mascota necesita en un solo lugar. Créelo.
                </p>
                <p style={{fontSize: 20 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 20 / proporcional, color: 'rgb(143, 144, 147)', cursor: 'default', fontWeight: 500, 
                    fontFamily: 'Open Sans, sans-serif'}}>
                    Lorem ipsum dolor sit amet, est vide voluptaria ex, nec in hinc solum indoctum. Est ad veri sonet soluta, vim eu esse accusamus. In eam solum impetus definitiones, sit eu illum ponderum.
                </p>
                <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto'}}>
                    <div className='d-flex' style={{width: 'auto',  height: 'auto', cursor: 'pointer'}}>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, color: 'red', cursor: 'pointer', fontWeight: 700, 
                            marginRight: 5 / proporcional, fontFamily: 'Open Sans, sans-serif'}}>
                            Leer más
                        </p>
                        <img src={icono_huella} style={{width: 24 / proporcional, height: 24 / proporcional}}/>
                    </div>
                </div>
            </div>
            <div style={{width: '100%', height: 'auto', marginBottom: 25 / proporcional}}>
                <img src={image_nosotros_01} style={{width: '100%', height: 250 / proporcional, marginBottom: 50 / proporcional, borderRadius: 8 / proporcional}}/>
                <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                    <div className='d-flex' style={{width: 'auto', height: 24 / proporcional}}>
                        <img src={icono_check} style={{width: 24 / proporcional, height: 24 / proporcional, marginRight: 10 / proporcional}}/>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(143, 144, 147)', cursor: 'default', fontWeight: 500, 
                            fontFamily: 'Open Sans, sans-serif'}}>
                            Lorem ipsum dolor sit amet
                        </p>
                    </div>
                </div>
                <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                    <div className='d-flex' style={{width: 'auto', height: 24 / proporcional}}>
                        <img src={icono_check} style={{width: 24 / proporcional, height: 24 / proporcional, marginRight: 10 / proporcional}}/>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(143, 144, 147)', cursor: 'default', fontWeight: 500, 
                            fontFamily: 'Open Sans, sans-serif'}}>
                            Odio atqui populo cum ei
                        </p>
                    </div>
                </div>
                <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                    <div className='d-flex' style={{width: 'auto', height: 24 / proporcional}}>
                        <img src={icono_check} style={{width: 24 / proporcional, height: 24 / proporcional, marginRight: 10 / proporcional}}/>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(143, 144, 147)', cursor: 'default', fontWeight: 500, 
                            fontFamily: 'Open Sans, sans-serif'}}>
                            Brute illud instructior sed ut
                        </p>
                    </div>
                </div>
                <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                    <div className='d-flex' style={{width: 'auto', height: 24 / proporcional}}>
                        <img src={icono_check} style={{width: 24 / proporcional, height: 24 / proporcional, marginRight: 10 / proporcional}}/>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(143, 144, 147)', cursor: 'default', fontWeight: 500, 
                            fontFamily: 'Open Sans, sans-serif'}}>
                            Lorem ipsum dolor sit amet
                        </p>
                    </div>
                </div>
                <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                    <div className='d-flex' style={{width: 'auto', height: 24 / proporcional}}>
                        <img src={icono_check} style={{width: 24 / proporcional, height: 24 / proporcional, marginRight: 10 / proporcional}}/>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(143, 144, 147)', cursor: 'default', fontWeight: 500, 
                            fontFamily: 'Open Sans, sans-serif'}}>
                            Pro ex mazim constituam
                        </p>
                    </div>
                </div>
                <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                    <div className='d-flex' style={{width: 'auto', height: 24 / proporcional}}>
                        <img src={icono_check} style={{width: 24 / proporcional, height: 24 / proporcional, marginRight: 10 / proporcional}}/>
                        <p style={{fontSize: 20 / proporcional, lineHeight: `${24 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(143, 144, 147)', cursor: 'default', fontWeight: 500, 
                            fontFamily: 'Open Sans, sans-serif'}}>
                            Brute illud instructior sed ut
                        </p>
                    </div>
                </div>
            </div>
            <div className='' style={{width: '100%',  height: 'auto'}}>
                <div style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '100%', height: 600 / proporcional, backgroundImage: `url(${image_mosaico})`, width: '100%', height: 600 / proporcional, 
                        backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', padding: 20 / proporcional}}>
                        <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                            <p style={{fontSize: 30 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 20 / proporcional, color: '#4a4a4a', cursor: 'default', fontWeight: 900, 
                                fontFamily: 'Open Sans, sans-serif'}}>
                                Horas de trabajo
                            </p>
                            <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(143, 144, 147)', cursor: 'default', fontWeight: 500, 
                                fontFamily: 'Open Sans, sans-serif'}}>
                                Lorem ipsum dolor sit amet, est vide voluptaria ex, nec in hinc solum indoctum.
                            </p>
                        </div>
                        <div style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                            <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(143, 144, 147)', cursor: 'default', fontWeight: 500, 
                                    fontFamily: 'Open Sans, sans-serif'}} >
                                    Lunes
                                </p>
                                <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(143, 144, 147)', cursor: 'default', fontWeight: 500, 
                                    fontFamily: 'Open Sans, sans-serif'}} >
                                    .........................................
                                </p>
                                <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(143, 144, 147)', cursor: 'default', fontWeight: 500, 
                                    fontFamily: 'Open Sans, sans-serif'}} >
                                    08:00 - 20:00
                                </p>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(143, 144, 147)', cursor: 'default', fontWeight: 500, 
                                    fontFamily: 'Open Sans, sans-serif'}} >
                                    Martes
                                </p>
                                <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(143, 144, 147)', cursor: 'default', fontWeight: 500, 
                                    fontFamily: 'Open Sans, sans-serif'}} >
                                    ........................................
                                </p>
                                <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(143, 144, 147)', cursor: 'default', fontWeight: 500, 
                                    fontFamily: 'Open Sans, sans-serif'}} >
                                    08:00 - 20:00
                                </p>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(143, 144, 147)', cursor: 'default', fontWeight: 500, 
                                    fontFamily: 'Open Sans, sans-serif'}} >
                                    Miércoles
                                </p>
                                <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(143, 144, 147)', cursor: 'default', fontWeight: 500, 
                                    fontFamily: 'Open Sans, sans-serif'}} >
                                    ....................................
                                </p>
                                <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(143, 144, 147)', cursor: 'default', fontWeight: 500, 
                                    fontFamily: 'Open Sans, sans-serif'}} >
                                    08:00 - 20:00
                                </p>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(143, 144, 147)', cursor: 'default', fontWeight: 500, 
                                    fontFamily: 'Open Sans, sans-serif'}} >
                                    Jueves
                                </p>
                                <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(143, 144, 147)', cursor: 'default', fontWeight: 500, 
                                    fontFamily: 'Open Sans, sans-serif'}} >
                                    ........................................
                                </p>
                                <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(143, 144, 147)', cursor: 'default', fontWeight: 500, 
                                    fontFamily: 'Open Sans, sans-serif'}} >
                                    08:00 - 20:00
                                </p>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(143, 144, 147)', cursor: 'default', fontWeight: 500, 
                                    fontFamily: 'Open Sans, sans-serif'}} >
                                    Viernes
                                </p>
                                <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(143, 144, 147)', cursor: 'default', fontWeight: 500, 
                                    fontFamily: 'Open Sans, sans-serif'}} >
                                    .......................................
                                </p>
                                <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(143, 144, 147)', cursor: 'default', fontWeight: 500, 
                                    fontFamily: 'Open Sans, sans-serif'}} >
                                    08:00 - 20:00
                                </p>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(143, 144, 147)', cursor: 'default', fontWeight: 500, 
                                    fontFamily: 'Open Sans, sans-serif'}} >
                                    Sábado
                                </p>
                                <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(143, 144, 147)', cursor: 'default', fontWeight: 500, 
                                    fontFamily: 'Open Sans, sans-serif'}} >
                                    .......................................
                                </p>
                                <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(143, 144, 147)', cursor: 'default', fontWeight: 500, 
                                    fontFamily: 'Open Sans, sans-serif'}} >
                                    10:00 - 16:00
                                </p>
                            </div>
                            <div className='d-flex' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                                <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(143, 144, 147)', cursor: 'default', fontWeight: 500, 
                                    fontFamily: 'Open Sans, sans-serif'}} >
                                    Domingo
                                </p>
                                <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(143, 144, 147)', cursor: 'default', fontWeight: 500, 
                                    fontFamily: 'Open Sans, sans-serif'}} >
                                    ........................................
                                </p>
                                <p style={{fontSize: 20 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(143, 144, 147)', cursor: 'default', fontWeight: 500, 
                                    fontFamily: 'Open Sans, sans-serif'}} >
                                    CERRADO
                                </p>
                            </div>

                        </div>
                        <button className='btn' style={{width: '40%', height: 60 / proporcional, fontSize: 20 / proporcional, fontWeight: 600 / proporcional, 
                            color: boton_contacto ? '#ff0000' : 'white', border: '1px solid #ff0000', background: boton_contacto ? 'transparent' : '#ff0000', cursor: 'pointer'}}
                            onMouseOver={() => setBotonContacto(true)} onMouseLeave={() => setBotonContacto(false)}
                            onClick={() => navigate ('/contactanos')}>
                            Contáctarnos
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}