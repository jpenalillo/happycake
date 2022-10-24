import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Contacto from "./views/Contacto";
import Exito from "./views/Exito";
import Nofound from "./views/Nofound";
import Navbar from "./components/Nvbar";
import "./assets/main.css"

function App() {
      return (
      <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<Nofound />} />
        <Route path="/exito" element={<Exito />} />
        </Routes>
      </BrowserRouter>
      </div>
      );
}
export default App;