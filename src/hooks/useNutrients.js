import { dailyValues } from "../utils/constants";

export const useNutrients = (food) => {
  const DVPercentage = (intake, recommended) => {
    const percentage = Math.round((intake / recommended) * 100);
    return percentage;
  };

  const name = food.foods[0]["food_name"];
  const servingQty = food.foods[0]["serving_qty"];
  const servingUnit = food.foods[0]["serving_unit"];
  const weight = food.foods[0]["serving_weight_grams"];
  const calories = food.foods[0]["nf_calories"];

  const totalFat = {
    weight: food.foods[0]["nf_total_fat"],
    dailyValue: DVPercentage(food.foods[0]["nf_total_fat"], dailyValues.fat),
  };

  const transFat = food.foods[0]["full_nutrients"].filter(
    (nutrient) => nutrient["attr_id"] === 605
  )[0]?.value;

  const saturetedFat = {
    weight: food.foods[0]["nf_saturated_fat"],
    dailyValue: DVPercentage(
      food.foods[0]["nf_saturated_fat"],
      dailyValues.saturetedFat
    ),
  };

  const cholesterol = {
    weight: food.foods[0]["nf_cholesterol"],
    dailyValue: DVPercentage(
      food.foods[0]["nf_cholesterol"],
      dailyValues.cholesterol
    ),
  };

  const sodium = {
    weight: food.foods[0]["nf_sodium"],
    dailyValue: DVPercentage(food.foods[0]["nf_sodium"], dailyValues.sodium),
  };

  const totalCarbohydrate = {
    weight: food.foods[0]["nf_total_carbohydrate"],
    dailyValue: DVPercentage(
      food.foods[0]["nf_total_carbohydrate"],
      dailyValues.carbohydrate
    ),
  };

  const fibre = {
    weight: food.foods[0]["nf_dietary_fiber"],
    dailyValue: DVPercentage(
      food.foods[0]["nf_dietary_fiber"],
      dailyValues.fibre
    ),
  };

  const calciumValue = food.foods[0]["full_nutrients"].filter(
    (nutrient) => nutrient["attr_id"] === 301
  )[0].value;

  const calcium = {
    weight: calciumValue,
    dailyValue: DVPercentage(calciumValue, dailyValues.calcium),
  };

  const ironValue = food.foods[0]["full_nutrients"].filter(
    (nutrient) => nutrient["attr_id"] === 303
  )[0].value;

  const iron = {
    weight: ironValue,
    dailyValue: DVPercentage(ironValue, dailyValues.iron),
  };

  const vitaminDValue = food.foods[0]["full_nutrients"].filter(
    (nutrient) => nutrient["attr_id"] === 303
  )[0].value;

  const vitaminD = {
    weight: vitaminDValue,
    dailyValue: DVPercentage(vitaminDValue, dailyValues.vitaminD),
  };

  const totalSugar = food.foods[0]["nf_sugars"];
  const protein = food.foods[0]["nf_protein"];

  const potassium = {
    weight: food.foods[0]["nf_potassium"],
    dailyValue: DVPercentage(
      food.foods[0]["nf_potassium"],
      dailyValues.potassium
    ),
  };

  return {
    name,
    servingQty,
    servingUnit,
    weight,
    calories,
    totalFat,
    saturetedFat,
    cholesterol,
    sodium,
    totalCarbohydrate,
    fibre,
    totalSugar,
    protein,
    potassium,
    calcium,
    iron,
    vitaminD,
    transFat,
  };
};
