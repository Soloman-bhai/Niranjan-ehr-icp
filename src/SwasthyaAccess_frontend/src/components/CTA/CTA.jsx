import "./CTA.css";

export default function CTA() {
  return (
    <section className="py-16 bg-indigo-700 text-white text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">Take Control of Your Health Data Today</h2>
        <p className="text-lg mb-8">Join thousands of users securely managing their medical records on-chain.</p>
        <a href="#signup" className="btn-primary bg-white text-indigo-700 hover:bg-gray-100">
          Get Started
        </a>
      </div>
    </section>
  );
}
