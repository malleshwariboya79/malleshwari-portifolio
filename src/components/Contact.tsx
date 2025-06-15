
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MapPin, Github } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "malleshwari.tech@gmail.com",
      href: "mailto:malleshwari.tech@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/malleshwariboya",
      href: "https://www.linkedin.com/in/malleshwariboya"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/malleshwariboya79",
      href: "https://github.com/malleshwariboya79"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, India",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. 
            Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{item.label}</h4>
                    {item.href ? (
                      <a 
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-gray-600">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Open to Opportunities</h3>
              <p className="text-gray-600 mb-6">
                I'm currently looking for new opportunities as a Frontend Developer or Full Stack Developer. 
                If you have an exciting project or role that might be a good fit, I'd love to hear from you!
              </p>
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => window.open('mailto:malleshwari.tech@gmail.com', '_blank')}
              >
                Send Email
              </Button>
            </div>
          </div>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Quick Connect</h3>
              <div className="space-y-4">
                <Button 
                  variant="outline" 
                  className="w-full justify-start gap-3 hover:bg-blue-50 hover:border-blue-300"
                  onClick={() => window.open('mailto:malleshwari.tech@gmail.com', '_blank')}
                >
                  <Mail size={20} />
                  Send me an email
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start gap-3 hover:bg-blue-50 hover:border-blue-300"
                  onClick={() => window.open('https://www.linkedin.com/in/malleshwariboya', '_blank')}
                >
                  <Linkedin size={20} />
                  Connect on LinkedIn
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start gap-3 hover:bg-blue-50 hover:border-blue-300"
                  onClick={() => window.open('https://github.com/malleshwariboya79', '_blank')}
                >
                  <Github size={20} />
                  View GitHub Profile
                </Button>
              </div>
              
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Response Time</h4>
                <p className="text-gray-600 text-sm">
                  I typically respond to emails within 24-48 hours. Looking forward to connecting with you!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
