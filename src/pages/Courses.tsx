
import { useState } from 'react';
import { CourseCardProps } from '@/components/CourseCard';
import CourseGrid from '@/components/CourseGrid';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const courses: CourseCardProps[] = [
  {
    id: "1",
    title: "Complete Data Structures & Algorithms",
    description: "Master all essential data structures and algorithm concepts with hands-on exercises",
    image: "https://source.unsplash.com/random/800x600/?coding",
    level: "Beginner",
    duration: "8 weeks",
    students: 12420,
    rating: 4.8,
    category: "Data Structures"
  },
  {
    id: "2", 
    title: "Python for Machine Learning",
    description: "Learn Python programming specifically tailored for machine learning applications",
    image: "https://source.unsplash.com/random/800x600/?python",
    level: "Intermediate",
    duration: "10 weeks",
    students: 8753,
    rating: 4.7,
    category: "Python"
  },
  {
    id: "3",
    title: "Full Stack Web Development",
    description: "Build responsive websites with modern technologies like React, Node.js and MongoDB",
    image: "https://source.unsplash.com/random/800x600/?webdevelopment",
    level: "Intermediate",
    duration: "12 weeks",
    students: 10894,
    rating: 4.9,
    category: "Web Tech"
  },
  {
    id: "4",
    title: "Database Management Systems",
    description: "Learn database design, SQL, NoSQL and efficient data management techniques",
    image: "https://source.unsplash.com/random/800x600/?database",
    level: "Beginner",
    duration: "6 weeks",
    students: 7623,
    rating: 4.6,
    category: "DSA"
  },
  {
    id: "5",
    title: "Advanced Algorithms",
    description: "Dive deep into complex algorithms and problem-solving strategies",
    image: "https://source.unsplash.com/random/800x600/?algorithm",
    level: "Advanced",
    duration: "8 weeks",
    students: 5321,
    rating: 4.8,
    category: "Algorithms"
  },
  {
    id: "6",
    title: "System Design for Interviews",
    description: "Learn to design scalable systems and ace technical interviews",
    image: "https://source.unsplash.com/random/800x600/?systemdesign",
    level: "Advanced",
    duration: "6 weeks",
    students: 8932,
    rating: 4.9,
    category: "System Design"
  },
  {
    id: "7",
    title: "Machine Learning Fundamentals",
    description: "Understand core machine learning algorithms and implementation techniques",
    image: "https://source.unsplash.com/random/800x600/?machinelearning",
    level: "Intermediate",
    duration: "10 weeks",
    students: 9876,
    rating: 4.7,
    category: "Machine Learning"
  },
  {
    id: "8",
    title: "DevOps & Cloud Engineering",
    description: "Master CI/CD pipelines, containerization, and cloud infrastructure",
    image: "https://source.unsplash.com/random/800x600/?devops",
    level: "Intermediate",
    duration: "8 weeks",
    students: 6543,
    rating: 4.6,
    category: "DevOps"
  }
];

const categories = [
  "Trending Now",
  "Data Structures",
  "Algorithms", 
  "System Design",
  "Foundational Courses",
  "Data Science",
  "Practice Problem",
  "Python",
  "Machine Learning",
  "Data Science Using Python",
  "Django",
  "DevOps",
  "Java"
];

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState('Trending Now');

  const scrollLeft = () => {
    const container = document.getElementById('category-scroll');
    if (container) {
      container.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = document.getElementById('category-scroll');
    if (container) {
      container.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f9fcfa]">
      {/* Category navigation */}
      <div className="relative border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto relative flex items-center">
          <button 
            onClick={scrollLeft}
            className="absolute left-0 z-10 bg-gradient-to-r from-white to-transparent px-2 h-full flex items-center"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <div 
            id="category-scroll"
            className="flex overflow-x-auto py-4 px-8 scrollbar-hide"
            style={{ scrollbarWidth: 'none' }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap px-4 py-2 text-sm font-medium mx-1 border-b-2 ${
                  activeCategory === category 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <button 
            onClick={scrollRight}
            className="absolute right-0 z-10 bg-gradient-to-l from-white to-transparent px-2 h-full flex items-center"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      {/* Hero Section */}
      <div className="bg-[#f2f7f5] py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Hello, What Do You Want To Learn?</h1>
          
          <CourseGrid 
            title=""
            courses={courses} 
            showFilters={false}
            showSearch={true}
            showHeading={false}
          />
        </div>
      </div>
      
      {/* Explore Section */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Explore</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Data Structures</h3>
                <p className="text-gray-600 mb-4">
                  Master the foundation of programming with comprehensive data structure tutorials
                </p>
                <a href="#" className="text-primary font-medium">View Courses →</a>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Algorithms</h3>
                <p className="text-gray-600 mb-4">
                  Learn problem-solving techniques with our algorithm courses and challenges
                </p>
                <a href="#" className="text-primary font-medium">View Courses →</a>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">System Design</h3>
                <p className="text-gray-600 mb-4">
                  Build scalable systems and prepare for technical interviews
                </p>
                <a href="#" className="text-primary font-medium">View Courses →</a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Featured Courses */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CourseGrid 
            title="Featured Courses" 
            subtitle="Popular courses selected by our team of experts"
            courses={courses} 
            showFilters={true} 
          />
        </div>
      </div>
    </div>
  );
};

export default Courses;
