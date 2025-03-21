
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 md:pr-10 mb-10 md:mb-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Hi, I'm <span className="text-primary">Siddharth Chandak</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Entrepreneur, strategist, and researcher building impactful solutions at the intersection of business and technology.
            </p>
          </div>
          
          <div className="md:w-1/2 animate-fade-in max-w-md mx-auto md:max-w-none" style={{ animationDelay: "0.4s" }}>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-300 rounded-2xl blur opacity-30 animate-pulse-slow"></div>
              <img 
                src="/lovable-uploads/0cefa0c7-b667-4d54-90ff-78ff179a4e87.png" 
                alt="Siddharth Chandak" 
                className="rounded-2xl w-full h-auto object-cover shadow-lg relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
