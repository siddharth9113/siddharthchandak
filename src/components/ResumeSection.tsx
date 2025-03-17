
import { FileText, Download, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const ResumeSection = () => {
  const skills = [
    { name: "Strategy & Consulting", level: 90 },
    { name: "Business Analysis", level: 85 },
    { name: "Market Research", level: 88 },
    { name: "Project Management", level: 82 },
    { name: "Entrepreneurship", level: 92 },
    { name: "Team Leadership", level: 85 },
  ];

  const workExperience = [
    {
      position: "Consultative Sales Intern",
      company: "MOKOBARA LIFESTYLE",
      period: "May - Jul 2024",
      responsibilities: [
        "Increased revenue by ₹20 Lakh within two months by re-engaging abandoned cart customers",
        "Spearheaded the development of a comprehensive B2B catalog for clients like Google and Amazon",
        "Collaborated with leaders across 7+ departments including sourcing, branding, growth and retail",
      ],
    },
    {
      position: "Strategy Consulting Intern",
      company: "KAVACH (Shark Tank Funded)",
      period: "May - Jul 2024",
      responsibilities: [
        "Assembled & led a team of 8 to provide strategic direction for the company's services",
        "Developed a 20 questions+ survey to assess students' mental health needs",
        "Delivered tailored solutions that impacted trajectory of 70% of company's current services",
      ],
    },
    {
      position: "Founder's Office Intern",
      company: "ROADO",
      period: "Jan - Aug 2023",
      responsibilities: [
        "Curated a market entry strategy for the company into USA through 15+ stakeholder meetings",
        "Led marketing campaign generating 1,000+ qualified leads across 4 customer personas",
        "Constructed a model demonstrating software savings of >$50,000/year for enterprise clients",
      ],
    },
  ];

  const education = [
    {
      degree: "Undergraduate Student",
      institution: "Ashoka University",
      period: "Class of 2025",
      details: "3.67/4 CGPA",
    },
    {
      degree: "High School",
      institution: "National Public School, Bangalore",
      period: "2022",
      details: "CBSE: 98.4%",
    },
    {
      degree: "Secondary Education",
      institution: "National Public School, Bangalore",
      period: "2020",
      details: "CBSE: 96.4%",
    },
  ];

  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-heading">Resume</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A summary of my professional experience, education, and achievements.
          </p>
          <Button className="mt-6 gap-2" asChild>
            <a href="#" download>
              <FileText className="h-4 w-4" />
              Download Resume
              <Download className="h-4 w-4 ml-1" />
            </a>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="section-subheading border-b pb-2 mb-6">Work Experience</h3>
            {workExperience.map((job, index) => (
              <div key={index} className="mb-8">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-medium">{job.position}</h4>
                  <span className="text-sm text-primary font-medium px-2 py-1 bg-primary/10 rounded-full">
                    {job.period}
                  </span>
                </div>
                <p className="text-muted-foreground mb-3">{job.company}</p>
                <ul className="space-y-2">
                  {job.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            
            <h3 className="section-subheading border-b pb-2 mb-6">Education</h3>
            {education.map((edu, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-medium">{edu.degree}</h4>
                  <span className="text-sm text-primary font-medium px-2 py-1 bg-primary/10 rounded-full">
                    {edu.period}
                  </span>
                </div>
                <p className="text-muted-foreground mb-1">{edu.institution}</p>
                <p>{edu.details}</p>
              </div>
            ))}
          </div>
          
          <div>
            <h3 className="section-subheading border-b pb-2 mb-6">Professional Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <h4 className="font-medium">{skill.name}</h4>
                    <span>{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
            
            <h3 className="section-subheading border-b pb-2 mb-8 mt-12">Positions & Achievements</h3>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-medium">Teaching Assistant</h4>
                <p className="text-sm text-muted-foreground">Course: 'Business Analysis and Strategy', Sep 2024 - Present</p>
              </div>
              <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-medium">Entrepreneurship Representative</h4>
                <p className="text-sm text-muted-foreground">Ashoka University, May 2024 - Present</p>
              </div>
              <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-medium">National Finalist</h4>
                <p className="text-sm text-muted-foreground">Boston Consulting Group Ideathon, 2024</p>
              </div>
              <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-medium">Semi Finalist</h4>
                <p className="text-sm text-muted-foreground">Wharton Global High School Investment Competition, 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
