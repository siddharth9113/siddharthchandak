
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const WorkSection = () => {
  const projects = [
    {
      title: "The 'I Don't Know' Podcast",
      description: "A podcast focused on understanding industries from first principles, featuring conversations with industry leaders and experts.",
      image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc",
      technologies: ["Podcasting", "Industry Analysis", "Interview"],
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      title: "30BYTHIRTY",
      description: "A self-made brand providing custom merchandise to universities and enterprises in NCR, achieving sales of >₹3.2 Lakh in 6 months.",
      image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633",
      technologies: ["E-commerce", "Merchandise", "B2B Sales"],
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      title: "MEDRIVE",
      description: "One of the first apps in India focused on digitizing medical records, built with guidance from Mr. Parag Dhol, VC behind Policy Bazaar.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
      technologies: ["Healthcare", "UHI", "Digital Records"],
      demoUrl: "#",
      repoUrl: "#",
    },
  ];

  return (
    <section id="work" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-heading">My Work</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A selection of my entrepreneurial ventures and projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-xs bg-accent px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="flex items-center gap-1" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      View Project
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" className="flex items-center gap-1" asChild>
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      Details
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button size="lg" asChild>
            <a href="#contact" rel="noopener noreferrer">
              Contact Me for More Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
