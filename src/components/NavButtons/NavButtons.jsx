import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./NavButtons.scss";

const NavButtons = ({ handleOpen, handleClose, mobile }) => {
  return (
    <div className="nav-buttons" data-type={mobile}>
      <button className="login-btn btn">
        <FontAwesomeIcon icon={faUser} /> <span>Login</span>
      </button>
      <FontAwesomeIcon
        className="menu-btn"
        icon={faBars}
        onClick={handleOpen}
      />
    </div>
  );
};
export default NavButtons;
