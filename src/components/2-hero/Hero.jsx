import "./hero.css";
import Lottie from "lottie-react";
import devAnimation from "../../animtion/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section id="hero-section" className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="./Abdullah.jpeg"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          Developer
        </motion.h1>

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
        {
          <Lottie
            className="contact-animation"
            style={{ height: 355 }}
            animationData={devAnimation}
          />
        }
      </div>
    </section>
  );
};

export default Hero;
