import styles from "./Page.module.css";
import Logo from '../../components/Logo';
import { useState } from "react";

export default function Kunder(props) {
  const { title, children } = props;
  const [loading, setLoading] = useState(true);
  setTimeout(() => setLoading(false), 2000); // Dummy for now before we introduce async http requests in the state
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
