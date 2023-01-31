import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./Searchbar.scss";

const Searchbar = () => {
  return (
    <div className="searchbar">
      <input type="text" placeholder="Search..." />
      <button>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
  );
};
export default Searchbar;