import "./SearchItem.scss";
import { Link } from "react-router-dom";

const SearchItem = ({ food_name, photo, serving_qty, serving_unit }) => {
  return (
    <div className="search-item">
      <Link to={`/food/${food_name}`}>
        <img src={photo.thumb} alt="food thumbnail" />
        <p>{food_name}</p>
        <p>
          {serving_qty} {serving_unit}
        </p>
      </Link>
    </div>
  );
};
export default SearchItem;
