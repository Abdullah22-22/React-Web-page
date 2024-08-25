import "./hero.css";
import Lottie from "lottie-react";
import devAnimation from "../../animtion/dev.json";
const Hero = () => {
  return (
    <section className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <img src="./Abdullah.jpeg" className="avatar" alt="" />
          <div className="icon-verified"></div>
        </div>

        <h1 className="title">Software designer,</h1>
        <p className="sub-title">
          I’m Abdullah Al_Tmeemi, a student i live Helsnki
        </p>

        <div className="all-icons flex">
          <div className="icon icon-twitter" />

          <div className="icon icon-instagram" />

          <a
            href="https://github.com/Abdullah22-22"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon icon-github"> </div>
          </a>

          <div className="icon icon-linkedin" />
        </div>
      </div>

      <div className="right-section animation">
        { <Lottie
          className="contact-animation"
          style={{ height: 355 }}
          animationData={devAnimation}
        /> }
      </div>
    </section>
  );
};

export default Hero;


