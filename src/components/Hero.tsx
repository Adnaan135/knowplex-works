
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative overflow-hidden pt-24 pb-12 md:pt-32 md:pb-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[40%] -right-[20%] w-[70%] h-[70%] bg-primary/10 rounded-full blur-3xl opacity-60" />
        <div className="absolute -bottom-[30%] -left-[20%] w-[60%] h-[60%] bg-blue-500/10 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block animate-fade-in" style={{ '--delay': '1' } as React.CSSProperties}>
            <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-6">
              The modern way to learn programming
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-in" style={{ '--delay': '2' } as React.CSSProperties}>
            Master coding with <span className="text-gradient">AI-powered</span> learning
          </h1>
          
          <p className="text-xl text-foreground/80 mb-8 animate-fade-in" style={{ '--delay': '3' } as React.CSSProperties}>
            Learn programming concepts, algorithms, and development skills with personalized guidance and interactive lessons.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ '--delay': '4' } as React.CSSProperties}>
            <Button size="lg" className="rounded-full px-6 py-6 text-base font-medium">
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-6 py-6 text-base font-medium">
              Explore Courses
            </Button>
          </div>
        </div>

        {/* Floating code snippet */}
        <div className="mt-16 max-w-3xl mx-auto relative animate-slide-up" style={{ '--delay': '5' } as React.CSSProperties}>
          <div className="glass-panel rounded-xl shadow-glass overflow-hidden">
            <div className="bg-gray-900 flex items-center px-4 py-2">
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-xs text-gray-400 font-mono">example.py</div>
            </div>
            <pre className="p-4 text-sm font-mono overflow-x-auto bg-gray-950 text-gray-200">
              <code>{`# Python function to check if a number is prime
def is_prime(number):
    if number <= 1:
        return False
    if number <= 3:
        return True
    
    if number % 2 == 0 or number % 3 == 0:
        return False
    
    i = 5
    while i * i <= number:
        if number % i == 0 or number % (i + 2) == 0:
            return False
        i += 6
    
    return True

# Let's test our function
for num in [4, 7, 10, 13, 19]:
    result = "is" if is_prime(num) else "is not"
    print(f"{num} {result} a prime number")
`}</code>
            </pre>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl animate-pulse-light"></div>
          <div className="absolute -left-4 -top-4 w-20 h-20 bg-primary/10 rounded-full blur-2xl animate-pulse-light"></div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto animate-fade-in" style={{ '--delay': '6' } as React.CSSProperties}>
          {[
            { number: '500+', label: 'Courses' },
            { number: '2M+', label: 'Students' },
            { number: '10K+', label: 'Tutorials' },
            { number: '4.9', label: 'Average Rating' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl font-bold text-gradient">{stat.number}</p>
              <p className="text-sm text-foreground/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
