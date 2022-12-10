import styles from "./PageFrame.module.css";

export default function PageFrame(props) {
  return <div className={styles.pageFrame}>{props.children}</div>;
}
