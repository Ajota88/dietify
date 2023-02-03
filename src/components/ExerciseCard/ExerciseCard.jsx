import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWalking,
  faRunning,
  faBicycle,
} from "@fortawesome/free-solid-svg-icons";
import "./ExerciseCard.scss";

const ExerciseCard = ({ exercises, cal }) => {
  console.log(exercises);
  const timeBicycling = Math.round(exercises?.exercises?.[1]?.["duration_min"]);
  const timeWalking = Math.round(exercises?.exercises?.[0]?.["duration_min"]);
  const timeRunning = Math.round(exercises?.exercises?.[2]?.["duration_min"]);

  return (
    <div className="exercise-card">
      <h3>
        How long would it take to burn off <span>{cal}</span> Cal?
      </h3>
      <div className="exercise">
        <FontAwesomeIcon icon={faWalking} />
        <p>
          Walking: <span>{timeWalking} min</span>
        </p>
      </div>
      <div className="exercise">
        <FontAwesomeIcon icon={faRunning} />
        <p>
          Running: <span>{timeRunning} min</span>
        </p>
      </div>
      <div className="exercise">
        <FontAwesomeIcon icon={faBicycle} />
        <p>
          Bicycling: <span>{timeBicycling} min</span>
        </p>
      </div>
    </div>
  );
};
export default ExerciseCard;
