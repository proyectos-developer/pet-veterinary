import React from 'react'

import ImageTitulo from './imagetitulo.jsx'
import NecesitaMascota from './necesitamascota.jsx'
import Encuentranos from './encuentranos.jsx'

export default function SobreNosotrosPanel({proporcional}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <ImageTitulo proporcional={proporcional}/> 
            <NecesitaMascota proporcional={proporcional}/>
            <Encuentranos proporcional={proporcional}/>
        </div>
    )
}