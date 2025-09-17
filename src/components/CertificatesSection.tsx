import { Award, Calendar, ExternalLink, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CertificatesSection = () => {
  const certificates = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "March 2023",
      expiryDate: "March 2026",
      credentialId: "AWS-ASA-123456789",
      image: "/api/placeholder/120/120",
      description: "Demonstrates expertise in designing distributed systems on AWS platform with focus on scalability, security, and cost optimization.",
      skills: ["Cloud Architecture", "AWS Services", "Security", "Cost Optimization"],
      verificationUrl: "https://aws.amazon.com/verification/AWS-ASA-123456789",
      level: "Professional"
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "January 2023",
      expiryDate: "January 2025",
      credentialId: "GCP-PD-987654321",
      image: "/api/placeholder/120/120",
      description: "Validates ability to design, build, and deploy applications on Google Cloud Platform using best practices.",
      skills: ["GCP Services", "Kubernetes", "CI/CD", "Monitoring"],
      verificationUrl: "https://cloud.google.com/certification/verify/GCP-PD-987654321",
      level: "Professional"
    },
    {
      title: "Meta React Developer Certificate",
      issuer: "Meta (Facebook)",
      date: "November 2022",
      expiryDate: "November 2025",
      credentialId: "META-RD-456789123",
      image: "/api/placeholder/120/120",
      description: "Comprehensive program covering React, React Native, and modern frontend development practices.",
      skills: ["React", "React Native", "JavaScript", "Frontend Development"],
      verificationUrl: "https://developers.facebook.com/certificate/META-RD-456789123",
      level: "Professional"
    },
    {
      title: "MongoDB Certified Developer",
      issuer: "MongoDB Inc.",
      date: "September 2022",
      expiryDate: "September 2024",
      credentialId: "MDB-CD-789123456",
      image: "/api/placeholder/120/120",
      description: "Demonstrates proficiency in MongoDB database design, development, and administration.",
      skills: ["MongoDB", "Database Design", "Aggregation", "Performance Tuning"],
      verificationUrl: "https://university.mongodb.com/verify/MDB-CD-789123456",
      level: "Associate"
    },
    {
      title: "Docker Certified Associate",
      issuer: "Docker Inc.",
      date: "July 2022",
      expiryDate: "July 2024",
      credentialId: "DCA-123789456",
      image: "/api/placeholder/120/120",
      description: "Validates skills in containerization, orchestration, and Docker ecosystem technologies.",
      skills: ["Docker", "Containerization", "Docker Compose", "Container Orchestration"],
      verificationUrl: "https://docker.com/certification/verify/DCA-123789456",
      level: "Associate"
    },
    {
      title: "Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      date: "May 2022",
      expiryDate: "May 2025",
      credentialId: "CKA-456123789",
      image: "/api/placeholder/120/120",
      description: "Demonstrates the ability to perform the responsibilities of Kubernetes administrators.",
      skills: ["Kubernetes", "Container Orchestration", "Cluster Management", "Troubleshooting"],
      verificationUrl: "https://cncf.io/certification/verify/CKA-456123789",
      level: "Professional"
    }
  ];

  const achievements = [
    {
      title: "GitHub Arctic Code Vault Contributor",
      description: "Contributed to repositories preserved in the GitHub Arctic Code Vault",
      date: "2020",
      icon: "🏆"
    },
    {
      title: "Hackathon Winner - TechCrunch Disrupt",
      description: "First place winner for innovative fintech solution",
      date: "2021",
      icon: "🏅"
    },
    {
      title: "Open Source Contributor of the Year",
      description: "Recognized for outstanding contributions to React ecosystem",
      date: "2022",
      icon: "⭐"
    },
    {
      title: "Top 1% Stack Overflow Contributor",
      description: "Achieved top 1% ranking in JavaScript and React tags",
      date: "2023",
      icon: "💎"
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="heading-section mb-4">Certificates & Awards</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional certifications and recognition that validate my expertise
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {certificates.map((cert, index) => (
            <div key={index} className="card-hover group" style={{ animationDelay: `${index * 100}ms` }}>
              {/* Certificate Header */}
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg p-2 flex-shrink-0">
                  <img
                    src={cert.image}
                    alt={`${cert.issuer} logo`}
                    className="w-full h-full object-contain rounded"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-primary font-semibold text-sm mt-1">
                    {cert.issuer}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mt-2">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {cert.date}
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      cert.level === 'Professional' 
                        ? 'bg-accent/10 text-accent' 
                        : 'bg-secondary text-secondary-foreground'
                    }`}>
                      {cert.level}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {cert.description}
              </p>

              {/* Skills */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Credential Info */}
              <div className="border-t border-border pt-4 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-muted-foreground">Credential ID:</span>
                  <span className="font-mono text-foreground">{cert.credentialId}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-muted-foreground">Valid Until:</span>
                  <span className="text-foreground">{cert.expiryDate}</span>
                </div>
              </div>

              {/* Verification Button */}
              <div className="mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:border-primary group-hover:text-primary transition-colors"
                  asChild
                >
                  <a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Verify Certificate
                    <ExternalLink className="w-3 h-3 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Awards & Achievements */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Awards & Achievements
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Recognition for exceptional work and contributions to the developer community
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="card-hover text-center group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {achievement.icon}
              </div>
              <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {achievement.title}
              </h4>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                {achievement.description}
              </p>
              <div className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold inline-block">
                {achievement.date}
              </div>
            </div>
          ))}
        </div>

        {/* Professional Memberships */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Professional Memberships
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { org: "IEEE Computer Society", role: "Member", since: "2020" },
              { org: "ACM (Association for Computing Machinery)", role: "Professional Member", since: "2019" },
              { org: "React Developer Community", role: "Core Contributor", since: "2021" }
            ].map((membership, index) => (
              <div key={index} className="card-elegant text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-foreground mb-1">{membership.org}</h4>
                <p className="text-sm text-muted-foreground mb-2">{membership.role}</p>
                <p className="text-xs text-accent">Since {membership.since}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;