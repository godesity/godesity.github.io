import styles from "./Socials.module.css";
import Github from "../../assets/imgs/logo/github.png";
import LinkedIn from "../../assets/imgs/logo/linkedin.png";
import Email from "../../assets/imgs/logo/email.png";
import Kvadrat from "../../assets/imgs/logo/kvadrat.png";
import { useEffect, useState } from "react";

export default function Socials() {
    const [marginTop, setMarginTop] = useState('0px');
    const handleScroll = () => {
        setMarginTop(`${Math.min(-175, -130 - (window.document.body.scrollHeight - window.scrollY - window.innerHeight))}px`);
    };
    useEffect(() => {
        const intervalId = setInterval(() => handleScroll(), 1000);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(intervalId);
        };
    }, []);
    return (
        <div className={styles.socials} style={{ marginTop }}>
            <a alt="Github" href="https://github.com/jolin1337"><img src={Github} alt="Github" /></a>
            <a alt="LinkedIn" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jolin1337/"><img src={LinkedIn} alt="LinkedIn" /></a>
            <a alt="Email" href="mailto:johannes@godesity.se"><img src={Email} alt="Email" /></a>
            <a alt="Kvadrat" target="_blank" rel="noreferrer" href="https://kvadrat.se/anlita-kvadrat/hitta-konsult/johannes-lind%C3%A9n/"><img src={Kvadrat} alt="Kvadrat" /></a>
        </div>
    );
}
