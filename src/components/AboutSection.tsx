import { User, Heart, Target, Coffee } from 'lucide-react';
import workspaceImage from '@/assets/workspace.jpg';

const AboutSection = () => {
  const stats = [
    { icon: Coffee, label: 'Projects Completed', value: '150+' },
    { icon: Heart, label: 'Happy Clients', value: '50+' },
    { icon: Target, label: 'Years Experience', value: '5+' },
    { icon: User, label: 'Team Collaborations', value: '25+' }
  ];

  return (
    <section id="about" className="py-20 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="heading-section mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover my journey, passion, and the values that drive my work
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="slide-left space-y-6">
            <div className="card-elegant">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                My Story
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a passionate Full Stack Developer with over 5 years of experience 
                creating digital solutions that make a difference. My journey began with 
                a curiosity about how things work, which led me to fall in love with coding 
                and problem-solving.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I specialize in React, Node.js, and modern web technologies, always 
                staying up-to-date with the latest trends and best practices. My approach 
                combines technical expertise with creative thinking to deliver exceptional 
                user experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the 
                developer community. I believe in continuous learning and the power 
                of collaboration.
              </p>
            </div>

            {/* Values */}
            <div className="card-gradient">
              <h3 className="text-xl font-bold text-foreground mb-4">
                What Drives Me
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-semibold text-foreground">Quality</p>
                  <p className="text-sm text-muted-foreground">Excellence in every detail</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Heart className="w-6 h-6 text-accent" />
                  </div>
                  <p className="font-semibold text-foreground">Passion</p>
                  <p className="text-sm text-muted-foreground">Love what I do</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats & Image */}
          <div className="scale-in space-y-8">
            {/* Professional Image */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto">
                <img
                  src={workspaceImage}
                  alt="Professional workspace"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl"></div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="card-hover text-center group">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
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
        </div>
      </div>
    </section>
  );
};

export default AboutSection;