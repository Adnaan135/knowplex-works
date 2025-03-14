
import { Link } from 'react-router-dom';
import { Lightbulb, Facebook, Twitter, Linkedin, Instagram, Github, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <span className="bg-primary rounded-md p-1">
                <Lightbulb className="h-6 w-6 text-white" />
              </span>
              <span className="text-xl font-semibold">CodeGenius</span>
            </Link>
            <p className="text-foreground/70 text-sm max-w-md mb-6">
              An AI-powered learning platform for programming and technology skills. 
              Interactive courses, personalized learning paths, and a supportive community.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Instagram, label: "Instagram" },
                { icon: Github, label: "GitHub" },
                { icon: Youtube, label: "YouTube" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href="#" 
                  aria-label={social.label}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-background border border-border text-foreground/70 hover:text-primary hover:border-primary transition-colors"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Links Columns */}
          <div>
            <h3 className="font-semibold mb-4">Learn</h3>
            <ul className="space-y-2 text-sm">
              {["Courses", "Learning Paths", "Tutorials", "Challenges", "Resources"].map((item, i) => (
                <li key={i}>
                  <Link to="#" className="text-foreground/70 hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-sm">
              {["Forums", "Discord", "Events", "Blog", "Contribute"].map((item, i) => (
                <li key={i}>
                  <Link to="#" className="text-foreground/70 hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              {["About", "Careers", "Press", "Contact", "Privacy Policy", "Terms of Service"].map((item, i) => (
                <li key={i}>
                  <Link to="#" className="text-foreground/70 hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/60 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} CodeGenius. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-foreground/60">
            <Link to="#" className="hover:text-primary transition-colors">Privacy</Link>
            <Link to="#" className="hover:text-primary transition-colors">Terms</Link>
            <Link to="#" className="hover:text-primary transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
