import "./FeatureCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FeatureCard = ({ title, desc, icon }) => {
  return (
    <article className="feature-card">
      <FontAwesomeIcon icon={icon} />
      <h4>{title}</h4>
      <p>{desc}</p>
    </article>
  );
};
export default FeatureCard;
