import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";
import Cv from "./components/6-cv/Cv";

function App() {
  return (
    <Router>
      <div id="up" className="container">
        <Header />
       
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero /> 
                <div className="divider" />
                <Main /> 
                <div className="divider" />
                <Contact /> 
                <div className="divider" />
              </>
            }
          />
        
          <Route path="/cv" element={<Cv />} />
          <Route path="/projects" element={<Main />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer />
        <a style={{ opacity: 1, transition: "1s" }} href="#up">
          <button className="icon-keyboard_arrow_up scroll2Top"></button>
        </a>
      </div>
    </Router>
  );
}

export default App;

