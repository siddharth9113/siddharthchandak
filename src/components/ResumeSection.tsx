
import { FileText, Download, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const ResumeSection = () => {
  const skills = [
    { name: "Web Development", level: 90 },
    { name: "UI/UX Design", level: 85 },
    { name: "React.js", level: 92 },
    { name: "Node.js", level: 80 },
    { name: "TypeScript", level: 85 },
    { name: "Tailwind CSS", level: 95 },
  ];

  const workExperience = [
    {
      position: "Senior Web Developer",
      company: "Tech Solutions Inc.",
      period: "2023 - Present",
      responsibilities: [
        "Led a team of 5 frontend developers in building scalable web applications",
        "Implemented responsive designs and optimized performance",
        "Collaborated with UI/UX designers to create intuitive user experiences",
      ],
    },
    {
      position: "Frontend Developer",
      company: "Digital Innovations Co.",
      period: "2020 - 2023",
      responsibilities: [
        "Developed responsive user interfaces for various client projects",
        "Implemented modern JavaScript frameworks like React and Vue.js",
        "Worked in an agile environment with cross-functional teams",
      ],
    },
  ];

  const education = [
    {
      degree: "Master's in Computer Science",
      institution: "University of Technology",
      period: "2016 - 2018",
      details: "Specialized in Human-Computer Interaction and Web Technologies",
    },
    {
      degree: "Bachelor's in Information Technology",
      institution: "State University",
      period: "2012 - 2016",
      details: "Graduated with honors, GPA 3.8/4.0",
    },
  ];

  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-heading">Resume</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A summary of my professional experience, skills, and education.
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
            
            <h3 className="section-subheading border-b pb-2 mb-8 mt-12">Certifications</h3>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-medium">Advanced Web Development</h4>
                <p className="text-sm text-muted-foreground">Frontend Masters, 2023</p>
              </div>
              <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-medium">UI/UX Design Fundamentals</h4>
                <p className="text-sm text-muted-foreground">Design Academy, 2022</p>
              </div>
              <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-medium">React.js Advanced Patterns</h4>
                <p className="text-sm text-muted-foreground">React Training, 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
