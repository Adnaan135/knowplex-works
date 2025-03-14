
import { Book, Clock, Star, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  students: number;
  rating: number;
  category: string;
}

const CourseCard = ({ 
  id, 
  title, 
  description, 
  image, 
  level, 
  duration, 
  students, 
  rating,
  category 
}: CourseCardProps) => {
  // Function to determine badge color based on level
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'Intermediate':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'Advanced':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  return (
    <Link to={`/course/${id}`} className="group">
      <div className="h-full rounded-xl overflow-hidden bg-card border border-border shadow-card card-hover-effect">
        <div className="relative h-40 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-black/50 text-white backdrop-blur-sm">
              {category}
            </span>
          </div>
        </div>
        
        <div className="p-5">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold line-clamp-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
          </div>
          
          <p className="text-sm text-foreground/70 mb-4 line-clamp-2">
            {description}
          </p>
          
          <div className="flex items-center justify-between mb-4">
            <span className={`text-xs px-2 py-1 rounded-full ${getLevelColor(level)}`}>
              {level}
            </span>
            <div className="flex items-center text-amber-500">
              <Star className="w-4 h-4 fill-current" />
              <span className="ml-1 text-sm font-medium">{rating.toFixed(1)}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between text-xs text-foreground/70">
            <div className="flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              {duration}
            </div>
            <div className="flex items-center">
              <Users className="w-3 h-3 mr-1" />
              {students.toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
