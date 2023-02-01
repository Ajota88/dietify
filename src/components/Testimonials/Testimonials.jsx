import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { testimonials } from "../../utils/constants";
import "swiper/css";
import "swiper/css/navigation";
import "./Testimonials.scss";
import TestimonialImg from "../../assets/svg/success.jpg";
import TestimonialImg2 from "../../assets/svg/pexels-lukas-684387.jpg";
import TestimonialImg3 from "../../assets/svg/pexels-min-an-1134190.jpg";
import { TestimonialCard } from "../index";

const Testimonials = () => {
  return (
    <section className="testimonials | section">
      <h2>Our successfull stories</h2>
      <article className="info">
        <Swiper navigation={true} modules={[Navigation]} classname="swiper">
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <TestimonialCard {...t} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="img-gallery">
          <img className="img1" src={TestimonialImg} alt="success" />
          <img className="img2" src={TestimonialImg2} alt="You can do it" />
          <img className="img3" src={TestimonialImg3} alt="Happy Person" />
        </div>
      </article>
    </section>
  );
};
export default Testimonials;
