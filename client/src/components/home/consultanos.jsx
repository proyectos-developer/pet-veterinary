import React from 'react'
import GoogleMapReact from 'google-map-react';

import icono_location from '../../assets/iconos/icono_location_red_96.png'

import image_consultarnos from '../../assets/images/image_consultarnos_00.png'

export default function Consultanos({proporcional}) {
    
    const AnyReactComponent = ({ text }) => <img src={icono_location} style={{width: 48 / proporcional, height: 48 / proporcional}}/>
 
    const defaultProps_1 = {
        center: {
          lat: -12.1186707,
          lng: -77.0219015
        },
        zoom: 14
      };

    return (
        <div style={{width: '100%', height: 600 / proporcional}}>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 600 / proporcional}}>
                <div className='d-flex justify-content-between' style={{width: '50%', height: 600 / proporcional}}>
                    <div style={{width: '50%', height: 600 / proporcional, background: '#ff0000'}}>
                        
                    </div>
                    
                    <div style={{width: '50%', height: 600 / proporcional, background: '#ff0000'}}>
                        <img src={image_consultarnos} style={{width: '100%',  height: 600 / proporcional}}/>
                    </div>
                </div>

                <div style={{width: '50%', height: 600 / proporcional}}>
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
        </div>
    )
}
