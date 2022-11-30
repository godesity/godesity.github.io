import { BrowserRouter, Routes, Route } from "react-router-dom";
import  "../src/assets/styles/styles.css"
import Main from "../src/layouts/Main.js"
import OmOss from "../src/routes/OmOss.js";
import Projekt from "../src/routes/Projekt.js";
import Kunder from "../src/routes/Kunder.js";
import Kontakt from "../src/routes/Kontakt.js";
import NoPage from "../src/routes/NoPage.js";

function App() {

    return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<OmOss />} />
          <Route path="omoss" element={<OmOss />} />
          <Route path="projekt" element={<Projekt />} />
          <Route path="kunder" element={<Kunder />} />
          <Route path="Kontakt" element={<Kontakt />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    );
}
export default App;