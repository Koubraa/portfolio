import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Code, Brain, Shield, Database, Wrench, Globe } from 'lucide-react';

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Programming & Development",
      skills: ["Python", "R", "Scala", "Bash", "Java", "Docker"]
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "ML & AI",
      skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Optuna", "LangChain", "PineCone", "LangServe", "Transformers", "Adversarial NLP", "XAI", "Computer Vision", "Privacy-Preserving ML", "OpenRouter"]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Cybersecurity",
      skills: ["Zero-Trust Networks", "GNN-based Attack Path Detection", "Static & Dynamic Program Analysis (CPGs, CodeQL, Joern)", "Vulnerability Research (SQLi, XSS, CVE Reproduction)", "Exploit Simulation", "Social Engineering"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data & Systems",
      skills: ["Docker", "Pandas", "NumPy", "PySpark", "MapReduce", "PostgreSQL", "MySQL", "Git", "Linux", "LaTeX"]
    }
  ];

  const achievements = [
    {
      metric: "95%",
      description: "Accuracy in attack path detection using GNN frameworks"
    },
    {
      metric: "55%",
      description: "Average increase in adversarial accuracy through graph-based modeling"
    },
    {
      metric: "73",
      description: "Previously unknown zero-day exploits discovered"
    },
    {
      metric: "95%",
      description: "Reduction in membership leakage with privacy-preserving techniques"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-3xl md:text-4xl font-bold">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technical skills and research achievements in cybersecurity, machine learning, and systems security
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-12">
          <h3 className="mb-6 text-2xl font-semibold text-center">Research Achievements</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="mb-3 text-3xl font-bold text-primary">
                    {achievement.metric}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Wrench className="w-5 h-5" />
                Research Tools & Frameworks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <p className="font-medium mb-1">Static Analysis</p>
                  <p className="text-sm text-muted-foreground">CodeQL, Joern, CPGs</p>
                </div>
                <div>
                  <p className="font-medium mb-1">ML Frameworks</p>
                  <p className="text-sm text-muted-foreground">PyTorch, TensorFlow, LangChain</p>
                </div>
                <div>
                  <p className="font-medium mb-1">Security Testing</p>
                  <p className="text-sm text-muted-foreground">SARD benchmarks, CVE reproduction</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Globe className="w-5 h-5" />
                Collaboration & Impact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <p className="font-medium mb-1">International Research</p>
                  <p className="text-sm text-muted-foreground">Collaborations with Australia & USA</p>
                </div>
                <div>
                  <p className="font-medium mb-1">Publications</p>
                  <p className="text-sm text-muted-foreground">IEEE ACSAC, TIFS journals</p>
                </div>
                <div>
                  <p className="font-medium mb-1">Open Source</p>
                  <p className="text-sm text-muted-foreground">DeepProv framework publicly available</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;