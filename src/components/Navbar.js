import "../assets/styles/navbar.css";
import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="nav">
        <Link className="godesity-title" to="/">
          GoDesity
        </Link>
        <ul>
          <li>
            <Link to="/omoss">Om oss</Link>
          </li>
          <li>
            <Link to="/projekt">Projekt</Link>
          </li>
          <li>
            <Link to="/kunder">Kunder</Link>
          </li>
          <li>
            <Link to="/kontakt">Kontakt</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
