import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { FileText, ExternalLink, Users, Calendar } from 'lucide-react';

const PublicationsSection: React.FC = () => {
  const publications = [
    {
      title: "DeepProv: Behavioral Characterization and Repair of Neural Networks via Inference Provenance Graph Analysis",
      status: "Accepted at IEEE ACSAC 2025",
      authors: "Firas Ben Hmida, Abderrahmen Amich, Ata Kaboudi, Birhanu Eshete",
      venue: "IEEE ACSAC 2025",
      type: "Conference Paper",
      hasCode: true,
      codeLink: "DeepProv"
    },
    {
      title: "SPGNN-API: A Transferable Graph Neural Network for Attack Paths Identification and Autonomous Mitigation",
      status: "Published",
      authors: "Houssem Jmal*, Firas Ben Hmida*, Nardine Basta, Muhammad Ikram, Mohamed Ali Kaafar, and Andy Walker",
      venue: "IEEE Transactions on Information Forensics Security (TIFS)",
      year: "2024",
      type: "Journal Article",
      equalContribution: true
    }
  ];

  return (
    <section id="publications" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-3xl md:text-4xl font-bold">Publications</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Research contributions in systems security, adversarial machine learning, and graph neural networks
          </p>
        </div>
        
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="flex items-start gap-3 mb-3 leading-tight">
                      <FileText className="w-5 h-5 mt-1 flex-shrink-0" />
                      <span>{pub.title}</span>
                    </CardTitle>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge 
                        className={
                          pub.status === "Published" 
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                            : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                        }
                      >
                        {pub.status}
                      </Badge>
                      <Badge variant="outline">{pub.type}</Badge>
                      {pub.equalContribution && (
                        <Badge variant="secondary">Equal Contribution</Badge>
                      )}
                      {pub.hasCode && (
                        <Badge variant="outline" className="flex items-center gap-1">
                          <ExternalLink className="w-3 h-3" />
                          Code Available
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Users className="w-4 h-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <strong>Authors:</strong> {pub.authors}
                      {pub.equalContribution && (
                        <span className="text-xs block mt-1">* Equal contributions</span>
                      )}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      <strong>Venue:</strong> {pub.venue}
                      {pub.year && ` (${pub.year})`}
                    </p>
                  </div>
                  
                  {pub.hasCode && (
                    <div className="pt-2">
                      <Badge 
                        variant="outline" 
                        className="cursor-pointer hover:bg-accent transition-colors"
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        {pub.codeLink}
                      </Badge>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-card rounded-lg border">
          <h3 className="mb-3 font-semibold">Research Impact</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            My research focuses on developing novel approaches to enhance security in AI systems, 
            with particular emphasis on:
          </p>
          <ul className="space-y-1 text-muted-foreground">
            <li>• Graph neural network architectures for cybersecurity applications</li>
            <li>• Adversarial robustness and defense mechanisms in deep learning</li>
            <li>• Privacy-preserving techniques for explainable AI</li>
            <li>• Automated vulnerability detection and remediation systems</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;