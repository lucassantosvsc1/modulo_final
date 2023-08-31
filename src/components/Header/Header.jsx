import React from 'react'

import style from './Header.module.css'

import logo from '../../assets/LOGO-GA.svg'

export default function Header() {
  return (
    <header>
        <div className={style.bg_div}>
            <img src={logo} alt="" srcset="" />
        </div>
    </header>
  )
}
