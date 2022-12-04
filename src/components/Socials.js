import "../assets/styles/socials.css";
import Github from "../assets/imgs/logo/github.png";
import LinkedIn from "../assets/imgs/logo/linkedin.png";
import Email from "../assets/imgs/logo/email.png";
import Kvadrat from "../assets/imgs/logo/kvadrat.png";

export default function Socials() {
    return (
        <div className="socials">
            <a href="https://github.com/jolin1337"><img src={Github} alt="Github" /></a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jolin1337/"><img src={LinkedIn} alt="LinkedIn" /></a>
            <a href="mailto:johannes@godesity.se"><img src={Email} alt="Email" /></a>
            <a target="_blank" rel="noreferrer" href="https://kvadrat.se/anlita-kvadrat/hitta-konsult/johannes-lind%C3%A9n/"><img src={Kvadrat} alt="Kvadrat" /></a>
        </div>
    );
}
