
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Code, Database, Globe, TrendingUp, Users, Mail, Award, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const itCourses = [
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

  const digitalServices = [
    {
      icon: TrendingUp,
      title: "Search Engine Optimization (SEO)",
      description: "Improve your website's visibility and organic traffic with proven SEO strategies.",
      features: ["Keyword Research", "On-page Optimization", "Technical SEO", "Link Building", "Analytics & Reporting"]
    },
    {
      icon: Users,
      title: "Social Media Marketing",
      description: "Build your brand presence and engage with customers across all social platforms.",
      features: ["Content Strategy", "Community Management", "Paid Advertising", "Influencer Marketing", "Performance Analytics"]
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Create engaging email campaigns that convert leads into loyal customers.",
      features: ["Campaign Design", "List Management", "Automation", "A/B Testing", "Performance Tracking"]
    },
    {
      icon: Palette,
      title: "Branding & Design",
      description: "Professional brand identity and visual design services that make you stand out.",
      features: ["Logo Design", "Brand Guidelines", "Website Design", "Marketing Materials", "Brand Strategy"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive IT training courses and digital marketing services designed to transform careers and grow businesses.
            </p>
          </div>
        </div>
      </section>

      {/* IT Training Courses */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">IT Training Courses</h2>
            <p className="text-xl text-gray-600">Master in-demand technologies with hands-on learning</p>
          </div>

          <div className="space-y-8">
            {itCourses.map((course, index) => (
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

      {/* Digital Marketing Services */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Digital Marketing Services</h2>
            <p className="text-xl text-gray-600">Grow your business with our proven marketing strategies</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {digitalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-purple-600 transition-colors duration-200"
                >
                  Get Started →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Future?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Whether you're looking to advance your career with new skills or grow your business with effective marketing, 
            we're here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Start Your Journey Today
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
