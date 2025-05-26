
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Code, Database, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const ITCourses = () => {
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
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              IT Training <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Courses</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Master in-demand technologies with hands-on learning and industry-recognized certifications.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
