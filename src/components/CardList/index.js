import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import styles from './CardList.module.css';

export default function CardList(props) {
    const { children } = props;
    const [childrenHighlight, setChildrenHighlight] = useState([]);
    useEffect(() => {
        const highlightOrder = [3, 1, 2];
        setChildrenHighlight(children.map((_, i) => (highlightOrder[i] || (i + 1)) - 1));
    }, [children]);
    const shiftChildrenLeft = () => {
        console.log("dfefef");
        const right = childrenHighlight.pop();
        setChildrenHighlight([right, ...childrenHighlight]);
    };
    const shiftChildrenRight = () => {
        console.log("dfefef2");
        const left = childrenHighlight.shift();
        setChildrenHighlight([...childrenHighlight, left]);
    };
    const renderItem = (item, idx) => {
        let i = childrenHighlight.findIndex(c => idx === c);
        if (i < 0) i = idx;
        return (
            <div key={idx} style={{ display: 'inline-block', transformOrigin: 'center', transform: `scale(${sizes[i] || 1})`, transition: 'all 0.1s linear', position: 'absolute', left: `${34 * i}%`, opacity: i < 3, zIndex: i === 1 ? 2 : 1 }} className="col-12 col-md-6 col-lg-4">
                {item}
            </div>
        );
    }
    const sizes = [1, 1.3, 1];
    return (
        <div className={styles.card}>
            <div className={"container " + styles.cardContainer} style={{ paddingTop: '60px', minHeight: 'calc(390px + 60px)', overflow: 'hidden' }}>
                <div className="row g-3" style={{ position: 'relative' }}>
                    {children.map((c, i) => (
                        renderItem(c, i)
                    ))}
                </div>
            </div>
            {children.length > 3 && (<>
                <span onClick={() => shiftChildrenLeft()} style={{ cursor: 'pointer', display: 'inline-block', float: 'left', marginLeft: '-40px', marginTop: 'calc(-390px / 2)', transform: 'scale(4)', transformOrigin: 'left bottom' }}>&lt;</span>
                <span onClick={() => shiftChildrenRight()} style={{ cursor: 'pointer', display: 'inline-block', float: 'right', marginRight: '-40px', marginTop: 'calc(-390px / 2)', transform: 'scale(4)', transformOrigin: 'center bottom' }}>&gt;</span>
            </>)}
        </div>
    );
}
