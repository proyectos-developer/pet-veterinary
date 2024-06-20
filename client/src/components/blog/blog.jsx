import React, { useState } from 'react'

import CardBlog from './card/blog.jsx'

import image_blog_00 from '../../assets/images/image_blog_750_00.png'
import image_blog_01 from '../../assets/images/image_blog_750_01.png'
import image_blog_02 from '../../assets/images/image_blog_750_02.png'
import image_blog_03 from '../../assets/images/image_blog_750_03.png'
import image_blog_04 from '../../assets/images/image_blog_750_04.png'
import image_blog_05 from '../../assets/images/image_blog_750_05.png'
import image_blog_06 from '../../assets/images/image_blog_750_06.png'
import image_blog_07 from '../../assets/images/image_blog_750_07.png'
import image_blog_08 from '../../assets/images/image_blog_750_08.png'
import image_blog_09 from '../../assets/images/image_blog_750_09.png'

import icono_light from '../../assets/iconos/icono_light_white_96.png'
import icono_clip from '../../assets/iconos/icono_clip_white_96.png'

export default function Tienda({proporcional}) {

    const articulos = [
        {id: 0, imagen: image_blog_00, titulo: 'Sentidos del perro versus sentidos humanos: cómo comparar', descripcion: 'Te feugiat recteque eloquentiam est. Sed at audire ornatus incorrupte, mel ferri bonorum deserunt te. Accusata postulant mei'},
        {id: 1, imagen: image_blog_01, titulo: 'La ciencia detrás de tu estrecha relación con tu perro', descripcion: 'Te feugiat recteque eloquentiam est. Sed at audire ornatus incorrupte, mel ferri bonorum deserunt te. Accusata postulant mei'},
        {id: 2, imagen: image_blog_02, titulo: 'Gatos y pieles sensibles: mirar debajo del pelaje', descripcion: 'Te feugiat recteque eloquentiam est. Sed at audire ornatus incorrupte, mel ferri bonorum deserunt te. Accusata postulant mei'},
        {id: 3, imagen: image_blog_03, titulo: 'Tierra: tu gato puede darse cuenta de cómo te sientes', descripcion: 'Te feugiat recteque eloquentiam est. Sed at audire ornatus incorrupte, mel ferri bonorum deserunt te. Accusata postulant mei'},
        {id: 4, imagen: image_blog_04, titulo: '10 cosas que hacen las mascotas cuando no estamos en casa', descripcion: 'Te feugiat recteque eloquentiam est. Sed at audire ornatus incorrupte, mel ferri bonorum deserunt te. Accusata postulant mei'},
        {id: 5, imagen: image_blog_05, titulo: 'Comportamiento del gato: cosas que tu gato quiere decirte', descripcion: 'Te feugiat recteque eloquentiam est. Sed at audire ornatus incorrupte, mel ferri bonorum deserunt te. Accusata postulant mei'},
        {id: 6, imagen: image_blog_06, titulo: 'Volar con un perro: todo lo que necesitas saber', descripcion: 'Te feugiat recteque eloquentiam est. Sed at audire ornatus incorrupte, mel ferri bonorum deserunt te. Accusata postulant mei'},
        {id: 7, imagen: image_blog_07, titulo: 'Los perros dejan huellas en nuestra vida', descripcion: 'Te feugiat recteque eloquentiam est. Sed at audire ornatus incorrupte, mel ferri bonorum deserunt te. Accusata postulant mei'},
        {id: 8, imagen: image_blog_08, titulo: '¿Qué pasa si un perro no es adoptado?', descripcion: 'Te feugiat recteque eloquentiam est. Sed at audire ornatus incorrupte, mel ferri bonorum deserunt te. Accusata postulant mei'},
        {id: 9, imagen: image_blog_09, titulo: 'Volar con un perro: todo lo que necesitas saber', descripcion: 'Te feugiat recteque eloquentiam est. Sed at audire ornatus incorrupte, mel ferri bonorum deserunt te. Accusata postulant mei'}
    ]

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 120 / proporcional, paddingBottom: 120 / proporcional, paddingLeft: 150 / proporcional,
                paddingRight: 150 / proporcional}}>
            <div style={{width: '100%', height: 'auot'}}>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                    <div className='d-flex justify-content-center' style={{width: '32%', height: 'auto'}}>
                        <CardBlog proporcional={proporcional} articulo={articulos[0]}/>
                    </div>
                    <div className='d-flex justify-content-center' style={{width: '32%', height: 'auto'}}>
                        <CardBlog proporcional={proporcional} articulo={articulos[1]}/>
                    </div>
                    <div className='d-flex justify-content-center' style={{width: '32%', height: 'auto'}}>
                        <CardBlog proporcional={proporcional} articulo={articulos[2]}/>
                    </div>
                </div>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                    <div className='d-flex justify-content-center' style={{width: '32%', height: 'auto'}}>
                        <CardBlog proporcional={proporcional} articulo={articulos[3]}/>
                    </div>
                    <div className='d-flex justify-content-center position-relative' style={{width: '32%', height: 'auto'}}>
                        <div className='position-absolute start-50 translate-middle rounded' style={{width: '100%', height: 300 / proporcional, background: 'rgb(240, 67, 54)', top: '40%'}}>
                            <div className='d-flex justify-content-end' style={{width: '100%', height: 62 / proporcional}}>
                                <img src={icono_light} style={{width: 62 / proporcional, height: 62 / proporcional, padding: 20 / proporcional}}/>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center' style={{width: '32%', height: 'auto'}}>
                        <CardBlog proporcional={proporcional} articulo={articulos[4]}/>
                    </div>
                </div>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                    <div className='d-flex justify-content-center' style={{width: '32%', height: 'auto'}}>
                        <CardBlog proporcional={proporcional} articulo={articulos[5]}/>
                    </div>
                    <div className='d-flex justify-content-center' style={{width: '32%', height: 'auto'}}>
                        <CardBlog proporcional={proporcional} articulo={articulos[6]}/>
                    </div>
                    <div className='d-flex justify-content-center' style={{width: '32%', height: 'auto'}}>
                        <CardBlog proporcional={proporcional} articulo={articulos[7]}/>
                    </div>
                </div>
                <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                    <div className='d-flex justify-content-center position-relative' style={{width: '32%', height: 'auto'}}>
                        <div className='position-absolute start-50 translate-middle rounded' style={{width: '100%', height: 300 / proporcional, background: 'rgb(240, 67, 54)', top: '40%'}}>
                            <div className='d-flex justify-content-end' style={{width: '100%', height: 62 / proporcional}}>
                                <img src={icono_clip} style={{width: 62 / proporcional, height: 62 / proporcional, padding: 20 / proporcional}}/>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center' style={{width: '32%', height: 'auto'}}>
                        <CardBlog proporcional={proporcional} articulo={articulos[8]}/>
                    </div>
                    <div className='d-flex justify-content-center' style={{width: '32%', height: 'auto'}}>
                        <CardBlog proporcional={proporcional} articulo={articulos[9]}/>
                    </div>
                </div>
            </div>
        </div>
    )
}