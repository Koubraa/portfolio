import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { FileText, ExternalLink, Users, Calendar, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// ✅ Make sure these exist in: src/assets/
// - deepprov.png
// - spgnnapi.png
// - LeakyFarm-Figure-1.png
import deepProvOverview from '@/assets/deepprov.png';
import spgnnOverview from '@/assets/spgnnapi.png';
import deepLeakOverview from '@/assets/LeakyFarm-Figure-1.png';

type Publication = {
  title: string;
  status?: string;
  authors: string;
  venue?: string;
  year?: string | number;
  type?: string;
  equalContribution?: boolean;

  // Optional links
  codeUrl?: string;
  arxivUrl?: string;
  pdfUrl?: string;
  projectUrl?: string;

  // ✅ Approach overview figure
  overviewFigureUrl?: string;
  overviewFigureAlt?: string;
};

const cves2025 = [
  'CVE-2025-65336',
  'CVE-2025-65337',
  'CVE-2025-65340',
  'CVE-2025-65341',
  'CVE-2025-65342',
  'CVE-2025-65343'
];

const PublicationsSection: React.FC = () => {
  const publications: Publication[] = [
    
    {
      title:
        'DeepLeak: Privacy Enhancing Hardening of Model Explanations Against Membership Leakage',
      status: 'Accepted at IEEE SatML 2026',
      authors: 'Firas Ben Hmida, Zain Sbeih, Philemon Hailemariam, Birhanu Eshete',
      venue: 'IEEE SatML 2026',
      year: '2026',
      type: 'Conference Paper',
      codeUrl: 'https://anonymous.4open.science/r/DeepLeak-DDD9/README.md',
      overviewFigureUrl: deepLeakOverview,
      overviewFigureAlt: 'DeepLeak approach overview'
    },
    {
      title:
        'DeepProv: Behavioral Characterization and Repair of Neural Networks via Inference Provenance Graph Analysis',
      status: 'Accepted at IEEE ACSAC 2025',
      authors: 'Firas Ben Hmida, Abderrahmen Amich, Ata Kaboudi, Birhanu Eshete',
      venue: 'IEEE ACSAC 2025',
      type: 'Conference Paper',
      codeUrl: 'https://github.com/um-dsp/DeepProv',
      // ✅ Safer arXiv link format
      arxivUrl: 'https://arxiv.org/abs/2509.26562',
      overviewFigureUrl: deepProvOverview,
      overviewFigureAlt: 'DeepProv approach overview'
    },
    {
      title:
        'SPGNN-API: A Transferable Graph Neural Network for Attack Paths Identification and Autonomous Mitigation',
      status: 'Published',
      authors:
        'Houssem Jmal*, Firas Ben Hmida*, Nardine Basta, Muhammad Ikram, Mohamed Ali Kaafar, and Andy Walker',
      venue: 'IEEE Transactions on Information Forensics Security (TIFS)',
      year: '2024',
      type: 'Journal Article',
      equalContribution: true,
      arxivUrl: 'https://arxiv.org/abs/2305.19487',
      overviewFigureUrl: spgnnOverview,
      overviewFigureAlt: 'SPGNN-API approach overview'
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
                      {pub.status && (
                        <Badge
                          className={
                            pub.status === 'Published'
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                              : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                          }
                        >
                          {pub.status}
                        </Badge>
                      )}
                      {pub.type && <Badge variant="outline">{pub.type}</Badge>}
                      {pub.equalContribution && <Badge variant="secondary">Equal Contribution</Badge>}
                      {(pub.codeUrl || pub.arxivUrl || pub.pdfUrl || pub.projectUrl) && (
                        <Badge variant="outline">Links below</Badge>
                      )}
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <Users className="w-4 h-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <strong>Authors:</strong> {pub.authors}
                      {pub.equalContribution && <span className="text-xs block mt-1">* Equal contributions</span>}
                    </p>
                  </div>

                  {(pub.venue || pub.year) && (
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        <strong>Venue:</strong> {pub.venue}
                        {pub.year && ` (${pub.year})`}
                      </p>
                    </div>
                  )}

                  {pub.overviewFigureUrl && (
                    <div className="pt-2">
                      <div className="rounded-lg border bg-card p-3">
                        <p className="text-sm font-medium mb-2">Approach Overview</p>
                        <ImageWithFallback
                          src={pub.overviewFigureUrl}
                          alt={pub.overviewFigureAlt || `${pub.title} overview`}
                          className="w-full h-auto rounded-md"
                        />
                        <p className="mt-2 text-xs text-muted-foreground">
                          Overview of the {pub.title} pipeline.
                        </p>
                      </div>
                    </div>
                  )}

                  {(pub.codeUrl || pub.arxivUrl || pub.pdfUrl || pub.projectUrl) && (
                    <div className="pt-1 flex flex-wrap gap-3">
                      {pub.codeUrl && (
                        <a
                          href={pub.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-md border px-2.5 py-1.5 text-sm hover:bg-accent transition-colors"
                          aria-label="Code repository"
                        >
                          <Github className="w-4 h-4" />
                          Code
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {pub.arxivUrl && (
                        <a
                          href={pub.arxivUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-md border px-2.5 py-1.5 text-sm hover:bg-accent transition-colors"
                          aria-label="arXiv link"
                        >
                          arXiv
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {pub.pdfUrl && (
                        <a
                          href={pub.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-md border px-2.5 py-1.5 text-sm hover:bg-accent transition-colors"
                          aria-label="PDF link"
                        >
                          PDF
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {pub.projectUrl && (
                        <a
                          href={pub.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-md border px-2.5 py-1.5 text-sm hover:bg-accent transition-colors"
                          aria-label="Project page"
                        >
                          Project
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
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
            My research focuses on developing novel approaches to enhance security in AI systems, with particular emphasis on:
          </p>
          <ul className="space-y-1 text-muted-foreground">
            <li>• Graph neural network architectures for cybersecurity applications</li>
            <li>• Adversarial robustness and defense mechanisms in deep learning</li>
            <li>• Privacy-preserving techniques for explainable AI</li>
            <li>• Automated vulnerability detection and remediation systems</li>
          </ul>

          <div className="mt-5">
            <h4 className="font-semibold mb-2">Vulnerability Discoveries (2025)</h4>
            <div className="flex flex-wrap gap-2">
              {cves2025.map((id) => (
                <Badge key={id} variant="outline">
                  {id}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
