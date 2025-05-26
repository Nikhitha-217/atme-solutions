
import { useState, useEffect, useRef } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Contact = () => {
  const { toast } = useToast();
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    feedback: ''
  });

  // Company address coordinates (Hyderabad, Telangana)
  const companyLocation: [number, number] = [78.4867, 17.3850];

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: companyLocation,
      zoom: 14
    });

    // Add a marker for the company location
    new mapboxgl.Marker({ color: '#EC4899' })
      .setLngLat(companyLocation)
      .setPopup(
        new mapboxgl.Popup().setHTML(`
          <div class="p-2">
            <h3 class="font-bold">ATME Solutions</h3>
            <p class="text-sm">Srinivasa Puram Colony, Road No. 2,<br>
            Vanasthalipuram, Hyderabad, Telangana,<br>
            INDIA - 500 070</p>
          </div>
        `)
      )
      .addTo(map.current);

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      feedback: ''
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Banner Section */}
      <section 
        className="pt-20 pb-16 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)',
        }}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full transform -translate-x-16 translate-y-16"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-white text-center">
            <h1 className="text-5xl font-bold mb-6">Get In Touch With Us</h1>
            <div className="bg-white text-gray-800 p-8 rounded-xl max-w-4xl mx-auto shadow-lg">
              <div className="text-6xl mb-6">🤝</div>
              <blockquote className="text-2xl font-bold text-gray-800 mb-4">
                "Every great partnership begins with a conversation. Let's start building something amazing together."
              </blockquote>
              <p className="text-lg text-gray-600">
                Whether you need IT training or digital marketing solutions, we're here to help you succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-orange-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* GET IN TOUCH Form */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">GET IN TOUCH</h2>
              <p className="text-lg text-gray-800 mb-8">
                Whether you're curious about our services or need expert guidance, just reach out using the form below. We're always happy to assist!
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="FIRST NAME"
                    required
                    className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-blue-500 bg-white"
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="LAST NAME"
                    required
                    className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-blue-500 bg-white"
                  />
                </div>
                
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="E-MAIL"
                  required
                  className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-blue-500 bg-white"
                />
                
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="PHONE NUMBER"
                  className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-blue-500 bg-white"
                />
                
                <textarea
                  name="feedback"
                  value={formData.feedback}
                  onChange={handleInputChange}
                  placeholder="FEEDBACK"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-blue-500 bg-white"
                />
                
                <button
                  type="submit"
                  className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
                >
                  CONTACT US
                </button>
              </form>
            </div>

            {/* Location and Map */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">📍 LOCATION</h2>
              
              {/* Mapbox Token Input */}
              {!mapboxToken && (
                <div className="mb-6 p-4 bg-blue-100 rounded-lg">
                  <p className="text-sm text-blue-800 mb-2">
                    To display the interactive map, please enter your Mapbox public token:
                  </p>
                  <input
                    type="text"
                    placeholder="Enter Mapbox public token"
                    value={mapboxToken}
                    onChange={(e) => setMapboxToken(e.target.value)}
                    className="w-full px-3 py-2 rounded border focus:ring-2 focus:ring-blue-500"
                  />
                  <p className="text-xs text-blue-600 mt-1">
                    Get your token at{' '}
                    <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="underline">
                      mapbox.com
                    </a>
                  </p>
                </div>
              )}

              {/* Map Container */}
              <div className="bg-gray-200 rounded-lg h-64 mb-6 overflow-hidden">
                {mapboxToken ? (
                  <div ref={mapContainer} className="w-full h-full" />
                ) : (
                  <div className="flex items-center justify-center h-full text-center text-gray-500">
                    <div>
                      <MapPin size={48} className="mx-auto mb-2" />
                      <p className="font-semibold">Interactive Map</p>
                      <p className="text-sm">Enter Mapbox token to view map</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Contact Information */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
