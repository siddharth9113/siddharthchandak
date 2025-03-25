
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { projectsData } from "@/data/projects";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <Button className="mt-4" asChild>
          <Link to="/">Go back home</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-secondary min-h-screen py-12">
      <div className="container mx-auto px-4">
        <Button variant="outline" className="mb-6" asChild>
          <Link to="/#work">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to projects
          </Link>
        </Button>
        
        <Card className="bg-white/50 backdrop-blur-sm border border-accent/20">
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold mb-6">{project.title}</h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, i) => (
                <span key={i} className="text-xs bg-accent px-2 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="prose prose-lg max-w-none">
              {project.description.split('\n\n').map((paragraph, i) => (
                <p key={i} className="mb-4">{paragraph}</p>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProjectDetails;
