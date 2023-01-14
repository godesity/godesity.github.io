import styles from "./Page.module.css";
import Logo from '../../components/Logo';
import { useSelector } from "react-redux";

export default function Kunder(props) {
  const loading = useSelector((state) => state.customers.loading || state.projects.loading);
  const { title, children } = props;
  return (
    <div>
      {loading && <div className={styles.loading}><Logo duration={10000} duration2={2000} /><div>Loading...</div></div>}
      {!loading && (<>
        <div className={styles.titleStyle}>{title}</div>
        <div className={styles.contentBody}>
          {children}
        </div>
      </>)}
    </div>
  );
}
