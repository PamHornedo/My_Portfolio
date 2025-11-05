import ContactForm from "../components/Contact/ContactForm";
import "../styles/components/contactform.css";

function Contact() {
  return (
    <div className="page-container">
      <div className="page-container2">
        <h2>Contact Me!</h2>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
