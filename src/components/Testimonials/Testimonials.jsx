import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { testimonials } from "../../utils/constants";
import "swiper/css";
import "swiper/css/navigation";
import "./Testimonials.scss";
import TestimonialImg from "../../assets/svg/success.jpg";
import { TestimonialCard } from "../index";

const Testimonials = () => {
  return (
    <section className="testimonials | section">
      <h2>Our succesfull stories</h2>
      <article className="info">
        <Swiper navigation={true} modules={[Navigation]} classname="swiper">
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <TestimonialCard {...t} />
            </SwiperSlide>
          ))}
        </Swiper>
        <img src={TestimonialImg} alt="success" />
      </article>
    </section>
  );
};
export default Testimonials;
