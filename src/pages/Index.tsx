
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Banner Section */}
      <section 
        className="pt-20 pb-16 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
        }}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full transform -translate-x-16 translate-y-16"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-white text-center">
            <h1 className="text-5xl font-bold mb-6">Welcome to ATME Solutions</h1>
            <h2 className="text-3xl font-semibold mb-8">Turn Your Ambitions into Achievements</h2>
            <div className="bg-white text-gray-800 p-6 rounded-xl max-w-2xl mx-auto">
              <p className="text-lg font-bold italic">
                "Empowering businesses and individuals through cutting-edge IT training and comprehensive digital marketing solutions."
              </p>
            </div>
          </div>
        </div>
      </section>

      <Hero />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Index;
