
import { Code, TrendingUp, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const itCourses = [
    {
      title: "Web Development",
      description: "Master HTML, CSS, JavaScript, React, and Node.js",
      duration: "6 months",
      level: "Beginner to Advanced"
    },
    {
      title: "Python Programming",
      description: "Learn Python for web development, automation, and data analysis",
      duration: "4 months",
      level: "Beginner to Intermediate"
    },
    {
      title: "Java Development",
      description: "Object-oriented programming and enterprise applications",
      duration: "5 months",
      level: "Beginner to Advanced"
    },
    {
      title: "Data Science",
      description: "Analytics, machine learning, and data visualization",
      duration: "6 months",
      level: "Intermediate to Advanced"
    }
  ];

  const digitalServices = [
    {
      title: "Search Engine Optimization",
      description: "Improve your website's visibility and organic traffic",
      icon: TrendingUp
    },
    {
      title: "Social Media Marketing",
      description: "Build your brand presence across all social platforms",
      icon: Users
    },
    {
      title: "Email Marketing",
      description: "Create engaging campaigns that convert leads to customers",
      icon: Award
    },
    {
      title: "Branding & Design",
      description: "Professional brand identity and visual design services",
      icon: Code
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're looking to advance your career or grow your business, we have the perfect solution for you.
          </p>
        </div>

        {/* IT Training Courses */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">IT Training Courses</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {itCourses.map((course, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Code className="text-white" size={24} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{course.title}</h4>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="space-y-2">
                  <div className="text-sm text-blue-600 font-medium">Duration: {course.duration}</div>
                  <div className="text-sm text-purple-600 font-medium">Level: {course.level}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Digital Marketing Services */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Digital Marketing Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {digitalServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="text-white" size={24} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
