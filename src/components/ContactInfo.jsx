import { Phone, Mail, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <InfoCard
        icon={<Phone />}
        title="Call Us"
        line1="+91 93355 21687"
        line2="Mon–Sat: 9:00 AM – 7:00 PM"
      />
      <InfoCard
        icon={<Mail />}
        title="Email Us"
        line1="support@safetyinstitute.com"
        line2="24/7 Support Available"
      />
      <InfoCard
        icon={<MapPin />}
        title="Visit Us"
        line1="Lucknow, Uttar Pradesh"
        line2="India"
      />
    </div>
  );
};

export default ContactInfo;

const InfoCard = ({ icon, title, line1, line2 }) => (
  <div className="bg-white rounded-2xl shadow-md p-8 text-center">
    <div className="w-12 h-12 mx-auto flex items-center justify-center bg-green-100 rounded-full text-green-600 mb-4">
      {icon}
    </div>
    <h3 className="font-semibold text-lg text-green-800">{title}</h3>
    <p className="text-gray-600 mt-2">{line1}</p>
    <p className="text-sm text-gray-500">{line2}</p>
  </div>
);
