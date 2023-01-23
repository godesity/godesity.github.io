import styles from "./FooterStyle.module.css"

export default function Footer() {

    return (
        <div className={styles.footerStyle}>
            <p >Copyright © {new Date().getFullYear() - 1} - {new Date().getFullYear()} Go Desity AB. All Rights Reserved</p>
        </div>
    );
}
