import React from 'react'
import { Outlet } from 'react-router-dom'

import MenuSuperiorTablet from '../comun/menusuperiortablet.jsx'

export default function GlobalPanelTablet({proporcional}) {

    return (
        <div className='position-relative' style={{width: '100%', height: '100%'}}>
          <div className='position-fixed start-0 top-0' style={{width: '100%', height: 'auto'}}>
            <MenuSuperiorTablet proporcional={proporcional}/>
          </div>
          <Outlet/>
        </div>
    )
}