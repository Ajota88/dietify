import "./Contact.scss";

const Contact = () => {
  return (
    <section className="contact | section">
      <h2>Your trusted source of food and nutrition information</h2>
      <p>
        Subscribe to our newsletter and get information on nutrition and health,
        from meal planning and prep to choices that can help prevent or manage
        health conditions and more
      </p>
      <form className="contact-form">
        <input type="email" className="form-input" placeholder="enter email" />
        <button className="submit-btn">subscribe</button>
      </form>
    </section>
  );
};
export default Contact;
