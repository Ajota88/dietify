import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./Searchbar.scss";
import { useMediaQuery } from "react-responsive";

const Searchbar = ({ mobile, isVisible }) => {
  const isMediumScreen = useMediaQuery({ query: "(max-width: 768px)" });

  const handleVisibility = () => {
    isMediumScreen && !mobile && isVisible();
  };

  return (
    <div className="searchbar">
      <input type="text" placeholder="Search..." data-type={mobile} />
      <button>
        <FontAwesomeIcon icon={faMagnifyingGlass} onClick={handleVisibility} />
      </button>
    </div>
  );
};
export default Searchbar;
