import "bootstrap/dist/css/bootstrap.css";
import Button from 'react-bootstrap/Button';
import styles from './Card.module.css';

export default function Card(props) {
    const { title, description, actionText, coverImage } = props;
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className={styles.card + ' card'}>
                <div style={{ maxHeight: '137px', minHeight: '137px', maxWidth: '300px', overflow: 'hidden', }}>
                    <img src={coverImage} alt={title} style={{ height: "137px", marginTop: 'auto', marginBottom: 'auto' }} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{(description || 'no content').replace(/<[^>]+>/g, '').replace('hellip')}</p>
                    {actionText && <Button variant="primary">{actionText}</Button>}
                </div>
            </div>
        </div>
    );
}
