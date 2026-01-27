import { Card } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Research — Taraksi (Silver Filigree)",
      company: "Discover India Program (DIP)",
      location: "FLAME University",
      period: "Sept 2025 – Present",
      description: "Faculty-facilitated research project examining the transition of Taraksi from traditional craft to commercial practice",
      responsibilities: [
        "Collaborating in a 13-member research project on silver filigree craft traditions",
        "Conducting literature review and secondary research on historical evolution, techniques, and socio-cultural significance",
        "Designing field survey frameworks and preparing semi-structured interview questionnaires",
        "Contributing qualitative insights and analytical notes for academic documentation"
      ]
    },
    {
      title: "QA Testing Intern",
      company: "PartyHub",
      location: "Remote",
      period: "Jul 2025 – Aug 2025",
      description: "Platform connecting users with party venues and event services",
      responsibilities: [
        "Performed systematic testing of frontend and backend features to ensure stability across product releases",
        "Authored detailed bug reports including reproduction steps, edge cases, and expected behavior",
        "Validated API responses, feature integrations, and cross-device compatibility",
        "Gained exposure to real-world QA workflows, release validation, and issue tracking systems"
      ]
    },
    {
      title: "Research and Operations Intern",
      company: "Goonj",
      location: "Delhi",
      period: "May 2025 – Jul 2025",
      description: "Non-profit addressing issues of surplus and shortage in urban and rural India",
      responsibilities: [
        "Analyzed large-scale book donation and redistribution data to identify utilization patterns and operational inefficiencies",
        "Designed structured datasets and visual summaries to quantify program reach, material flow, and impact",
        "Proposed data-backed process improvements for sorting, allocation, and redistribution workflows",
        "Coordinated with field teams and interns to align on-ground observations with operational data"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-[0.25em] text-primary text-center mb-4">Chapter III</p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-center mb-6 italic">
              Professional Experience
            </h2>
            <div className="w-24 h-px bg-primary/40 mx-auto mb-8" />
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto leading-relaxed">
              Practical endeavors and professional contributions
            </p>
          </motion.div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card 
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
