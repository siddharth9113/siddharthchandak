
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          {/* Content - takes 3/5 of the space on large screens */}
          <div className="lg:col-span-3 order-2 lg:order-1 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Hi, I'm <span className="text-primary">Siddharth Chandak</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl">
              Entrepreneur, strategist, and researcher building impactful solutions at the intersection of business and technology.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Button 
                size="lg" 
                className="gap-2 group"
                onClick={() => document.getElementById('about')?.scrollIntoView()}
              >
                Learn more about me
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => document.getElementById('contact')?.scrollIntoView()}
              >
                Get in touch
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
              <div>
                <p className="text-3xl font-bold text-primary mb-1">3+</p>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary mb-1">6+</p>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary mb-1">3.67</p>
                <p className="text-muted-foreground">CGPA at Ashoka</p>
              </div>
            </div>
          </div>
          
          {/* Image - takes 2/5 of the space on large screens */}
          <div className="lg:col-span-2 order-1 lg:order-2 flex justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="relative max-w-md w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-300 rounded-2xl blur opacity-30 animate-pulse-slow"></div>
              <img 
                src="/lovable-uploads/0cefa0c7-b667-4d54-90ff-78ff179a4e87.png" 
                alt="Siddharth Chandak" 
                className="rounded-2xl w-full h-auto object-cover shadow-lg relative z-10 aspect-[3/4]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
