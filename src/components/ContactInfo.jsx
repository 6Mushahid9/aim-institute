import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 my-12">
      <div className="flex items-start gap-4 p-6 bg-white border border-green-100 rounded-xl shadow-sm">
        <Phone className="text-green-600" size={28} />
        <div>
          <h3 className="font-semibold text-green-800 text-lg">Phone / WhatsApp</h3>
          <p className="text-gray-600">+91 93355 21687</p>
        </div>
      </div>

      <div className="flex items-start gap-4 p-6 bg-white border border-green-100 rounded-xl shadow-sm">
        <Mail className="text-green-600" size={28} />
        <div>
          <h3 className="font-semibold text-green-800 text-lg">Email</h3>
          <p className="text-gray-600">support@safetyinstitute.com</p>
        </div>
      </div>

      <div className="flex items-start gap-4 p-6 bg-white border border-green-100 rounded-xl shadow-sm">
        <MapPin className="text-green-600" size={28} />
        <div>
          <h3 className="font-semibold text-green-800 text-lg">Address</h3>
          <p className="text-gray-600">Lucknow, Uttar Pradesh, India</p>
        </div>
      </div>

      <div className="flex items-start gap-4 p-6 bg-white border border-green-100 rounded-xl shadow-sm">
        <Clock className="text-green-600" size={28} />
        <div>
          <h3 className="font-semibold text-green-800 text-lg">Working Hours</h3>
          <p className="text-gray-600">Mon – Sat: 9:00 AM – 7:00 PM</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
