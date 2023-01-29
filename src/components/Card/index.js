import "bootstrap/dist/css/bootstrap.css";
import Button from 'react-bootstrap/Button';
import styles from './Card.module.css';
import { Link } from "react-router-dom";

export default function Card(props) {
    const { title, description, actionText, actionLink, coverImage } = props;
    const renderCard = () => {
        return (<>
            {!actionText && <div className={styles.cardImageContainer}> <img src={coverImage} alt={title} className={styles.cardImage} /> </div>}
            {actionText && <Link className={styles.cardImageContainer} to={actionLink}> <img src={coverImage} alt={title} className={styles.cardImage} /> </Link>}
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{(description || 'no content').replace(/<[^>]+>/g, '').replace('hellip')}</p>
                {actionText && <Link to={actionLink}> <Button className={styles.cardAction} variant="primary">{actionText}</Button></Link>}
            </div>
        </>);
    }
    return (
        <div>
            {!actionText && <Link className={styles.card + ' card'} to={actionLink}> {renderCard()} </Link>}
            {actionText && <div className={styles.card + ' card'}> {renderCard()} </div>}
        </div>
    );
}
