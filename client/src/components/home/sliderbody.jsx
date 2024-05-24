import React from 'react'

export default function SliderBody({proporcional}) {

    return (
        <div style={{width: '100%', height: 400 / proporcional, background: '#ff0000'}}>
            <div style={{width: '100%', height: '100%'}}>
                <div id="carouselSliderBody" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselSliderBody" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselSliderBody" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselSliderBody" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" style={{width: '100%', height: 400 / proporcional}}>

                        </div>
                        <div class="carousel-item" style={{width: '100%', height: 400 / proporcional}}>

                        </div>
                        <div class="carousel-item" style={{width: '100%', height: 400 / proporcional}}>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}