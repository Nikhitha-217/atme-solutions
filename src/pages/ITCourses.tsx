
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Code, Database, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

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

  const courses = [
    {
      icon: Code,
      title: "Web Development",
      description: "Master modern web technologies including HTML5, CSS3, JavaScript, React, Node.js, and database management.",
      duration: "6 months",
      level: "Beginner to Advanced",
      certification: "Industry-recognized certificate",
      topics: ["HTML5 & CSS3", "JavaScript ES6+", "React.js", "Node.js", "MongoDB", "Git & GitHub"]
    },
    {
      icon: Code,
      title: "Python Programming",
      description: "Learn Python for web development, automation, data analysis, and machine learning applications.",
      duration: "4 months", 
      level: "Beginner to Intermediate",
      certification: "Python Developer Certificate",
      topics: ["Python Fundamentals", "Django/Flask", "Data Analysis", "APIs", "Automation", "Testing"]
    },
    {
      icon: Code,
      title: "Java Development",
      description: "Object-oriented programming, enterprise applications, and Android development with Java.",
      duration: "5 months",
      level: "Beginner to Advanced", 
      certification: "Java Developer Certificate",
      topics: ["Core Java", "Spring Framework", "Hibernate", "Android Development", "REST APIs", "Testing"]
    },
    {
      icon: Database,
      title: "Data Science",
      description: "Analytics, machine learning, data visualization, and big data technologies for modern businesses.",
      duration: "6 months",
      level: "Intermediate to Advanced",
      certification: "Data Science Certificate", 
      topics: ["Statistics", "Python/R", "Machine Learning", "SQL", "Tableau", "Big Data"]
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
          <div className="bg-white p-8 rounded-xl shadow-lg text-center mb-16">
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

      {/* Detailed Courses Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our IT Training Courses</h2>
            <p className="text-xl text-gray-600">Master in-demand technologies with hands-on learning</p>
          </div>
          
          <div className="space-y-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                        <course.icon className="text-white" size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{course.title}</h3>
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed">{course.description}</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                      {course.topics.map((topic, topicIndex) => (
                        <span key={topicIndex} className="bg-white px-3 py-2 rounded-lg text-sm font-medium text-gray-700">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-sm text-blue-600 font-semibold mb-1">Duration</div>
                      <div className="text-gray-900">{course.duration}</div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-sm text-purple-600 font-semibold mb-1">Level</div>
                      <div className="text-gray-900">{course.level}</div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-sm text-green-600 font-semibold mb-1">Certification</div>
                      <div className="text-gray-900">{course.certification}</div>
                    </div>
                    <Link
                      to="/contact"
                      className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow duration-200"
                    >
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ITCourses;
