import React from 'react'
import styles from './ButtonLink.module.css'
import { Link } from 'react-router-dom'

function ButtonLink({ to, text }) {
    return (
        <Link to={to} className={styles.botaoCTA_2}>
            {text}
        </Link>
    )
}

export default ButtonLink