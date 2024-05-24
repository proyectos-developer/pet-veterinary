import React from 'react'

export default function FotoPrincipal({proporcional}) {

    return (
        <div className='d-flex justify-content-center' style={{width: '100%', height: 'auto'}}>
            <div className='rounded' style={{width: 740 / proporcional, height: 740 / proporcional, background: '#bdbdbd'}}/>
        </div>
    )
}