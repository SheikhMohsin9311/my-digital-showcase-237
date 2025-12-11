import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookMarked } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Digital Commerce Archive",
      description: "A comprehensive marketplace platform featuring secure transactions, scholarly authentication, and administrative oversight.",
      tags: ["React", "Node.js", "Stripe", "MongoDB"],
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&h=600&fit=crop"
    },
    {
      title: "Scholarly Task Registry",
      description: "A collaborative endeavor management system with instantaneous correspondence and progress documentation.",
      tags: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=600&fit=crop"
    },
    {
      title: "Personal Compendium",
      description: "An elegant digital presence with refined animations and meticulous attention to performance.",
      tags: ["React", "Vite", "Framer Motion", "CSS"],
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-[0.25em] text-primary text-center mb-4">Chapter III</p>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-center mb-6 italic">
            Selected Works
          </h2>
          <div className="w-24 h-px bg-primary/40 mx-auto mb-8" />
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto leading-relaxed">
            A curated collection of scholarly endeavors and personal manuscripts
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-elegant transition-smooth hover:-translate-y-2 shadow-card group border-primary/10"
              >
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-display font-semibold italic">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="text-xs px-2 py-1 rounded bg-primary/10 text-primary font-serif border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2">
                    <Button size="sm" variant="outline" className="flex-1 font-serif border-primary/30">
                      <BookMarked className="w-4 h-4 mr-2" />
                      Source
                    </Button>
                    <Button size="sm" className="flex-1 font-serif">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
