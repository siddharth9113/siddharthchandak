
import { Calendar, Award, Briefcase, GraduationCap } from "lucide-react";

const TimelineSection = () => {
  const timelineItems = [
    {
      year: "May - Jul 2024",
      title: "Consultative Sales Intern",
      organization: "MOKOBARA LIFESTYLE",
      description: "Increased revenue by ₹20 Lakh within two months. Developed B2B catalog for Google, Amazon. Collaborated across 7+ departments.",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      year: "May - Jul 2024",
      title: "Strategy Consulting Intern",
      organization: "KAVACH (Shark Tank Funded)",
      description: "Led team of 8 providing strategic direction. Developed survey for mental health needs. Delivered solutions impacting 70% of services.",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      year: "Jan - Aug 2023",
      title: "Founder's Office Intern",
      organization: "ROADO",
      description: "Curated US market entry strategy. Led marketing campaign generating 1,000+ leads. Demonstrated software savings of >$50,000/year.",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      year: "Apr - Jun 2021",
      title: "Equity Research Intern",
      organization: "HELIOS CAPITAL",
      description: "Developed strategic report on Indian paints industry. Identified Indigo Paints as high-potential player (2x profit growth).",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      year: "Oct 2024 - Present",
      title: "Co-Founder",
      organization: "THE 'I DON'T KNOW' PODCAST",
      description: "Decoded 'Venture Capital' with veteran VCs. Explored 'India Stack & AI' with tech policy maker who represented India.",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      year: "Feb 2023 - Present",
      title: "Co-Founder",
      organization: "30BYTHIRTY",
      description: "Achieved sales of >₹3.2 Lakh in 6 months. Managed end-to-end operations for custom merchandise to universities and corporates.",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      year: "May 2019 - Jan 2022",
      title: "Co-Founder",
      organization: "MEDRIVE",
      description: "Launched healthcare app for digitizing medical records. Built tech team and worked with Mr. Parag Dhol (VC behind Policy Bazaar).",
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
              className="timeline-item mb-8"
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
