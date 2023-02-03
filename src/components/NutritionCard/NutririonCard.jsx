import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
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

  const [inputQty, setInputQty] = useState(servingQty);

  const increaseQty = () => {
    setInputQty((prev) => prev + 1);
  };

  const decreaseQty = () => {
    if (inputQty > 1) {
      setInputQty((prev) => prev - 1);
    }
  };

  const changeQty = (e) => {
    if (e.target.value <= 0) {
      setInputQty(1);
    } else {
      setInputQty(Math.round(e.target.value));
    }
  };

  const multiplier = (inputQty / servingQty).toFixed(2);

  return (
    <div class="nutrition-card">
      <header>
        <h3 class="bold">Nutrition Facts</h3>
        <div class="divider"></div>
        <p className="food-name">{name}</p>
        <p class="bold">
          Serving Size:
          <div className="serving">
            <div className="qty-btns">
              <button>
                <FontAwesomeIcon icon={faCaretUp} onClick={increaseQty} />
              </button>
              <button>
                <FontAwesomeIcon icon={faCaretDown} onClick={decreaseQty} />
              </button>
            </div>
            <input
              className="qty-input"
              value={inputQty}
              onChange={changeQty}
            />
            {`${servingUnit} (${weight * multiplier}g)`}
          </div>
        </p>
      </header>
      <div class="divider large"></div>
      <div class="calories-info">
        <div class="left-container">
          <h2 class="bold small-text">Amount per serving</h2>
          <p>Calories</p>
        </div>
        <span class="right">{calories * multiplier}</span>
      </div>
      <div class="divider medium"></div>
      <div class="daily-value small-text">
        <p class="bold right no-divider">% Daily Value *</p>
        <div class="divider"></div>
        <p>
          <span>
            <span class="bold">Total Fat</span> {totalFat.weight * multiplier}g
          </span>
          <span class="bold right">{totalFat.dailyValue * multiplier}%</span>
        </p>
        <p class="indent no-divider">
          Saturated Fat {saturetedFat.weight * multiplier}g
          <span class="bold right">{saturetedFat.dailyValue}%</span>
        </p>
        <div class="divider"></div>
        {!!transFat && (
          <p class="indent no-divider">
            <span>
              <i>Trans</i> Fat {transFat * multiplier}g
            </span>
          </p>
        )}
        <div class="divider"></div>
        <p>
          <span>
            <span class="bold">Cholesterol</span>{" "}
            {cholesterol.weight * multiplier}mg
          </span>
          <span class="right bold">{cholesterol.dailyValue * multiplier}%</span>
        </p>
        <p>
          <span>
            <span class="bold">Sodium</span> {sodium.weight * multiplier}mg
          </span>
          <span class="right bold">{sodium.dailyValue * multiplier}%</span>
        </p>
        <p>
          <span>
            <span class="bold">Total Carbohydrate</span>{" "}
            {totalCarbohydrate.weight * multiplier}g
          </span>
          <span class="right bold">
            {totalCarbohydrate.dailyValue * multiplier}%
          </span>
        </p>
        <p class="indent no-divider">
          Dietary Fiber {fibre.weight * multiplier}g
          <span class="bold right">{fibre.dailyValue * multiplier}%</span>
        </p>
        <div class="divider"></div>
        {totalSugar && (
          <p class="indent no-divider">
            Total Sugars{totalSugar * multiplier}g
          </p>
        )}

        <div class="divider"></div>
        <p class="no-divider">
          <span class="bold">Protein {protein * multiplier}g</span>
        </p>
        <div class="divider large"></div>
        <p>
          Vitamin D {vitaminD.weight * multiplier}mcg
          <span>{vitaminD.dailyValue * multiplier}%</span>
        </p>
        <p>
          Calcium {calcium.weight * multiplier}mg
          <span>{calcium.dailyValue * multiplier}%</span>
        </p>
        <p>
          Iron {iron.weight * multiplier}mg
          <span>{iron.dailyValue * multiplier}%</span>
        </p>
        <p class="no-divider">
          Potassium {potassium.weight * multiplier}mg
          <span>{potassium.dailyValue * multiplier}%</span>
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
