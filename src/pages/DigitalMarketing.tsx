
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const DigitalMarketing = () => {
  const services = [
    {
      title: "Facebook Ads",
      description: "Grow your audience and sales with targeted Facebook ads.",
      icon: "📱"
    },
    {
      title: "Instagram Ads", 
      description: "Engage visually and convert with high-performing Instagram campaigns.",
      icon: "📸"
    },
    {
      title: "WhatsApp Ads",
      description: "Connect instantly with customers using effective WhatsApp advertising.",
      icon: "💬"
    },
    {
      title: "LinkedIn Ads",
      description: "Reach professionals and B2B clients with LinkedIn ad solutions.",
      icon: "💼"
    },
    {
      title: "Twitter Ads",
      description: "Boost brand awareness fast with powerful Twitter ad strategies.", 
      icon: "🐦"
    },
    {
      title: "SEO, SMM",
      description: "Rank higher, grow faster with SEO and social media.",
      icon: "📈"
    },
    {
      title: "Website Designing",
      description: "Launch your digital presence with custom websites and hosting.",
      icon: "💻"
    },
    {
      title: "Google Ads",
      description: "Maximize ROI with Google Ads: search, display, and video.",
      icon: "🔍"
    },
    {
      title: "YouTube Ads",
      description: "Get more YouTube subscribers and views with expert ad campaigns.",
      icon: "📺"
    },
    {
      title: "Email Marketing",
      description: "Drive conversions with engaging and targeted email campaigns.",
      icon: "📧"
    },
    {
      title: "WhatsApp Marketing",
      description: "Deliver promotions directly with impactful WhatsApp marketing tactics.",
      icon: "📱"
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
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200 h-full">
                  <div className="text-center">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-lg font-bold mb-3 text-gray-900">{service.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-600">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
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
