
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export interface PathItemProps {
  title: string;
  completed?: boolean;
}

export interface FeaturedPathProps {
  id: string;
  title: string;
  description: string;
  image: string;
  courses: number;
  hours: number;
  items: PathItemProps[];
  progress?: number;
}

const FeaturedPath = ({
  id,
  title,
  description,
  image,
  courses,
  hours,
  items,
  progress
}: FeaturedPathProps) => {
  return (
    <div className="rounded-xl overflow-hidden border border-border bg-card shadow-card">
      <div className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          <div className="flex-shrink-0">
            <div className="w-full md:w-20 h-20 rounded-lg overflow-hidden bg-primary/10">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="flex-grow">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-foreground/70 text-sm mb-4">{description}</p>
            
            <div className="flex items-center gap-6 mb-4 text-sm">
              <div className="flex items-center">
                <span className="text-foreground/90 font-medium">{courses}</span>
                <span className="ml-1 text-foreground/60">Courses</span>
              </div>
              <div className="flex items-center">
                <span className="text-foreground/90 font-medium">{hours}</span>
                <span className="ml-1 text-foreground/60">Hours</span>
              </div>
              {progress !== undefined && (
                <div className="flex items-center">
                  <span className="text-foreground/90 font-medium">{progress}%</span>
                  <span className="ml-1 text-foreground/60">Completed</span>
                </div>
              )}
            </div>
            
            <div className="space-y-2 mb-4">
              {items.slice(0, 3).map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-0.5">
                    <Check className={`w-4 h-4 ${item.completed ? 'text-green-500' : 'text-foreground/40'}`} />
                  </div>
                  <span className="ml-2 text-sm text-foreground/80">{item.title}</span>
                </div>
              ))}
              {items.length > 3 && (
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-0.5 w-4">
                    {/* Empty space to maintain alignment */}
                  </div>
                  <span className="ml-2 text-sm text-foreground/60">
                    +{items.length - 3} more courses
                  </span>
                </div>
              )}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild variant="default" size="sm">
                <Link to={`/path/${id}`}>
                  View Path
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </Button>
              {progress !== undefined ? (
                <Button asChild variant="outline" size="sm">
                  <Link to={`/path/${id}/continue`}>
                    Continue Learning
                  </Link>
                </Button>
              ) : (
                <Button asChild variant="outline" size="sm">
                  <Link to={`/path/${id}/enroll`}>
                    Enroll Now
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {progress !== undefined && (
        <div className="w-full h-1 bg-muted">
          <div 
            className="h-full bg-primary"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  );
};

export default FeaturedPath;
