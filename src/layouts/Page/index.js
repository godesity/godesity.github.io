import styles from "./Page.module.css";
import Logo from '../../components/Logo';

export default function Kunder(props) {
  const { title, children } = props;
  return (
    <div>
      <div className={styles.loading}><Logo duration={10000} duration2={2000} /><div>Loading...</div></div>
      <div className={styles.titleStyle}>{title}</div>
      <div className={styles.contentBody}>
        {children}
      </div>
    </div>
  );
}
