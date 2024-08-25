import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./header.css";

const Header = () => {
  const [showModal, setshowModal] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: 'smooth'
      });
      setshowModal(false); 
    }
  };
  

  return (
    <header className="flex">
      <button
        onClick={() => {
          setshowModal(true);
        }}
        className="menu icon-menu flex"
      >
        {" "}
      </button>
      <div />

      <nav>
        <ul className="flex">
          <li>
            <Link to="/" onClick={() => setshowModal(false)}>Home</Link>
          </li>
          <li>
            <Link to="/cv" onClick={() => setshowModal(false)}>CV</Link>
          </li>
          <li>
            <Link to="/projects" onClick={() => setshowModal(false)}>Projects</Link>
          </li>
       
          <li>
          <Link to="/contact" onClick={() => setshowModal(false)}>contact</Link>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => {
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );
          setTheme(localStorage.getItem("currentMode"));
        }}
        className="mode flex"
      >
        {theme === "dark" ? (
          <span className="icon-moon-o"> </span>
        ) : (
          <span className="icon-sun"> </span>
        )}
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li>
              <button
                className="icon-close"
                onClick={() => setshowModal(false)}
              />
            </li>
            <li>
              <Link to="/" onClick={() => setshowModal(false)}>Home</Link>
            </li>
            <li>
              <Link to="/cv" onClick={() => setshowModal(false)}>CV</Link>
            </li>
            <li>
              <Link to="/projects" onClick={() => setshowModal(false)}>Projects</Link>
            </li>
           
            <li>
            <Link to="/contact" onClick={() => setshowModal(false)}>contact</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

