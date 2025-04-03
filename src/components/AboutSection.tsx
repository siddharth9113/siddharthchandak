import { User, Code, Briefcase, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
const AboutSection = () => {
  return <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-heading">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Entrepreneur, strategist, and researcher with a passion for building impactful solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <p className="text-lg mb-4">I'm Siddharth Chandak, a 3rd year undergraduate student pursuing Economics and Finance at Ashoka University. Being born in a marwari family and raised in the startup city of Bangalore, entrepreneurship naturally came in my DNA. I have been able to work on 2 of my ventures, failing to scale one while currently running the other, both of which you can find below.</p>
            <p className="text-lg mb-4">Beyond my academic and professional interests, I'm a health enthusiast who loves learning more about nutrition and playing every sport under the sun. Along with this, I also thoroughly enjoy spending time in the mountains and am a rookie trekker. 


I enjoy having meaningful conversations especially with new folks and learn more - about ANY topic. Feel free to reach out to me and I would love to have coffee chat with you :)</p>
            <p className="text-lg"></p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium text-lg mb-2">Who I Am</h3>
                <p className="text-muted-foreground">A undergrad student with a passion for building impactful solutions.</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium text-lg mb-2">What I Do</h3>
                <p className="text-muted-foreground">Study Economics, building my own venture and spend time working out</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium text-lg mb-2">My Experience</h3>
                <p className="text-muted-foreground">
                  Internships at growth-stage startups and launching my own ventures.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium text-lg mb-2">My Interests</h3>
                <p className="text-muted-foreground">
                  Entrepreneurship, finance, technology, fitness, and spending time in nature.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;