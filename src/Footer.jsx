const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-blue-400 to-blue-600 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Footer Content Container */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                "Home",
                "Shop Now",
                "Categories",
                "About Us",
                "Terms of Service",
              ].map((link) => (
                <li key={link}>
                  <a
                    href={`/${link.toLowerCase().replace(/ /g, "-")}`}
                    className="hover:text-blue-200 transition-colors duration-300 hover:underline underline-offset-1"
                    aria-label={`Navigate to ${link}`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="mb-4">
              Stay updated with the latest products, offers, and news.
            </p>
            <div className="flex gap-7">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-l-md text-gray-800 w-2/3 focus:outline-none border border-gray-300"
                aria-label="Email for newsletter subscription"
              />
              <button
                className="bg-blue-800 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none transition-colors duration-300"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {["facebook", "twitter", "instagram", "linked-in"].map(
                (icon) => (
                  <a
                    key={icon}
                    className="capitalize text-white hover:text-blue-200 transition-colors duration-300 cursor-pointer"
                  >
                    {icon}
                  </a>
                )
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-200">
          <p>© 2024 Smart Hub. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
