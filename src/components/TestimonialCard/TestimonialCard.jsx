import "./TestimonialCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

const TestimonialCard = ({ name, desc, job }) => {
  return (
    <div className="card">
      <FontAwesomeIcon icon={faComment} />
      <p>{desc}</p>
      <h5>{name}</h5>
      <span>{job}</span>
    </div>
  );
};
export default TestimonialCard;
