
import { Briefcase } from "lucide-react";

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
        
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-3">
            {timelineItems.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="text-primary font-medium w-32 shrink-0">{item.year}</span>
                <span className="font-medium">{item.title}</span>
                <span className="text-muted-foreground">• {item.organization}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
