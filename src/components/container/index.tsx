import { Ilayout } from '../../interfaces/layout';
import styles from './../../styles/page.module.css';

const Container = ({children}:Ilayout) => {
    return (
        <div id="root">
            <div className={styles.page}>
                <div className={styles.container}>
                    {children}
                </div>
           </div>
        </div>        
    )
}

export default Container;