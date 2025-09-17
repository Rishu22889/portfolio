import { Briefcase, Calendar, MapPin, ExternalLink, TrendingUp } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      position: "Senior Full Stack Developer",
      company: "TechFlow Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      logo: "/api/placeholder/60/60",
      website: "https://techflow.com",
      description: "Leading development of enterprise-level web applications serving 100k+ users daily.",
      achievements: [
        "Architected and implemented microservices reducing system response time by 40%",
        "Led a team of 6 developers in migrating legacy systems to modern React/Node.js stack",
        "Introduced automated testing practices improving code coverage from 60% to 95%",
        "Mentored junior developers and conducted technical interviews"
      ],
      technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS", "Docker", "Kubernetes"]
    },
    {
      position: "Full Stack Developer",
      company: "InnovateLabs",
      location: "Palo Alto, CA",
      period: "2020 - 2022",
      type: "Full-time",
      logo: "/api/placeholder/60/60",
      website: "https://innovatelabs.com",
      description: "Developed scalable web applications and mobile solutions for startup clients.",
      achievements: [
        "Built 12+ client projects from concept to deployment with 98% client satisfaction",
        "Optimized database queries reducing load times by 60%",
        "Implemented real-time features using WebSocket technology",
        "Collaborated with UI/UX team to create pixel-perfect responsive designs"
      ],
      technologies: ["Vue.js", "Python", "Django", "MongoDB", "Redis", "Socket.io", "GitLab CI"]
    },
    {
      position: "Frontend Developer",
      company: "Creative Digital Agency",
      location: "San Jose, CA",
      period: "2019 - 2020",
      type: "Full-time",
      logo: "/api/placeholder/60/60",
      website: "https://creative-agency.com",
      description: "Specialized in creating interactive and engaging user interfaces for various clients.",
      achievements: [
        "Developed 20+ responsive websites increasing client engagement by 35%",
        "Implemented advanced animations and micro-interactions using CSS and JavaScript",
        "Collaborated with design team to establish component library and design system",
        "Reduced website loading times by 50% through performance optimization"
      ],
      technologies: ["JavaScript", "SASS", "Webpack", "Figma", "Adobe Creative Suite", "WordPress"]
    },
    {
      position: "Junior Web Developer",
      company: "StartupHub",
      location: "Mountain View, CA",
      period: "2018 - 2019",
      type: "Full-time",
      logo: "/api/placeholder/60/60",
      website: "https://startuphub.com",
      description: "Started my professional journey building web applications for early-stage startups.",
      achievements: [
        "Contributed to 5+ successful product launches",
        "Learned modern development practices and agile methodology",
        "Participated in code reviews and pair programming sessions",
        "Built internal tools improving team productivity by 25%"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap", "jQuery"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="heading-section mb-4">Work Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional journey and key contributions that define my career
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-16 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative ml-16 md:ml-32">
                {/* Timeline Dot with Company Logo */}
                <div className="absolute -left-20 md:-left-36 top-6">
                  <div className="w-16 h-16 bg-card border-4 border-primary rounded-full shadow-lg overflow-hidden">
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content Card */}
                <div className="card-hover group">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                        {exp.position}
                      </h3>
                      <div className="flex items-center space-x-2 mb-2">
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary font-semibold hover:text-accent transition-colors inline-flex items-center"
                        >
                          {exp.company}
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                        <span className="text-muted-foreground">•</span>
                        <span className="bg-accent/10 text-accent px-2 py-1 rounded-full text-xs font-medium">
                          {exp.type}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Key Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2 text-primary" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center">
                      <Briefcase className="w-4 h-4 mr-2 text-primary" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-secondary hover:bg-primary hover:text-primary-foreground text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Stats */}
        <div className="mt-20 grid md:grid-cols-4 gap-6">
          {[
            { label: "Years of Experience", value: "5+", icon: Calendar },
            { label: "Projects Completed", value: "50+", icon: Briefcase },
            { label: "Technologies Mastered", value: "20+", icon: TrendingUp },
            { label: "Team Members Led", value: "10+", icon: MapPin }
          ].map((stat, index) => (
            <div key={index} className="card-hover text-center group">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;