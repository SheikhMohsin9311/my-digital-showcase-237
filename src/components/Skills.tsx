import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C++", "Python"]
    },
    {
      title: "Data & Analytics",
      skills: ["Data Structures & Algorithms", "Data Analysis", "AWS", "Data Mining", "Algorithmic Thinking", "Theoretical Computer Science"]
    },
    {
      title: "Languages",
      skills: ["English", "Hindi", "Urdu", "Kashmiri"]
    }
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-[0.25em] text-primary text-center mb-4">Chapter II</p>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-center mb-6 italic">
            Areas of Expertise
          </h2>
          <div className="w-24 h-px bg-primary/40 mx-auto mb-8" />
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto leading-relaxed">
            The tools and disciplines refined through dedicated study and practical application
          </p>
          
          <div className="grid md:grid-cols-3 gap-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-2xl font-display font-semibold text-center mb-6 italic">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="px-4 py-2 text-sm font-serif hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default border border-primary/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
