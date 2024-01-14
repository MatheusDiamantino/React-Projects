import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// =============================================

// Pages
import Inicio from "./components/pages/Inicio";
import Sobre from "./components/pages/Sobre.js";
import Cultos from "./components/pages/Cultos.js";
// =============================================

//Layout
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";


function App() {
  return (
    <Router>
      <NavBar />
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route exact path="/sobre" element={<Sobre />} />
          <Route exact path="/cultos" element={<Cultos />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
