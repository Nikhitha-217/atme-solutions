
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section with Purple Gradient Background */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-600 via-purple-600 to-purple-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white/10 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-6">About Us:</h1>
            <h2 className="text-2xl mb-4 font-semibold">Empowering Digital Future:</h2>
            <p className="text-lg mb-8 max-w-4xl">
              Bridging Talent and Technology to Transform Tomorrow.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Who We Are:</h3>
              <p className="text-base leading-relaxed max-w-4xl">
                ATME Solutions is a dynamic technology partner committed to empowering businesses and individuals for the digital future. With a forward-thinking approach, we combine the power of top-tier talent and innovative digital strategies to drive success in a tech-driven world.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">OUR CORE AREAS OF EXPERTISE:</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-yellow-300">IT Staffing & Training:</h4>
                <ul className="space-y-2 text-base">
                  <li>• Connects businesses with highly skilled IT professionals</li>
                  <li>• Delivers customized, industry-relevant training programs</li>
                  <li>• Supports enterprises and individuals alike</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-yellow-300">DIGITAL MARKETING</h4>
                <ul className="space-y-2 text-base">
                  <li>• Drives brand visibility through data-backed strategies</li>
                  <li>• End-to-end digital solutions: SEO, branding, social media, performance marketing</li>
                  <li>• Focus on ROI and business growth</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why ATME Solutions Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-orange-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why ATME Solutions?</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-800 font-medium">Integrated Solutions for End-to-End Digital Success</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-800 font-medium">Real-World Industry Training & Career Guidance</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-800 font-medium">Focus on Measurable Results & ROI</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-800 font-medium">Personalized Approach for Every Client</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-800 font-medium">Passionate Team of Experts with Tech & Marketing Know-How</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="text-6xl">🤔</div>
                </div>
                <div className="text-center text-gray-700 font-medium">
                  Expert Solutions for Digital Growth
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

export default About;
