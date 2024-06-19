import React from 'react'

export default function ConoceEquipoTablet({proporcional}) {

        return (
            <div style={{width: '100%', height: 'auto', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional, paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
                <div style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 50 / proporcional}}>
                        <div style={{width: '60%', height: 'auto'}}>
                            <p style={{fontSize: 50 / proporcional, lineHeight: `${55 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(66, 66, 66)', cursor: 'default', fontWeight: 900, 
                                fontFamily: 'Nunito, sans-serif', textAlign: 'center'}}>
                                Conoce a nuestro maravilloso equipo
                            </p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                        <div style={{width: '50%', height: 'auto'}}>
                            <p style={{fontSize: 24 / proporcional, lineHeight: `${32 / proporcional}px`, marginBottom: 0 / proporcional, color: 'rgb(143, 144, 147)', cursor: 'default', fontWeight: 400, 
                                fontFamily: 'Open Sans, sans-serif', textAlign: 'center'}}>
                                Lorem ipsum dolor sit amet, est vide voluptaria ex, nec in hinc solum sat. Neceessitatibus sonet soluta, vim eu esse accusamus.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
}