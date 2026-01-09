import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
    {
        image: "/testimonals/khalid-siddique.jpeg",
        name: "Khalid Siddique",
        role: "Selected as Safety Officer",
        company: "Siddhi Steel Pvt. Ltd., Vapi, Gujarat",
        title: "Proud Achievement",
        quote:
            "Proud to share that I have been selected for this position. Thank you for your support, Aim Institute.",
    },
    {
        image: "/testimonals/brijesh-kumar-verma.jpeg",
        name: "Brijesh Kumar Verma",
        role: "Selected as Safety Officer",
        company:
            "Jyoti Enterprises Civil Construction and Engineering Groups, Mumbai",
        title: "Grateful for the Opportunity",
        quote:
            "Thank you dear Nahid Ma’am and Sajid Sir for giving me this job. Aim Institute has been a great support.",
    },
    {
        image: "/testimonals/ayaz-ahmad.jpeg",
        name: "Ayaz Ahmad",
        role: "Selected as Safety Officer",
        company: "Riverdale Grand, Kharadi, Pune",
        title: "Thankful for Guidance",
        quote:
            "Grateful to Aim Institute of Safety and Health and the trainers for this job opportunity.",
    },
    {
        image: "/testimonals/azad-khan.jpeg",
        name: "Azad Khan",
        role: "Selected as Safety Officer",
        company: "SRF Ltd., Dahej, Gujarat",
        title: "Proud Placement",
        quote:
            "I am proud to be placed. Thanks to my mentors for their continuous guidance and support.",
    },
    {
        image: "/testimonals/devendra-yadav.jpeg",
        name: "Devendra Yadav",
        role: "Selected as Safety Officer",
        company: "DHIPL Projects Pvt. Ltd., Thane, Mumbai",
        title: "Thankful to My Institute",
        quote:
            "Very thankful to my Aim Institute and trainers for this job opportunity.",
    },
    {
        image: "/testimonals/abhishek-sharma.jpeg",
        name: "Abhishek Sharma",
        role: "Selected as Safety Officer",
        company: "TATA Projects, Delhi",
        title: "Institute Made It Possible",
        quote:
            "This success is because of my institute. Thank you for the support and guidance.",
    },
    {
        image: "/testimonals/gaurav-yadav.jpeg",
        name: "Gaurav Yadav",
        role: "Selected as Safety Officer",
        company: "Rajpura Chima Boilers, Bhatinda, Punjab",
        title: "Special Thanks",
        quote:
            "This job would not have been possible without my Nahid Ma’am. Thank you so much, Ma’am.",
    },
    {
        image: "/testimonals/irfan-ansari.jpeg",
        name: "Irfan Ansari",
        role: "Selected as Safety Officer",
        company: "TATA Projects, Delhi",
        title: "Dream Come True",
        quote:
            "Heartfelt thanks to my institute for turning my dreams into reality.",
    },
    {
        image: "/testimonals/naimul-haq.jpeg",
        name: "Naimul Haq",
        role: "Selected as Safety Officer",
        company: "DHIPL Projects Pvt. Ltd., Thane, Mumbai",
        title: "Placement Support",
        quote:
            "Thanks to my Aim Institute’s Ma’am for their guidance and placement support.",
    },
    {
        image: "/testimonals/gulam-yazdani.jpeg",
        name: "Gulam Yazdani",
        role: "Selected as Safety Officer",
        company: "Tech Fibro Industrial Services, Surat, Gujarat",
        title: "Grateful for Opportunity",
        quote:
            "I thank my Ma’am and Sajid Sir for giving me this placement opportunity.",
    },
];

export default function Testimonials() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const current = testimonials[index];

    return (
        <section className="w-full py-20 bg-gradient-to-r from-green-50 via-white to-green-50 overflow-hidden">
            <div className="max-w-[85%] mx-auto text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-14"
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold text-green-900">
                        What Our <span className="text-green-700">Students Say</span>
                    </h2>
                    <div className="mt-4 h-1 w-28 bg-amber-400 rounded-full mx-auto mb-32" />
                </motion.div>

                {/* Carousel */}
                <div className="relative max-w-3xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 60 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -60 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="relative bg-white rounded-2xl shadow-lg p-10 pt-20"
                        >
                            {/* Floating Avatar */}
                            <div className="absolute -top-14 left-1/2 -translate-x-1/2">
                                <div className="p-0.5 rounded-md bg-amber-400 backdrop-blur-md shadow-lg">
                                    <motion.img
                                        src={current.image}
                                        alt={current.name}
                                        initial={{ scale: 0.85, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-28 h-28 rounded-sm object-cover bg-gray-100"
                                    />
                                </div>
                            </div>

                            <p className="text-gray-700 text-lg leading-relaxed">
                                “{current.quote}”
                            </p>

                            <div className="mt-6">
                                <h4 className="text-xl font-bold text-green-900">
                                    {current.name}
                                </h4>
                                <p className="text-sm text-green-700 font-medium">
                                    {current.role}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="flex justify-center gap-3 mt-6">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setIndex(i)}
                                className={`h-3 w-3 rounded-full transition ${i === index ? "bg-green-700" : "bg-green-200"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}