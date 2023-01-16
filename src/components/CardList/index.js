import "bootstrap/dist/css/bootstrap.css";
import styles from './CardList.module.css';

export default function CardList(props) {
    const { children } = props;
    return (
        <div className={styles.card}>
            <div className={"container " + styles.cardContainer}>
                <div className="row g-3">
                    {children}
                </div>
            </div>
        </div>
    );
}
