
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-[85vh] flex items-center pt-20 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-3/5 mb-8 md:mb-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h1 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Hi, I'm <span className="text-primary">Siddharth Chandak</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6">
              Entrepreneur, strategist, and researcher building impactful solutions at the intersection of business and technology.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Button className="flex items-center gap-1" asChild>
                <a href="#work">
                  View My Work <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          
          <div className="md:w-2/5 animate-fade-in max-w-xs mx-auto md:max-w-none" style={{ animationDelay: "0.4s" }}>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-300 rounded-full blur opacity-30 animate-pulse-slow"></div>
              <img 
                src="/lovable-uploads/0cefa0c7-b667-4d54-90ff-78ff179a4e87.png" 
                alt="Siddharth Chandak" 
                className="rounded-full w-full h-auto object-cover shadow-lg relative z-10 border-4 border-background"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
