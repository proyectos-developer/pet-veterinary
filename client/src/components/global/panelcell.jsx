import React from 'react'
import { Outlet } from 'react-router-dom'

import MenuSuperiorCell from '../comun/menusuperiorcell.jsx'

export default function GlobalPanelCell({proporcional}) {

    return (
        <div className='position-relative' style={{width: '100%', height: '100%'}}>
          <div className='position-fixed start-0 top-0' style={{width: '100%', height: 'auto'}}>
            <MenuSuperiorCell proporcional={proporcional}/>
          </div>
          <Outlet/>
        </div>
    )
}