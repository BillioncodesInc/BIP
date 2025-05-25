import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center mb-4">
              <Logo white />
              <div className="ml-2">
                <span className="text-lg font-bold text-white block leading-tight">BillionCodes</span>
                <span className="text-xs text-blue-100 leading-none">Initiative Program</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Empowering Nigerian tertiary students through scholarships, skill acquisition, mental health advocacy, and tech-driven innovation programs.
            </p>
            <div className="flex space-x-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors" aria-label="YouTube">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-300 hover:text-white transition-colors">Programs</Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-white transition-colors">Events</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-300 hover:text-white transition-colors">Our Team</Link>
              </li>
              <li>
                <Link to="/partners" className="text-gray-300 hover:text-white transition-colors">Partners</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-lg font-bold mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/donate" className="text-gray-300 hover:text-white transition-colors">Donate Now</Link>
              </li>
              <li>
                <Link to="/volunteer" className="text-gray-300 hover:text-white transition-colors">Become a Volunteer</Link>
              </li>
              <li>
                <Link to="/partners#become-partner" className="text-gray-300 hover:text-white transition-colors">Become a Partner</Link>
              </li>
              <li>
                <Link to="/programs#scholarships" className="text-gray-300 hover:text-white transition-colors">Apply for Scholarship</Link>
              </li>
              <li>
                <Link to="/student-portal" className="text-gray-300 hover:text-white transition-colors">Student Portal</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin size={18} className="mr-2 text-orange-500 flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  BillionCodes Headquarters, Lagos, Nigeria
                </span>
              </li>
              <li className="flex">
                <Phone size={18} className="mr-2 text-orange-500 flex-shrink-0 mt-1" />
                <span className="text-gray-300">+234 800 123 4567</span>
              </li>
              <li className="flex">
                <Mail size={18} className="mr-2 text-orange-500 flex-shrink-0 mt-1" />
                <a href="mailto:info@billioncodes.org" className="text-gray-300 hover:text-white transition-colors">
                  info@billioncodes.org
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-bold mb-2">Newsletter</h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 rounded-l-md bg-gray-800 text-white border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                  required
                />
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-r-md transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} BillionCodes Initiative Program. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-4 text-sm text-gray-400">
                <li>
                  <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;