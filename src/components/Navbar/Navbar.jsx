import { useState } from "react";
import { Searchbar, NavButtons } from "../index";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Logo from "../../assets/svg/logo-no-background.svg";
import { navLinks } from "../../utils/constants";
import Modal from "../Modal/Modal";

const Navbar = () => {
  const [searchbarVisible, setSearchbarVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="dietify" />
          </Link>
        </div>
        <Searchbar isVisible={() => setSearchbarVisible((prev) => !prev)} />
        <div className="links">
          {navLinks.map((link) => (
            <a key={link.id} href={link.url}>
              {link.title}
            </a>
          ))}
        </div>
        <NavButtons handleOpen={() => setIsOpen(true)} />
      </div>
      {searchbarVisible && <Searchbar mobile="mobile" />}
      <Modal isOpen={isOpen} handleClose={() => setIsOpen(false)}>
        <div className="nav-links">
          <ul>
            {navLinks.map((link) => (
              <li key={link.id} onClick={() => setIsOpen(false)}>
                <a href={link.url}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <NavButtons mobile="mobile" handleClose={() => setIsOpen(false)} />
      </Modal>
    </nav>
  );
};
export default Navbar;
