import React, { useState } from 'react'

import style from './Header.module.css'

import userLogo from '../../assets/userLogo.png'

import logo from '../../assets/LOGO-GA.svg'

export default function HeaderLogado(props) {

  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className={style.bg_div}>
        <div className={style.logo}>
          <img src={logo} alt="" srcset="" />
        </div>

        <div className={style.bg_userMenu}>
          <div className={style.AreaUserInfo}>
            <h1>Lucas Henrique</h1>
            <div>
              <p>Armeiro</p>

              <div className={style.bg_dropdown}>
                <div className={style.dropdown}>
                  <button className={style.dropbtn}
                    onClick={
                      () => setOpen(!open)
                    }>Menu</button>




                    <div style={{
                      width: '0',
                      height: '0',
                      position: 'relative'
                    }}>
                      <div className={
                      open ? style.dropdown_content : style.dropdown_content_hidden
                    }>
                      <a href="#">Editar Perfil</a>
                      <a href="#">Alterar Senha</a>
                      <a href="#">Sair</a>
                    </div>
                    </div>
                    




                </div>
              </div>


            </div>
          </div>

          <img src={userLogo} alt="" />
        </div>




      </div>
    </header>
  )
}
