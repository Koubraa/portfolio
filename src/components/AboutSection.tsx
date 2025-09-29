import React from 'react';
import { Card, CardContent } from './ui/card';
import { Shield, Brain, Search, Lock } from 'lucide-react';

const AboutSection: React.FC = () => {
  const highlights = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Systems Security",
      description: "Graph-based modeling and vulnerability detection with 80% accuracy on SARD benchmarks"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Adversarial ML",
      description: "Advanced adversarial robustness research achieving 55% average increase in adversarial accuracy"
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Zero-Day Discovery",
      description: "Discovered 73 previously unknown zero-day exploits through innovative analysis techniques"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Privacy Research",
      description: "Privacy-preserving explainability reducing membership leakage by up to 95%"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            I'm a PhD candidate at the University of Michigan, passionate about advancing systems security 
            through innovative research at the intersection of graph-based modeling, adversarial machine learning, 
            and privacy-preserving explainability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  {highlight.icon}
                </div>
                <h3 className="mb-2 font-semibold">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-card rounded-lg p-8 border">
          <h3 className="mb-4 text-xl font-semibold">Research Focus</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            My research centers on building scalable, trustworthy AI systems with a particular focus on:
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li>• <strong>Graph Neural Networks</strong> for attack path identification and autonomous mitigation</li>
            <li>• <strong>Adversarial Machine Learning</strong> defenses and robustness evaluation</li>
            <li>• <strong>Privacy-Preserving Explainability</strong> in deep neural networks</li>
            <li>• <strong>Static Vulnerability Analysis</strong> using semantic-aware techniques</li>
            <li>• <strong>Zero-Trust Security</strong> frameworks and policy enforcement</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;