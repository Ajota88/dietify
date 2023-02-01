import { useState } from "react";
import { Searchbar, NavButtons } from "../index";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Logo from "../../assets/svg/logo-no-background.svg";

const Navbar = () => {
  const [searchbarVisible, setSearchbarVisible] = useState(false);

  return (
    <nav className="nav">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="dietify" />
          </Link>
        </div>
        <Searchbar isVisible={() => setSearchbarVisible((prev) => !prev)} />
        <NavButtons />
      </div>
      {searchbarVisible && <Searchbar mobile="mobile" />}
    </nav>
  );
};
export default Navbar;
