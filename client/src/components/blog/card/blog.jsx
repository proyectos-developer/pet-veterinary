import React, { useState } from 'react'

import icono_article from '../../../assets/iconos/icono_article_red_96.png'
import icono_huella from '../../../assets/iconos/icono_huella_red_v2_96.png'

import { useNavigate } from 'react-router-dom'

export default function CardBlog({proporcional, articulo}) {

    const navigate = useNavigate()

    return (
        <div className='' style={{width: '100%', height: 'auto'}}>
            <div style={{width: '100%',  height: 'auto'}}>
                <div className='position-relative' style={{width: '100%',  height: 'auto', marginBottom: 18 / proporcional}}>
                    <img src={articulo.imagen} style={{width: '100%', height: '100%'}}/>
                </div>
                <div className='' style={{width: '100%', height: 'auto'}}>
                    <div className='d-flex' style={{width: '100%', height: 32 / proporcional, marginBottom: 8 / proporcional}}>
                        <img src={icono_article} style={{width: 32 / proporcional, height: 32 / proporcional, marginRight: 10 / proporcional}}/>
                        <p style={{fontSize: 15 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(143, 144, 147)', 
                                    cursor: 'default', fontWeight: 400, fontFamily: 'Open sans, sans-serif', textAlign: 'left'}}>
                            Accesorios
                        </p>
                    </div>
                    <p style={{fontSize: 24 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 11 / proporcional, color: 'rgb(74, 74, 74)', 
                                cursor: 'default', fontWeight: 900, fontFamily: 'Open sans, sans-serif', textAlign: 'left'}}>
                        {articulo.titulo}
                    </p>
                    <p style={{fontSize: 15 / proporcional, lineHeight: `${25 / proporcional}px`, marginBottom: 29 / proporcional, color: 'rgb(143, 144, 147)', 
                                cursor: 'default', fontWeight: 400, fontFamily: 'Open sans, sans-serif', textAlign: 'left', marginBottom: 8 / proporcional}}>
                        {articulo.descripcion}
                    </p>
                    <div className='d-flex' style={{widht: '100%', height: 28 / proporcional, cursor: 'pointer'}}
                        onClick={() => {navigate (`/nuestro-blog/${articulo.id}`); window.scrollTo(0, 0)}}>
                        <p style={{fontSize: 18 / proporcional, lineHeight: `${28 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(240, 67, 54)', 
                                    cursor: 'default', fontWeight: 700, fontFamily: 'Nunito, sans-serif', textAlign: 'left', marginBottom: 8 / proporcional}}>
                            Leer más
                        </p>
                        <img src={icono_huella} style={{width: 28 / proporcional, height: 28 / proporcional, padding: 4 / proporcional}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}