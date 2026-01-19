import { Card } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "QA Testing Intern",
      company: "PartyHub",
      location: "Remote",
      period: "July 2025 - August 2025",
      description: "A platform connecting users with party venues and event services",
      responsibilities: [
        "Conducted manual testing of user-facing and backend systems to ensure stability and smooth deployment",
        "Developed detailed bug reports and collaborated with developers to improve system reliability and UX",
        "Tested new features under development, verified API responses, and checked cross-device compatibility",
        "Gained hands-on experience in real-world product testing cycles, issue tracking, and iterative release validation"
      ]
    },
    {
      title: "Research and Operations Intern",
      company: "Goonj",
      location: "Delhi",
      period: "May 2025 - June 2025",
      description: "Non-profit working in urban and rural India to address issues of surplus and shortage",
      responsibilities: [
        "Focused on data-driven insights and operational efficiency in education and material reuse verticals",
        "Analysed records related to book donations, usage, and redistribution to study utilisation patterns and system gaps",
        "Created structured datasets and visual summaries to quantify utility and impact of educational material",
        "Proposed process optimisations to improve sorting and reallocation based on empirical findings",
        "Led a team of interns coordinating educational outreach campaigns, aligning field data with on-ground needs"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-[0.25em] text-primary text-center mb-4">Chapter III</p>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-center mb-6 italic">
            Professional Experience
          </h2>
          <div className="w-24 h-px bg-primary/40 mx-auto mb-8" />
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto leading-relaxed">
            Practical endeavors and professional contributions
          </p>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className="p-8 hover:shadow-elegant transition-smooth border-primary/10"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-display font-semibold italic text-primary">{exp.title}</h3>
                    <p className="text-lg font-serif text-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground italic mt-1">{exp.description}</p>
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground md:text-right">
                    <span className="flex items-center gap-2 md:justify-end">
                      <Calendar className="w-4 h-4 text-primary" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-2 md:justify-end">
                      <MapPin className="w-4 h-4 text-primary" />
                      {exp.location}
                    </span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="text-muted-foreground flex items-start gap-3">
                      <span className="text-primary mt-1.5">•</span>
                      <span className="font-serif">{resp}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
