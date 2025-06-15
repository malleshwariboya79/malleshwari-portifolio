
import { Code, Users, Clock, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Problem Solving",
      description: "Strong analytical skills with a passion for tackling complex challenges"
    },
    {
      icon: Users,
      title: "Team Collaboration", 
      description: "Experienced in working with cross-functional teams and stakeholders"
    },
    {
      icon: Clock,
      title: "Time Management",
      description: "Efficient at managing multiple projects and meeting deadlines"
    },
    {
      icon: Lightbulb,
      title: "Continuous Learning",
      description: "Always exploring new technologies and web development trends"
    }
  ];

  const languages = ["English", "Telugu", "Hindi", "Tamil"];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I'm a passionate Frontend Developer currently pursuing my B.Tech in Computer Science Engineering 
              at Sai University Chennai. With hands-on experience in modern web technologies, I specialize in 
              creating responsive, user-friendly applications using React.js, JavaScript, and modern CSS frameworks.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              My goal is to contribute to innovative teams where I can grow as a full-stack developer while 
              building impactful web applications that solve real-world problems. I believe in clean code, 
              responsive design, and continuous learning.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {languages.map((language) => (
                  <span 
                    key={language}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Achievements</h3>
              <div className="flex items-center space-x-2 text-gray-600">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>National Cadet Corps 'B' & 'C' Certificates</span>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <item.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
