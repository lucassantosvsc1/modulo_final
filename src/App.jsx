import React from 'react'
import Header from './components/Header/Header'

import arm1 from './assets/IMG_ARM1.png'
import arm2 from './assets/IMG_ARM2.png'

import appStyle from './App.module.css'

export function App() {
  return (
    <div id={appStyle.base}>
      <Header />
      <main className={appStyle.main}>
        
        <section>

          <img src={arm1} alt="" />
          <h1>Gerindo com Maestria</h1>
          <h1>Garantindo a Ordem.</h1>
          <button onClick={() => window.location.href = '/login'}>FAZER LOGIN</button>

        </section>


        <section>

          <img src={arm2} alt="" />
          <h1>Controlando com Precisão </h1>
          <h1>Garantindo a Segurança</h1>
          <button onClick={() => window.location.href = '/register'}>CADASTRE-SE</button>

        </section>


      </main>
    </div>
  )
}
