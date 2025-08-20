import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, message } = form; // Basic validation to ensure no fields are empty

    if (!name.trim() || !email.trim() || !phone.trim() || !message.trim()) {
      alert("Please fill out all fields.");
      return;
    } // Replace 'YOUR_PHONE_NUMBER' with your actual WhatsApp number with country code, no '+' or spaces

    const yourWhatsAppNumber = "919335521687";
    const whatsappMessage = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
    const whatsappURL = `https://wa.me/${yourWhatsAppNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`; // Open the WhatsApp chat in a new tab
    window.open(whatsappURL, "_blank"); // Reset the form and set submitted state

    setForm({ name: "", email: "", phone: "", message: "" });
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto bg-green-50 p-8 rounded-xl shadow-md my-10">
        <h1 className="text-3xl font-semibold text-green-800">
          Contact Us
        </h1>
        {/* {submitted && (
          <p className="text-green-700 mb-4">
            You'll be redirected to WhatsApp to send your message!
          </p>
        )} */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-green-700 mb-1">
              Name
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              className="w-full border border-green-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-green-700 mb-1">
              Email
            </label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              className="w-full border border-green-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-green-700 mb-1">
              WhatsApp / Contact Number
            </label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              type="text"
              className="w-full border border-green-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="e.g. +91 9876543210"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-green-700 mb-1">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              className="w-full border border-green-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Your message..."
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
          >
            Connect
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
