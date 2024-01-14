import React from 'react'
import styles from './Form.module.css'
function Form() {
    return (
        <form id="contact-form" name="contact-form" className={styles.form}>
            <div className="row">
                <div className="col-md-6">
                    <div className="md-form mb-0">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                        />
                        <label htmlFor="name">Seu nome</label>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="md-form mb-0">
                        <input
                            type="text"
                            id="email"
                            name="email"
                            className="form-control"
                        />
                        <label htmlFor="email">Seu Email</label>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="md-form mb-0">
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            className="form-control"
                        />
                        <label htmlFor="subject">Assunto</label>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="md-form">
                        <textarea
                            type="text"
                            id="message"
                            name="message"
                            rows="2"
                            className="form-control md-textarea"
                        ></textarea>
                        <label htmlFor="message">Mensagem</label>
                    </div>
                </div>
            </div>

         
        </form>
    )
}

export default Form