


import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../animtion/done.json";
import contactAnimation from "../../animtion/contact.json";
const Contact = () => {
  const [state, handleSubmit] = useForm("xrbzykle");

  return (
    <section id="contact-section" className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"> </span>
        Contact us
      </h1>
      <p className="sub-title">
        Contact us for more information and get notified when I publish
        something new.
      </p>

      <div style={{ justifyContent: "space-between" }} className="flex">
        <form onSubmit={handleSubmit} className="">
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input required type="email" name="email" id="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your message:</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button className="submit" disabled={state.submitting}>
            {state.submitting ? "Submitting..." : "Submit"}
          </button>

          {state.succeeded && (
            <p className="flex">
              <Lottie
                loop={false}
                style={{ height: 44 }}
                animationData={doneAnimation}
              />
              Thanks for contacting us!
            </p>
          )}
        </form>
        <div className=" animation">
          <Lottie
            className="contact-animation"
            style={{ height: 355 }}
            animationData={contactAnimation}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;

