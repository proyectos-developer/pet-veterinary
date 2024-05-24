import React, { useState } from 'react'

import image_equipo_00 from '../../../assets/images/image_equipo_500_00.png'
import image_equipo_01 from '../../../assets/images/image_equipo_500_01.png'
import image_equipo_02 from '../../../assets/images/image_equipo_500_02.png'
import image_equipo_03 from '../../../assets/images/image_equipo_500_03.png'
import image_equipo_04 from '../../../assets/images/image_equipo_500_04.png'
import image_equipo_05 from '../../../assets/images/image_equipo_500_05.png'

import icono_cloud from '../../../assets/iconos/icono_cloud_white_96.png'
import icono_rocket from '../../../assets/iconos/icono_rocket_red_96.png'

export default function NuestroEquipo({proporcional}) {

    const [boton_personal, setBotonPersonal] = useState('false')

    return (
        <div style={{width: '100%', height: 'auto', paddingLeft: 150 / proporcional, paddingRight: 150 / proporcional, paddingTop: 120 / proporcional, paddingBottom: 120 / proporcional}}>
            <div style={{width: '100%', height: 'auto'}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                    <div className='d-flex justify-content-center' style={{width: '32%', height: 600 / proporcional}}>
                        <div className='position-relative' style={{width: 'auto', height: 'auto'}}>
                            <img className='rounded' src={image_equipo_00} style={{width: 500 / proporcional, height: 600 / proporcional}}/>
                            <div className='position-absolute' style={{width: 110 / proporcional, height: 110 / proporcional, top: 32 / proporcional, left: 32 / proporcional,
                                backgroundImage: `url(${icono_cloud})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                                <img className='position-absolute top-50 start-50 translate-middle' src={icono_rocket} style={{width: 32 / proporcional, height: 32 / proporcional}}/>
                            </div>
                            <div className='position-absolute start-50 translate-middle' style={{width: '80%', height: 60 / proporcional, top: 520 / proporcional}}>
                                <button className='btn' style={{width: '100%', height: 60 / proporcional, fontSize: 20 / proporcional, 
                                    background: boton_personal === 'personal_1' ? 'red' : 'white', fontWeight: 600,
                                    color: boton_personal === 'personal_1' ? 'white' : 'red'}}
                                    onMouseOver={() => setBotonPersonal('personal_1')} onMouseLeave={() => setBotonPersonal('')}>
                                    Nombre Personal
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='d-flex justify-content-center' style={{width: '32%', height: 600 / proporcional}}>
                        <div className='position-relative' style={{width: 'auto', height: 'auto'}}>
                            <img className='rounded' src={image_equipo_01} style={{width: 500 / proporcional, height: 600 / proporcional}}/>
                            <div className='position-absolute' style={{width: 110 / proporcional, height: 110 / proporcional, top: 32 / proporcional, left: 32 / proporcional,
                                backgroundImage: `url(${icono_cloud})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                                <img className='position-absolute top-50 start-50 translate-middle' src={icono_rocket} style={{width: 32 / proporcional, height: 32 / proporcional}}/>
                            </div>
                            <div className='position-absolute start-50 translate-middle' style={{width: '80%', height: 60 / proporcional, top: 520 / proporcional}}>
                                <button className='btn' style={{width: '100%', height: 60 / proporcional, fontSize: 20 / proporcional, 
                                    background: boton_personal === 'personal_2' ? 'red' : 'white', fontWeight: 600,
                                    color: boton_personal === 'personal_2' ? 'white' : 'red'}}
                                    onMouseOver={() => setBotonPersonal('personal_2')} onMouseLeave={() => setBotonPersonal('')}>
                                    Nombre Personal
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='d-flex justify-content-center' style={{width: '32%', height: 600 / proporcional}}>
                        <div className='position-relative' style={{width: 'auto', height: 'auto'}}>
                            <img className='rounded' src={image_equipo_02} style={{width: 500 / proporcional, height: 600 / proporcional}}/>
                            <div className='position-absolute' style={{width: 110 / proporcional, height: 110 / proporcional, top: 32 / proporcional, left: 32 / proporcional,
                                backgroundImage: `url(${icono_cloud})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                                <img className='position-absolute top-50 start-50 translate-middle' src={icono_rocket} style={{width: 32 / proporcional, height: 32 / proporcional}}/>
                            </div>
                            <div className='position-absolute start-50 translate-middle' style={{width: '80%', height: 60 / proporcional, top: 520 / proporcional}}>
                                <button className='btn' style={{width: '100%', height: 60 / proporcional, fontSize: 20 / proporcional, 
                                    background: boton_personal === 'personal_3' ? 'red' : 'white', fontWeight: 600,
                                    color: boton_personal === 'personal_3' ? 'white' : 'red'}}
                                    onMouseOver={() => setBotonPersonal('personal_3')} onMouseLeave={() => setBotonPersonal('')}>
                                    Nombre Personal
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                    <div className='d-flex justify-content-center' style={{width: '32%', height: 600 / proporcional}}>
                        <div className='position-relative' style={{width: 'auto', height: 'auto'}}>
                            <img className='rounded' src={image_equipo_03} style={{width: 500 / proporcional, height: 600 / proporcional}}/>
                            <div className='position-absolute' style={{width: 110 / proporcional, height: 110 / proporcional, top: 32 / proporcional, left: 32 / proporcional,
                                backgroundImage: `url(${icono_cloud})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                                <img className='position-absolute top-50 start-50 translate-middle' src={icono_rocket} style={{width: 32 / proporcional, height: 32 / proporcional}}/>
                            </div>
                            <div className='position-absolute start-50 translate-middle' style={{width: '80%', height: 60 / proporcional, top: 520 / proporcional}}>
                                <button className='btn' style={{width: '100%', height: 60 / proporcional, fontSize: 20 / proporcional, 
                                    background: boton_personal === 'personal_4' ? 'red' : 'white', fontWeight: 600,
                                    color: boton_personal === 'personal_4' ? 'white' : 'red'}}
                                    onMouseOver={() => setBotonPersonal('personal_4')} onMouseLeave={() => setBotonPersonal('')}>
                                Nombre Personal</button>
                            </div>
                        </div>
                    </div>

                    <div className='d-flex justify-content-center' style={{width: '32%', height: 600 / proporcional}}>
                        <div className='position-relative' style={{width: 'auto', height: 'auto'}}>
                            <img className='rounded' src={image_equipo_04} style={{width: 500 / proporcional, height: 600 / proporcional}}/>
                            <div className='position-absolute' style={{width: 110 / proporcional, height: 110 / proporcional, top: 32 / proporcional, left: 32 / proporcional,
                                backgroundImage: `url(${icono_cloud})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                                <img className='position-absolute top-50 start-50 translate-middle' src={icono_rocket} style={{width: 32 / proporcional, height: 32 / proporcional}}/>
                            </div>
                            <div className='position-absolute start-50 translate-middle' style={{width: '80%', height: 60 / proporcional, top: 520 / proporcional}}>
                                <button className='btn' style={{width: '100%', height: 60 / proporcional, fontSize: 20 / proporcional, 
                                    background: boton_personal === 'personal_5' ? 'red' : 'white', fontWeight: 600,
                                        color: boton_personal === 'personal_5' ? 'white' : 'red'}}
                                        onMouseOver={() => setBotonPersonal('personal_5')} onMouseLeave={() => setBotonPersonal('')}>
                                Nombre Personal</button>
                            </div>
                        </div>
                    </div>

                    <div className='d-flex justify-content-center' style={{width: '32%', height: 600 / proporcional}}>
                        <div className='position-relative' style={{width: 'auto', height: 'auto'}}>
                            <img className='rounded' src={image_equipo_05} style={{width: 500 / proporcional, height: 600 / proporcional}}/>
                            <div className='position-absolute' style={{width: 110 / proporcional, height: 110 / proporcional, top: 32 / proporcional, left: 32 / proporcional,
                                backgroundImage: `url(${icono_cloud})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                                <img className='position-absolute top-50 start-50 translate-middle' src={icono_rocket} style={{width: 32 / proporcional, height: 32 / proporcional}}/>
                            </div>
                            <div className='position-absolute start-50 translate-middle' style={{width: '80%', height: 60 / proporcional, top: 520 / proporcional}}>
                                <button className='btn' style={{width: '100%', height: 60 / proporcional, fontSize: 20 / proporcional, 
                                    background: boton_personal === 'personal_6' ? 'red' : 'white', fontWeight: 600,
                                        color: boton_personal === 'personal_6' ? 'white' : 'red'}}
                                        onMouseOver={() => setBotonPersonal('personal_6')} onMouseLeave={() => setBotonPersonal('')}>
                                Nombre Personal</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
