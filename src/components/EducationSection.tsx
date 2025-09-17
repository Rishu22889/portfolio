import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: "Master of Computer Science",
      institution: "Stanford University",
      location: "Stanford, CA",
      period: "2018 - 2020",
      gpa: "3.9/4.0",
      achievements: [
        "Graduated Summa Cum Laude",
        "Dean's List for 4 consecutive semesters",
        "Research Assistant in AI/ML Lab"
      ],
      coursework: ["Advanced Algorithms", "Machine Learning", "Database Systems", "Software Engineering"]
    },
    {
      degree: "Bachelor of Science in Computer Engineering",
      institution: "University of California, Berkeley",
      location: "Berkeley, CA",
      period: "2014 - 2018",
      gpa: "3.8/4.0",
      achievements: [
        "Magna Cum Laude Graduate",
        "President of Computer Science Society",
        "Winner of Annual Hackathon 2017"
      ],
      coursework: ["Data Structures", "Computer Networks", "Web Development", "Mobile App Development"]
    },
    {
      degree: "High School Diploma",
      institution: "Lincoln High School",
      location: "San Francisco, CA",
      period: "2010 - 2014",
      gpa: "4.0/4.0",
      achievements: [
        "Valedictorian",
        "National Merit Scholar",
        "Captain of Programming Team"
      ],
      coursework: ["AP Computer Science", "AP Calculus", "AP Physics", "AP Chemistry"]
    }
  ];

  return (
    <section id="education" className="py-20 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="heading-section mb-4">Education</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic journey and continuous learning that shaped my expertise
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary"></div>

          {/* Education Items */}
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div key={index} className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full border-4 border-background shadow-lg z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="card-hover group">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {edu.degree}
                        </h3>
                        <div className="flex items-center text-primary font-semibold mt-1 mb-2">
                          <GraduationCap className="w-4 h-4 mr-2" />
                          {edu.institution}
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {edu.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {edu.location}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                          GPA: {edu.gpa}
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-foreground mb-2 flex items-center">
                        <Award className="w-4 h-4 mr-2 text-primary" />
                        Achievements
                      </h4>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Relevant Coursework */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        Relevant Coursework
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, i) => (
                          <span
                            key={i}
                            className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Learning */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Continuous Learning
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "AWS Certified", provider: "Amazon Web Services", year: "2023" },
              { title: "React Advanced", provider: "Meta/Facebook", year: "2023" },
              { title: "System Design", provider: "Coursera", year: "2022" },
              { title: "Machine Learning", provider: "Stanford Online", year: "2022" }
            ].map((cert, index) => (
              <div key={index} className="card-hover text-center group">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-foreground mb-1">{cert.title}</h4>
                <p className="text-sm text-muted-foreground mb-1">{cert.provider}</p>
                <p className="text-xs text-accent font-semibold">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;