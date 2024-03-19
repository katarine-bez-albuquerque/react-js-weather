import { Ilayout } from '../../interfaces/layout';
import styles from './../../styles/page.module.css';

const Main = ({children}:Ilayout) => {
    return(
        <main className={styles.main}>
            {children}
        </main>
    )
}

export default Main;