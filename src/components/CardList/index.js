import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import styles from './CardList.module.css';

export default function CardList(props) {
    const { children } = props;
    const [childrenHighlight, setChildrenHighlight] = useState([]);
    useEffect(() => {
        const highlightOrder = [4, 3, 1, 2, 5];
        setChildrenHighlight(children.map((_, i) => (highlightOrder[i] || (i + 1)) - 1));
    }, [children]);
    const shiftChildrenLeft = () => {
        const right = childrenHighlight.pop();
        setChildrenHighlight([right, ...childrenHighlight]);
    };
    const shiftChildrenRight = () => {
        const left = childrenHighlight.shift();
        setChildrenHighlight([...childrenHighlight, left]);
    };
    const renderItem = (item, idx) => {
        let i = childrenHighlight.findIndex(c => idx === c);
        if (i < 0) i = idx;
        const styleItems = [styles.cardItem1, styles.cardItem2, styles.cardItem3];
        if (children.length > 3) {
            styleItems.unshift(styles.cardItem0);
        }
        if (children.length > 4) {
            styleItems.push(styles.cardItem4);
        }
        const styleItem = styleItems[i];
        return (
            <div key={idx} className={`col-12 col-md-6 col-lg-4 ${styles.cardItem} ${styleItem}`}>
                {item}
            </div>
        );
    }
    const sizes = [1, 1.3, 1];
    return (
        <div className={styles.card}>
            <div className={"container " + styles.cardContainer}>
                <div className="row g-3" style={{ position: 'relative' }}>
                    {children.map((c, i) => (
                        renderItem(c, i)
                    ))}
                </div>
            </div>
            {children.length > 3 && (<>
                <span onClick={() => shiftChildrenLeft()} className={styles.lt}>&lt;</span>
                <span onClick={() => shiftChildrenRight()} className={styles.gt}>&gt;</span>
            </>)}
        </div>
    );
}
