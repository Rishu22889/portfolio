import { useState } from 'react';
import { ExternalLink, Github, Eye, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ecommerceImage from '@/assets/project-ecommerce.jpg';
import taskManagerImage from '@/assets/project-taskmanager.jpg';
import weatherImage from '@/assets/project-weather.jpg';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Full Stack",
      description: "A complete e-commerce solution with modern UI and robust backend functionality.",
      longDescription: "Built a comprehensive e-commerce platform featuring user authentication, product catalog, shopping cart, payment integration with Stripe, order management, and admin dashboard. The platform handles 10k+ monthly active users and processes hundreds of transactions daily.",
      image: ecommerceImage,
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS", "Docker"],
      liveUrl: "https://ecommerce-demo.com",
      githubUrl: "https://github.com/johndoe/ecommerce-platform",
      features: [
        "User authentication and authorization",
        "Product catalog with advanced filtering",
        "Shopping cart and wishlist functionality",
        "Secure payment processing with Stripe",
        "Order tracking and management",
        "Admin dashboard with analytics",
        "Responsive design for all devices",
        "SEO optimized for better visibility"
      ]
    },
    {
      id: 2,
      title: "Task Management App",
      category: "Frontend",
      description: "Collaborative task management application with real-time updates and team features.",
      longDescription: "Developed a modern task management application that enables teams to collaborate effectively. Features include real-time updates, drag-and-drop functionality, team workspaces, progress tracking, and comprehensive reporting. Used by over 500 teams worldwide.",
      image: taskManagerImage,
      technologies: ["React", "TypeScript", "Socket.io", "PostgreSQL", "Redis"],
      liveUrl: "https://taskflow-app.com",
      githubUrl: "https://github.com/johndoe/task-management",
      features: [
        "Real-time collaboration",
        "Drag-and-drop task management",
        "Team workspaces and permissions",
        "Progress tracking and reporting",
        "File attachments and comments",
        "Mobile-responsive design",
        "Dark/light theme support",
        "Advanced search and filtering"
      ]
    },
    {
      id: 3,
      title: "Weather Analytics Dashboard",
      category: "Data Visualization",
      description: "Interactive dashboard for weather data analysis with beautiful charts and insights.",
      longDescription: "Created an advanced weather analytics dashboard that aggregates data from multiple APIs to provide comprehensive weather insights. Features interactive charts, predictive analytics, location-based forecasts, and customizable widgets for different use cases.",
      image: "/api/placeholder/600/400",
      technologies: ["Vue.js", "D3.js", "Python", "FastAPI", "InfluxDB"],
      liveUrl: "https://weather-analytics.com",
      githubUrl: "https://github.com/johndoe/weather-dashboard",
      features: [
        "Real-time weather data integration",
        "Interactive charts and visualizations",
        "Predictive weather analytics",
        "Location-based forecasting",
        "Customizable dashboard widgets",
        "Export functionality for reports",
        "Mobile-optimized interface",
        "Historical data analysis"
      ]
    },
    {
      id: 4,
      title: "Social Media Analytics",
      category: "Data Science",
      description: "AI-powered social media analytics platform for brand monitoring and insights.",
      longDescription: "Built an AI-powered analytics platform that helps businesses monitor their social media presence across multiple platforms. Includes sentiment analysis, trend detection, competitor analysis, and automated reporting with actionable insights.",
      image: weatherImage,
      technologies: ["Python", "TensorFlow", "React", "Django", "Elasticsearch"],
      liveUrl: "https://social-insights.com",
      githubUrl: "https://github.com/johndoe/social-analytics",
      features: [
        "Multi-platform social media monitoring",
        "AI-powered sentiment analysis",
        "Trend detection and forecasting",
        "Competitor analysis tools",
        "Automated report generation",
        "Real-time notifications",
        "Custom dashboard creation",
        "API for third-party integrations"
      ]
    },
    {
      id: 5,
      title: "Learning Management System",
      category: "EdTech",
      description: "Comprehensive LMS with video streaming, assessments, and progress tracking.",
      longDescription: "Developed a full-featured learning management system for educational institutions. Supports video lectures, interactive quizzes, assignment submissions, grade tracking, and communication tools. Currently serving 10,000+ students across multiple institutions.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS S3", "WebRTC"],
      liveUrl: "https://edulearn-platform.com",
      githubUrl: "https://github.com/johndoe/lms-platform",
      features: [
        "Video lecture streaming",
        "Interactive quiz system",
        "Assignment management",
        "Grade tracking and analytics",
        "Discussion forums",
        "Live video classes",
        "Mobile learning app",
        "Multi-language support"
      ]
    },
    {
      id: 6,
      title: "Cryptocurrency Tracker",
      category: "FinTech",
      description: "Real-time cryptocurrency tracking and portfolio management application.",
      longDescription: "Created a comprehensive cryptocurrency tracking application with real-time price updates, portfolio management, technical analysis tools, and news aggregation. Features advanced charting, alerts, and social trading capabilities.",
      image: "/api/placeholder/600/400",
      technologies: ["React Native", "Node.js", "WebSocket", "MongoDB", "TradingView"],
      liveUrl: "https://crypto-tracker-pro.com",
      githubUrl: "https://github.com/johndoe/crypto-tracker",
      features: [
        "Real-time price tracking",
        "Portfolio management",
        "Technical analysis tools",
        "Price alerts and notifications",
        "News aggregation",
        "Social trading features",
        "Cross-platform mobile app",
        "Advanced charting capabilities"
      ]
    }
  ];

  const categories = ["All", "Full Stack", "Frontend", "Data Visualization", "Data Science", "EdTech", "FinTech"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 section-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="heading-section mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my recent work and the technologies I've used to bring ideas to life
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                  : 'bg-card hover:bg-secondary text-card-foreground border border-border'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className="card-hover group" style={{ animationDelay: `${index * 100}ms` }}>
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                      onClick={() => setSelectedProject(project.id)}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Details
                    </Button>
                    <Button
                      size="sm"
                      className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mt-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-muted-foreground text-xs py-1">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 btn-hero"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {(() => {
                const project = projects.find(p => p.id === selectedProject);
                if (!project) return null;
                
                return (
                  <div className="p-6">
                    {/* Modal Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {project.title}
                        </h3>
                        <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                          {project.category}
                        </span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedProject(null)}
                        className="w-8 h-8 p-0"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>

                    {/* Project Image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover rounded-lg mb-6"
                    />

                    {/* Project Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.longDescription}
                    </p>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {project.features.map((feature, i) => (
                          <div key={i} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <Button className="btn-hero flex-1" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Live Project
                        </a>
                      </Button>
                      <Button variant="outline" className="flex-1" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          View Source Code
                        </a>
                      </Button>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;