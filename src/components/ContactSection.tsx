import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Mail, Phone, Linkedin, MapPin, Send, FileText } from 'lucide-react';

const ContactSection: React.FC = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "313-985-2339",
      href: "tel:313-985-2339"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "fbhmida@umich.edu",
      href: "mailto:fbhmida@umich.edu"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "Firas Ben Hmida",
      href: "https://www.linkedin.com/in/firas-ben-hmida-213185201/"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Michigan, USA",
      href: null
    }
  ];

  const interests = [
    "Research Collaborations",
    "Industry Internships",
    "Security Consulting",
    "Open Source Projects"
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-3xl md:text-4xl font-bold">Get In Touch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Interested in collaboration or discussing cybersecurity challenges? 
            I'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="w-5 h-5" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {contact.icon}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{contact.label}</p>
                      {contact.href ? (
                        <a 
                          href={contact.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{contact.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Collaboration Interests
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                I'm always open to discussing opportunities in:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {interests.map((interest, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">{interest}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-card border rounded-lg p-8 text-center">
          <h3 className="mb-4 text-xl font-semibold">Let's Connect</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you're interested in my research, looking for collaboration opportunities, 
            or have questions about cybersecurity and AI, I'm always eager to connect with 
            fellow researchers, industry professionals, and enthusiasts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => window.open('mailto:fbhmida@umich.edu', '_blank')}
              className="min-w-[140px]"
            >
              <Mail className="w-4 h-4 mr-2" />
              Send Email
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.open('https://www.linkedin.com/in/firas-ben-hmida-213185201/', '_blank')}
              className="min-w-[140px]"
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
