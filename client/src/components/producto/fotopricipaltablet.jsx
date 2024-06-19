import React from 'react'

export default function FotoPrincipalTablet({proporcional}) {

    return (
        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto', marginBottom: 25 / proporcional}}>
            <div className='rounded' style={{width: 625 / proporcional, height: 625 / proporcional, background: '#bdbdbd'}}/>
        </div>
    )
}