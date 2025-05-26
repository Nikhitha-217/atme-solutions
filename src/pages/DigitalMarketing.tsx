
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { TrendingUp } from 'lucide-react';

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
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Digital <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Marketing Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Boost your business with our comprehensive digital marketing solutions designed to increase your online presence and drive results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-bold text-blue-600 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  <div className="mt-4">
                    <TrendingUp className="w-6 h-6 text-red-500 mx-auto" />
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
