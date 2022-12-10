import styles from "./Page.module.css";

export default function Kunder(props) {
  const { title, children } = props;
  return (
    <div>
      <div className={styles.titleStyle}>{title}</div>
      <div className={styles.contentBody}>
        {children}
      </div>
    </div>
  );
}
