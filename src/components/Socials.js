import "../assets/styles/socials.css";
import Github from "../assets/imgs/logo/github.png";
import LinkedIn from "../assets/imgs/logo/linkedin.png";
import Email from "../assets/imgs/logo/email.png";
import Kvadrat from "../assets/imgs/logo/kvadrat.png";

export default function Socials() {
    return (
        <div className="socials">
            <img src={Github} alt="Github" />
            <img src={LinkedIn} alt="LinkedIn" />
            <img src={Email} alt="Email" />
            <img src={Kvadrat} alt="Kvadrat" />
        </div>
    );

}
