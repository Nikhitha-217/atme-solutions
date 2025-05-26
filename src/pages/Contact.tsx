
import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    feedback: ''
  });

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
              <div className="text-6xl mb-6">📞</div>
              <blockquote className="text-2xl font-bold text-gray-800 mb-4">
                "Ready to transform your digital presence? Let's connect and turn your vision into reality."
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

            {/* Location */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">📍 LOCATION</h2>
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center mb-8">
                <div className="text-center text-gray-500">
                  <MapPin size={48} className="mx-auto mb-2" />
                  <p className="font-semibold">Interactive Map</p>
                  <p className="text-sm">Srinivasa Puram Colony, Road No. 2</p>
                  <p className="text-sm">Vanasthalipuram, Hyderabad, Telangana</p>
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
