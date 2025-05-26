
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITCourses = () => {
  const trainingPrograms = [
    {
      title: "Courses",
      description: "Comprehensive programming courses covering modern technologies and frameworks.",
      icon: "💻",
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Programming Courses",
      description: "Learn programming languages like Python, Java, JavaScript and more.",
      icon: "⌨️",
      color: "from-orange-400 to-orange-600"
    },
    {
      title: "Specialized Courses",
      description: "Advanced courses in AI, Machine Learning, Cloud Computing and DevOps.",
      icon: "🚀",
      color: "from-orange-400 to-yellow-500"
    },
    {
      title: "Projects & Placements",
      description: "Real-world projects and placement assistance to kickstart your career.",
      icon: "🎯",
      color: "from-teal-400 to-cyan-500"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Banner Section */}
      <section 
        className="pt-20 pb-16 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #14B8A6 0%, #3B82F6 100%)',
        }}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full transform -translate-x-16 translate-y-16"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-white text-center">
            <h1 className="text-5xl font-bold mb-6">IT Training and Placements</h1>
            <h2 className="text-3xl font-semibold mb-8">Empowering Talent, Enabling Technology</h2>
            <div className="bg-white text-gray-800 p-6 rounded-xl max-w-2xl mx-auto">
              <p className="text-lg">
                At ATME Solutions, our approach to providing efficient contemporary and industry-relevant talent development through innovative technical training and career guidance programs that enhance our professional growth potential and development practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">EXPLORE OUR TRAINING PROGRAMS</h2>
            <p className="text-xl text-gray-600">We deliver reliable, pre-screened IT talent to meet your project, contract, or full-time hiring needs.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {trainingPrograms.map((program, index) => (
              <div key={index} className="group">
                <div className={`bg-gradient-to-br ${program.color} rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-white h-full`}>
                  <div className="text-center">
                    <div className="text-4xl mb-4">{program.icon}</div>
                    <h3 className="text-lg font-bold mb-3">{program.title}</h3>
                    <p className="text-sm leading-relaxed opacity-90">{program.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quote Section */}
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="text-6xl mb-6">💡</div>
            <blockquote className="text-2xl font-bold text-gray-800 mb-4 italic">
              "Code your future with confidence—learn the skills that power the digital world."
            </blockquote>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">Why People Choose ATME For IT Courses</h3>
              <p className="text-gray-600">
                ATME Solutions delivers the most reliable talent acquisition for your staffing and development needs. We provide industry-relevant training with expert guidance ensuring enhanced career prospects and professional development.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ITCourses;
