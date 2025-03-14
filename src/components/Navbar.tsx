
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, Book, Lightbulb, MessageSquare, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Courses', path: '/courses', icon: <Book className="w-4 h-4 mr-2" /> },
    { name: 'Tutorials', path: '/blog', icon: <Code className="w-4 h-4 mr-2" /> },
    { name: 'Resources', path: '/resources', icon: <Lightbulb className="w-4 h-4 mr-2" /> },
    { name: 'Community', path: '/community', icon: <MessageSquare className="w-4 h-4 mr-2" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm' 
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="bg-primary rounded-md p-1">
                <Lightbulb className="h-6 w-6 text-white" />
              </span>
              <span className="text-xl font-semibold">CodeGenius</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path
                    ? 'text-primary'
                    : 'text-foreground/80'
                }`}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-secondary pl-10 pr-4 py-2 rounded-full text-sm w-48 focus:w-64 transition-all focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="rounded-full px-4">Sign In</Button>
              <Button size="sm" className="rounded-full px-4">Sign Up</Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-full md:hidden text-foreground hover:bg-secondary"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border animate-slide-down">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center py-3 px-2 rounded-md text-sm font-medium ${
                  location.pathname === link.path
                    ? 'bg-primary/10 text-primary'
                    : 'text-foreground hover:bg-secondary'
                }`}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
            <div className="pt-2 pb-3">
              <div className="relative my-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-secondary pl-10 pr-4 py-2 rounded-full text-sm w-full focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="outline" size="sm" className="w-full">Sign In</Button>
                <Button size="sm" className="w-full">Sign Up</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
