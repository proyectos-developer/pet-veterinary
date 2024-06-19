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

import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { set_open_menu_main } from '../../redux/actions/data'

export default function MenuSuperiorTablet({proporcional}) {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {open_menu_main} = useSelector(({data_actions}) => data_actions)

    return (
        <div className='shadow rounded-bottom' style={{width: '100%', height: 'auto', zIndex: 9999}}>
            <div style={{width: '100%', height: 'auto', background: 'rgba(39, 39, 39, 0.4)'}}>
                <div className='' style={{width: '100%', height: 'auto', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional, 
                        paddingTop: 10 / proporcional, paddingBottom: 10 / proporcional}}>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional}}>
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
                    </div>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional}}>
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
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
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
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional, 
                        paddingTop: 30 / proporcional, paddingBottom: 30 / proporcional}}>
                    <div style={{width: '50%', height: 48 / proporcional}}>
                        <div className='d-flex justify-content-start' style={{width: 'auto', height: 'auto'}}>
                            <img src={icono_logo} style={{width: 48 / proporcional, height: 48 / proporcional, marginRight: 10 / proporcional}}/>
                            <p style={{fontSize: 28 / proporcional, lineHeight: `${48 / proporcional}px`, marginBottom: 0 / proporcional, color: 'white', cursor: 'pointer', fontWeight: 700, 
                                fontFamily: 'Open Sans, sans-serif'}} onClick={() => {navigate('/'); window.scrollTo(0, 0)}}>
                                PET SHOP
                            </p>
                        </div>
                    </div>
                    <div style={{width: '22.5%', height: 48 / proporcional}}>
                        <div className='d-flex justify-content-end' style={{width: '100%', height: 48 / proporcional}}>
                            <img src={icono_search} style={{width: 28 / proporcional, height: 28 / proporcional, margin: 10 / proporcional,
                                    cursor: 'pointer'}}/>
                            <img src={icono_heart} style={{width: 28 / proporcional, height: 28 / proporcional, margin: 10 / proporcional,
                                    cursor: 'pointer'}}/>
                            <img src={icono_shop} style={{width: 28 / proporcional, height: 28 / proporcional, margin: 10 / proporcional,
                                    cursor: 'pointer'}}/>
                            <img src={icono_menu} style={{width: 32 / proporcional, height: 32 / proporcional, margin: 8 / proporcional, marginRight: 0 / proporcional,
                                    marginRight: 0, cursor: 'pointer'}} onClick={() => dispatch (set_open_menu_main(!open_menu_main))}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}