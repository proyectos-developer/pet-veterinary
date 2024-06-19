import React from 'react'

import ReactPlayer from 'react-player'

import image_cuidados from '../../assets/images/image_cuidados_00.png'
import video_cuidados from '../../assets/videos/video_home_00.mp4'

export default function CuidadosCell({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
                <div style={{width: '100%', height: 285 / proporcional}}>
                    <ReactPlayer
                        className=''
                        url= {video_cuidados}
                        width='100%'
                        height={285 / proporcional}
                        style={{background: '#efefef'}}
                        playing={true}
                        loop={true}/>
                </div>

                <div style={{width: '100%', height: 400 / proporcional}}>
                    <div style={{width: '100%', height: 400 / proporcional, background: '#efefef'}}>

                    </div>
                </div>

                <div style={{width: '100%', height: 400 / proporcional}}>
                    <div className='position-relative' style={{width: '100%', height: 400 / proporcional}}>
                        <img src={image_cuidados} style={{width: '100%', height: 400 / proporcional}}/>
                        <div className='position-absolute top-0 start-0' style={{width: '100%', height: 400 / proporcional, background: 'rgb(39, 39, 39, 0.4)'}}/>
                    </div>
                </div>
        </div>
    )
}