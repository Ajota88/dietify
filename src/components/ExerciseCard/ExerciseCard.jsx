import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWalking,
  faRunning,
  faBicycle,
} from "@fortawesome/free-solid-svg-icons";
import "./ExerciseCard.scss";

const ExerciseCard = () => {
  return (
    <div className="exercise-card">
      <h2>How long would it take to burn off 25 KCal?</h2>
      <div className="exercise">
        <FontAwesomeIcon icon={faWalking} />
        <p>
          Walking: <span>3min</span>
        </p>
      </div>
      <div className="exercise">
        <FontAwesomeIcon icon={faRunning} />
        <p>
          Running: <span>3min</span>
        </p>
      </div>
      <div className="exercise">
        <FontAwesomeIcon icon={faBicycle} />
        <p>
          Bicycling: <span>3min</span>
        </p>
      </div>
    </div>
  );
};
export default ExerciseCard;
