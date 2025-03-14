
import { useState } from 'react';
import CourseCard, { CourseCardProps } from './CourseCard';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface CourseGridProps {
  title: string;
  subtitle?: string;
  courses: CourseCardProps[];
  showFilters?: boolean;
  showSearch?: boolean;
  showHeading?: boolean;
}

const CourseGrid = ({ 
  title, 
  subtitle, 
  courses, 
  showFilters = false, 
  showSearch = false, 
  showHeading = true 
}: CourseGridProps) => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = ['all', ...new Set(courses.map(course => course.category.toLowerCase()))];
  
  const filteredCourses = courses
    .filter(course => filter === 'all' || course.category.toLowerCase() === filter)
    .filter(course => 
      searchQuery === '' || 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            {subtitle && <p className="text-lg text-foreground/70 max-w-2xl mx-auto">{subtitle}</p>}
          </div>
        )}
        
        {showSearch && (
          <div className="mb-8">
            <div className="w-full max-w-3xl mx-auto relative">
              <Input
                type="text"
                placeholder="What do you want to learn?"
                className="pl-10 pr-4 py-3 h-14 text-lg rounded-full border-2 border-primary/20 focus-visible:border-primary/30 shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary h-5 w-5" />
            </div>
            
            <div className="flex justify-center gap-4 mt-6">
              <Button variant="outline" size="sm" className="rounded-full border-2 px-6">
                Master DS & ML
              </Button>
              <Button variant="outline" size="sm" className="rounded-full border-2 px-6 bg-primary text-white">
                Courses @90% Refund
              </Button>
              <Button variant="outline" size="sm" className="rounded-full border-2 px-6">
                Full Stack Live Classes
              </Button>
            </div>
          </div>
        )}
        
        {showFilters && (
          <div className="mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={filter === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilter(category)}
                    className="capitalize"
                  >
                    {category}
                  </Button>
                ))}
              </div>
              
              <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="w-full pl-10 pr-4 py-2 border rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.map((course) => (
            <div key={course.id} className="animate-scale-in" style={{ '--delay': '1' } as React.CSSProperties}>
              <CourseCard {...course} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseGrid;
