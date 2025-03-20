
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mount
    setIsLoaded(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 overflow-hidden relative">
      {/* Abstract background elements */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-gradient-to-r from-blue-300 to-purple-400 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-gradient-to-r from-pink-300 to-primary blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div 
            className={`md:w-1/2 md:pr-10 mb-10 md:mb-0 transition-all duration-1000 ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Hi, I'm{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400 relative">
                Siddharth Chandak
                <svg 
                  className="absolute -bottom-2 left-0 w-full" 
                  height="6" 
                  viewBox="0 0 400 6" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M2 3.5C59.1819 2.5 307.5 -1 398 4" 
                    stroke="url(#paint0_linear)" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient 
                      id="paint0_linear" 
                      x1="2" 
                      y1="3" 
                      x2="398" 
                      y2="3" 
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#9b87f5" />
                      <stop offset="1" stopColor="#D946EF" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>
            <p 
              className="text-xl md:text-2xl text-muted-foreground mb-8 transition-all duration-1000 delay-300 ease-out"
              style={{ 
                opacity: isLoaded ? 1 : 0, 
                transform: isLoaded ? "translateY(0)" : "translateY(10px)" 
              }}
            >
              Entrepreneur, strategist, and researcher building impactful solutions at the intersection of business and technology.
            </p>
            <div 
              className="flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ease-out"
              style={{ 
                opacity: isLoaded ? 1 : 0, 
                transform: isLoaded ? "translateY(0)" : "translateY(10px)" 
              }}
            >
              <Button 
                size="lg" 
                className="gap-2 group bg-gradient-to-r from-primary to-purple-500 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                onClick={() => document.getElementById('about')?.scrollIntoView()}
              >
                Learn more about me
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 hover:bg-accent/50 transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView()}
              >
                Get in touch
              </Button>
            </div>
          </div>
          
          <div 
            className={`md:w-1/2 max-w-md mx-auto md:max-w-none transition-all duration-1000 delay-300 ease-out ${
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-gradient-to-r from-pink-400 to-primary z-10 animate-bounce" style={{ animationDuration: "5s" }}></div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 z-10 animate-bounce" style={{ animationDuration: "4s", animationDelay: "1s" }}></div>
              
              {/* Glowing border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-400 to-pink-500 rounded-2xl blur opacity-70 group-hover:opacity-100 animate-pulse-slow"></div>
              
              {/* Main image with mask and border */}
              <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-accent bg-white shadow-2xl shadow-primary/10">
                <img 
                  src="/lovable-uploads/0cefa0c7-b667-4d54-90ff-78ff179a4e87.png" 
                  alt="Siddharth Chandak" 
                  className="w-full h-auto object-cover relative z-10 transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
