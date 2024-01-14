import React from 'react'
import styles from "./BannerSobre.module.css";
import ButtonLink from '../layout/ButtonLink';
import sobre from '../img/sobre.png'

function BannerSobre() {
    return (
        <div>
            <section>
                <div className={styles.conteudo}>
                    <img src={sobre} alt="Imagem do Sobre" className={styles.imagem} />
                    <div className={styles.texto}>
                        <h3>Bem-Vindos ao Ministério Reedificando o Altar!</h3>
                        <p>
                            Seja muito bem-vindo à nossa comunidade de fé. No Ministério
                            Reedificando o Altar, acreditamos no poder transformador do amor
                            de Deus e estamos dedicados a criar um ambiente acolhedor onde
                            todos possam experimentar a presença divina, crescer
                            espiritualmente e se conectar em amor e comunhão. Nos nossos
                            cultos, adoramos a Deus de coração aberto, buscamos entender Sua
                            Palavra e inspiramos uns aos outros a viver vidas que refletem o
                            amor e a graça de Jesus Cristo.
                        </p>
                        <p>
                            Se você é um visitante pela primeira vez ou alguém em busca de uma
                            comunidade de fé, convidamos você a se juntar a nós em nossos
                            eventos e atividades. Estamos entusiasmados para compartilhar a
                            jornada da fé contigo!
                        </p>
                        <div className={styles.btn_sobre}>
                            <ButtonLink to="/sobre" text="Descubra mais" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BannerSobre