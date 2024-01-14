import React from 'react'
import { Link } from 'react-router-dom'
import ButtonLink from '../layout/ButtonLink'
import { FaHome, FaFacebook } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import styles from './Form.module.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Formulario from '../layout/Formulario'

function Forms() {
    return (
        <div>
            <section className={`${styles.contato} mb-4`}>
                <h2 className={` ${styles.titulo}`}>Contato</h2>
                <p className={` text-center w-responsive mx-auto mb-5 `}>
                    Tem alguma dúvida ou feedback? Não hesite em nos contatar diretamente.
                    Nossa equipe retornará a você dentro de algumas horas para ajudar.
                </p>

                <div className="row col-md-12">
                    <div className={`col-md-9 mb-md-0 mb-5`}>
                        <Formulario />
                        <div className={styles.btn_form}>
                            <ButtonLink to="/" text="Enviar" />
                        </div>
                    </div>

                    <div className="col-md-3 text-center">
                        <ul className={`list-unstyled mb-0 ${styles.contato_item}`}>
                            <Link to="https://www.google.com.br/maps/place/R.+das+Orqu%C3%ADdeas,+328+-+Jardim+Marilia,+Jandira+-+SP,+06606-320/@-23.5341909,-46.9122251,17z/data=!3m1!4b1!4m5!3m4!1s0x94cf06aeddb769db:0xe5c82c968d57cd44!8m2!3d-23.5341909!4d-46.9096502?entry=ttu" className={styles.links}>
                                <li className="d-flex align-items-center">
                                    <FaHome className={`mr-2 ${styles.icon}`} />
                                    <p>Rua das Orquídeas, 328, Jandira/SP</p>
                                </li>
                            </Link>
                            <Link to="https://mail.google.com/mail/u/0/#inbox?compose=new" className={styles.links}>
                                <li className="d-flex align-items-center">
                                    <MdOutgoingMail className={`mr-2 ${styles.icon}`} />
                                    <p>pastordoze12@gmail.com</p>
                                </li>
                            </Link>
                            <Link to="https://www.facebook.com/PastorDoze" className={styles.links}>
                                <li className="d-flex align-items-center">
                                    <FaFacebook className={`mr-2 ${styles.icon}`} />
                                    <p>PastorDoze</p>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Forms