import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactInfo from "../components/ContactInfo";
import ContactMap from "../components/ContactMap";
import { MessageCircle } from "lucide-react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, message } = form;
    if (!name || !email || !phone || !message) {
      alert("Please fill all fields");
      return;
    }

    const whatsapp = "919335521687";
    const text = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
    window.open(
      `https://wa.me/${whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank"
    );

    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-b from-green-50 via-white to-green-100 py-20">
        <div className="max-w-7xl mx-auto px-4 space-y-20">

          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-green-800">
              Contact Us
            </h1>
            <p className="mt-4 text-gray-600">
              We’re here to help you with admissions, courses, and guidance.
            </p>
          </div>

          <ContactInfo />

          {/* FORM + SIDE STATS */}
          {/* FORM */}
<div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10">
  <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-2">
    Send Us a Message
  </h2>
  <p className="text-gray-600 mb-8">
    Have questions? Fill out the form and we’ll connect with you on WhatsApp.
  </p>

  <form onSubmit={handleSubmit} className="space-y-6">

    {/* Name + Email */}
    <div className="grid md:grid-cols-2 gap-5">
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your Name"
        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
        required
      />

      <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email Address"
        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
        required
      />
    </div>

    {/* Phone */}
    <input
      name="phone"
      value={form.phone}
      onChange={handleChange}
      placeholder="WhatsApp Number"
      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
      required
    />

    {/* Message */}
    <textarea
      name="message"
      value={form.message}
      onChange={handleChange}
      rows="4"
      placeholder="Your Message"
      className="w-full border border-gray-300 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
      required
    />

    {/* Submit Button */}
    <button
      type="submit"
      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition"
    >
      Connect on WhatsApp
    </button>
  </form>
</div>


          <ContactMap />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;
