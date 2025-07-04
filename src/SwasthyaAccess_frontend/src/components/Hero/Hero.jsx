import "./Hero.css";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Landing page hero section"
      className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center md:items-start gap-12 md:gap-24"
    >
      {/* Text */}
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-700 leading-tight">
          Securely Store &amp; Manage Your Health Records on ICP
        </h1>
        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
          HealthSafe ICP empowers patients to safely store, manage, and share their digital health records with doctors —
          all with full control and consent.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a href="#signup" className="btn-primary text-lg">
            Get Started
          </a>
          <a href="#how-it-works" className="btn-outline text-lg">
            Learn More
          </a>
        </div>
      </div>

      {/* Illustration */}
      <div className="w-full max-w-lg">
        <img
          src="https://storage.googleapis.com/a1aa/image/2a3f1473-bfc8-4ce4-f15a-e7e944285804.jpg"
          alt="Patient managing digital health records"
          className="rounded-lg shadow-lg mx-auto"
          loading="lazy"
        />
      </div>
    </section>
  );
}
