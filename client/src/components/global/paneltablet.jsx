import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import MenuSuperiorTablet from '../comun/menusuperiortablet.jsx'
import FooterTablet from '../comun/footertablet.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { set_open_menu_main } from '../../redux/actions/data.js'

export default function GlobalPanelTablet({proporcional}) {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [seleccion_menu, setSeleccionMenu] = useState('')
  const [seleccion_sub_menu, setSeleccionSubMenu] = useState('')

  const {open_menu_main} = useSelector(({data_actions}) => data_actions)

    return (
        <div className='position-relative' style={{width: '100%', height: '100%'}}>
          <div className='position-fixed start-0 top-0' style={{width: '100%', height: 'auto', zIndex: 9999}}>
            <MenuSuperiorTablet proporcional={proporcional}/>
          </div>
          {
            open_menu_main ? (
              <div className='position-fixed' style={{width: '100%', height: '100%', top: 195 / proporcional, zIndex: 99999, background: 'transparent'}}>
                  <div className='d-flex justify-content-end' style={{width: '100%', height: '100%'}}>
                      <div className='' style={{width: '50%', height: '100%', background: 'rgba(255, 255, 255, 0.6)', padding: 20 / proporcional}}>
                        <div className='' style={{width: '100%', height: 60 / proporcional}}
                            onMouseOver={() => setSeleccionMenu('inicio')} onMouseLeave={() => setSeleccionMenu('')}
                            onClick={() => {navigate ('/'); dispatch (set_open_menu_main(false))}}>
                            <p style={{width: '100%', fontSize: 18 / proporcional, lineHeight: `${60 / proporcional}px`, 
                                        marginBottom: 0 / proporcional, color: seleccion_menu === 'inicio' ? 'red' : 'black', cursor: 'pointer', 
                                        fontWeight: seleccion_menu === 'inicio' ? 700 : 500, fontFamily: 'Nunito, sans-serif', textAlign: 'left', cursor: 'pointer'}}>
                                INICIO
                            </p>
                        </div>
                        <div className='' style={{width: '100%', height: 'auto'}}
                              onMouseOver={() => setSeleccionMenu('nosotros')} onMouseLeave={() => setSeleccionMenu('')}>
                              <p style={{width: '100%', fontSize: 18 / proporcional, lineHeight: `${60 / proporcional}px`, 
                                        marginBottom: 0 / proporcional, color: seleccion_menu === 'nosotros' ? 'red' : 'black', cursor: 'pointer', 
                                        fontWeight: seleccion_menu === 'nosotros' ? 700 : 500, fontFamily: 'Nunito, sans-serif', textAlign: 'left', cursor: 'pointer'}}>
                                ACERCA DE
                              </p>
                              {
                                  seleccion_menu === 'nosotros' ? (
                                      <div className='' style={{width: '100%', height: 'auto', paddingLeft: 30 / proporcional}}>
                                          <div className='' style={{width: '100%', height: 22 / proporcional, marginBottom: 10 / proporcional}}
                                              onMouseOver={() => setSeleccionSubMenu('nosotros')} onMouseLeave={() => setSeleccionSubMenu('')}
                                              onClick={() => {navigate ('/acerca-de/nosotros'); dispatch (set_open_menu_main(false))}}>
                                              <p className=''
                                                  style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, 
                                                          marginBottom: 0 / proporcional, color: seleccion_sub_menu === 'nosotros' ? 'red' : 'rgb(66, 66, 66)',
                                                          cursor: 'default', fontWeight: seleccion_sub_menu === 'nosotros' ? 700 : 500, 
                                                          fontFamily: 'Amatic SC, sans-serif', textAlign: 'left', cursor: 'pointer'}}>
                                                  NOSOTROS
                                              </p>
                                          </div>
                                          <div className='' style={{width: '100%', height: 22 / proporcional, marginBottom: 10 / proporcional}}
                                              onMouseOver={() => setSeleccionSubMenu('equipo')} onMouseLeave={() => setSeleccionSubMenu('')}
                                              onClick={() => {navigate ('/acerca-de/nuestro-equipo'); dispatch (set_open_menu_main(false))}}>
                                              <p className=''
                                                  style={{fontSize: 20 / proporcional, lineHeight: `${22 / proporcional}px`, 
                                                          marginBottom: 0 / proporcional, color: seleccion_sub_menu === 'equipo' ? 'red' : 'rgb(66, 66, 66)',
                                                          cursor: 'default', fontWeight: seleccion_sub_menu === 'equipo' ? 700 : 500, 
                                                          fontFamily: 'Amatic SC, sans-serif', textAlign: 'left', cursor: 'pointer'}}>
                                                  NUESTRO EQUIPO
                                              </p>
                                          </div>
                                      </div>
                                  ) : null
                              }
                        </div>
                        <div className='' style={{width: '100%', height: 60 / proporcional}}
                            onMouseOver={() => setSeleccionMenu('tienda')} onMouseLeave={() => setSeleccionMenu('')}
                            onClick={() => {navigate ('/nuestra-tienda'); dispatch (set_open_menu_main(false))}}>
                            <p style={{width: '100%', fontSize: 18 / proporcional, lineHeight: `${60 / proporcional}px`, 
                                        marginBottom: 0 / proporcional, color: seleccion_menu === 'tienda' ? 'red' : 'black', cursor: 'pointer', 
                                        fontWeight: seleccion_menu === 'tienda' ? 700 : 500, fontFamily: 'Nunito, sans-serif', textAlign: 'left', cursor: 'pointer'}}>
                                NUESTRA TIENDA
                            </p>
                        </div>
                        <div className='' style={{width: '100%', height: 60 / proporcional}}
                            onMouseOver={() => setSeleccionMenu('blog')} onMouseLeave={() => setSeleccionMenu('')}
                            onClick={() => {navigate ('/nuestro-blog'); dispatch (set_open_menu_main(false))}}>
                            <p style={{width: '100%', fontSize: 18 / proporcional, lineHeight: `${60 / proporcional}px`, 
                                        marginBottom: 0 / proporcional, color: seleccion_menu === 'blog' ? 'red' : 'black', cursor: 'pointer', 
                                        fontWeight: seleccion_menu === 'blog' ? 700 : 500, fontFamily: 'Nunito, sans-serif', textAlign: 'left', cursor: 'pointer'}}>
                                NUESTRO BLOG
                            </p>
                        </div>
                        <div className='' style={{width: '100%', height: 60 / proporcional}}
                            onMouseOver={() => setSeleccionMenu('contacto')} onMouseLeave={() => setSeleccionMenu('')}
                            onClick={() => {navigate ('/contactanos'); dispatch (set_open_menu_main(false))}}>
                            <p style={{width: '100%', fontSize: 18 / proporcional, lineHeight: `${60 / proporcional}px`, 
                                        marginBottom: 0 / proporcional, color: seleccion_menu === 'contacto' ? 'red' : 'black', cursor: 'pointer', 
                                        fontWeight: seleccion_menu === 'contacto' ? 700 : 500, fontFamily: 'Nunito, sans-serif', textAlign: 'left', cursor: 'pointer'}}>
                                CONTÁCTANOS
                            </p>
                        </div>
                      </div>
                  </div>
              </div>
            ) : null
          }
          <Outlet/>
          <FooterTablet proporcional={proporcional}/>
        </div>
    )
}