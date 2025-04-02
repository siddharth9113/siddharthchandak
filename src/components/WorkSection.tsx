
import { ExternalLink, Github, FileText, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const WorkSection = () => {
  const projects = [
    {
      title: "The 'I Don't Know' Podcast",
      description: "A podcast focused on understanding industries from first principles, featuring conversations with industry leaders and experts.",
      image: "/lovable-uploads/19d50a24-7c6c-4aaf-a972-768664840727.png",
      technologies: ["Podcasting", "Industry Analysis", "Interview"],
      demoUrl: "https://www.youtube.com/@1dontknowpodcast",
      isYoutube: true,
    },
    {
      title: "30BYTHIRTY",
      description: "A self-made brand providing custom merchandise to universities and enterprises in NCR, achieving sales of >₹3.2 Lakh in 6 months.",
      image: "/lovable-uploads/cb8ebfde-69b0-4ed7-9e54-56bbde6ccaed.png",
      technologies: ["E-commerce", "Merchandise", "B2B Sales"],
      demoUrl: "https://custom-fest-merch.lovable.app/#contact",
      isYoutube: false,
    },
    {
      title: "MEDRIVE",
      description: "One of the first apps in India focused on digitizing medical records, built with guidance from Mr. Parag Dhol, VC behind Policy Bazaar.",
      image: "/lovable-uploads/bfe2bb3d-c307-4b52-9af6-127de15ff8a1.png",
      technologies: ["Healthcare", "UHI", "Digital Records"],
      demoUrl: "#",
      isYoutube: false,
      additionalLinks: [
        {
          text: "Watch our launch event",
          url: "https://drive.google.com/file/d/1idUlsQ2DfMiFUHVfUpy0CEJ83G8lY8S5/view?usp=drivesdk",
          icon: "Youtube"
        },
        {
          text: "Our Pitch deck",
          url: "https://www.canva.com/design/DAE8tRZfC4s/6cSaOirPHGqt2eUoVjiSkw/view?utm_content=DAE8tRZfC4s&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h502a5a60e7",
          icon: "FileText"
        }
      ]
    },
  ];

  const researchPapers = [
    {
      title: "How does crime impact mobility of women",
      description: "Comprehensive Economic analysis of the impact of crimes rates on the time spent on outdoor activities by women",
      technologies: ["Stata", "Economic Analysis", "Regression"],
      demoUrl: "https://drive.google.com/file/d/1CYkHNkGVow59A4Fxc7CLfRZFeUEXMUoB/view?usp=sharing",
    },
    {
      title: "Investment Analysis of Sentinel One",
      description: "A detailed investment analysis of USA-listed cybersecurity company, Sentinel One",
      technologies: ["DCF", "Fundamental Analysis", "Financial Modelling"],
      demoUrl: "https://drive.google.com/file/d/18M4F848Pjqk3B5ohRO2MFq4nZp2gnvJ_/view?usp=sharing",
    },
    {
      title: "Bridging the MSME Financing Gap in India: The Role of the Unified Lending Interface (ULI)",
      description: "A policy brief on how the upcoming unified lending interface could revolutionise MSME credit in India with recommendations for some structural changes to the network",
      technologies: ["Policy Brief", "MSME financing", "India Stack"],
      demoUrl: "https://drive.google.com/file/d/1XsWR54-WFPI-K3bPNKOY7HgUxB2E2xz4/view?usp=sharing",
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
        
        <div className="max-w-4xl mx-auto space-y-10">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-lg transition-shadow border-0 rounded-xl bg-gradient-to-br from-background to-muted"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 relative">
                  <div className="h-[200px] md:h-full overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-contain md:object-cover transition-transform hover:scale-105 duration-300"
                      style={{ 
                        objectPosition: "center",
                        padding: project.title === "MEDRIVE" ? "20px" : "0",
                        backgroundColor: project.title === "MEDRIVE" ? "white" : "transparent"
                      }}
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:hidden">
                    <h3 className="text-xl font-medium text-white">{project.title}</h3>
                  </div>
                </div>
                <div className="md:w-3/5">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium mb-2 hidden md:block">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="text-xs bg-accent px-2 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Button size="sm" variant="outline" className="flex items-center gap-1" asChild>
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          {project.isYoutube ? (
                            <Youtube className="h-4 w-4" />
                          ) : (
                            <ExternalLink className="h-4 w-4" />
                          )}
                          {project.isYoutube ? "Watch on YouTube" : 
                           project.title === "30BYTHIRTY" ? "View Website" : "View Project"}
                        </a>
                      </Button>
                      
                      {project.additionalLinks && project.additionalLinks.map((link, i) => (
                        <Button key={i} size="sm" variant="outline" className="flex items-center gap-1" asChild>
                          <a href={link.url} target="_blank" rel="noopener noreferrer">
                            {link.icon === "Youtube" ? (
                              <Youtube className="h-4 w-4" />
                            ) : (
                              <FileText className="h-4 w-4" />
                            )}
                            {link.text}
                          </a>
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-heading">Research Papers</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Academic research in business, technology, and economics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchPapers.map((paper, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow bg-white/50 backdrop-blur-sm border border-accent/20 h-full flex flex-col">
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-medium mb-2">{paper.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">{paper.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {paper.technologies.map((tech, i) => (
                      <span key={i} className="text-xs bg-accent px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button size="sm" variant="outline" className="flex items-center gap-1 mt-auto" asChild>
                    <a href={paper.demoUrl} target="_blank" rel="noopener noreferrer">
                      <FileText className="h-4 w-4" />
                      View Research Paper
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-10">
          <Button size="lg" asChild>
            <a href="mailto:siddharth.chandak_ug25@ashoka.edu.in" rel="noopener noreferrer">
              Contact Me for More Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
