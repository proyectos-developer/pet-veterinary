import React from 'react'

export default function FotosSecundariasTablet({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 150 / proporcional, marginBottom: 8.3 / proporcional}}>
                <div className='rounded' style={{width: 150 / proporcional, height: 150 / proporcional, background: '#bdbdbd'}}/>
            </div>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 150 / proporcional, marginBottom: 8.3 / proporcional}}>
                <div className='rounded' style={{width: 150 / proporcional, height: 150 / proporcional, background: '#bdbdbd'}}/>
            </div>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 150 / proporcional, marginBottom: 8.3 / proporcional}}>
                <div className='rounded' style={{width: 150 / proporcional, height: 150 / proporcional, background: '#bdbdbd'}}/>
            </div>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 150 / proporcional}}>
                <div className='rounded' style={{width: 150 / proporcional, height: 150 / proporcional, background: '#bdbdbd'}}/>
            </div>
        </div>
    )
}