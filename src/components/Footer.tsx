
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src="/lovable-uploads/d492b239-17b9-416a-bab5-aa8327b2a4d5.png" 
              alt="Atme Solutions" 
              className="h-24 w-auto mb-4"
            />
            <p className="text-gray-700 mb-6 leading-relaxed font-bold italic">
              "Turn your Ambitions into Achievements with us"
            </p>
            <div>
              <h3 className="text-lg font-bold mb-4 italic">Follow the Buzz</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-green-500 transition-colors duration-200">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.863 3.687z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-700 transition-colors duration-200">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors duration-200">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">About Us</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Services</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-600">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="text-gray-600 mr-3 mt-1 flex-shrink-0" size={18} />
                <div className="text-gray-600">
                  <p>Srinivasa Puram Colony, Road No. 2,</p>
                  <p>Vanasthalipuram, Hyderabad, Telangana,</p>
                  <p>INDIA - 500 070.</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="text-gray-600 mr-3 flex-shrink-0" size={18} />
                <div className="text-gray-600">
                  <p>info@atmesolutions.com</p>
                  <p>atmesolutions2022@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="text-gray-600 mr-3 flex-shrink-0" size={18} />
                <div className="text-gray-600">
                  <p>+91 84669 93320</p>
                  <p>+91 7799480686 / 7 / 8</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black text-white text-center py-4 mt-8 -mx-4 sm:-mx-6 lg:-mx-8">
          <p className="text-sm">
            ©2025 ATME SOLUTIONS Pvt.Ltd. | Hyderabad, India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
