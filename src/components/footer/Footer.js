import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer">
        <Link to="/">Home</Link>
        <Link to="/album">Music List</Link>
        <Link to="/wishlist">Wishlist</Link>
        <Link to="/contact">Contact us</Link>
      </div>

      <div className="copyright">
        <p>Copyright &copy; 2023 - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
