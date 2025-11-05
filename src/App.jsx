import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "../src/pages/Contact";
import Header from "../src/components/Layout/Header";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/My_Portfolio/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
