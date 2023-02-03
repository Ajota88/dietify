import { useEffect } from "react";
import { NutririonCard, Chart, ExerciseCard } from "../../components";
import { useParams } from "react-router-dom";
import { useGetFoodNutrientsMutation } from "../../features/api/apiSlice";
import "./FoodDetails.scss";

const FoodDetails = () => {
  const { name } = useParams();

  const [getFoodNutrients, { data, isSuccess }] = useGetFoodNutrientsMutation();

  useEffect(() => {
    getFoodNutrients({ query: name });
  }, [name]);

  if (isSuccess) {
    return (
      <div className="food-detail">
        <div className="nutrition-info">
          <NutririonCard food={data} />
          <Chart />
        </div>
        <ExerciseCard />
      </div>
    );
  }
};
export default FoodDetails;
