
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const DigitalMarketing = () => {
  const services = [
    {
      title: "Facebook Ads",
      description: "Grow your audience and sales with targeted Facebook ads.",
      icon: "📱",
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Instagram Ads", 
      description: "Engage visually and convert with high-performing Instagram campaigns.",
      icon: "📸",
      color: "from-pink-400 to-pink-600"
    },
    {
      title: "WhatsApp Ads",
      description: "Connect instantly with customers using effective WhatsApp advertising.",
      icon: "💬",
      color: "from-green-400 to-green-600"
    },
    {
      title: "LinkedIn Ads",
      description: "Reach professionals and B2B clients with LinkedIn ad solutions.",
      icon: "💼",
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Twitter Ads",
      description: "Boost brand awareness fast with powerful Twitter ad strategies.", 
      icon: "🐦",
      color: "from-sky-400 to-sky-600"
    },
    {
      title: "SEO, SMM",
      description: "Rank higher, grow faster with SEO and social media.",
      icon: "📈",
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "Website Designing",
      description: "Launch your digital presence with custom websites and hosting.",
      icon: "💻",
      color: "from-indigo-400 to-indigo-600"
    },
    {
      title: "Google Ads",
      description: "Maximize ROI with Google Ads: search, display, and video.",
      icon: "🔍",
      color: "from-red-400 to-red-600"
    },
    {
      title: "YouTube Ads",
      description: "Get more YouTube subscribers and views with expert ad campaigns.",
      icon: "📺",
      color: "from-red-500 to-red-700"
    },
    {
      title: "Email Marketing",
      description: "Drive conversions with engaging and targeted email campaigns.",
      icon: "📧",
      color: "from-teal-400 to-teal-600"
    },
    {
      title: "WhatsApp Marketing",
      description: "Deliver promotions directly with impactful WhatsApp marketing tactics.",
      icon: "📱",
      color: "from-green-500 to-green-700"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Banner Section */}
      <section 
        className="pt-20 pb-16 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)',
        }}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full transform -translate-x-16 translate-y-16"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-white text-center">
            <h1 className="text-5xl font-bold mb-6">STAY AHEAD OF THE CURVE</h1>
            <h2 className="text-3xl font-semibold mb-4">WITH ADVANCED IT TRAINING &</h2>
            <h2 className="text-3xl font-semibold mb-8">DIGITAL MARKETING SOLUTIONS</h2>
            <div className="bg-white text-gray-800 p-6 rounded-xl max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-orange-600 mb-2">Training Minds - Shaping Futures</h3>
              <p className="text-gray-600">
                Get certified with industry-recognized programs and accelerate your career in technology and digital marketing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Digital Marketing Services</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions to boost your online presence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className={`bg-gradient-to-br ${service.color} rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-white h-full`}>
                  <div className="text-center">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                    <p className="text-sm leading-relaxed opacity-90">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">OUR PURPOSE</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At ATME, we are passionate about transforming businesses and careers through cutting-edge digital marketing solutions and comprehensive IT training programs. Our mission is to bridge the gap between talent and technology.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Our Vision</h3>
                  <p className="text-gray-600">Empowering digital transformation</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-yellow-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-orange-600 mb-4">OUR PATH</h3>
              <p className="text-gray-700 mb-4">
                We deliver results-driven digital marketing strategies and provide industry-relevant IT training that prepares professionals for tomorrow's challenges.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Our Testimonials</h4>
                <blockquote className="italic text-gray-600">
                  "ATME Solutions transformed our digital presence and equipped our team with essential IT skills."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Let our digital marketing experts help you reach your target audience and achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get Started Today
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Free Consultation
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DigitalMarketing;
