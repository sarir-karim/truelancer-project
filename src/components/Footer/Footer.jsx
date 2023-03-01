import React from "react";
import "./Footer.css";
import { HiChevronRight } from "react-icons/hi";
import { BsFacebook, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <section className="foot-section">
      <div className="subscription-container">
        <h2 className="sub-head">Stay Blingy!</h2>
        <p className="s-p">Subscribe to our news letter and get latest market prices</p>
        <div className="email-input-container">
          <input type="email" placeholder="E-mail Address" />
          <p className="icon-container">
            <HiChevronRight className="ii" />
          </p>
        </div>
      </div>

      <div className="footer-cols-container">
        <div className="col col-1">
          <h3>DELATTIO</h3>
          <p className="c-para">
            DELATTIO is a registered trademark. DELATTIO.AE is operated by LXT
            Real Estate Brokers LLC as a platform for the publication of real
            estate properties from DELATTIO Real Estate LLC (ORN 12521)
          </p>
          <div className="social-icons-container">
            <BsFacebook />
            <BsLinkedin />
          </div>
        </div>
        <div className="col col-2">
            <h4>HELPFUL LINKS</h4>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Industries</li>
            <li>Blogs</li>
            <li>Contacts</li>
        </div>
        <div className="col col-3">
            <h4>ADDRESS:</h4>
            <p className="c-para">A108 Adam Street New York, NY 535022 United States.</p>

            <h4>PHONE:</h4>
            <p className="c-para">+155895548855</p>

            <h4>EMAIL:</h4>
            <p className="c-para">info@delattio.com</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
