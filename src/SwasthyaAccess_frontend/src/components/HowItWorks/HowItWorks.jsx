import "./HowItWorks.css";

function StepCard({ icon, title, text, step, aos }) {
  return (
    <div
      data-aos={aos}
      className="relative bg-indigo-50 border border-indigo-200 
                 p-6 pt-8 pb-10 text-center flex flex-col items-center
                 rounded-br-xl rounded-bl-xl rounded-tr-xl
                 shadow-md transition hover:shadow-lg"
    >
      {/* Icon */}
      <div className="text-indigo-600 text-5xl mb-4">
        <i className={`fas ${icon}`}></i>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {title}
      </h3>

      {/* Text */}
      <p className="text-sm text-gray-700 leading-relaxed">{text}</p>

      {/* Step Number - Floating Bottom Right */}
      <div
        className="absolute bg-white text-indigo-600 font-extrabold
                   text-5xl rounded-full shadow-md z-20
                   h-14 w-14 flex items-center justify-center
                   -bottom-6 -right-6 border-2 border-indigo-200"
      >
        {step}
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const steps = [
    {
      icon: "fa-user-plus",
      title: "Create Your Account",
      text: "Sign up securely and create your personal health record vault on the Internet Computer Protocol.",
      aos: "fade-right",
    },
    {
      icon: "fa-upload",
      title: "Upload & Organize Records",
      text: "Easily upload medical documents, lab results, prescriptions, and images to your secure vault.",
      aos: "fade-up",
    },
    {
      icon: "fa-user-check",
      title: "Grant Consent to Doctors",
      text: "Share your records with healthcare providers by granting explicit consent through the app.",
      aos: "fade-down",
    },
    {
      icon: "fa-shield-alt",
      title: "Stay Secure & In Control",
      text: "Your data is encrypted and stored on ICP, giving you full control and privacy at all times.",
      aos: "fade-left",
    },
  ];

  return (
    <section
      className="bg-white py-20 px-6 max-w-7xl mx-auto"
      id="how-it-works"
    >
      <h2 className="text-3xl font-extrabold text-center text-indigo-700 mb-12">
        How HealthSafe ICP Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <StepCard
            key={index}
            icon={step.icon}
            title={step.title}
            text={step.text}
            step={index + 1}
            aos={step.aos}
          />
        ))}
      </div>
    </section>
  );
}
