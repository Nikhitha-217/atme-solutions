
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Banner Section */}
      <section 
        className="pt-20 pb-16 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #14B8A6 0%, #0EA5E9 100%)',
        }}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full transform -translate-x-16 translate-y-16"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-white text-center">
            <h1 className="text-5xl font-bold mb-6">About ATME Solutions</h1>
            <div className="bg-white text-gray-800 p-8 rounded-xl max-w-4xl mx-auto shadow-lg">
              <div className="text-6xl mb-6">🌟</div>
              <blockquote className="text-2xl font-bold text-gray-800 mb-4">
                "Excellence is not a destination; it's a continuous journey of learning, growing, and transforming potential into achievement."
              </blockquote>
              <p className="text-lg text-gray-600">
                At ATME Solutions, we believe in empowering minds and transforming futures through innovation and dedication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Blue Background */}
      <section className="py-16" style={{ backgroundColor: '#4285F4' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Empowering Digital Future</h2>
            <p className="text-xl text-white max-w-3xl mx-auto opacity-90">
              Bridging Talent and Technology to Transform Tomorrow.
            </p>
          </div>
          
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Who We Are:</h3>
            <p className="text-lg text-white leading-relaxed opacity-90">
              ATME Solutions is a dynamic technology partner committed to empowering businesses and individuals for the digital future. With a forward-thinking approach, we combine the power of top-tier talent and innovative digital strategies to drive success in a tech-driven world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h4 className="text-2xl font-bold text-orange-600 mb-4">IT Staffing & Training:</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Connects businesses with highly skilled IT professionals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Delivers customized, industry-relevant training programs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Supports enterprises and individuals alike</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h4 className="text-2xl font-bold text-blue-600 mb-4">Digital Marketing</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Drives brand visibility through data-backed strategies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>End-to-end digital solutions: SEO, branding, social media, performance marketing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Focus on ROI and business growth</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-orange-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-6xl mb-6">💼</div>
            <blockquote className="text-2xl font-bold text-gray-800 mb-4">
              "Empowered IT teams build empowered systems. Let's talk about nurturing technical talent to tackle tomorrow's challenges."
            </blockquote>
            <p className="text-lg text-gray-600">
              Let's Discuss Our IT Staffing or Training Needs!
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
