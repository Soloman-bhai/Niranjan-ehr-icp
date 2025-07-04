import "./Contact.css";

export default function Contact() {
  return (
<section
  aria-label="Contact information and form"
  className="bg-white py-16 px-6 max-w-7xl mx-auto"
  id="contact"
>
  <h2 className="text-3xl font-extrabold text-indigo-700 mb-8 text-center">
    Get in Touch
  </h2>
  <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
    {/* Contact Info */}
    <div>
      <h3 className="text-xl font-semibold mb-4 text-indigo-700">Contact Info</h3>
      <p className="mb-4 text-gray-700">
        Have questions or want to learn more? Reach out to us anytime.
      </p>
      <ul className="space-y-3 text-gray-700">
        <li className="flex items-center space-x-3">
          <i className="fas fa-phone-alt text-indigo-600"></i>
          <span>+1 (555) 123-4567</span>
        </li>
        <li className="flex items-center space-x-3">
          <i className="fas fa-envelope text-indigo-600"></i>
          <span>support@healthsafeicp.com</span>
        </li>
        <li className="flex items-center space-x-3">
          <i className="fas fa-map-marker-alt text-indigo-600"></i>
          <span>123 Health St, Wellness City, USA</span>
        </li>
      </ul>
    </div>

    {/* Contact Form */}
    <form
      action="#"
      method="POST"
      aria-label="Contact form"
      className="space-y-6"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-gray-700 font-semibold mb-1"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your full name"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-gray-700 font-semibold mb-1"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-gray-700 font-semibold mb-1"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          required
          placeholder="Write your message here"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-md hover:bg-indigo-700 transition"
      >
        Send Message
      </button>
    </form>
  </div>
</section>

  );
}
