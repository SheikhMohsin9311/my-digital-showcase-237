import { Card } from "@/components/ui/card";
import { BookOpen, Feather, Lightbulb, GraduationCap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Full Ride Scholar",
      description: "One of few selected students on full scholarship at FLAME University"
    },
    {
      icon: BookOpen,
      title: "Published Writer",
      description: "Written for Deccan Herald and Kashmir Poetics magazine"
    },
    {
      icon: Lightbulb,
      title: "Dot Slash Club",
      description: "Member of University Coding team, Programming and Hackathons"
    }
  ];

  const education = [
    {
      institution: "FLAME University, Pune",
      degree: "BSc Computer Science and Business Analytics",
      period: "Expected April 2028",
      details: [
        "GPA: 7.4/10",
        "Interdisciplinary coursework in Philosophy and Public Policy",
        "Member of University Coding team, Dot Slash Club"
      ]
    },
    {
      institution: "Jawahar Navodaya Vidyalaya, Kashmir",
      degree: "High School",
      period: "Graduated March 2024",
      details: [
        "Merit-based full ride scholarship",
        "Extracurricular Head",
        "Badminton Team, Debate Team",
        "Atal Tinkering Labs Coordinator"
      ]
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
            A student of Computer Science and Business Analytics, drawn to research through computerisation 
            in something tangible, using data, processes, and algorithms to create a measurable impact.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
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

          <div className="space-y-8">
            <h3 className="text-2xl font-display font-semibold text-center italic mb-8">Education</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <Card key={index} className="p-6 hover:shadow-card transition-smooth border-primary/10">
                  <h4 className="text-lg font-display font-semibold italic text-primary mb-1">{edu.institution}</h4>
                  <p className="font-serif text-foreground mb-1">{edu.degree}</p>
                  <p className="text-sm text-muted-foreground mb-4">{edu.period}</p>
                  <ul className="space-y-2">
                    {edu.details.map((detail, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
