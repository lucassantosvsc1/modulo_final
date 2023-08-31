import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import style from './Login.module.css'

export default function Login() {

    const [data, setData] = useState({
        numeroRegistro: '',
        senha: ''
    })

    const [button, setButton] = useState(true)

    useEffect(() => {

        if (data.numeroRegistro.length > 6 && data.senha.length > 8) {
            setButton(false)
        } else {
            setButton(true)
        }

    }, [data]  )


    return (
        <>
            <Header />
            <main className={style.main}>
                <div className={style.titulo}>
                    <h1>ENTRE COM SUAS CREDENCIAIS</h1>
                </div>

                <section className={style.formulario}>

                    <div>
                        <label htmlFor="numeroRegistro">Numero de Registro</label>
                        <input
                            id="numeroRegistro"
                            type="text"
                            value={data.numeroRegistro}
                            onChange={e => setData({ ...data, numeroRegistro: e.target.value })}
                            placeholder='Entre com seu numero de Registro' />
                    </div>
                    <div>
                        <label htmlFor="senha   ">Senha</label>
                        <input
                            id="senha" 
                            type="password" 
                            value={data.senha} 
                            onChange={e => setData({ ...data, senha: e.target.value })}
                            placeholder='Entre com sua Senha' />
                    </div>

                    <div>
                        <button disabled={button} type="submit" onClick={() =>{
                            window.localStorage.setItem('token', '123')
                            window.location.href = '/home'
                        }}>Entrar</button>
                        <button onClick={() => window.location.href = '/register'}>CADASTRAR-SE</button>
                    </div>


                </section>
            </main>
        </>
    )
}
