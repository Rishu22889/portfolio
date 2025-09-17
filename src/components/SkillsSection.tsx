import { useState } from 'react';
import React from 'react';
import { Code, Palette, Database, Globe, Smartphone, Server } from 'lucide-react';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: Code,
      skills: [
        { name: 'React/Next.js', level: 95, color: 'from-blue-500 to-cyan-500' },
        { name: 'TypeScript', level: 90, color: 'from-blue-600 to-blue-700' },
        { name: 'Tailwind CSS', level: 88, color: 'from-cyan-500 to-teal-500' },
        { name: 'Vue.js', level: 85, color: 'from-green-500 to-emerald-500' },
        { name: 'JavaScript ES6+', level: 92, color: 'from-yellow-500 to-orange-500' }
      ]
    },
    backend: {
      title: 'Backend Development',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 90, color: 'from-green-600 to-green-700' },
        { name: 'Python/Django', level: 85, color: 'from-green-500 to-blue-500' },
        { name: 'PostgreSQL', level: 88, color: 'from-blue-600 to-indigo-600' },
        { name: 'MongoDB', level: 82, color: 'from-green-500 to-green-600' },
        { name: 'REST APIs', level: 93, color: 'from-purple-500 to-pink-500' }
      ]
    },
    design: {
      title: 'Design & UX',
      icon: Palette,
      skills: [
        { name: 'Figma', level: 90, color: 'from-purple-500 to-pink-500' },
        { name: 'UI/UX Design', level: 85, color: 'from-pink-500 to-rose-500' },
        { name: 'Adobe Creative Suite', level: 80, color: 'from-red-500 to-orange-500' },
        { name: 'Prototyping', level: 87, color: 'from-indigo-500 to-purple-500' },
        { name: 'Design Systems', level: 88, color: 'from-teal-500 to-cyan-500' }
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      icon: Database,
      skills: [
        { name: 'Git/GitHub', level: 92, color: 'from-gray-600 to-gray-700' },
        { name: 'Docker', level: 85, color: 'from-blue-500 to-blue-600' },
        { name: 'AWS/Cloud', level: 80, color: 'from-orange-500 to-orange-600' },
        { name: 'CI/CD', level: 83, color: 'from-green-500 to-teal-500' },
        { name: 'Testing (Jest)', level: 88, color: 'from-red-500 to-pink-500' }
      ]
    }
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="heading-section mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Category Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-2">
              {Object.entries(skillCategories).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`w-full p-4 rounded-xl text-left transition-all duration-300 flex items-center space-x-3 ${
                    activeCategory === key
                      ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                      : 'bg-card hover:bg-secondary/50 border border-border'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  <span className="font-medium">{category.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Skills Display */}
          <div className="lg:col-span-3">
            <div className="card-elegant">
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  {React.createElement(skillCategories[activeCategory as keyof typeof skillCategories].icon, {
                    className: "w-8 h-8 text-primary"
                  })}
                  <h3 className="text-2xl font-bold text-foreground">
                    {skillCategories[activeCategory as keyof typeof skillCategories].title}
                  </h3>
                </div>
              </div>

              <div className="space-y-6">
                {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm font-medium text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className={`progress-fill bg-gradient-to-r ${skill.color} group-hover:scale-105 transition-transform duration-500`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${index * 200}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Skills Grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="card-hover text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Web Development</h3>
            <p className="text-muted-foreground">
              Full-stack web applications with modern frameworks and best practices
            </p>
          </div>

          <div className="card-hover text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Responsive Design</h3>
            <p className="text-muted-foreground">
              Mobile-first approach ensuring seamless experience across all devices
            </p>
          </div>

          <div className="card-hover text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Database className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Database Design</h3>
            <p className="text-muted-foreground">
              Efficient data modeling and optimization for scalable applications
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;