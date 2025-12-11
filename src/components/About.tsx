import { Card } from "@/components/ui/card";
import { BookOpen, Feather, Lightbulb } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: BookOpen,
      title: "Scholarly Approach",
      description: "Methodical research and elegant solutions"
    },
    {
      icon: Feather,
      title: "Artful Design",
      description: "Beauty in simplicity and purpose"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Where tradition meets modernity"
    }
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-[0.25em] text-primary text-center mb-4">Chapter I</p>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-center mb-6 italic">
            About the Author
          </h2>
          <div className="w-24 h-px bg-primary/40 mx-auto mb-8" />
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto leading-relaxed">
            A devoted scholar of the digital arts, I pursue the craft of programming with the same 
            reverence one might approach classical literature. Each line of code, a verse; 
            each project, a magnum opus in the making.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="p-8 text-center hover:shadow-elegant transition-smooth hover:-translate-y-1 shadow-card border-primary/10"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 border border-primary/20">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3 italic">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
