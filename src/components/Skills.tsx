import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "Figma", "CI/CD"]
    }
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            A diverse toolkit for building modern web applications
          </p>
          
          <div className="grid md:grid-cols-3 gap-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-2xl font-semibold text-center mb-6">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
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
