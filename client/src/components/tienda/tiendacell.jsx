import React, { useState } from 'react'

import icono_search from '../../assets/iconos/icono_search_white_96.png'

import FiltrosTiendaCell from './filtrostiendacell.jsx'
import CardProductoCell from './card/productocell.jsx'

export default function Tienda({proporcional}) {

    const [seleccionar_ordenar, setSeleccionOrdenar] = useState('')
    const [buscar_producto, setBuscarProducto] = useState ('')

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional, paddingLeft: 60 / proporcional,
                paddingRight: 60 / proporcional}}>
            <div className='' style={{width: '100%', height: 'auto'}}>
                <div className='' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                    <div className='d-flex justify-content-start' style={{width: '100%', height: 'auto'}}>
                        <p style={{fontSize: 15 / proporcional, lineHeight: `${60 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(66, 66, 66)', 
                                    cursor: 'default', fontWeight: 400, fontFamily: 'Open Sans, sans-serif'}}>
                            Mostrando del 1 al 15 de 23 resultados
                        </p>
                    </div>
                    
                    <div className='d-flex justify-content-end' style={{width: '100%', height: 'auto', marginBottom: 25 / proporcional}}>
                        <select 
                            className='form-select'
                            style={{width: '100%', height: 60 / proporcional, fontSize: 18 / proporcional, color: 'rgb(66, 66, 66)'}}
                            value={seleccionar_ordenar}
                            onChange={(event) => event.target.value !== '0' ? setSeleccionOrdenar(event.target.value) : null}>
                            <option value='0'>Ordenar por:</option>
                            <option value='1'>Por defecto</option>
                            <option value='popularidad-Desc'>Popularidad</option>
                            <option value='calificacion-DESC'>Calificación</option>
                            <option value='agregado-DESC'>Agregado</option>
                            <option value='precio-ASC'>Precio 0-1000...</option>
                            <option value='precio-DESC'>Precio 1000-0</option>
                        </select>
                    </div>
                    <div className='d-flex' style={{width: '100%', height: 60 / proporcional}}>
                        <input 
                            className='form-control'
                            type='default'
                            value={buscar_producto}
                            onChange={(event) => setBuscarProducto(event.target.value)}
                            placeholder='Buscar producto'
                            id='buscar_producto'
                            style={{width: '85%', height: 60 / proporcional, fontSize: 18 / proporcional, background: 'white', color: 'rgb(39, 39, 39)',
                                borderTopLeftRadius: 8 / proporcional, borderBottomLeftRadius: 8 / proporcional}}/>
                        <div className='d-flex justify-content-center' 
                            style={{width: '15%', height: 60 / proporcional, padding: 14 / proporcional, cursor: 'pointer', background: 'red',
                                borderTopRightRadius: 8 / proporcional, borderBottomRightRadius: 8 / proporcional}}>
                            <img src={icono_search} style={{width: 32 / proporcional, height: 32 / proporcional}}/>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional}}>
                    <CardProductoCell proporcional={proporcional} opcion={1}/>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional}}>
                    <CardProductoCell proporcional={proporcional} opcion={0}/>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional}}>
                    <CardProductoCell proporcional={proporcional} opcion={1}/>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional}}>
                    <CardProductoCell proporcional={proporcional} opcion={0}/>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional}}>
                    <CardProductoCell proporcional={proporcional} opcion={1}/>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional}}>
                    <CardProductoCell proporcional={proporcional} opcion={0}/>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional}}>
                    <CardProductoCell proporcional={proporcional} opcion={2}/>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional}}>
                    <CardProductoCell proporcional={proporcional} opcion={1}/>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional}}>
                    <CardProductoCell proporcional={proporcional} opcion={2}/>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional}}>
                    <CardProductoCell proporcional={proporcional} opcion={2}/>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                    <FiltrosTiendaCell proporcional={proporcional}/>
                </div>
            </div>
        </div>
    )
}