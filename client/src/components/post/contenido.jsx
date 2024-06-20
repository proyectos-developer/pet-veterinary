import React from 'react'

import icono_calendar from '../../assets/iconos/icono_calendar_red_96.png'
import icono_chat from '../../assets/iconos/icono_chat_red_96.png'
import icono_tag from '../../assets/iconos/icono_tag_red_96.png'
import icono_ticket from '../../assets/iconos/icono_ticket_red_96.png'

import icono_facebook from '../../assets/iconos/icono_facebook_red_96.png'
import icono_instagram from '../../assets/iconos/icono_instagram_red_96.png'
import icono_twitter from '../../assets/iconos/icono_twitter_red_96.png'
import icono_linkedin from '../../assets/iconos/icono_linkedin_red_96.png'

import icono_light from '../../assets/iconos/icono_light_red_96.png'

export default function Contenido({proporcional, articulo}) {

    return (
        <div style={{width: '100%', height: 'auto'}}>
            <div style={{width: '100%', height: 800 / proporcional, marginBottom: 36 / proporcional}}>
                <img src={articulo.imagen} style={{width: '100%', height: 800 / proporcional}}/>
            </div>
            <div style={{width: '100%', height: 'auto', marginBottom: 32 / proporcional}}>
                <div className='d-flex' style={{width: '100%', height: 32 / proporcional, marginBottom: 8 / proporcional}}>
                    <p style={{fontSize: 15 / proporcional, fontWeight: 400, color: 'rgb(143, 144, 147)', fontFamily: 'Open Sans, sans-serif', lineHeight: `${32 / proporcional}px`,
                        marginBottom: 0, marginRight: 14 / proporcional}}>
                        Por Alexa Jhonson
                    </p>
                    <div className='d-flex' style={{width: 'auto', height: 32 / proporcional, marginRight: 14 / proporcional}}>
                        <img src={icono_calendar} style={{width: 32 / proporcional, height: 32 / proporcional, padding: 4 / proporcional}}/>
                        <p style={{fontSize: 15 / proporcional, fontWeight: 400, color: 'rgb(143, 144, 147)', fontFamily: 'Open Sans, sans-serif', lineHeight: `${32 / proporcional}px`,
                            marginBottom: 0}}>
                            Junio 20, 2024
                        </p>
                    </div>
                    <div className='d-flex' style={{width: 'auto', height: 32 / proporcional, marginRight: 14 / proporcional}}>
                        <img src={icono_chat} style={{width: 32 / proporcional, height: 32 / proporcional, padding: 4 / proporcional}}/>
                        <p style={{fontSize: 15 / proporcional, fontWeight: 400, color: 'rgb(143, 144, 147)', fontFamily: 'Open Sans, sans-serif', lineHeight: `${32 / proporcional}px`,
                            marginBottom: 0}}>
                            0
                        </p>
                    </div>
                    <div className='d-flex' style={{width: 'auto', height: 32 / proporcional}}>
                        <img src={icono_tag} style={{width: 32 / proporcional, height: 32 / proporcional, padding: 4 / proporcional}}/>
                        <p style={{fontSize: 15 / proporcional, fontWeight: 400, color: 'rgb(143, 144, 147)', fontFamily: 'Open Sans, sans-serif', lineHeight: `${32 / proporcional}px`,
                            marginBottom: 0}}>
                            Accesorios
                        </p>
                    </div>
                    <div className='d-flex' style={{width: 'auto', height: 32 / proporcional}}>
                        <img src={icono_ticket} style={{width: 32 / proporcional, height: 32 / proporcional, padding: 4 / proporcional}}/>
                        <p style={{fontSize: 15 / proporcional, fontWeight: 400, color: 'rgb(143, 144, 147)', fontFamily: 'Open Sans, sans-serif', lineHeight: `${32 / proporcional}px`,
                            marginBottom: 0}}>
                            Doméstico
                        </p>
                    </div>
                </div>
                <p style={{fontSize: 40 / proporcional, fontWeight: 900, color: 'rgb(66, 66, 66)', fontFamily: 'Nunito, sans-serif', lineHeight: `${48 / proporcional}px`,
                    marginBottom: 11 / proporcional}}>
                    {articulo.titulo}
                </p>
                <p style={{fontSize: 15 / proporcional, fontWeight: 400, color: 'rgb(143, 144, 147)', fontFamily: 'Open, sans-serif', lineHeight: `${25 / proporcional}px`,
                    marginBottom: 11 / proporcional, marginTop: 10 / proporcional}}>
                    Te feugiat recteque eloquentiam est. Sed at audire ornatus incorrupte, mel ferri bonorum deserunt te. Accusata postulant mei eu, quot facilisis no eam. Quo in erat noster urbanitas, est quis possim oporteat te, his ut tempor recusabo salutatus. At perfecto maluisset vim, fugit insolens delicata pro id. Meis prodesset ad duo, eu nam detracto honestatis. Fugit persius est an, ei nobis mandamus nec. Ei mei liber erroribus, usu viris constituto cu. Maiorum feugait persequeris has in. Eos hendrerit definiebas ad, his euripidis efficiantur no, duo ea meis gloriatur possim.
                </p>
                <div className='d-flex' style={{width: '100%', height: 94 / proporcional, padding: 15 / proporcional}}>
                    <img src={icono_light} style={{width: 64 / proporcional, height: 64 / proporcional, marginRight: 32 / proporcional}}/>
                    <p style={{fontSize: 19 / proporcional, fontWeight: 400, color: 'rgb(66, 66, 66)', fontFamily: 'Open, sans-serif', lineHeight: `${32 / proporcional}px`,
                        marginBottom: 0 / proporcional}}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magn. Aliqua. Ut enim ad minim.
                    </p>
                </div>
                <p style={{fontSize: 15 / proporcional, fontWeight: 400, color: 'rgb(143, 144, 147)', fontFamily: 'Open, sans-serif', lineHeight: `${25 / proporcional}px`,
                    marginBottom: 32 / proporcional}}>
                    Pro ipsum omnium salutatus te, ut animal posidonium mediocritatem cum, ferri platonem definitiones ad mel. Scripta eligendi argumentum per ut. Usu meliore accommodare vituperatoribus an. Duo eu diam scripserit. Est et deleniti definitiones, enim habeo prima ea eos, per sumo constituto eu. In nec veritus democritum, id paulo veniam latine qui. His ut labitur eripuit gloriatur, at vero partem mollis mea, viris principes repudiandae per cu. Ex sit mazim putent vocibus, cu mea mazim sonet. Ad mucius honestatis duo, ei eleifend quaerendum intellegebat sed, pri rebum augue no. Lorem ipsum dolor sit amet, ne mel detraxit voluptatum, mucius consetetur per ex. Mei cu ullum homero delicatissimi, id iusto homero eos. Eos hendrerit definiebas ad, his euripidis efficiantur no, duo ea meis gloriatur. Nam dico nostrud mandamus id, pro tota tollit appellantur id, commune accumsan interpretaris no duo.An indoctum argumentum interesset cum. Ut elit evertitur vel. Has ei quod ridens ullamcorper, et consulatu vulputate consetetur nec. Soleat invidunt posidonium ne cum, integre docendi erroribus ex qui.
                </p>
                <p style={{fontSize: 15 / proporcional, fontWeight: 400, color: 'rgb(143, 144, 147)', fontFamily: 'Open, sans-serif', lineHeight: `${25 / proporcional}px`,
                    marginBottom: 0 / proporcional}}>
                    Te feugiat recteque eloquentiam est. Sed at audire ornatus incorrupte, mel ferri bonorum deserunt te. Accusata postulant mei eu, quot facilisis no eam. Quo in erat noster urbanitas, est quis possim oporteat te, his ut tempor recusabo salutatus. At perfecto maluisset vim, fugit insolens delicata pro id. Meis prodesset ad duo, eu nam detracto honestatis. Fugit persius est an, ei nobis mandamus nec. Ei mei liber erroribus, usu viris constituto cu. Maiorum feugait persequeris has in.Lorem ipsum dolor sit amet, ne mel detraxit voluptatum, mucius consetetur per ex. Mei cu ullum homero delicatissimi, id iusto homero eos. Eos hendrerit definiebas ad, his euripidis efficiantur no, duo ea meis gloriatur.
                </p>
            </div>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 350 / proporcional, marginBottom: 16 / proporcional}}>
                <div style={{width: '74%', height: 300 / proporcional}}>
                    <div style={{width: '100%', height: 300 / proporcional, background: 'rgba(239, 239, 239, 0.8)'}}/>
                </div>
                <div style={{width: '24%', height: 300 / proporcional}}>
                    <div style={{width: '100%', height: 300 / proporcional, background: 'rgba(239, 239, 239, 0.8)'}}/>
                </div>
            </div>
            <div className='d-flex justify-content-between' style={{width: '100%', height: 350 / proporcional, marginBottom: 16 / proporcional}}>
                <div style={{width: '24%', height: 300 / proporcional}}>
                    <div style={{width: '100%', height: 300 / proporcional, background: 'rgba(239, 239, 239, 0.8)'}}/>
                </div>
                <div style={{width: '74%', height: 300 / proporcional}}>
                    <div style={{width: '100%', height: 300 / proporcional, background: 'rgba(239, 239, 239, 0.8)'}}/>
                </div>
            </div>
            <p style={{fontSize: 25 / proporcional, fontWeight: 700, color: 'rgb(74, 74, 74)', fontFamily: 'Amatic SC', lineHeight: `${26 / proporcional}px`,
                marginBottom: 32 / proporcional, textAlign: 'center'}}>
                “Creando recuerdos con tus seres queridos”
            </p>
            <p style={{fontSize: 15 / proporcional, fontWeight: 400, color: 'rgb(143, 144, 147)', fontFamily: 'Open Sans, sans-serif', lineHeight: `${25 / proporcional}px`,
                marginBottom: 64 / proporcional, textAlign: 'center'}}>
                Lorem ipsum dolor sit amet, diceret legimus te mei. Ea dicant tantas ponderum eam. Duo saepe mandamus deterruisset et. His ut perfecto recteque. No homero iuvaret percipit usu, an ludus senserit sit. Te feugiat recteque eloquentiam est. Sed at audire ornatus incorrupte, mel ferri bonorum deserunt te. Accusata postulant mei eu, quot facilisis no eam. Quo in erat noster urbanitas, est quis possim oporteat te, his ut tempor recusabo salutatus. At perfecto maluisset vim, fugit insolens delicata pro id. Lorem ipsum dolor sit amet, diceret legimus te mei. Ea dicant tantas ponderum eam. Duo saepe mandamus deterruisset et. His ut perfecto recteque. No homero iuvaret percipit usu, an ludus senserit sit. Te feugiat recteque eloquentiam est. Sed at audire ornatus incorrupte, mel ferri bonorum deserunt te. Accusata postulant mei eu, quot facilisis no eam. Quo in erat noster urbanitas, est quis possim oporteat te, his ut tempor recusabo salutatus. At perfecto maluisset vim, fugit insolens delicata pro id. Nam dico nostrud Lorem ipsum dolor sit amet, ne mel detraxit voluptatum, mucius consetetur per ex.
            </p>
            <div className='d-flex justify-content-center' style={{width: '100%', height: 48 / proporcional}}>
                <img src={icono_facebook} className='rounded-circle' style={{width: 48 / proporcional, height: 48 / proporcional, padding: 6 / proporcional}}/>
                <img src={icono_instagram} className='rounded-circle' style={{width: 48 / proporcional, height: 48 / proporcional, padding: 6 / proporcional}}/>
                <img src={icono_linkedin} className='rounded-circle' style={{width: 48 / proporcional, height: 48 / proporcional, padding: 6 / proporcional}}/>
                <img src={icono_twitter} className='rounded-circle' style={{width: 48 / proporcional, height: 48 / proporcional, padding: 6 / proporcional}}/>
            </div>
        </div>
    )
}
