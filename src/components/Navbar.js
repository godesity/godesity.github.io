import "../assets/styles/navbar.css";
import { Outlet, Link, useLocation } from "react-router-dom";
import gd from "../assets/imgs/gd.png";

export default function Navbar() {
  const { pathname } = useLocation();
  const classNames = (path) => {
    const paths = ['/omoss', '/projekt', '/kunder', '/kontakt'];
    const idx = paths.indexOf(path);
    return [pathname === path ? 'active' : '', paths.slice(idx).includes(pathname) ? 'line' : ''].filter(e => !!e).join(' ')
  }
  return (
    <>
      <nav className="nav">
        <Link className="godesity-title" to="/">
          <img height="60" src={gd} alt="GoDesity" valign="middle" />
        </Link>
        <ul>
          <li className="separator"></li>
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
