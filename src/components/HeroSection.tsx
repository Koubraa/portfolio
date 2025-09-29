import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Mail, Phone, Linkedin, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import headshot from '@/assets/headshot.jpeg'; // 👈 add your image here

const HeroSection: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="mb-6">
            <ImageWithFallback
              src={headshot}   // 👈 now using repo image
              alt="Firas Ben Hmida - Professional Photo"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 object-cover border-4 border-primary/10 shadow-lg"
            />
          </div>
          <Badge variant="secondary" className="mb-4">
            PhD Candidate in Systems Security
          </Badge>
        </div>

        <h1 className="mb-6 text-4xl md:text-6xl font-bold tracking-tight">
          Firas Ben Hmida
        </h1>

        <p className="mb-8 text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Passionate about advancing systems security through graph-based modeling, adversarial machine learning, 
          and privacy-preserving explainability. Building scalable, trustworthy AI systems at the intersection of 
          Product Security Engineering and applied machine learning defenses.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Phone className="w-4 h-4" />
            <span>313-985-2339</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Mail className="w-4 h-4" />
            <span>fbhmida@umich.edu</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Linkedin className="w-4 h-4" />
            <span>Firas Ben Hmida</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            onClick={() => scrollToSection('about')}
            className="min-w-[140px]"
          >
            Learn More
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => scrollToSection('contact')}
            className="min-w-[140px]"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
