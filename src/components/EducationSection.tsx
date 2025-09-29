import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const EducationSection: React.FC = () => {
  const education = [
    {
      degree: "Ph.D. in Computer and Information Science",
      school: "University of Michigan, Rackham Graduate School",
      location: "MI",
      period: "Sep 2023 – Apr 2027",
      gpa: "4.0/4.0",
      concentration: "Systems and Security",
      status: "In Progress"
    },
    {
      degree: "M.S. in Cybersecurity and Information Science",
      school: "University of Michigan-Dearborn",
      location: "MI",
      period: "Sep 2023 – Apr 2025",
      gpa: "4.0/4.0",
      concentration: "Data & Privacy",
      distinction: "High Distinction"
    },
    {
      degree: "Bachelor of Science in Engineering",
      school: "Tunisia Polytechnic School, University of Carthage",
      location: "Tunis",
      period: "Sep 2018 – Jun 2023",
      gpa: "3.52/4.0",
      major: "Computer Engineering",
      minor: "Signal Processing"
    }
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-3xl md:text-4xl font-bold">Education</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Academic journey spanning cybersecurity, systems security, and computer engineering
          </p>
        </div>
        
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="flex items-center gap-2 mb-2">
                      <GraduationCap className="w-5 h-5" />
                      {edu.degree}
                    </CardTitle>
                    <p className="font-medium text-muted-foreground">{edu.school}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">GPA: {edu.gpa}</Badge>
                  {edu.concentration && (
                    <Badge variant="secondary">Concentration: {edu.concentration}</Badge>
                  )}
                  {edu.major && (
                    <Badge variant="secondary">Major: {edu.major}</Badge>
                  )}
                  {edu.minor && (
                    <Badge variant="outline">Minor: {edu.minor}</Badge>
                  )}
                  {edu.distinction && (
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      {edu.distinction}
                    </Badge>
                  )}
                  {edu.status && (
                    <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      {edu.status}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;