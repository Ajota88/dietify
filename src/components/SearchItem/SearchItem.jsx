import "./SearchItem.scss";

const SearchItem = ({ food_name, photo, serving_qty, serving_unit }) => {
  return (
    <div className="search-item">
      <img src={photo.thumb} alt="food thumbnail" />
      <p>{food_name}</p>
      <p>
        {serving_qty} {serving_unit}
      </p>
    </div>
  );
};
export default SearchItem;
