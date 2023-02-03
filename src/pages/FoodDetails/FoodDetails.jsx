import { useEffect } from "react";
import { NutririonCard, Chart, ExerciseCard } from "../../components";
import { useParams } from "react-router-dom";
import {
  useGetFoodNutrientsMutation,
  useGetBurnCaloriesMutation,
} from "../../features/api/apiSlice";
import "./FoodDetails.scss";

const FoodDetails = () => {
  const { name } = useParams();

  const [getFoodNutrients, { data, isSuccess }] = useGetFoodNutrientsMutation();
  const [getBurnCalories, { data: exercises, isSuccess: exerciseSuccess }] =
    useGetBurnCaloriesMutation();

  useEffect(() => {
    getFoodNutrients({ query: name });
  }, [name]);

  const calories = data?.foods[0]["nf_calories"];

  useEffect(() => {
    getBurnCalories({
      query: `${calories} calories walking and ${calories} calories bicycling and ${calories} calories running`,
    });
  }, [calories]);

  if (isSuccess) {
    return (
      <div className="food-detail">
        <div className="name">
          <img src={data.foods[0].photo.highres} alt="food name" />
          <h2>{data.foods[0]["food_name"]}</h2>
        </div>
        <div className="nutrition-info">
          <NutririonCard food={data} />
          <Chart food={data} />
        </div>
        <ExerciseCard exercises={exercises} cal={calories} />
      </div>
    );
  }
};
export default FoodDetails;
