
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CourseGrid from '@/components/CourseGrid';
import FeaturedPath, { FeaturedPathProps } from '@/components/FeaturedPath';
import ArticleCard, { ArticleCardProps } from '@/components/ArticleCard';
import Footer from '@/components/Footer';
import { ArrowRight, Book, Lightbulb, Code, Users, Search, CheckCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  // Sample course data
  const featuredCourses = [
    {
      id: '1',
      title: 'Python for Beginners: Learn Programming from Scratch',
      description: 'Start your coding journey with Python, the most beginner-friendly language.',
      image: 'https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2974&q=80',
      level: 'Beginner' as const,
      duration: '8 weeks',
      students: 12540,
      rating: 4.8,
      category: 'Python'
    },
    {
      id: '2',
      title: 'Modern JavaScript: ES6+ Features and Best Practices',
      description: 'Level up your JavaScript skills with modern syntax and patterns.',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2974&q=80',
      level: 'Intermediate' as const,
      duration: '6 weeks',
      students: 8320,
      rating: 4.7,
      category: 'JavaScript'
    },
    {
      id: '3',
      title: 'Data Structures and Algorithms Masterclass',
      description: 'Essential knowledge for coding interviews and efficient programming.',
      image: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80',
      level: 'Advanced' as const,
      duration: '10 weeks',
      students: 5680,
      rating: 4.9,
      category: 'Algorithms'
    },
    {
      id: '4',
      title: 'React Fundamentals: Building Modern UIs',
      description: 'Learn to build interactive user interfaces with React.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80',
      level: 'Intermediate' as const,
      duration: '8 weeks',
      students: 9450,
      rating: 4.8,
      category: 'React'
    }
  ];

  // Sample learning paths
  const learningPaths: FeaturedPathProps[] = [
    {
      id: '1',
      title: 'Full-Stack Web Development',
      description: 'Become a complete web developer by mastering both front-end and back-end technologies.',
      image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80',
      courses: 7,
      hours: 84,
      items: [
        { title: 'HTML & CSS Fundamentals', completed: true },
        { title: 'JavaScript for Web Development', completed: true },
        { title: 'React Front-End Library', completed: false },
        { title: 'Node.js Back-End Development', completed: false },
        { title: 'Database Design and Management', completed: false },
        { title: 'API Development', completed: false },
        { title: 'Deployment and DevOps', completed: false }
      ],
      progress: 28
    },
    {
      id: '2',
      title: 'Machine Learning Engineer',
      description: 'Learn the foundations of machine learning and how to implement various algorithms.',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
      courses: 6,
      hours: 72,
      items: [
        { title: 'Python Programming', completed: false },
        { title: 'Mathematics for Machine Learning', completed: false },
        { title: 'Data Preprocessing and Visualization', completed: false },
        { title: 'Supervised Learning Algorithms', completed: false },
        { title: 'Deep Learning and Neural Networks', completed: false },
        { title: 'ML Project Deployment', completed: false }
      ]
    }
  ];

  // Sample articles
  const articles: ArticleCardProps[] = [
    {
      id: '1',
      title: 'Understanding Recursion in Programming',
      summary: 'An in-depth guide to recursive functions and how they can solve complex problems elegantly.',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
      date: 'Oct 12, 2023',
      readTime: '8 min',
      category: 'Algorithms',
      authorName: 'Alex Chen',
      authorImage: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80'
    },
    {
      id: '2',
      title: 'Building a RESTful API with Node.js and Express',
      summary: 'Learn how to create a robust API using Node.js, Express, and MongoDB in this step-by-step tutorial.',
      image: 'https://images.unsplash.com/photo-1617839647877-5df6b8d2182a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2864&q=80',
      date: 'Sep 28, 2023',
      readTime: '12 min',
      category: 'Node.js',
      authorName: 'Sarah Johnson',
      authorImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2864&q=80'
    },
    {
      id: '3',
      title: 'Introduction to State Management in React',
      summary: 'Explore different state management techniques in React applications from local state to Redux.',
      image: 'https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2887&q=80',
      date: 'Oct 5, 2023',
      readTime: '10 min',
      category: 'React',
      authorName: 'Michael Lee',
      authorImage: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Features Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Learn With Us</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Our platform combines cutting-edge AI technology with expert-created content
                to provide a personalized learning experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Book className="h-7 w-7 text-primary" />,
                  title: 'Curated Curriculum',
                  description: 'Expert-designed courses that focus on practical skills and industry best practices.'
                },
                {
                  icon: <Lightbulb className="h-7 w-7 text-primary" />,
                  title: 'AI-Powered Learning',
                  description: 'Intelligent recommendations and adaptive learning paths based on your progress.'
                },
                {
                  icon: <Code className="h-7 w-7 text-primary" />,
                  title: 'Interactive Coding',
                  description: 'Practice with real-time feedback in our integrated coding environment.'
                },
                {
                  icon: <Users className="h-7 w-7 text-primary" />,
                  title: 'Active Community',
                  description: 'Connect with fellow learners and mentors for support and collaboration.'
                }
              ].map((feature, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-foreground/70 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Courses */}
        <CourseGrid 
          title="Featured Courses" 
          subtitle="Start your journey with these popular courses designed for learners of all levels."
          courses={featuredCourses}
        />
        
        {/* Learning Paths */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4">
                STRUCTURED LEARNING
              </span>
              <h2 className="text-3xl font-bold mb-4">Learning Paths</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Follow a curated sequence of courses designed to take you from beginner to professional.
              </p>
            </div>
            
            <div className="space-y-6">
              {learningPaths.map((path) => (
                <div key={path.id} className="animate-scale-in" style={{ '--delay': '1' } as React.CSSProperties}>
                  <FeaturedPath {...path} />
                </div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Button asChild variant="outline" size="lg" className="rounded-full px-6">
                <a href="/paths">
                  View All Paths
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Latest Articles */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4">
                  LATEST INSIGHTS
                </span>
                <h2 className="text-3xl font-bold">From Our Blog</h2>
              </div>
              <a href="/blog" className="group inline-flex items-center text-primary font-medium mt-4 md:mt-0">
                View all articles
                <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <div key={article.id} className="animate-scale-in" style={{ '--delay': '1' } as React.CSSProperties}>
                  <ArticleCard {...article} />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-[40%] -right-[30%] w-[70%] h-[70%] bg-primary/5 rounded-full blur-3xl opacity-60" />
            <div className="absolute -bottom-[30%] -left-[30%] w-[70%] h-[70%] bg-blue-500/5 rounded-full blur-3xl opacity-60" />
          </div>
          
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-card backdrop-blur-sm border border-border rounded-xl p-8 md:p-12 shadow-glass">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-6">
                START YOUR LEARNING JOURNEY
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to accelerate your learning?</h2>
              <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
                Join thousands of students who are already learning and building with our platform.
                Get started today with a free account.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="rounded-full px-8 py-6 text-base font-medium">
                  Get Started For Free
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-base font-medium">
                  Explore Courses
                </Button>
              </div>
              
              <div className="mt-8 flex items-center justify-center text-sm text-foreground/70">
                <CheckCheck className="w-4 h-4 text-primary mr-2" />
                <span>No credit card required</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
