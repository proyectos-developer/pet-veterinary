import React from 'react'

export default function FotosSecundariasTablet({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 215 / proporcional, marginBottom: 16 / proporcional}}>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 215 / proporcional}}>
                    <div className='rounded' style={{width: 215 / proporcional, height: 215 / proporcional, background: '#bdbdbd'}}/>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 215 / proporcional}}>
                    <div className='rounded' style={{width: 215 / proporcional, height: 215 / proporcional, background: '#bdbdbd'}}/>
                </div>
            </div>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 215 / proporcional, marginBottom: 16 / proporcional}}>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 215 / proporcional}}>
                    <div className='rounded' style={{width: 215 / proporcional, height: 215 / proporcional, background: '#bdbdbd'}}/>
                </div>
                <div className='d-flex justify-content-center' style={{width: '100%', height: 215 / proporcional}}>
                    <div className='rounded' style={{width: 215 / proporcional, height: 215 / proporcional, background: '#bdbdbd'}}/>
                </div>
            </div>
        </div>
    )
}