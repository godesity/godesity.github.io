
import logo from '../../logo.svg';
import styles from './Logo.module.css';


const Logo = () => {
    return (

        <img alt="logo" className={styles.logo} src={logo}></img>
    );
}

export default Logo;
