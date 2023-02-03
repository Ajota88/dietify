import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useGetFoodListQuery } from "../../features/api/apiSlice";
import "./Searchbar.scss";
import { useMediaQuery } from "react-responsive";
import { SearchItem } from "../index";

const Searchbar = ({ mobile, isVisible }) => {
  const isMediumScreen = useMediaQuery({ query: "(max-width: 578px)" });
  const [searchInput, setSearchInput] = useState("");
  let [showInfo1, setShowInfo1] = useState(true);

  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowInfo1(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const { data, isError } = useGetFoodListQuery(searchInput);

  const handleVisibility = () => {
    isMediumScreen && !mobile && isVisible();
  };

  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Search..."
        data-type={mobile}
        onChange={(e) => setSearchInput(e.target.value)}
        value={searchInput}
        onClick={() => setShowInfo1(true)}
      />
      <button>
        <FontAwesomeIcon icon={faMagnifyingGlass} onClick={handleVisibility} />
      </button>
      {data?.common?.length && !isError && showInfo1 && (
        <div className="search-results" ref={ref}>
          {data?.common.map((item, index) => {
            return (
              <SearchItem
                key={item["tag_id"] + index}
                {...item}
                close={() => setShowInfo1(false)}
                clearSearchInput={() => setSearchInput("")}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
export default Searchbar;
