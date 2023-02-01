import { NutririonCard, Chart } from "../../components";
import "./FoodDetails.scss";

const FoodDetails = () => {
  return (
    <div className="food-detail">
      <div className="nutrition-info">
        <NutririonCard />
        <Chart />
      </div>
    </div>
  );
};
export default FoodDetails;
