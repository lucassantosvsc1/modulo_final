import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'

import style from './Register.module.css'

export default function Register() {


    const [data, setData] = useState({
        numeroRegistro: '',
        nome: '',
        senha: '',
        confirmarSenha: ''

    })

    const [button, setButton] = useState(true)

    useEffect(() => {

        if (data.numeroRegistro.length > 6 && data.senha.length > 8 && data.senha === data.confirmarSenha && data.nome.length > 7) {
            setButton(false)
        } else {
            setButton(true)
        }

    }, [data])

    async function fazerCadastro() {

        const credenciaisLogin = {
            registroMilitar: data.numeroRegistro,
            senha: data.senha,
            nome: data.nome
            
        }

        const response = await fetch('http://3.239.122.48:3000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credenciaisLogin)
    })

        const dados = await response.json()
        if (response.status === 201) {
            alert('Cadastro efetuado com sucesso')
            window.location.href = '/'
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
                    <h1>COMPLETE SEU CADASTRO</h1>
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
                        <label htmlFor="nome">Nome</label>
                        <input
                            id="nome"
                            type="text"
                            value={data.nome}
                            onChange={e => setData({ ...data, nome: e.target.value })}
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
                        <label htmlFor="senhaC   ">Confirmar Senha</label>
                        <input
                            id="senhaC"
                            type="password"
                            value={data.confirmarSenha}
                            onChange={e => setData({ ...data, confirmarSenha: e.target.value })}
                            placeholder='Entre com sua Senha' />
                    </div>

                    <div>
                        <button disabled={button} type="submit" onClick={() =>{
                            fazerCadastro()
                        }}>CADASTRAR</button>
                        <button onClick={() => window.location.href = '/login'}>FAZER LOGIN</button>
                    </div>


                </section>
            </main>
        </>
    )
}
