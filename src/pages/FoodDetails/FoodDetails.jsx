import { NutririonCard, Chart, ExerciseCard } from "../../components";
import "./FoodDetails.scss";

const FoodDetails = () => {
  return (
    <div className="food-detail">
      <div className="nutrition-info">
        <NutririonCard />
        <Chart />
      </div>
      <ExerciseCard />
    </div>
  );
};
export default FoodDetails;
