
import { useState } from "react";
import { FileText, Download, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ResearchSection = () => {
  const [activeResearch, setActiveResearch] = useState("research-1");

  const researchPapers = [
    {
      id: "research-1",
      title: "Analysis of Venture Capital Investment Patterns in Indian Startups",
      abstract: "This paper explores the changing landscape of venture capital investments in India, with a focus on emerging sectors and investment trends from 2018-2023.",
      keywords: ["Venture Capital", "Indian Startups", "Investment Trends"],
      externalUrl: "https://drive.google.com/file/d/1XsWR54-WFPI-K3bPNKOY7HgUxB2E2xz4/view?usp=sharing",
      date: "October 2023",
    },
    {
      id: "research-2",
      title: "Digital Healthcare Adoption in Post-Pandemic India",
      abstract: "A comprehensive study on the accelerated adoption of digital healthcare solutions in India following the COVID-19 pandemic, examining user demographics and accessibility concerns.",
      keywords: ["Digital Healthcare", "Telemedicine", "Post-Pandemic"],
      pdfUrl: "/research/digital-healthcare-study.pdf",
      date: "March 2023",
    },
    {
      id: "research-3",
      title: "The Impact of India Stack on Financial Inclusion",
      abstract: "This research examines how the India Stack framework has contributed to financial inclusion efforts across various demographic segments in India.",
      keywords: ["India Stack", "Financial Inclusion", "Digital Infrastructure"],
      pdfUrl: "/research/india-stack-impact.pdf",
      date: "July 2022",
    },
  ];

  const handleViewPaper = (paper: typeof researchPapers[0]) => {
    if (paper.externalUrl) {
      window.open(paper.externalUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="research" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-heading">Research Work</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A collection of my academic research and publications in business, technology, and economics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-medium mb-4">Research Papers</h3>
              <div className="space-y-4">
                {researchPapers.map((paper) => (
                  <Card 
                    key={paper.id}
                    className={`cursor-pointer transition-all ${
                      activeResearch === paper.id 
                        ? "border-primary bg-accent" 
                        : "hover:border-muted-foreground"
                    }`}
                    onClick={() => setActiveResearch(paper.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <FileText className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-sm">{paper.title}</h4>
                          <p className="text-xs text-muted-foreground mt-1">{paper.date}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            {researchPapers.map((paper) => (
              <div 
                key={paper.id} 
                className={`${activeResearch === paper.id ? "block" : "hidden"}`}
              >
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-medium mb-2">{paper.title}</h3>
                    <p className="text-muted-foreground mb-4">{paper.date}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-muted-foreground mb-2">Abstract</h4>
                      <p>{paper.abstract}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-muted-foreground mb-2">Keywords</h4>
                      <div className="flex flex-wrap gap-2">
                        {paper.keywords.map((keyword, index) => (
                          <span key={index} className="bg-muted text-muted-foreground text-xs py-1 px-2 rounded-full">
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      <Button 
                        variant="default" 
                        className="gap-2"
                        onClick={() => handleViewPaper(paper)}
                      >
                        <ExternalLink className="h-4 w-4" />
                        {paper.externalUrl ? "View on Google Drive" : "View Full Paper"}
                      </Button>
                      {!paper.externalUrl && (
                        <Button variant="outline" className="gap-2">
                          <Download className="h-4 w-4" />
                          Download PDF
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
                
                {!paper.externalUrl && (
                  <Card>
                    <CardContent className="p-6">
                      <Tabs defaultValue="preview" className="w-full">
                        <TabsList className="mb-4">
                          <TabsTrigger value="preview">PDF Preview</TabsTrigger>
                          <TabsTrigger value="citation">Citation</TabsTrigger>
                        </TabsList>
                        <TabsContent value="preview" className="mt-0">
                          <div className="border rounded-lg aspect-[4/3] overflow-hidden bg-muted">
                            <iframe 
                              src={paper.pdfUrl} 
                              title={paper.title}
                              className="w-full h-full"
                              style={{ minHeight: "500px" }}
                            />
                          </div>
                          <p className="text-xs text-muted-foreground mt-2">
                            Note: If the PDF doesn't load properly, you can download it using the button above.
                          </p>
                        </TabsContent>
                        <TabsContent value="citation" className="mt-0">
                          <div className="bg-muted p-4 rounded-lg">
                            <p className="text-sm font-mono">
                              Chandak, S. ({paper.date.split(" ")[1]}). {paper.title}. Research Repository, Ashoka University.
                            </p>
                          </div>
                          <Button variant="outline" size="sm" className="mt-4">
                            Copy Citation
                          </Button>
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>
                )}
                
                {paper.externalUrl && (
                  <Card>
                    <CardContent className="p-6 text-center">
                      <p className="mb-4">This research paper is hosted on Google Drive.</p>
                      <Button 
                        variant="default" 
                        className="gap-2"
                        onClick={() => handleViewPaper(paper)}
                      >
                        <ExternalLink className="h-4 w-4" />
                        Open in Google Drive
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
