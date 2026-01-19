import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Newspaper } from "lucide-react";

const Projects = () => {
  const publications = [
    {
      title: "Education Policy Analysis",
      publication: "Deccan Herald",
      description: "Co-authored article with professor examining education policy frameworks and their implementation challenges.",
      tags: ["Education Policy", "Public Policy", "Research"],
      icon: Newspaper
    },
    {
      title: "Kashmir Poetics",
      publication: "Kashmir Poetics Magazine",
      description: "Written chapters for Kashmir-based literary magazine, exploring cultural narratives and regional perspectives.",
      tags: ["Creative Writing", "Cultural Studies", "Literature"],
      icon: FileText
    }
  ];

  const academicProjects = [
    {
      title: "Atal Tinkering Labs Initiative",
      description: "Coordinated and taught 3D printing techniques to junior students, fostering interest in maker culture and technology.",
      tags: ["Education", "3D Printing", "Leadership"]
    },
    {
      title: "Data Analysis for Educational Impact",
      description: "Analysed book donation records and redistribution patterns at Goonj to quantify educational material utilisation and propose optimisations.",
      tags: ["Data Analysis", "Python", "Social Impact"]
    },
    {
      title: "QA Testing Framework",
      description: "Developed systematic testing approaches for PartyHub platform, including API verification and cross-device compatibility testing.",
      tags: ["QA Testing", "Bug Tracking", "User Experience"]
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-[0.25em] text-primary text-center mb-4">Chapter IV</p>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-center mb-6 italic">
            Selected Works
          </h2>
          <div className="w-24 h-px bg-primary/40 mx-auto mb-8" />
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto leading-relaxed">
            A curated collection of publications and academic endeavors
          </p>
          
          <div className="mb-16">
            <h3 className="text-2xl font-display font-semibold text-center italic mb-8">Publications</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {publications.map((pub, index) => (
                <Card 
                  key={index} 
                  className="p-8 hover:shadow-elegant transition-smooth hover:-translate-y-1 shadow-card border-primary/10"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0 border border-primary/20">
                      <pub.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-display font-semibold italic">{pub.title}</h4>
                      <p className="text-sm text-primary">{pub.publication}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 font-serif">{pub.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {pub.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex}
                        variant="secondary"
                        className="text-xs border border-primary/20"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-display font-semibold text-center italic mb-8">Academic Projects</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {academicProjects.map((project, index) => (
                <Card 
                  key={index} 
                  className="p-6 hover:shadow-elegant transition-smooth hover:-translate-y-1 shadow-card border-primary/10"
                >
                  <h4 className="text-lg font-display font-semibold italic mb-3">{project.title}</h4>
                  <p className="text-muted-foreground text-sm mb-4 font-serif">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex}
                        variant="secondary"
                        className="text-xs border border-primary/20"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
