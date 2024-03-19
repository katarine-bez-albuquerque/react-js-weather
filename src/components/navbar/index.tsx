import { Inavbar } from '../../interfaces/navbar';
import styles from './../../styles/page.module.css';

const Navbar = ({children, onsubmit}:Inavbar) => {
    return (
        <nav className={styles.nav}>
            <form onSubmit={onsubmit} className={styles.form}>{children}</form>
        </nav>
    )
}

export default Navbar;