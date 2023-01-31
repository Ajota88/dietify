import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./NavButtons.scss";

const NavButtons = () => {
  return (
    <div className="nav-buttons">
      <button className="login-btn btn">
        <FontAwesomeIcon icon={faUser} /> <span>Login</span>
      </button>
      <FontAwesomeIcon className="menu-btn" icon={faBars} />
    </div>
  );
};
export default NavButtons;
