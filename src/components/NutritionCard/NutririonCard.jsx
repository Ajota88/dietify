import "./NutritionCard.scss";
import { useNutrients } from "../../hooks/useNutrients";

const NutririonCard = ({ food }) => {
  const {
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
    totalSugar,
    fibre,
    protein,
    potassium,
    calcium,
    iron,
    vitaminD,
    transFat,
  } = useNutrients(food);
  console.log(name);

  return (
    <div class="nutrition-card">
      <header>
        <h3 class="bold">Nutrition Facts</h3>
        <div class="divider"></div>
        <p>{name}</p>
        <p class="bold">
          Serving Size:{" "}
          <span>{`${servingQty} ${servingUnit} (${weight}g)`}</span>
        </p>
      </header>
      <div class="divider large"></div>
      <div class="calories-info">
        <div class="left-container">
          <h2 class="bold small-text">Amount per serving</h2>
          <p>Calories</p>
        </div>
        <span class="right">{calories}</span>
      </div>
      <div class="divider medium"></div>
      <div class="daily-value small-text">
        <p class="bold right no-divider">% Daily Value *</p>
        <div class="divider"></div>
        <p>
          <span>
            <span class="bold">Total Fat</span> {totalFat.weight}g
          </span>
          <span class="bold right">{totalFat.dailyValue}%</span>
        </p>
        <p class="indent no-divider">
          Saturated Fat {saturetedFat.weight}g
          <span class="bold right">{saturetedFat.dailyValue}%</span>
        </p>
        <div class="divider"></div>
        {!!transFat && (
          <p class="indent no-divider">
            <span>
              <i>Trans</i> Fat {transFat}g
            </span>
          </p>
        )}
        <div class="divider"></div>
        <p>
          <span>
            <span class="bold">Cholesterol</span> {cholesterol.weight}mg
          </span>
          <span class="right bold">{cholesterol.dailyValue}%</span>
        </p>
        <p>
          <span>
            <span class="bold">Sodium</span> {sodium.weight}mg
          </span>
          <span class="right bold">{sodium.dailyValue}%</span>
        </p>
        <p>
          <span>
            <span class="bold">Total Carbohydrate</span>{" "}
            {totalCarbohydrate.weight}g
          </span>
          <span class="right bold">{totalCarbohydrate.dailyValue}%</span>
        </p>
        <p class="indent no-divider">
          Dietary Fiber {fibre.weight}g
          <span class="bold right">{fibre.dailyValue}%</span>
        </p>
        <div class="divider"></div>
        {totalSugar && (
          <p class="indent no-divider">Total Sugars{totalSugar}g</p>
        )}

        <div class="divider"></div>
        <p class="no-divider">
          <span class="bold">Protein {protein}g</span>
        </p>
        <div class="divider large"></div>
        <p>
          Vitamin D {vitaminD.weight}mcg <span>{vitaminD.dailyValue}%</span>
        </p>
        <p>
          Calcium {calcium.weight}mg <span>{calcium.dailyValue}%</span>
        </p>
        <p>
          Iron {iron.weight}mg <span>{iron.dailyValue}%</span>
        </p>
        <p class="no-divider">
          Potassium {potassium.weight}mg <span>{potassium.dailyValue}%</span>
        </p>
      </div>
      <div class="divider medium"></div>
      <p class="note">
        * The % Daily Value (DV) tells you how much a nutrient in a serving of
        food contributes to a daily diet. 2,000 calories a day is used for
        general nutrition advice.
      </p>
    </div>
  );
};
export default NutririonCard;
