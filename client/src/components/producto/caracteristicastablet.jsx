import React, { useState } from 'react'

export default function CaracterisciasTablet({proporcional}) {
    
    const [seleleccion_pestaña, setSeleccionPestaña] = useState ('descripcion')

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div style={{width: '100%', height: 'auto'}}>
                <div className='d-flex justify-content-start' style={{width: '100%', height: 100 / proporcional}}>
                    <div style={{width: '33%', height: 100 / proporcional, padding: 20 / proporcional, background: seleleccion_pestaña === 'descripcion' ? '#f7f7f5' : 'white',
                            borderTopRightRadius: 8 / proporcional, borderTopLeftRadius: 8 / proporcional}}
                            onClick={() => setSeleccionPestaña('descripcion')}>
                        <div className='rounded' style={{width: '100%', height: 60 / proporcional, background: seleleccion_pestaña === 'descripcion' ? 'red' : 'white', cursor: 'pointer'}}>
                            <p style={{fontSize: 30 / proporcional, lineHeight: `${60 / proporcional}px`, marginBottom: 0 / proporcional,
                                color: seleleccion_pestaña === 'descripcion' ? 'white' : 'black',  fontWeight: 700, fontFamily: 'Nunito, sans-serif', textAlign: 'center'}}>
                                Descripción
                            </p>
                        </div>
                    </div>
                    <div style={{width: '33%', height: 100 / proporcional, padding: 20 / proporcional, background: seleleccion_pestaña === 'informacion' ? '#f7f7f5' : 'white',
                            borderTopRightRadius: 8 / proporcional, borderTopLeftRadius: 8 / proporcional}}
                            onClick={() => setSeleccionPestaña('informacion')}>
                        <div className='rounded' style={{width: '100%', height: 60 / proporcional, background: seleleccion_pestaña === 'informacion' ? 'red' : 'white', cursor: 'pointer'}}>
                            <p style={{fontSize: 30 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional,
                                color: seleleccion_pestaña === 'informacion' ? 'white' : 'black',  fontWeight: 700, fontFamily: 'Nunito, sans-serif', textAlign: 'center'}}>
                                Informacion adicional
                            </p>
                        </div>
                    </div>
                    <div style={{width: '33%', height: 100 / proporcional, padding: 20 / proporcional, background: seleleccion_pestaña === 'calificaciones' ? '#f7f7f5' : 'white',
                            borderTopRightRadius: 8 / proporcional, borderTopLeftRadius: 8 / proporcional}}
                            onClick={() => setSeleccionPestaña('calificaciones')}>
                        <div className='rounded' style={{width: '100%', height: 60 / proporcional, background: seleleccion_pestaña === 'calificaciones' ? 'red' : 'white', cursor: 'pointer'}}>
                            <p style={{fontSize: 30 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 0 / proporcional,
                                color: seleleccion_pestaña === 'calificaciones' ? 'white' : 'black',  fontWeight: 700, fontFamily: 'Nunito, sans-serif', textAlign: 'center'}}>
                                Calificaciones (1)
                            </p>
                        </div>
                    </div>
                </div>
                {
                    seleleccion_pestaña === 'descripcion' ? (
                        <div style={{width: '100%', height: 'auto', paddingTop: 100 / proporcional, paddingBottom: 100 / proporcional, paddingLeft: 50 / proporcional, 
                            paddingRight: 50 / proporcional, background: '#f7f7f5', borderBottomLeftRadius: 8 / proporcional, borderBottomRightRadius: 8 / proporcional}}>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${25 / proporcional}px`, marginBottom: 0 / proporcional,
                                color: 'rgb(143, 144, 147)',  fontWeight: 400, fontFamily: 'Open Sans, sans-serif'}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae tortor condimentum lacinia quis vel. Gravida cum sociis natoque penatibus. Iaculis at erat pellentesque adipiscing commodo elit at. Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor. Tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra. Pharetra diam sit amet nisl suscipit. Enim diam vulputate ut pharetra sit amet aliquam id diam. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Aliquet eget sit amet tellus cras adipiscing enim eu turpis.
                            </p>
                        </div>
                    ) : seleleccion_pestaña === 'informacion' ? (
                        <div style={{width: '100%', height: 'auto', paddingTop: 100 / proporcional, paddingBottom: 100 / proporcional, paddingLeft: 50 / proporcional, 
                            paddingRight: 50 / proporcional, background: '#f7f7f5', borderBottomLeftRadius: 8 / proporcional, borderBottomRightRadius: 8 / proporcional}}>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${25 / proporcional}px`, marginBottom: 0 / proporcional,
                                color: 'rgb(143, 144, 147)',  fontWeight: 400, fontFamily: 'Open Sans, sans-serif'}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae tortor condimentum lacinia quis vel. Gravida cum sociis natoque penatibus. Iaculis at erat pellentesque adipiscing commodo elit at. Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor. Tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra. Pharetra diam sit amet nisl suscipit. Enim diam vulputate ut pharetra sit amet aliquam id diam. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Aliquet eget sit amet tellus cras adipiscing enim eu turpis.
                            </p>
                        </div>
                    ) : (
                        <div style={{width: '100%', height: 'auto', paddingTop: 100 / proporcional, paddingBottom: 100 / proporcional, paddingLeft: 50 / proporcional, 
                            paddingRight: 50 / proporcional, background: '#f7f7f5', borderBottomLeftRadius: 8 / proporcional, borderBottomRightRadius: 8 / proporcional}}>
                            <p style={{fontSize: 18 / proporcional, lineHeight: `${25 / proporcional}px`, marginBottom: 0 / proporcional,
                                color: 'rgb(143, 144, 147)',  fontWeight: 400, fontFamily: 'Open Sans, sans-serif'}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae tortor condimentum lacinia quis vel. Gravida cum sociis natoque penatibus. Iaculis at erat pellentesque adipiscing commodo elit at. Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor. Tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra. Pharetra diam sit amet nisl suscipit. Enim diam vulputate ut pharetra sit amet aliquam id diam. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Aliquet eget sit amet tellus cras adipiscing enim eu turpis.
                            </p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}