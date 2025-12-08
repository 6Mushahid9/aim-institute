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
    if (!name.trim() || !email.trim() || !phone.trim() || !message.trim()) {
      alert("Please fill out all fields.");
      return;
    }

    const whatsapp = "919335521687";
    const text = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
    const url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      <Navbar />

      <div className="max-w-3xl mx-auto p-6 my-10 bg-green-50 rounded-xl shadow-md">
        <h1 className="text-3xl font-semibold text-green-800">Contact Us</h1>

        <div className="bg-green-600 text-white p-8 rounded-xl shadow-md text-center my-10">
      <MessageCircle size={40} className="mx-auto mb-4" />
      <h2 className="text-2xl font-semibold">We’re here to help!</h2>
      <p className="mt-2 text-green-50">
        Reach out to us anytime — we respond within minutes on WhatsApp.
      </p>
    </div>
        <ContactInfo />

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-green-700 mb-1">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              className="w-full border border-green-200 rounded px-4 py-2"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-green-700 mb-1">Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              className="w-full border border-green-200 rounded px-4 py-2"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-green-700 mb-1">WhatsApp Number</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              type="text"
              className="w-full border border-green-200 rounded px-4 py-2"
              placeholder="+91 XXXXXXXXXX"
            />
          </div>

          <div>
            <label className="block text-green-700 mb-1">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              className="w-full border border-green-200 rounded px-4 py-2"
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
          >
            Connect
          </button>
        </form>

        <ContactMap />
      </div>

      <Footer />
    </>
  );
}

export default Contact;
