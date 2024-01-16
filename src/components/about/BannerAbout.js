import React from 'react'
import banner from '../img/banner.webp';
import styles from './BannerAbout.module.css';
import info from '../img/info.webp'
import { Link } from 'react-router-dom'

function BannerAbout() {
    return (
        <div>
            <img src={banner} loading="lazy" className={styles['banner-img']} alt="Banner" />
            <section className={styles.sobre_section}>
                <img src={info} alt='info' />
                <div className={styles.info}>
                    <h5><i>Nosso chamado?</i></h5>
                    <h1>Ministério Reedificando o Altar</h1>
                    <p>É enfatizar a importância da entrega total da vida a Deus, simbolizada pelo altar. Ao colocar sua vida como foco, o M.R.A ressalta o convite para que as pessoas dediquem sua existência ao serviço e Adoração a Deus.</p>
                    <Link to="https://www.facebook.com/groups/ministerioreedificandooaltar">
                        <button className={styles.btn}>Visite Aqui!</button>
                    </Link>
                </div>
            </section></div>
    )
}

export default BannerAbout