import styles from "./Navbar.module.css";
import { Outlet, Link, useLocation } from "react-router-dom";

console.log(styles)
export default function Navbar() {
  const { pathname } = useLocation();
  const classNames = (path) => {
    const paths = ['/omoss', '/projekt', '/kunder', '/kontakt'];
    const idx = paths.indexOf(path);
    return [pathname === path ? styles.active : '', paths.slice(idx).includes(pathname) ? styles.line : ''].filter(e => !!e).join(' ')
  }
  return (
    <>
      <nav className={styles.nav}>
        <Link className="godesity-title" to="/">
          <svg viewBox="139.852 76.482 86.452 60.502" xmlns="http://www.w3.org/2000/svg">
            <polyline style={{ fill: "none", stroke: "#000", strokeWidth: "7px" }}
              points="175 85 157 85 145 100 157 115 175 115">
            </polyline>
            <polyline style={{ fill: "none", stroke: "#000", strokeWidth: "7px" }}
              points="165 105 181 105 181 125 195 125 207 109 195 93 175 93">
            </polyline>
            <polyline className={styles.path} style={{ fill: "none", stroke: "chocolate", opacity: '0.7', animationDelay: '1s', strokeWidth: "2px" }}
              points="175 85 157 85 145 100 157 115 175 115">
            </polyline>
            <polyline className={styles.path} style={{ fill: "none", stroke: "chocolate", opacity: '0.7', animationDelay: '1s', strokeWidth: "2px" }}
              points="165 105 181 105 181 125 195 125 207 109 195 93 175 93">
            </polyline>
          </svg>

        </Link>
        <input type="checkbox" id={styles.menucheck} />
        <ul className={styles.menu}>
          <li className={styles.separator}><label htmlFor={styles.menucheck}>=</label></li>
          <li className={classNames('/omoss')}>
            <Link to="/omoss">Om oss</Link>
          </li>
          <li className={classNames('/projekt')}>
            <Link to="/projekt">Projekt</Link>
          </li>
          <li className={classNames('/kunder')}>
            <Link to="/kunder">Kunder</Link>
          </li>
          <li className={classNames('/kontakt')}>
            <Link to="/kontakt">Kontakt</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
