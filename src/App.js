import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Education from "./Pages/Education";
import Experience from "./Pages/Experience";
import Contact from "./Pages/Contact";
import "./StyleSheets/Home.css";
import "./StyleSheets/Header-Footer.css";
import "./StyleSheets/Courosel.css";
import "./StyleSheets/Projects.css";
import "./StyleSheets/Experience.css";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  duration:500
});

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/education" element={<Education />}></Route>
        <Route path="/experience" element={<Experience />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
