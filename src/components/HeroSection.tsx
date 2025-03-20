
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 overflow-hidden relative bg-black text-white">
      {/* Dynamic background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-black to-[#1a0b28] opacity-90"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#2c0f47] to-transparent opacity-40"></div>
        <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-[#9b87f5] blur-[120px] opacity-20 animate-pulse-slow"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-[#7e2bff] blur-[100px] opacity-15 animate-pulse-slow" style={{ animationDelay: "1.5s" }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div 
            className={`w-full md:w-1/2 md:pr-10 mb-10 md:mb-0 transition-all duration-1000 ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="overflow-hidden mb-2">
              <h2 
                className={`font-playfair text-2xl md:text-3xl font-bold tracking-wider text-[#9b87f5] transition-all duration-700 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                welcome to my portfolio
              </h2>
            </div>
            
            <div className="overflow-hidden">
              <h1 
                className={`font-playfair text-5xl md:text-7xl lg:text-8xl font-bold leading-none mb-6 transition-all duration-700 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                Siddharth<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9b87f5] to-[#D946EF]">
                  Chandak
                </span>
              </h1>
            </div>
            
            <p 
              className={`text-xl md:text-2xl text-gray-400 mb-12 max-w-md transition-all duration-700 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              Entrepreneur, strategist, and researcher building impactful solutions at the intersection of business and technology.
            </p>
            
            <div 
              className={`flex flex-col sm:flex-row gap-6 transition-all duration-700 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              <Button 
                size="lg" 
                className="gap-2 group bg-white text-black hover:bg-white/90 hover:scale-105 transition-all duration-300 text-lg rounded-xl px-8 py-6 font-semibold"
                onClick={() => document.getElementById('about')?.scrollIntoView()}
              >
                Explore my work
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-gray-700 text-white hover:bg-white/10 hover:scale-105 transition-all duration-300 text-lg rounded-xl px-8 py-6 font-semibold"
                onClick={() => document.getElementById('contact')?.scrollIntoView()}
              >
                Get in touch
              </Button>
            </div>
          </div>
          
          <div 
            className={`w-full md:w-1/2 transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="relative mx-auto max-w-md md:max-w-none">
              {/* Animated circles */}
              <div className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-[#9b87f5] opacity-20 animate-float"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-[#D946EF] opacity-10 animate-float" style={{ animationDelay: "1s" }}></div>
              
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden transform rotate-2 hover:rotate-0 transition-all duration-700">
                <div className="absolute inset-0 bg-gradient-to-br from-[#9b87f5] to-[#D946EF] opacity-30"></div>
                <img 
                  src="/lovable-uploads/0cefa0c7-b667-4d54-90ff-78ff179a4e87.png" 
                  alt="Siddharth Chandak" 
                  className="w-full h-auto relative z-10 scale-110 hover:scale-100 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
