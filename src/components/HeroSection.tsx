import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Mail, Phone, Linkedin, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import headshot from '@/assets/headshot.jpeg';

const HeroSection: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const phone = '313-985-2339';
  const email = 'fbhmida@umich.edu';
  const linkedin = 'https://www.linkedin.com/in/firas-ben-hmida-213185201/';
  const cvUrl = 'https://drive.google.com/file/d/13zmSpvzs-v7g7JNhTk3Qz7FZB2fuDm2U/view?usp=sharing';

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="mb-6">
            <ImageWithFallback
              src={headshot}
              alt="Firas Ben Hmida - Professional Photo"
              className="w-64 h-64 md:w-40 md:h-40 rounded-full mx-auto mb-6 object-cover border-4 border-primary/10 shadow-lg"
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

        {/* Contact row with clickable links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <a
            href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Call phone number"
          >
            <Phone className="w-4 h-4" />
            <span>{phone}</span>
          </a>

          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Send email"
          >
            <Mail className="w-4 h-4" />
            <span>{email}</span>
          </a>

          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Open LinkedIn profile"
          >
            <Linkedin className="w-4 h-4" />
            <span className="truncate max-w-[260px] sm:max-w-none">
              LinkedIn
            </span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* CV link */}
        <div className="mb-8 flex justify-center">
          <a
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            aria-label="Open CV"
          >
            CV
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
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
