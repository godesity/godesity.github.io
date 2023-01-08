import styles from "./Navbar.module.css";
import { Outlet, Link, useLocation } from "react-router-dom";
import Logo from "../Logo";

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
          <Logo />

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
