import "bootstrap/dist/css/bootstrap.css";
import Button from 'react-bootstrap/Button';
import styles from './Card.module.css';

export default function Card(props) {
    const { title, description, actionText, coverImage } = props;
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className={styles.card + ' card'}>
                <div className={styles.cardImageContainer}>
                    <img src={coverImage} alt={title} className={styles.cardImage} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{(description || 'no content').replace(/<[^>]+>/g, '').replace('hellip')}</p>
                    {actionText && <Button className={styles.cardAction} variant="primary">{actionText}</Button>}
                </div>
            </div>
        </div>
    );
}
