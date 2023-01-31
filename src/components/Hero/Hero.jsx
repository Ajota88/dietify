import "./Hero.scss";
import HeroImg from "../../assets/svg/hero.jpg";

const Hero = () => {
  return (
    <section className="hero | section">
      <div className="info">
        <h1>
          Change your <span>eating</span> habits
        </h1>
        <p>
          Take care of your health starting from the food that you consume every
          day
        </p>
        <button className="btn">Get Started</button>
      </div>
      <div className="hero-img">
        <img src={HeroImg} alt="Healthy food" />
      </div>
    </section>
  );
};
export default Hero;
