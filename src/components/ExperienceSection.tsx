import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      title: "Research Assistant (Ph.D. Student)",
      company: "University of Michigan-Dearborn",
      location: "Dearborn, MI, USA",
      period: "Sep 2023 - Aug 2024",
      type: "Research",
      achievements: [
        "Engineered a graph-based modeling of DNN inference flows, boosting adversarial robustness and achieving a 55% average increase in adversarial accuracy by repairing a single layer",
        "Analyzed 15 post-hoc explanations methods across four major families, exposing up to 74.9% higher membership leakage under default configurations and devised calibrated noise, clipping, and masking techniques that reduced leakage by up to 95% with ≤3.3% utility loss",
        "Advanced static vulnerability analysis by integrating semantic-aware sanitization, database schema constraints, and object dependency graphs, reaching 80% accuracy on PHP/Java SARD benchmarks and discovering 73 previously unknown zero-day exploits"
      ]
    },
    {
      title: "Machine Learning applied on ZeroTrust - Part Time",
      company: "Ditno R&D",
      location: "Sydney, Australia",
      period: "Oct 2022 - July 2023",
      type: "Research & Development",
      achievements: [
        "Engineered a graph neural network-based framework that detected >95% of attack paths and automatically enforced firewall and Zero-Trust policies to block threats in real time"
      ]
    },
    {
      title: "CyberSecurity Intern",
      company: "Forvis Mazars, CyberSecurity Department",
      location: "Tunis, Tunisia",
      period: "Feb 2023 - Jun 2023",
      type: "Internship",
      achievements: [
        "Developed a solution to evaluate third-party organizations' cybersecurity posture, assessing 3+ vendors and identifying critical risks"
      ]
    },
    {
      title: "Graph Neural Network approach for Proactive Zero Trust Networks",
      company: "Ditno R&D",
      location: "Sydney, Australia",
      period: "May 2022 - Sep 2022",
      type: "Research Project",
      achievements: [
        "Developed a GNN-based framework that identified high-risk connectivity paths and zero-day exposures with >95% accuracy, auto-hardening defenses by tuning firewall rules and access policies"
      ]
    },
    {
      title: "CyberSecurity Intern",
      company: "Forvis Mazars, CyberSecurity Department",
      location: "Tunis, Tunisia",
      period: "Jun 2022 – Aug 2022",
      type: "Internship",
      achievements: [
        "Designed and implemented a social engineering framework to build phishing email servers, achieving a 90%+ delivery success rate for controlled security awareness tests"
      ]
    }
  ];

  const projects = [
    {
      title: "Adversarial NLP Researcher",
      period: "Jan 2025 – Apr 2025",
      skills: "LLMs, Prompt Engineering, Adversarial ML",
      description: "Built an LLM-driven system to transform phishing call transcripts into benign-looking text, successfully bypassing traditional ML phishing classifiers with >80% evasion rate and designing adversarial workflows to stress-test classifier robustness in vishing scenarios"
    },
    {
      title: "LLM Systems Engineer",
      period: "May 2024 – Aug 2024",
      skills: "LLM APIs, LangChain",
      description: "Engineered a modular microservice to orchestrate multi-LLM interactions via LangChain and Anthropic API, enabling seamless orchestration of high school course interactions between students and teachers"
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-3xl md:text-4xl font-bold">Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional experience in cybersecurity research, machine learning, and systems security
          </p>
        </div>
        
        <div className="mb-12">
          <h3 className="mb-6 text-2xl font-semibold">Work Experience</h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="flex items-center gap-2 mb-2">
                        <Briefcase className="w-5 h-5" />
                        {exp.title}
                      </CardTitle>
                      <p className="font-medium text-muted-foreground">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                      <Badge variant="outline">{exp.type}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-muted-foreground leading-relaxed">
                        • {achievement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-2xl font-semibold">Recent Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {project.period}
                  </div>
                  <Badge variant="secondary" className="w-fit">
                    {project.skills}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;