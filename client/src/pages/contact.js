import { useState } from "react";
import { useNavigate } from "react-router-dom";

const emptyForm = { firstName: "", lastName: "", phone: "", email: "", message: "" };

export default function Contact() {
  const [formData, setFormData] = useState(emptyForm);
  const navigate = useNavigate();

  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  const handleSubmit = event => {
    event.preventDefault();

    console.log("Contact form captured:", formData);

    navigate("/", { state: { sentBy: formData.firstName } });
  }

  return (
    <section className="page contact">
      <div>
        <h1>Contact me</h1>

        <div className="card">
          <p><strong>Email:</strong> <a href="mailto:kevin.mai796@gmail.com">kevin.mai796@gmail.com</a></p>
          <p><strong>Phone:</strong> <a href="tel:6479263868">647-926-3868</a></p>
          <p><strong>Location:</strong> Toronto, ON, Canada</p>
          <p><strong>GitHub:</strong> <a href="https://github.com/kevmai96" target="_blank" rel="noreferrer">github.com/kevmai96</a></p>
        </div>
      </div>
      <form className="card" onSubmit={handleSubmit}>
        <label>First name<input name="firstName" value={formData.firstName} onChange={handleChange} required/></label>
        <label>Last name<input name="lastName" value={formData.lastName} onChange={handleChange} required/></label>
        <label>Contact number<input name="phone" type="tel" value={formData.phone} onChange={handleChange}/></label>
        <label>Email address<input name="email" type="email" value={formData.email} onChange={handleChange} required/></label>
        <label>Message<textarea name="message" rows="5" value={formData.message} onChange={handleChange} required/></label>

        <button className="btn" type="submit">Send message</button>
      </form>
    </section>
  );
}
