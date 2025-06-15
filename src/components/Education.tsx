
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, CalendarDays } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "Sai University Chennai",
      period: "Aug 2024 - May 2028",
      status: "Pursuing",
      description: "Currently pursuing Bachelor's degree in Computer Science with focus on modern web technologies and software development."
    },
    {
      degree: "Diploma in Computer Science Engineering",
      institution: "Government Polytechnic College, Masabtank (HYD)",
      period: "2021 - 2024",
      cgpa: "9.53 CGPA",
      description: "Completed diploma with excellent academic performance, gaining strong foundation in programming and computer science fundamentals."
    },
    {
      degree: "Secondary School Certificate",
      institution: "Zilla Parishad High School",
      period: "2016 - May 2016",
      cgpa: "10 CGPA",
      description: "Achieved perfect grade in secondary education, demonstrating strong academic foundation."
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <GraduationCap className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-900 mb-1">{edu.degree}</CardTitle>
                      <h3 className="text-lg font-semibold text-blue-600 mb-2">{edu.institution}</h3>
                      {edu.cgpa && (
                        <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                          {edu.cgpa}
                        </div>
                      )}
                      {edu.status && (
                        <div className="inline-flex items-center px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mt-2">
                          {edu.status}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-500 md:mt-3">
                    <CalendarDays size={16} />
                    <span>{edu.period}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
