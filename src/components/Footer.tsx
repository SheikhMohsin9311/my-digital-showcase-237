import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground">
                © 2025 Your Name. All rights reserved.
              </p>
            </div>
            
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:text-primary hover:bg-primary/10 transition-smooth"
                >
                  <a 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
