import { Heart, Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    sections: [
      { name: 'Home', href: '#hero' },
      { name: 'About', href: '#about' },
      { name: 'Skills', href: '#skills' },
      { name: 'Education', href: '#education' }
    ],
    work: [
      { name: 'Experience', href: '#experience' },
      { name: 'Projects', href: '#projects' },
      { name: 'Certificates', href: '#certificates' },
      { name: 'Contact', href: '#contact' }
    ],
    social: [
      { name: 'GitHub', href: 'https://github.com/johndoe', icon: Github },
      { name: 'LinkedIn', href: 'https://linkedin.com/in/johndoe', icon: Linkedin },
      { name: 'Twitter', href: 'https://twitter.com/johndoe', icon: Twitter },
      { name: 'Email', href: 'mailto:john.doe@example.com', icon: Mail }
    ]
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(href, '_blank', 'noopener noreferrer');
    }
  };

  return (
    <footer className="bg-gradient-to-t from-card to-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gradient mb-4">
                  John Doe
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-md">
                  Full Stack Developer passionate about creating exceptional digital experiences. 
                  Always learning, always building, always innovating.
                </p>
              </div>
              
              {/* Newsletter Signup */}
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">
                  Stay Updated
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Get notified about new projects and blog posts.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                  />
                  <Button size="sm" className="btn-hero">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">
                Navigation
              </h4>
              <ul className="space-y-3">
                {footerLinks.sections.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Work Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">
                Work
              </h4>
              <ul className="space-y-3">
                {footerLinks.work.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>© {currentYear} John Doe. Made with</span>
              <Heart className="w-4 h-4 text-accent fill-current" />
              <span>using React & Tailwind CSS</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {footerLinks.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  title={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
              
              {/* Scroll to Top Button */}
              <button
                onClick={scrollToTop}
                className="w-9 h-9 bg-gradient-to-r from-primary to-accent text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group ml-2"
                title="Back to top"
              >
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="py-4 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <div className="flex items-center space-x-6">
              <span>Built with modern web technologies</span>
              <span>•</span>
              <span>Optimized for performance</span>
              <span>•</span>
              <span>Mobile-first design</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="hover:text-primary transition-colors">
                Privacy Policy
              </button>
              <span>•</span>
              <button className="hover:text-primary transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;