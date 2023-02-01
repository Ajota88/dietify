import { Searchbar, NavButtons } from "../index";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Logo from "../../assets/svg/logo-no-background.svg";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="dietify" />
          </Link>
        </div>
        <Searchbar />
        <NavButtons />
      </div>
    </nav>
  );
};
export default Navbar;
