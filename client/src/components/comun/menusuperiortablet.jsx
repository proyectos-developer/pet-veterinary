import React, { useState } from 'react'

import {useLocation, useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { set_open_menu_main } from '../../redux/actions/data'

export default function MenuSuperiorTablet({proporcional}) {

    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()

    const [seleccion_menu, setSeleccionMenu] = useState('')

    const {open_menu_main} = useSelector(({data_actions}) => data_actions)

    return (
        <div className='shadow rounded-bottom' style={{width: '100%', height: 120 / proporcional, background: 'white'}}>
            <div style={{width: '100%', height: 120 / proporcional}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 120 / proporcional, paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional, 
                        paddingTop: 30 / proporcional, paddingBottom: 30 / proporcional}}>
                    <div style={{width: '50%', height: 60 / proporcional}}>
                        <div className='d-flex justify-content-start' style={{width: 'auto', height: 'auto'}}>
                            <p style={{fontSize: 40 / proporcional, lineHeight: `${60 / proporcional}px`, marginBottom: 0 / proporcional, color: 'black', cursor: 'pointer', fontWeight: 700, 
                                fontFamily: 'Open Sans, sans-serif'}} onClick={() => {navigate('/'); window.scrollTo(0, 0)}}>
                                PET SHOP
                            </p>
                        </div>
                    </div>
                    <div style={{width: '50%', height: 60 / proporcional}}>
                        <div className='d-flex justify-content-end' style={{width: 'auto', height: 'auto'}}>
                            <div className='rounded' style={{width: 32 / proporcional, height: 32 / proporcional, background: 'rgb(139, 139, 139)', margin: 14 / proporcional,
                                    marginRight: 0, cursor: 'pointer'}} onClick={() => dispatch(set_open_menu_main(true))}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
