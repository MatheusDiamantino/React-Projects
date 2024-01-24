import React from 'react'
import styles from "./BannerCultos.module.css";
import { Link } from 'react-router-dom'

function BannerCultos() {
    return (
        <div>
            <section id="cultos" className={styles.Cultos}>
                <div className={styles.conteudo2}>
                    <h3>
                        Deus está ao seu lado. Venha adorar conosco neste domingo!
                    </h3>
                    <div className={styles.border}>
                        <h4>Horário de Cultos</h4>
                        <h5>Domingo: 9:00am às 10:00am</h5>
                    </div>
                    <p>
                        Venha fazer parte da nossa comunidade! <br />Não se esqueça de trazer
                        sua Bíblia e um coração aberto para adorar.
                    </p>
                    <div >
                        <Link to="/cultos" className={styles.links}>
                            <button className={styles.btn_cultos}>Participe agora</button></Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BannerCultos