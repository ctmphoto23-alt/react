import { Link } from "react-router-dom";
import logo from "./assets/Library.svg";

function Footer() {
  return (
    <footer>
      <div className="footer__container">
        <Link to="/">
          <img src={logo} className="footer__logo" alt="Library logo" />
        </Link>
        <div className="footer__links">
          <Link to="/" className="footer__link">Home</Link>
          <Link to="/books" className="footer__link">Books</Link>
          <Link to="/cart" className="footer__link">Cart</Link>
        </div>
        <p className="footer__copyright">Copyright © 2025 Library</p>
      </div>
    </footer>
  );
}

export default Footer;
