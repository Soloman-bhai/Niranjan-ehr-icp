import "./Features.css";

function FeatureCard({ icon, title, desc }) {
  return (
    <div
      className="relative bg-indigo-50 border border-indigo-200 
                 p-6 pt-8 pb-10 text-center flex flex-col items-center
                 rounded-br-xl rounded-bl-xl rounded-tr-xl
                 shadow-md transition hover:shadow-lg"
    >
      {/* Icon */}
      <div className="text-indigo-600 text-5xl mb-4">
        <i className={icon}></i>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-700 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

export default function Features() {
  const features = [
    {
      icon: "fas fa-lock",
      title: "Secure Storage",
      desc: "All health records are encrypted and securely stored on the Internet Computer blockchain.",
    },
    {
      icon: "fas fa-user-shield",
      title: "Privacy First",
      desc: "Only you can access and share your data. Consent is required before sharing with doctors.",
    },
    {
      icon: "fas fa-cloud-upload-alt",
      title: "Easy Uploads",
      desc: "Upload documents, prescriptions, and reports in one place, accessible anytime.",
    },
  ];

  return (
    <section
      aria-label="Features of the digital health record app"
      className="bg-white py-20 px-6 max-w-7xl mx-auto"
      id="features"
    >
      <h2 className="text-3xl font-extrabold text-center text-indigo-700 mb-12">
        Features That Put You in Control
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            desc={feature.desc}
          />
        ))}
      </div>
    </section>
  );
}
