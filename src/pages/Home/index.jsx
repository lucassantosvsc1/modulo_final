import React from 'react'
import styles from './Base.module.css'
import HeaderLogado from '../../components/HeaderLogado/HeaderLogado'

export default function Home({children}) {
    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
        }}>
            <div>
                <HeaderLogado />
                <div className={styles.barraDeEndereço}>
                    <h1>Home</h1>
                </div>
            </div>

            <div className={styles.corpo}>
                <section className={styles.barraLateral}>

                        <a href="#">
                            <h1>Inicio</h1>
                        </a>
                        <a href="#">
                            <h1>Armas</h1>
                        </a>
                        <a href="#">
                            <h1>Militares</h1>
                        </a>
                        <a href="#">
                            <h1>Registros</h1>
                        </a>
                        <a href="#">
                            <h1>Armeiros</h1>
                        </a>

                </section>

                <section>
                    {children}
                </section>
            </div>


        </div>
    )
}
