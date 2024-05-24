import React from 'react'

export default function FotosSecundarias({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                <div className='rounded' style={{width: 150 / proporcional, height: 170 / proporcional, background: '#bdbdbd'}}/>
            </div>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                <div className='rounded' style={{width: 150 / proporcional, height: 170 / proporcional, background: '#bdbdbd'}}/>
            </div>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 20 / proporcional}}>
                <div className='rounded' style={{width: 150 / proporcional, height: 170 / proporcional, background: '#bdbdbd'}}/>
            </div>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
                <div className='rounded' style={{width: 150 / proporcional, height: 170 / proporcional, background: '#bdbdbd'}}/>
            </div>
        </div>
    )
}