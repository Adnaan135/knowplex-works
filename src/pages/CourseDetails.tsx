
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  ArrowLeft, 
  Clock, 
  Users, 
  Award, 
  CheckCircle, 
  Play, 
  Book, 
  Share2, 
  Star, 
  ChevronDown, 
  ChevronUp,
  Bookmark,
  Download,
  Lock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const CourseDetails = () => {
  const { courseId } = useParams();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
  // In a real application, you would fetch course data based on courseId
  const course = {
    id: courseId || '1',
    title: 'Python for Beginners: Learn Programming from Scratch',
    description: 'Start your coding journey with Python, one of the most beginner-friendly and versatile programming languages. This comprehensive course will take you from absolute beginner to confident Python programmer through hands-on projects and practical exercises.',
    image: 'https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2974&q=80',
    level: 'Beginner',
    duration: '8 weeks',
    students: 12540,
    rating: 4.8,
    reviewCount: 1254,
    instructor: {
      name: 'Dr. David Miller',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
      role: 'Python Developer & Educator',
      courses: 12,
      students: 45000
    },
    price: 49.99,
    originalPrice: 199.99,
    features: [
      'Lifetime access to 80+ lectures',
      'Hands-on projects and exercises',
      'Downloadable resources and code samples',
      'Interactive coding challenges',
      'Certificate of completion',
      'Community access and support'
    ],
    modules: [
      {
        title: 'Introduction to Python',
        lessons: [
          { title: 'Welcome to the Course', duration: '5:20', isPreview: true },
          { title: 'Setting Up Your Development Environment', duration: '12:45', isPreview: true },
          { title: 'Python Syntax Basics', duration: '18:30', isPreview: false },
          { title: 'Variables and Data Types', duration: '22:15', isPreview: false }
        ]
      },
      {
        title: 'Control Flow',
        lessons: [
          { title: 'Conditional Statements', duration: '20:10', isPreview: false },
          { title: 'Loops in Python', duration: '24:30', isPreview: false },
          { title: 'Working with for Loops', duration: '18:45', isPreview: false },
          { title: 'Break and Continue Statements', duration: '15:20', isPreview: false }
        ]
      },
      {
        title: 'Functions and Modules',
        lessons: [
          { title: 'Defining and Calling Functions', duration: '28:15', isPreview: false },
          { title: 'Function Parameters and Return Values', duration: '26:40', isPreview: false },
          { title: 'Creating and Importing Modules', duration: '22:30', isPreview: false },
          { title: 'Working with Python Libraries', duration: '30:15', isPreview: false }
        ]
      },
      {
        title: 'Data Structures',
        lessons: [
          { title: 'Lists and List Manipulation', duration: '32:10', isPreview: false },
          { title: 'Dictionaries and Sets', duration: '28:45', isPreview: false },
          { title: 'Tuples and When to Use Them', duration: '20:30', isPreview: false },
          { title: 'Advanced Data Structure Operations', duration: '35:15', isPreview: false }
        ]
      }
    ]
  };

  // Calculate total course duration
  const totalMinutes = course.modules.reduce((total, module) => {
    return total + module.lessons.reduce((moduleTotal, lesson) => {
      const [minutes, seconds] = lesson.duration.split(':').map(Number);
      return moduleTotal + minutes + seconds / 60;
    }, 0);
  }, 0);
  
  const totalHours = Math.floor(totalMinutes / 60);
  const remainingMinutes = Math.round(totalMinutes % 60);

  return (
    <div className="min-h-screen flex flex-col bg-[#f9fcfa]">
      <Navbar />
      
      <main className="flex-grow">
        {/* Course Header - GeeksForGeeks style */}
        <section className="bg-white shadow-sm pt-24 pb-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-4">
              <Link to="/courses" className="flex items-center text-sm text-foreground/70 hover:text-green-600 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-1" />
                Back to Courses
              </Link>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-7 gap-8">
              <div className="lg:col-span-5">
                <h1 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">
                  {course.title}
                </h1>
                
                <p className="text-gray-600 mb-4">
                  {course.description}
                </p>
                
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Award className="w-4 h-4 text-green-600 mr-1" />
                    <span>{course.level}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 text-green-600 mr-1" />
                    <span>{totalHours}h {remainingMinutes}m total</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 text-green-600 mr-1" />
                    <span>{course.students.toLocaleString()} students</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-medium">{course.rating.toFixed(1)}</span>
                    </div>
                    <span className="text-sm text-gray-500 ml-1">
                      ({course.reviewCount.toLocaleString()} reviews)
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  <img 
                    src={course.instructor.image} 
                    alt={course.instructor.name}
                    className="w-10 h-10 rounded-full object-cover mr-3"
                  />
                  <div>
                    <p className="font-medium text-gray-800">{course.instructor.name}</p>
                    <p className="text-sm text-gray-600">{course.instructor.role}</p>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-2">
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden sticky top-24">
                  <div className="aspect-video w-full bg-gray-100 relative group cursor-pointer" onClick={() => setIsVideoPlaying(!isVideoPlaying)}>
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className={`w-full h-full object-cover transition-opacity duration-300 ${isVideoPlaying ? 'opacity-0' : 'opacity-100'}`}
                    />
                    <div className={`absolute inset-0 flex items-center justify-center bg-black/60 transition-opacity duration-300 ${isVideoPlaying ? 'opacity-0' : 'opacity-100 group-hover:bg-black/70'}`}>
                      <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                        <Play className="w-6 h-6 text-white fill-current ml-1" />
                      </div>
                    </div>
                    {isVideoPlaying && (
                      <div className="absolute inset-0 bg-black flex items-center justify-center">
                        <span className="text-white">Video is playing...</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-5">
                    <div className="flex items-baseline justify-between mb-4">
                      <div className="flex items-baseline">
                        <span className="text-2xl font-bold text-green-600">${course.price}</span>
                        <span className="ml-2 text-gray-500 line-through text-sm">${course.originalPrice}</span>
                      </div>
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                        75% off
                      </span>
                    </div>
                    
                    <Button className="w-full mb-3 bg-green-600 hover:bg-green-700">Enroll Now</Button>
                    <Button variant="outline" className="w-full flex items-center justify-center border-gray-300 text-gray-700">
                      <Bookmark className="w-4 h-4 mr-2" />
                      Add to Wishlist
                    </Button>
                    
                    <div className="border-t border-gray-200 mt-5 pt-5">
                      <h3 className="font-semibold mb-3 text-gray-800">This course includes:</h3>
                      <ul className="space-y-2">
                        {course.features.map((feature, index) => (
                          <li key={index} className="flex text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="border-t border-gray-200 mt-5 pt-5 flex justify-between text-sm text-gray-600">
                      <button className="flex items-center hover:text-green-600 transition-colors">
                        <Share2 className="w-4 h-4 mr-1" />
                        Share
                      </button>
                      <button className="flex items-center hover:text-green-600 transition-colors">
                        <Download className="w-4 h-4 mr-1" />
                        Resources
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Course Content - GeeksForGeeks style */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden mb-8">
                  <div className="border-b border-gray-200 px-6 py-4">
                    <h2 className="text-xl font-bold text-gray-800">Course Content</h2>
                  </div>
                  
                  <div className="bg-gray-50 px-6 py-3 flex justify-between items-center">
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">{course.modules.length} modules</span>
                      <span className="mx-2">•</span>
                      <span>{course.modules.reduce((total, module) => total + module.lessons.length, 0)} lessons</span>
                      <span className="mx-2">•</span>
                      <span>{totalHours}h {remainingMinutes}m total</span>
                    </div>
                    <button className="text-green-600 text-sm font-medium">Expand All</button>
                  </div>
                  
                  <Accordion type="single" collapsible className="w-full">
                    {course.modules.map((module, moduleIndex) => (
                      <AccordionItem key={moduleIndex} value={`module-${moduleIndex}`} className="border-b border-gray-200 last:border-0">
                        <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                          <div className="flex flex-col items-start text-left">
                            <span className="font-semibold text-gray-800">{module.title}</span>
                            <span className="text-sm text-gray-500">
                              {module.lessons.length} lessons • 
                              {module.lessons.reduce((total, lesson) => {
                                const [min, sec] = lesson.duration.split(':').map(Number);
                                return total + min + sec/60;
                              }, 0).toFixed(0)} min
                            </span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-0">
                          {module.lessons.map((lesson, lessonIndex) => (
                            <div 
                              key={lessonIndex} 
                              className={`px-6 py-3 flex items-center justify-between border-t border-gray-200 first:border-0 ${
                                lesson.isPreview ? 'hover:bg-gray-50 cursor-pointer' : ''
                              }`}
                            >
                              <div className="flex items-center">
                                <div className="mr-3 w-8 h-8 flex-shrink-0">
                                  {lesson.isPreview ? (
                                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                                      <Play className="w-4 h-4 text-green-600" />
                                    </div>
                                  ) : (
                                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                                      <Lock className="w-4 h-4 text-gray-500" />
                                    </div>
                                  )}
                                </div>
                                <div>
                                  <div className="font-medium text-sm text-gray-800">{lesson.title}</div>
                                  <div className="text-xs text-gray-500">{lesson.duration}</div>
                                </div>
                              </div>
                              {lesson.isPreview && (
                                <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                                  Preview
                                </span>
                              )}
                            </div>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
                
                {/* About Instructor - GeeksForGeeks style */}
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden p-6 mb-8">
                  <h2 className="text-xl font-bold mb-5 text-gray-800">About the Instructor</h2>
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                    <img 
                      src={course.instructor.image} 
                      alt={course.instructor.name}
                      className="w-24 h-24 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-800">{course.instructor.name}</h3>
                      <p className="text-gray-600 mb-3">{course.instructor.role}</p>
                      
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <Book className="w-4 h-4 text-green-600 mr-1" />
                          <span>{course.instructor.courses} courses</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="w-4 h-4 text-green-600 mr-1" />
                          <span>{course.instructor.students.toLocaleString()} students</span>
                        </div>
                        <div className="flex items-center text-amber-500">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="ml-1 text-sm font-medium">4.9</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 text-sm">
                        Dr. Miller is a Python expert with over 15 years of industry experience in software development and data science. 
                        He has worked with companies like Google and Microsoft, and is passionate about making complex programming 
                        concepts accessible to beginners. His teaching approach combines theoretical knowledge with practical, 
                        real-world applications.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Reviews Summary - GeeksForGeeks style */}
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden p-6">
                  <h2 className="text-xl font-bold mb-5 text-gray-800">Student Reviews</h2>
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-amber-500 mb-2">{course.rating.toFixed(1)}</div>
                      <div className="flex text-amber-500 mb-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                      <p className="text-sm text-gray-600">Course Rating</p>
                    </div>
                    
                    <div className="flex-grow">
                      {[5, 4, 3, 2, 1].map((rating) => {
                        const percentage = rating === 5 ? 78 : 
                                         rating === 4 ? 15 : 
                                         rating === 3 ? 5 : 
                                         rating === 2 ? 1 : 1;
                        return (
                          <div key={rating} className="flex items-center mb-1">
                            <div className="flex items-center text-sm w-12">
                              <span>{rating}</span>
                              <Star className="w-3 h-3 text-amber-500 fill-current ml-1" />
                            </div>
                            <div className="flex-grow h-2 bg-gray-200 rounded-full mx-2">
                              <div 
                                className="h-full bg-amber-500 rounded-full" 
                                style={{ width: `${percentage}%` }}
                              />
                            </div>
                            <span className="text-sm text-gray-600 w-10">{percentage}%</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  <Button className="w-full mt-6 bg-green-600 hover:bg-green-700">See All Reviews</Button>
                </div>
              </div>
              
              {/* Related courses would go here */}
              <div className="hidden lg:block">
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden sticky top-24">
                  <div className="border-b border-gray-200 px-5 py-4">
                    <h2 className="font-bold text-gray-800">Related Courses</h2>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600 text-sm mb-4">
                      Looking for more Python courses? Check out these popular options:
                    </p>
                    <ul className="space-y-3">
                      <li>
                        <a href="#" className="flex items-start hover:bg-gray-50 p-2 rounded-md -mx-2">
                          <div className="w-12 h-12 bg-gray-100 rounded flex-shrink-0 mr-3"></div>
                          <div>
                            <h3 className="text-sm font-medium text-gray-800 hover:text-green-600">Python Data Structures</h3>
                            <p className="text-xs text-gray-500">Intermediate • 6 weeks</p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-start hover:bg-gray-50 p-2 rounded-md -mx-2">
                          <div className="w-12 h-12 bg-gray-100 rounded flex-shrink-0 mr-3"></div>
                          <div>
                            <h3 className="text-sm font-medium text-gray-800 hover:text-green-600">Python for Data Science</h3>
                            <p className="text-xs text-gray-500">Intermediate • 8 weeks</p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-start hover:bg-gray-50 p-2 rounded-md -mx-2">
                          <div className="w-12 h-12 bg-gray-100 rounded flex-shrink-0 mr-3"></div>
                          <div>
                            <h3 className="text-sm font-medium text-gray-800 hover:text-green-600">Advanced Python Programming</h3>
                            <p className="text-xs text-gray-500">Advanced • 10 weeks</p>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

// This is a placeholder for the Lock component used in the code
const Lock = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

export default CourseDetails;
