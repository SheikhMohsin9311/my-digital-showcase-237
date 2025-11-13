import { Card } from "@/components/ui/card";
import { Code2, Palette, Rocket } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable solutions"
    },
    {
      icon: Palette,
      title: "Design First",
      description: "Creating beautiful user experiences"
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimized for speed and efficiency"
    }
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            I'm a passionate developer who loves turning ideas into reality through code.
            With a focus on modern web technologies and user-centric design, I create
            digital experiences that are both beautiful and functional.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="p-8 text-center hover:shadow-elegant transition-smooth hover:-translate-y-1 shadow-card"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
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
