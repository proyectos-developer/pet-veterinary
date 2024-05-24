import React from 'react'
import GoogleMapReact from 'google-map-react';

import icono_location from '../../../assets/iconos/icono_location_red_96.png'

export default function Encuentranos({proporcional}) {
    
    const AnyReactComponent = ({ text }) => <img src={icono_location} style={{width: 48 / proporcional, height: 48 / proporcional}}/>
 
    const defaultProps_1 = {
        center: {
          lat: -12.1186707,
          lng: -77.0219015
        },
        zoom: 14
      };

    return (
        <div style={{width: '100%', height: 800 / proporcional}}>
            <div className='d-flex' style={{width: '100%', height: 800 / proporcional}}>
                <div style={{width: '50%', height: 800 / proporcional}}>
                    <div className='position-relative' style={{width: '100%', height: 800 / proporcional, background: '#ff0000'}}>
                        <div className='position-absolute top-50 start-50 translate-middle' style={{width: '100%', height: 'auto'}}>
                            <div style={{width: '100%', height: 'auto'}}>
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                                    <p style={{fontSize: 40 / proporcional, lineHeight: `${50 / proporcional}px`, marginBottom: 50 / proporcional, color: 'white', cursor: 'default', fontWeight: 900, 
                                        fontFamily: 'Nunito, sans-serif', textAlign: 'center'}}>
                                        Encuéntranos en estas <br/>ubicaciones, o simplemente <br/>póngase en contacto.
                                    </p>
                                </div>
                                <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                                    <div className='d-flex justify-content-center' style={{width: '35%', height: 'auto'}}>
                                        <p style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 20 / proporcional, color: 'white', cursor: 'default', fontWeight: 400, 
                                            fontFamily: 'Nunito, sans-serif', textAlign: 'center'}}>
                                            251 Purple Sunset, Avenue <br/>BXY 92101 New York pawfriends@mikado.com
                                        </p>
                                    </div>
                                    <div className='d-flex justify-content-center' style={{width: '35%', height: 'auto'}}>
                                        <p style={{fontSize: 22 / proporcional, lineHeight: `${30 / proporcional}px`, marginBottom: 20 / proporcional, color: 'white', cursor: 'default', fontWeight: 400, 
                                            fontFamily: 'Nunito, sans-serif', textAlign: 'center'}}>
                                            156 Chauncey St, Avenue NY <br/>11207 Brooklyn pawfriends@mikado.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='position-relative' style={{width: '50%', height: 800 / proporcional}}>
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
                    <div className='position-absolute top-0 start-0' style={{width: '100%', height: 800 / proporcional, background: 'rgba(39, 39, 39, 0.4)'}}/>
                </div>
            </div>
        </div>
    )
}