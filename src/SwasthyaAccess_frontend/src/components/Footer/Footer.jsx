import "./Footer.css";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
        <p>© {new Date().getFullYear()} HealthSafe ICP. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a aria-label="Facebook" className="hover:text-indigo-600 transition" href="#">
            <i className="fab fa-facebook-f fa-lg"></i>
          </a>
          <a aria-label="Twitter" className="hover:text-indigo-600 transition" href="#">
            <i className="fab fa-twitter fa-lg"></i>
          </a>
          <a aria-label="LinkedIn" className="hover:text-indigo-600 transition" href="#">
            <i className="fab fa-linkedin-in fa-lg"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
