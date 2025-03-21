
import { Calendar, Briefcase } from "lucide-react";

const TimelineSection = () => {
  const timelineItems = [
    {
      year: "May - Jul 2024",
      title: "Consultative Sales Intern",
      organization: "MOKOBARA LIFESTYLE",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      year: "May - Jul 2024",
      title: "Strategy Consulting Intern",
      organization: "KAVACH (Shark Tank Funded)",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      year: "Jan - Aug 2023",
      title: "Founder's Office Intern",
      organization: "ROADO",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      year: "Apr - Jun 2021",
      title: "Equity Research Intern",
      organization: "HELIOS CAPITAL",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      year: "Oct 2024 - Present",
      title: "Co-Founder",
      organization: "THE 'I DON'T KNOW' PODCAST",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      year: "Feb 2023 - Present",
      title: "Co-Founder",
      organization: "30BYTHIRTY",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      year: "May 2019 - Jan 2022",
      title: "Co-Founder",
      organization: "MEDRIVE",
      icon: <Briefcase className="h-5 w-5" />,
    },
  ];

  return (
    <section id="timeline" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-heading">My Journey</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A timeline of my professional experiences and entrepreneurial ventures.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {timelineItems.map((item, index) => (
            <div 
              key={index} 
              className="timeline-item mb-4 p-3 border rounded-lg hover:shadow-sm transition-shadow"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-primary inline mr-2" />
                  <span className="font-medium text-primary">{item.year}</span>
                </div>
                <div className="flex items-center">
                  {item.icon}
                  <span className="ml-2 text-muted-foreground">{item.organization}</span>
                </div>
              </div>
              <h3 className="text-lg font-medium mt-1">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
