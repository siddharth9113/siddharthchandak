
import { User, Code, Briefcase, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-heading">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get to know me better – what inspires me, what I do, and what I'm passionate about.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <p className="text-lg mb-4">
              Hello! I'm Siddharth, a passionate creator focused on building impactful digital experiences. With a background in design and development, I combine technical expertise with creative problem-solving to deliver solutions that are both functional and elegant.
            </p>
            <p className="text-lg mb-4">
              I believe in the power of technology to transform and enhance people's lives. My approach centers on understanding user needs and crafting experiences that are intuitive, accessible, and delightful.
            </p>
            <p className="text-lg">
              When I'm not coding or designing, you might find me exploring new hiking trails, experimenting with photography, or diving into a good book. I'm constantly learning and growing, both professionally and personally.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium text-lg mb-2">Who I Am</h3>
                <p className="text-muted-foreground">
                  A creative professional passionate about blending design and technology.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium text-lg mb-2">What I Do</h3>
                <p className="text-muted-foreground">
                  Create digital experiences that solve problems and delight users.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium text-lg mb-2">My Experience</h3>
                <p className="text-muted-foreground">
                  Years of working on diverse projects across various industries.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium text-lg mb-2">My Passion</h3>
                <p className="text-muted-foreground">
                  Continuous learning and sharing knowledge with the community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
