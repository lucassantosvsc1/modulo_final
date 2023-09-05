import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import style from './Login.module.css'

export default function Login() {

    const [data, setData] = useState({
        registroMilitar: '',
        senha: ''
    })

    const [button, setButton] = useState(true)

    useEffect(() => {

        if (data.registroMilitar.length > 6 && data.senha.length > 8) {
            setButton(false)
        } else {
            setButton(true)
        }

    }, [data]  )


    async function fazerLogin(){

        const response = await fetch('http://3.239.122.48:3000/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const dados = await response.json()
        if (response.status === 200) {
            window.localStorage.setItem('token', dados.token)
            console.log(dados.token)
            alert('Login efetuado com sucesso')
            window.location.href = '/home'
            return
        }

        else {
            alert(dados.error)
        }


    }

    return (
        <>
            <Header />
            <main className={style.main}>
                <div className={style.titulo}>
                    <h1>ENTRE COM SUAS CREDENCIAIS</h1>
                </div>

                <section className={style.formulario}>

                    <div>
                        <label htmlFor="registroMilitar">Numero de Registro Militar</label>
                        <input
                            id="registroMilitar"
                            type="text"
                            value={data.registroMilitar}
                            onChange={e => setData({ ...data, registroMilitar: e.target.value })}
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
                            fazerLogin()
                        }}>Entrar</button>
                        <button onClick={() => window.location.href = '/register'}>CADASTRAR-SE</button>
                    </div>


                </section>
            </main>
        </>
    )
}
