import { FeatureCard } from "../index";
import "./Features.scss";
import FeatureImg from "../../assets/svg/features.jpg";
import { features } from "../../utils/constants";

const Features = () => {
  return (
    <section className="features  | section">
      <div className="feature-img">
        <img src={FeatureImg} alt="Salad" />
      </div>
      <article className="info">
        <h2>In What can we help you?</h2>
        <p>
          We will always want to provide you the best resources for your health.
        </p>
        <div className="features-cards">
          {features.map((feature) => (
            <FeatureCard key={feature.id} {...feature} />
          ))}
        </div>
      </article>
    </section>
  );
};
export default Features;
