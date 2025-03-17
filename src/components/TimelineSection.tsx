
import { Calendar, Award, Briefcase, GraduationCap } from "lucide-react";

const TimelineSection = () => {
  const timelineItems = [
    {
      year: "2023",
      title: "Senior Web Developer",
      organization: "Tech Solutions Inc.",
      description: "Leading a team of developers to build scalable web applications.",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      year: "2021",
      title: "Web Development Award",
      organization: "Regional Tech Conference",
      description: "Recognized for outstanding contributions to web development.",
      icon: <Award className="h-5 w-5" />,
    },
    {
      year: "2020",
      title: "Frontend Developer",
      organization: "Digital Innovations Co.",
      description: "Developed responsive user interfaces for various client projects.",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      year: "2018",
      title: "Master's in Computer Science",
      organization: "University of Technology",
      description: "Specialized in Human-Computer Interaction and Web Technologies.",
      icon: <GraduationCap className="h-5 w-5" />,
    },
  ];

  return (
    <section id="timeline" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-heading">My Journey</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A timeline of key milestones in my professional and educational journey.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {timelineItems.map((item, index) => (
            <div 
              key={index} 
              className="timeline-item"
            >
              <div className="flex flex-col md:flex-row md:items-center mb-2">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-primary inline mr-2" />
                  <span className="font-medium text-primary">{item.year}</span>
                </div>
                <h3 className="text-xl font-medium md:ml-4">{item.title}</h3>
              </div>
              <div className="ml-0 md:ml-11">
                <div className="flex items-center mb-2">
                  {item.icon}
                  <span className="ml-2 text-muted-foreground">{item.organization}</span>
                </div>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
