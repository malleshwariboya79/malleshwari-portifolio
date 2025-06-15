
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Developer Intern",
      company: "OpticThirdEyeSolutions",
      location: "Remote",
      period: "Jan 2025 - Apr 2025",
      description: [
        "Working on Angular Framework to develop applications",
        "Learning modern frontend development practices"
      ],
      technologies: ["Angular", "TypeScript", "Web Development"]
    },
    {
      title: "Frontend Developer Intern",
      company: "CloudCredits Technologies Pvt. Ltd.",
      location: "Remote",
      period: "May 2024 - Apr 2025",
      description: [
        "Developing and maintaining responsive React.js applications",
        "Working on reusable components and UI logic",
        "Improved UI responsiveness and user experience with clean code practices"
      ],
      technologies: ["React.js", "JavaScript", "CSS3", "UI/UX"]
    },
    {
      title: "Web Development Intern",
      company: "CodeTech IT Solutions",
      location: "Remote",
      period: "Dec 2024 - Jan 2025",
      description: [
        "Created responsive websites using HTML5, CSS3, JavaScript",
        "Integrated APIs and enhanced UI with React.js",
        "Used GitHub for version control",
        "Collaborated with designers and developers to improve usability"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "React.js", "API Integration", "GitHub"]
    },
    {
      title: "Python Intern",
      company: "RKJ Technologies Pvt. Ltd",
      location: "Remote", 
      period: "Dec 2023 - Mar 2024",
      description: [
        "Automated backend tasks with Python scripts",
        "Worked on data processing and implemented basic logic structures",
        "Optimized simple workflows for better efficiency"
      ],
      technologies: ["Python", "Data Processing", "Automation", "Backend"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-gray-900 mb-2">{exp.title}</CardTitle>
                    <h3 className="text-lg font-semibold text-blue-600 mb-2">{exp.company}</h3>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <CalendarDays size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="bg-blue-50 text-blue-700">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
