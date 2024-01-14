import loading from '../img/loading.svg'
import styles from './Loading.module.css'

function Loading(){
    return(
        <div className={styles.loader}>
            <img className={styles.loading} src={loading} alt='loading'/>
        </div>
    )
}

export default Loading