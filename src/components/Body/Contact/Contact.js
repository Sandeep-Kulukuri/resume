import "./contact.css";
//import SocialContact from "../../Common/social-contact/index";
import Separator from "../../Common/Separator/Separator";
function Contact() {
  return (
    <div className="contact">
      <Separator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Contact me</p>
          {/* <SocialContact /> */}
          <a  href = "mailto: sandeepkulukuri98@gmail.com">
          <i style = {{color: "red"}} class="far fa-envelope"></i>
              sandeepkulukuri98@gmail.com
          </a>
          <a  href="https://www.linkedin.com/in/sandeep-kulukuri-13b72619a/">
          <i style = {{color: "blue"}} class="fab fa-linkedin"></i>
          Linked In
          </a>
        </div>
        <div className="download">
          <a download href={require("../../../Assets/Resume.pdf").default}>
          <i class="fas fa-cloud-download-alt"></i>
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;