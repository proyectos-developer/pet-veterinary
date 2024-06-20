import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react';

import icono_location from '../../assets/iconos/icono_location_red_96.png'
import image_00 from '../../assets/images/image_contactanos_v1_991.png'

export default function ContactoTablet({proporcional}) {    

    const AnyReactComponent = ({ text }) => <img src={icono_location} style={{width: 48 / proporcional, height: 48 / proporcional}}/>
 
    const defaultProps_1 = {
        center: {
          lat: -12.1186707,
          lng: -77.0219015
        },
        zoom: 14
      };

    const [correo, setCorreo] = useState('')
    const [mensaje, setMensaje] = useState('')

    const [boton_enviar, setBotonEnviar] = useState(false)

    const enviar_mensaje = () => {

    }
    
    return (
        <div className='' style={{width: '100%', height: 'auto', paddingTop: 120 / proporcional}}>
            <div style={{width: '100%', height: 'auto', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional, paddingBottom: 80 / proporcional}}>
                <div style={{width: '100%', height: 'auto', marginBottom: 16 / proporcional}}>
                    <div style={{width: '100%', height: 'auto', marginBottom: 45 / proporcional}}>
                        <p style={{fontSize: 50 / proporcional, fontWeight: 900, color: 'rgb(66, 66, 66)', fontFamily: 'Nunito, sans-serif', lineHeight: `${55 / proporcional}px`,
                            marginBottom: 12 / proporcional, textAlign: 'left'}}>
                            Más acerca de nosotros
                        </p>
                        <p style={{fontSize: 15 / proporcional, fontWeight: 400, color: 'rgb(143, 144, 147)', fontFamily: 'Open Sans, sans-serif', lineHeight: `${25 / proporcional}px`,
                            marginBottom: 12 / proporcional, textAlign: 'left'}}>
                            Sit et legLorem ipsum dolor sit amet, est ei error insolens ullamcorper, ut erant aliquip quaerendum sed. Errem phaedrum id vix. Ea cibo nullam fuisset eam.ere alienum omittam, pri utinam nonumy at, malis tollit habemus est ad. Ea cibo nullam fuisset eam.
                        </p>
                    </div>
                    <img src={image_00} style={{width: '100%', height: 400 / proporcional}}/>
                </div>
                <div style={{width: '100%', height: 'auto'}}>
                    <div className='rounded' style={{width: '100%', height: 'auto', paddingLeft: 50 / proporcional, paddingRight: 50 / proporcional, paddingTop: 35 / proporcional,
                        paddingBottom: 35 / proporcional, background: 'rgb(240, 67, 54)'}}>
                        <p style={{fontSize: 30 / proporcional, fontWeight: 900, color: 'white', fontFamily: 'Nunito, sans-serif', lineHeight: `${36 / proporcional}px`,
                            marginBottom: 15 / proporcional, textAlign: 'left'}}>
                            No dudes en preguntarnos cualquier cosa.
                        </p>
                        <p style={{fontSize: 15 / proporcional, fontWeight: 400, color: 'white', fontFamily: 'Open Sans, sans-serif', lineHeight: `${25 / proporcional}px`,
                            marginBottom: 16 / proporcional, textAlign: 'left'}}>
                            Sit et legLorem ipsum dolor sit amet, est ei error insolens ullamcorper, ut erant aliquip quaerendum sed.
                        </p>
                        <div style={{width: '100%', height: 'auto'}}>
                            <input 
                                className='form-control border-0'
                                style={{width: '100%', height: 60 / proporcional, fontSize: 15 / proporcional, fontWeight: 400, fontFamily: 'Open Sans, sans-serif', color: 'rgb(143, 144, 147)',
                                        lineHeight: `${25 / proporcional}px`, padding: 17.5 / proporcional, background: 'white', marginBottom: 24 / proporcional}}
                                value={correo}
                                onChange={(event) => setCorreo(event.target.value)}
                                placeholder='Su correo'
                                id='correo'
                            />
                            <textarea 
                                className='form-control border-0'
                                style={{width: '100%', height: 180 / proporcional, fontSize: 15 / proporcional, fontWeight: 400, fontFamily: 'Open Sans, sans-serif', color: 'rgb(143, 144, 147)',
                                        lineHeight: `${25 / proporcional}px`, padding: 17.5 / proporcional, background: 'white', marginBottom: 24 / proporcional}}
                                value={mensaje}
                                rows={3}
                                onChange={(event) => setMensaje(event.target.value)}
                                placeholder='Su mensaje'
                            />
                            <div className='rounded' style={{width: 200 / proporcional, height: 60 / proporcional, background: boton_enviar ? 'transparent' : 'white', border: '1px solid white'}}
                                onMouseOver={() => setBotonEnviar(true)} onMouseLeave={() => setBotonEnviar(false)}
                                onClick={() => enviar_mensaje()}>
                                <p style={{fontSize: 20 / proporcional, fontWeight: 400, color: boton_enviar ? 'white' : 'rgb(240, 67, 54)', fontFamily: 'Nunito, sans-serif', lineHeight: `${60 / proporcional}px`,
                                    marginBottom: 0 / proporcional, textAlign: 'center', cursor: 'pointer'}}>
                                    Contactárnos
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width: '100%', height: 600 / proporcional}}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyCwoATN7RLTSy4jWO_iK4rQbHXfeNHFuxs" }}
                    defaultCenter={defaultProps_1.center}
                    defaultZoom={defaultProps_1.zoom}
                >
                    <AnyReactComponent
                        lat={-12.1186707}
                        lng={-77.0219015}
                        text="Lima"
                    />
                </GoogleMapReact>
            </div>
        </div>
    )
}
