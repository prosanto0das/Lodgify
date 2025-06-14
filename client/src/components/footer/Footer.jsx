import { Link } from "react-router-dom";
import "./footer.scss";

// You can use any icon library for the social and contact icons (e.g., Font Awesome or simple Unicode)
export default function Footer() {
  return (
    <footer className="homePageFooter">
      <div className="footerMain">
        {/* Brand Section */}
        <div className="footerCol brand">
          <div className="footerLogoWrap">
            <img src="/logo.png" alt="Lodgify Logo" className="footerLogo" />
            <span className="footerBrandName">Lodgify</span>
          </div>
          <p>Your trusted partner for finding the perfect student accommodation.<br />
            Making student life comfortable and affordable.</p>
        </div>

        {/* Quick Links */}
        <div className="footerCol">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/list">Properties</Link></li>
            <li><Link to="/agents">Contacts</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footerCol">
          <h3>Services</h3>
          <ul>
            <li>Student Housing</li>
            <li>Property Management</li>
            <li>24/7 Support</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="footerCol">
          <h3>Contact Us</h3>
          <ul className="contactList">
            <li><i className="fas fa-envelope"></i> prosanto0das23@gmail.com</li>
            <li><i className="fas fa-phone"></i> +88 01701140907</li>
            <li><i className="fas fa-map-marker-alt"></i> Sylhet, Bangladesh</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}