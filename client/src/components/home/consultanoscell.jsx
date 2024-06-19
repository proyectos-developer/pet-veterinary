import React from 'react'
import GoogleMapReact from 'google-map-react';

import icono_location from '../../assets/iconos/icono_location_red_96.png'

import image_consultarnos from '../../assets/images/image_consultarnos_00.png'

export default function ConsultanosCell({proporcional}) {
    
    const AnyReactComponent = ({ text }) => <img src={icono_location} style={{width: 48 / proporcional, height: 48 / proporcional}}/>
 
    const defaultProps_1 = {
        center: {
          lat: -12.1186707,
          lng: -77.0219015
        },
        zoom: 14
      };

    return (
        <div style={{width: '100%', height: 'auto'}}>
                    <div style={{width: '100%', height: 400 / proporcional, background: '#ff0000'}}>
                        
                    </div>
                    
                    <div style={{width: '100%', height: 400 / proporcional, background: '#ff0000'}}>
                        <img src={image_consultarnos} style={{width: '100%',  height: 400 / proporcional}}/>
                    </div>

                <div style={{width: '100%', height: 400 / proporcional}}>
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
