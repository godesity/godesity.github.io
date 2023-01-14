import "bootstrap/dist/css/bootstrap.css";
import Button from 'react-bootstrap/Button';
import styles from './Card.module.css';

export default function Card(props) {
    const { title, description, actionText, coverImage } = props;
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
                <div style={{ minHeight: '137px', maxWidth: '300px', paddingTop: '50%' }}>
                    <img src={coverImage} alt={title} width="243" style={{ marginTop: '-50%' }} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    {actionText && <Button variant="primary">{actionText}</Button>}
                </div>
            </div>
        </div>
    );
}
