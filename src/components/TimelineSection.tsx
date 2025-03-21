
import { Briefcase } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const TimelineSection = () => {
  const timelineItems = [
    {
      year: "May - Jul 2024",
      title: "Consultative Sales Intern",
      organization: "MOKOBARA LIFESTYLE",
    },
    {
      year: "May - Jul 2024",
      title: "Strategy Consulting Intern",
      organization: "KAVACH (Shark Tank Funded)",
    },
    {
      year: "Jan - Aug 2023",
      title: "Founder's Office Intern",
      organization: "ROADO",
    },
    {
      year: "Apr - Jun 2021",
      title: "Equity Research Intern",
      organization: "HELIOS CAPITAL",
    },
    {
      year: "Oct 2024 - Present",
      title: "Co-Founder",
      organization: "THE 'I DON'T KNOW' PODCAST",
    },
    {
      year: "Feb 2023 - Present",
      title: "Co-Founder",
      organization: "30BYTHIRTY",
    },
    {
      year: "May 2019 - Jan 2022",
      title: "Co-Founder",
      organization: "MEDRIVE",
    },
  ];

  return (
    <section id="timeline" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-heading">My Journey</h2>
        </div>
        
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-16 top-0 bottom-0 w-px bg-primary/30 -ml-px"></div>
          
          <ul className="space-y-8 relative">
            {timelineItems.map((item, index) => (
              <li key={index} className="relative pl-24">
                {/* Timeline dot */}
                <div className="absolute left-16 top-1.5 w-3 h-3 rounded-full bg-primary -ml-1.5"></div>
                
                {/* Timeline content */}
                <div className="flex flex-col">
                  <span className="text-primary font-medium text-sm mb-1">{item.year}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{item.title}</span>
                    <span className="text-muted-foreground text-sm">• {item.organization}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
