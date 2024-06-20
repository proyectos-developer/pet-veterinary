import { useState, useEffect } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import './styles.css'

import GlobalPanel from './components/global/panel.jsx'
import GlobalPanelTablet from './components/global/paneltablet.jsx'
import GlobalPanelCell from './components/global/panelcell.jsx'

import HomePanel from './components/home/panel.jsx'
import HomePanelTablet from './components/home/paneltablet.jsx'
import HomePanelCell from './components/home/panelcell.jsx'

import SobreNosotrosPanel from './components/acercade/nosotros/panel.jsx'
import SobreNosotrosPanelTablet from './components/acercade/nosotros/paneltablet.jsx'
import SobreNosotrosPanelCell from './components/acercade/nosotros/panelcell.jsx'

import NuestroEquipoPanel from './components/acercade/equipo/panel.jsx'
import NuestroEquipoPanelTablet from './components/acercade/equipo/paneltablet.jsx'
import NuestroEquipoPanelCell from './components/acercade/equipo/panelcell.jsx'

import NuestraTiendaPanel from './components/tienda/panel.jsx'
import NuestraTiendaPanelTablet from './components/tienda/paneltablet.jsx'
import NuestraTiendaPanelCell from './components/tienda/panelcell.jsx'

import ProductoPanel from './components/producto/panel.jsx'
import ProductoPanelTablet from './components/producto/paneltablet.jsx'
import ProductoPanelCell from './components/producto/panelcell.jsx'

import BlogPanel from './components/blog/panel.jsx'
import BlogPanelTablet from './components/blog/paneltablet.jsx'
import BlogPanelCell from './components/blog/panelcell.jsx'

import PostPanel from './components/post/panel.jsx'
import PostPanelTablet from './components/post/paneltablet.jsx'
import PostPanelCell from './components/post/panelcell.jsx'

import ContactoPanel from './components/contacto/panel.jsx'
import ContactoPanelTablet from './components/contacto/paneltablet.jsx'
import ContactoPanelCell from './components/contacto/panelcell.jsx'

export default function App() {

  const [width, setWidth] = useState(window.outerWidth)

  useEffect(() => {
      window.addEventListener('resize', handle_resize)

      return () => {
          window.removeEventListener('resize', handle_resize)
      }
  }, [])

  const handle_resize = () => {
      setWidth(window.outerWidth)
  }

    return (
      <BrowserRouter>
          <Routes>
                <Route path='/' element={width < 500 ? <GlobalPanelCell proporcional={499 / width}/> :
                                         width < 991 ? <GlobalPanelTablet proporcional={991 / width}/> :
                                                       <GlobalPanel proporcional={1920 / width}/>}>

                    <Route index element={width < 500 ? <HomePanelCell proporcional={499 / width}/> :
                                          width < 991 ? <HomePanelTablet proporcional={991 / width}/> :
                                                        <HomePanel proporcional={1920 / width}/>}/>

                    <Route path='acerca-de/nosotros' element={width < 500 ? <SobreNosotrosPanelCell proporcional={499 / width}/> :
                                                              width < 991 ? <SobreNosotrosPanelTablet proporcional={991 / width}/> :
                                                                            <SobreNosotrosPanel proporcional={1920 / width}/>}/>
                            
                    <Route path='acerca-de/nuestro-equipo' element={width < 500 ? <NuestroEquipoPanelCell proporcional={499 / width}/> :
                                                                    width < 991 ? <NuestroEquipoPanelTablet proporcional={991 / width}/> :
                                                                                  <NuestroEquipoPanel proporcional={1920 / width}/>}/>
                            
                    <Route path='nuestra-tienda' element={width < 500 ? <NuestraTiendaPanelCell proporcional={499 / width}/> :
                                                          width < 991 ? <NuestraTiendaPanelTablet proporcional={991 / width}/> :
                                                                        <NuestraTiendaPanel proporcional={1920 / width}/>}/>
                            
                    <Route path='producto/:sku' element={width < 500 ? <ProductoPanelCell proporcional={499 / width}/> :
                                                         width < 991 ? <ProductoPanelTablet proporcional={991 / width}/> :
                                                                       <ProductoPanel proporcional={1920 / width}/>}/>
                            
                    <Route path='nuestro-blog' element={width < 500 ? <BlogPanelCell proporcional={499 / width}/> :
                                                        width < 991 ? <BlogPanelTablet proporcional={991 / width}/> :
                                                                      <BlogPanel proporcional={1920 / width}/>}/>
                            
                    <Route path='nuestro-blog/:blog' element={width < 500 ? <PostPanelCell proporcional={499 / width}/> :
                                                              width < 991 ? <PostPanelTablet proporcional={991 / width}/> :
                                                                            <PostPanel proporcional={1920 / width}/>}/>

                    <Route path='contactanos' element={width < 500 ? <ContactoPanelCell proporcional={499 / width}/> :
                                                       width < 991 ? <ContactoPanelTablet proporcional={991 / width}/> :
                                                                     <ContactoPanel proporcional={1920 / width}/>}/>
                                                
                </Route>
          </Routes>
      </BrowserRouter>
    )
}