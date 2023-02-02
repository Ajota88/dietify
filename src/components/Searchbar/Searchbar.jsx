import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useGetFoodListQuery } from "../../features/api/apiSlice";
import "./Searchbar.scss";
import { useMediaQuery } from "react-responsive";
import { SearchItem } from "../index";

const Searchbar = ({ mobile, isVisible }) => {
  const isMediumScreen = useMediaQuery({ query: "(max-width: 578px)" });
  const [searchInput, setSearchInput] = useState("");

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
      />
      <button>
        <FontAwesomeIcon icon={faMagnifyingGlass} onClick={handleVisibility} />
      </button>
      {data?.common.length && !isError && (
        <div className="search-results">
          {!isError &&
            data?.common.map((item) => {
              console.log(item);
              return <SearchItem key={item["tag_id"]} {...item} />;
            })}
        </div>
      )}
    </div>
  );
};
export default Searchbar;
