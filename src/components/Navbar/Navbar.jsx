import "./Navbar.scss";
import Logo from "../../assets/svg/logo-no-background.svg";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="dietify" />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
