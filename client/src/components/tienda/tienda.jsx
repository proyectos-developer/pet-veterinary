import React, { useState } from 'react'

import FiltrosTienda from './filtrostienda.jsx'
import CardProducto from './card/producto.jsx'

export default function Tienda({proporcional}) {

    const [seleccionar_ordenar, setSeleccionOrdenar] = useState('')

    return (
        <div style={{width: '100%', height: 'auto', paddingTop: 120 / proporcional, paddingBottom: 120 / proporcional, paddingLeft: 150 / proporcional,
                paddingRight: 150 / proporcional}}>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto'}}>
                <div style={{width: '70%', height: 'auto'}}>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                        <div className='d-flex justify-content-start' style={{width: '50%', height: 'auto'}}>
                            <p style={{fontSize: 15 / proporcional, lineHeight: `${60 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(66, 66, 66)', 
                                        cursor: 'default', fontWeight: 400, fontFamily: 'Open Sans, sans-serif'}}>
                                Mostrando del 1 al 15 de 23 resultados
                            </p>
                        </div>
                        <div className='d-flex justify-content-end' style={{width: '50%', height: 'auto'}}>
                            <select 
                                className='form-select'
                                style={{width: '80%', height: 60 / proporcional, fontSize: 18 / proporcional, color: 'rgb(66, 66, 66)'}}
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
                    </div>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                        <div className='d-flex justify-content-center' style={{width: '32%', height: 'auto'}}>
                            <CardProducto proporcional={proporcional} opcion={1}/>
                        </div>
                        <div className='d-flex justify-content-center' style={{width: '32%', height: 'auto'}}>
                            <CardProducto proporcional={proporcional} opcion={0}/>
                        </div>
                        <div className='d-flex justify-content-center' style={{width: '32%', height: 'auto'}}>
                            <CardProducto proporcional={proporcional} opcion={0}/>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                        <div className='d-flex justify-content-center' style={{width: '32%', height: 'auto'}}>
                            <CardProducto proporcional={proporcional} opcion={1}/>
                        </div>
                        <div className='d-flex justify-content-center' style={{width: '32%', height: 'auto'}}>
                            <CardProducto proporcional={proporcional} opcion={0}/>
                        </div>
                        <div className='d-flex justify-content-center' style={{width: '32%', height: 'auto'}}>
                            <CardProducto proporcional={proporcional} opcion={0}/>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                        <div className='d-flex justify-content-center' style={{width: '32%', height: 'auto'}}>
                            <CardProducto proporcional={proporcional} opcion={1}/>
                        </div>
                        <div className='d-flex justify-content-center' style={{width: '32%', height: 'auto'}}>
                            <CardProducto proporcional={proporcional} opcion={0}/>
                        </div>
                        <div className='d-flex justify-content-center' style={{width: '32%', height: 'auto'}}>
                            <CardProducto proporcional={proporcional} opcion={0}/>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                        <div className='d-flex justify-content-center' style={{width: '32%', height: 'auto'}}>
                            <CardProducto proporcional={proporcional} opcion={2}/>
                        </div>
                        <div className='d-flex justify-content-center' style={{width: '32%', height: 'auto'}}>
                            <CardProducto proporcional={proporcional} opcion={1}/>
                        </div>
                        <div className='d-flex justify-content-center' style={{width: '32%', height: 'auto'}}>
                            <CardProducto proporcional={proporcional} opcion={1}/>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                        <div className='d-flex justify-content-center' style={{width: '32%', height: 'auto'}}>
                            <CardProducto proporcional={proporcional} opcion={2}/>
                        </div>
                        <div className='d-flex justify-content-center' style={{width: '32%', height: 'auto'}}>
                            <CardProducto proporcional={proporcional} opcion={2}/>
                        </div>
                        <div className='d-flex justify-content-center' style={{width: '32%', height: 'auto'}}>
                            <CardProducto proporcional={proporcional} opcion={1}/>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center' style={{width: '29%', height: 'auto'}}>
                    <FiltrosTienda proporcional={proporcional}/>
                </div>
            </div>
        </div>
    )
}