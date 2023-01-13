import styles from "./Navbar.module.css";
import { Outlet, Link, useLocation } from "react-router-dom";
import { useState } from 'react';
import Logo from "../Logo";

export default function Navbar() {
  const { pathname } = useLocation();
  const [hoverItem, setHoverItem] = useState();

  const classNames = (path) => {
    const paths = ['/omoss', '/projekt', '/kunder', '/kontakt'];
    const idx = paths.indexOf(path);
    const activeClass = pathname === path ? styles.active : '';
    const linebeforeActiveClass = paths.slice(idx).includes(pathname) ? styles.line : '';
    return [activeClass, linebeforeActiveClass].filter(e => !!e).join(' ')
  }
  const underlineWidth = (['/omoss', '/projekt', '/kunder', '/kontakt'].indexOf(hoverItem || pathname) + 1) * 72;
  return (
    <>
      <nav className={styles.nav}>
        <Link className="godesity-title" to="/">
          <Logo />

        </Link>
        <input type="checkbox" id={styles.menucheck} />
        <ul className={styles.menu}>
          <li className={styles.separator}><label htmlFor={styles.menucheck}>=</label></li>
          <li className={classNames('/omoss')} onMouseOver={() => setHoverItem('/omoss')} onMouseLeave={() => setHoverItem(null)}>
            <Link to="/omoss">Om oss</Link>
          </li>
          <li className={classNames('/projekt')} onMouseOver={() => setHoverItem('/projekt')} onMouseLeave={() => setHoverItem(null)}>
            <Link to="/projekt">Projekt</Link>
          </li>
          <li className={classNames('/kunder')} onMouseOver={() => setHoverItem('/kunder')} onMouseLeave={() => setHoverItem(null)}>
            <Link to="/kunder">Kunder</Link>
          </li>
          <li className={classNames('/kontakt')} onMouseOver={() => setHoverItem('/kontakt')} onMouseLeave={() => setHoverItem(null)}>
            <Link to="/kontakt">Kontakt</Link>
          </li>
          <li className={styles.underline} style={{ width: underlineWidth }}></li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
