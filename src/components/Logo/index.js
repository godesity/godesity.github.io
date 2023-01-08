import styles from "./Logo.module.css";

export default function Logo({ duration, duration2 }) {
    let animationNames = [styles.dashLogoSolo, styles.dashLogo2Solo];
    const dur1 = duration;
    const dur2 = duration2 || dur1;
    if (!dur1) {
        animationNames = ['none', 'none'];
    }
    else if (dur1 === dur2) {
        animationNames = [styles.dashLogo, styles.dashLogo2];
    }
    return (
        <svg viewBox="139.852 76.482 86.452 60.502" xmlns="http://www.w3.org/2000/svg" alt="GoDesity" valign="middle" style={{ width: "90px", height: "60px" }}>
            <g>
                <polyline className={styles.path} style={{
                    fill: "none",
                    stroke: "#000",
                    strokeWidth: "7px",
                    animationDuration: dur1 + "ms",
                    animationName: animationNames[0]
                }} points="175 85 157 85 145 100 157 115 175 115">
                </polyline>
                <polyline className={styles.path2} style={{
                    fill: "none",
                    stroke: "#000",
                    strokeWidth: "7px",
                    animationDuration: dur2 + "ms",
                    animationName: animationNames[1]
                }} points="165 105 181 105 181 125 195 125 207 109 195 93 175 93">
                </polyline>
            </g>
            <g>
                <polyline style={{ fill: "none", stroke: "#000", opacity: '0.9', strokeWidth: "3px" }}
                    points="175 85 157 85 145 100 157 115 175 115">
                </polyline>
                <polyline style={{ fill: "none", stroke: "#000", opacity: '0.9', strokeWidth: "3px" }}
                    points="165 105 181 105 181 125 195 125 207 109 195 93 175 93">
                </polyline>
            </g>
        </svg>
    );
}
