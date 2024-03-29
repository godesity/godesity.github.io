import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/assets/styles/styles.css";
import Main from "../src/layouts/Main";
import Footer from "../src/layouts/Footer";
import OmOss from "../src/routes/OmOss";
import Projekt from "../src/routes/Projekt";
import ProjektDetails from "../src/routes/ProjektDetails";
import CustomerDetails from "../src/routes/CustomerDetails";
import Kunder from "../src/routes/Kunder";
import Kontakt from "../src/routes/Kontakt";
import NoPage from "../src/routes/NoPage";



function App() {
  return (
    <>
      <BrowserRouter>
        <Main>
          <Routes>
            <Route index element={<OmOss />} />
            <Route path="/omoss" element={<OmOss />} />
            <Route path="/projekt" element={<Projekt />} />
            <Route path="/projekt/:id" element={<ProjektDetails />} />
            <Route path="/kunder" element={<Kunder />} />
            <Route path="/kunder/:id" element={<CustomerDetails />} />
            <Route path="/Kontakt" element={<Kontakt />} />
            <Route path="/*" element={<NoPage />} />
          </Routes>
        </Main>
      </BrowserRouter>
      <Footer />
    </>
  );
}
export default App;
