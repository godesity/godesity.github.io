export default function Navbar () {
    return(
        <nav className="nav">

            <a className="godesity-title" href="/"> GoDesity</a>
            <ul>
               <li>
                <a href = "/omoss">Om oss</a>
                </li> 
                <li>
                <a href = "/projekt">Projekt</a>
                </li>
                <li>
                <a href = "/kunder">Kunder</a>
                </li>
                <li>
                <a href = "/kontakt">Kontakt</a>
                </li>  
            </ul>
        </nav>
    );
}