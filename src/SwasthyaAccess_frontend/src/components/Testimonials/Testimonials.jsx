import { motion } from "framer-motion";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Maria G.",
    role: "Patient",
    quote:
      "HealthSafe ICP has completely transformed how I manage my medical records. I feel safe knowing my data is secure and I control who sees it.",
    image:
      "https://storage.googleapis.com/a1aa/image/4ec47516-8685-45b3-548f-a7bff564f641.jpg",
  },
  {
    name: "James L.",
    role: "Patient",
    quote:
      "Sharing my health records with my doctor has never been easier. The consent feature gives me peace of mind.",
    image:
      "https://storage.googleapis.com/a1aa/image/a9e0c651-d369-4057-c7d2-f1d5c6a1eb68.jpg",
  },
  {
    name: "Dr. Emily R.",
    role: "Healthcare Provider",
    quote:
      "As a doctor, having secure access to my patients' records with their consent improves care and saves time.",
    image:
      "https://storage.googleapis.com/a1aa/image/51a5bd89-9d39-41ba-d658-488592dbb155.jpg",
  },
  {
    name: "Aarav Sharma",
    role: "Diabetic Patient",
    quote:
      "I finally feel in control of my health data. Sharing records with doctors has never been easier.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sana Patel",
    role: "Tech-Savvy Mom",
    quote:
      "This app is a lifesaver! I can track my family’s health records on the go with full privacy.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Dr. Karthik Rao",
    role: "Oncologist",
    quote:
      "Smart. Secure. Efficient. A game-changer for the healthcare ecosystem.",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
  },
];

const loopedTestimonials = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section
      aria-label="User testimonials"
      className="bg-indigo-50 py-20 px-6 max-w-7xl mx-auto overflow-hidden"
    >
      <h2 className="text-3xl font-extrabold text-center text-indigo-700 mb-12">
        What Our Users Say
      </h2>

      <div className="relative">
        <motion.div
          className="flex gap-8 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 30,
            repeat: Infinity,
          }}
        >
          {loopedTestimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white w-80 shrink-0 rounded-lg shadow-md p-6 flex flex-col items-center text-center justify-between"
              style={{ height: "100%" }}
            >
              <div>
                <img
                  src={t.image}
                  alt={`Portrait of ${t.name}`}
                  className="w-24 h-24 rounded-full mb-4 object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <p
                  className="text-gray-700 italic mb-4"
                  style={{ minHeight: "96px" }} // Ensures uniform height for quotes
                >
                  "{t.quote}"
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-indigo-700">{t.name}</h4>
                <span className="text-gray-500 text-sm">{t.role}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
