import { motion } from "framer-motion";
import "./Solutions.css";

const rowAnim = (dir) => ({
  hidden: { opacity: 0, x: dir === "left" ? -80 : 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
});

export default function Solutions() {
  return (
    <section
      aria-label="Solutions provided by the app"
      className="bg-indigo-50 py-20 px-6 max-w-7xl mx-auto"
      id="solutions"
    >
      <h2 className="text-4xl font-extrabold text-center text-indigo-700 mb-14">
        How We Solve Your Health Record Challenges
      </h2>

      <div className="space-y-16 max-w-6xl mx-auto">
        {/* ROW 1 */}
        <motion.div
          variants={rowAnim("left")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
        >
          <div className="md:w-1/2">
            <img
              src="https://storage.googleapis.com/a1aa/image/4a20c3b8-fcdc-4715-d84e-c03a25ebb01a.jpg"
              alt="Disorganized health records"
              className="rounded-lg shadow-md mx-auto w-full h-auto"
              loading="lazy"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold text-indigo-700 mb-4">
              Eliminate Paper Clutter &amp; Lost Records
            </h3>
            <p className="text-gray-700 leading-relaxed">
              No more searching through stacks of paper or multiple apps. Store all your health records digitally in one secure place accessible anytime.
            </p>
          </div>
        </motion.div>

        {/* ROW 2 */}
        <motion.div
          variants={rowAnim("right")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col md:flex-row items-center gap-8 md:gap-16 md:flex-row-reverse"
        >
          <div className="md:w-1/2">
            <img
              src="https://storage.googleapis.com/a1aa/image/987af41c-bd53-4d3f-b73e-66156761bdfc.jpg"
              alt="Secure health data sharing"
              className="rounded-lg shadow-md mx-auto w-full h-auto"
              loading="lazy"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold text-indigo-700 mb-4">
              Share Data Securely &amp; With Consent
            </h3>
            <p className="text-gray-700 leading-relaxed">
              You decide who can view your health information. Share your records with doctors or caregivers only after granting explicit consent.
            </p>
          </div>
        </motion.div>

        {/* ROW 3 */}
        <motion.div
          variants={rowAnim("left")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
        >
          <div className="md:w-1/2">
            <img
              src="https://storage.googleapis.com/a1aa/image/e79389cd-a08c-4bda-a677-2358ed1cf4d5.jpg"
              alt="Accessing health records on the go"
              className="rounded-lg shadow-md mx-auto w-full h-auto"
              loading="lazy"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold text-indigo-700 mb-4">
              Access Anytime, Anywhere
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Whether at home or traveling, your health records are always available on your devices, giving you peace of mind and better health management.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
