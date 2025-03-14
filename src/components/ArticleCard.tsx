
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface ArticleCardProps {
  id: string;
  title: string;
  summary: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  authorName: string;
  authorImage: string;
}

const ArticleCard = ({
  id,
  title,
  summary,
  image,
  date,
  readTime,
  category,
  authorName,
  authorImage
}: ArticleCardProps) => {
  return (
    <Link 
      to={`/blog/${id}`}
      className="group h-full flex flex-col rounded-xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/90 text-white backdrop-blur-sm">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-sm text-foreground/70 mb-4 line-clamp-3 flex-grow">
          {summary}
        </p>
        
        <div className="flex items-center justify-between mt-4 text-sm">
          <div className="flex items-center">
            <img
              src={authorImage}
              alt={authorName}
              className="w-8 h-8 rounded-full mr-2 object-cover"
            />
            <span className="text-foreground/80 font-medium">{authorName}</span>
          </div>
          
          <div className="flex items-center text-foreground/60 text-xs">
            <Calendar className="w-3 h-3 mr-1" />
            <span className="mr-3">{date}</span>
            <Clock className="w-3 h-3 mr-1" />
            <span>{readTime}</span>
          </div>
        </div>
        
        <div className="mt-4 flex items-center text-primary font-medium text-sm pt-4 border-t border-border">
          <span>Read more</span>
          <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
