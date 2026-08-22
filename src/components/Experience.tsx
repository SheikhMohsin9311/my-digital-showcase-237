import { Card } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Research Intern (Summer Internship Program) — SSD Systems",
      company: "IIT Ropar",
      location: "Rupnagar, Punjab",
      period: "May 2026 – Present",
      description: "Storage systems research under Prof. Venkata Kalyan Tavva",
      responsibilities: [
        "Learned SSD storage systems from first principles under Prof. Venkata Kalyan Tavva and compared recency- and frequency-based cache eviction strategies in the SimpleSSD-Standalone 2.0 simulator as a foundation for an original performance study",
        "Designed and implemented a spatial prefetching approach that predicts nearby address-translation entries from how data is grouped in flash; found and fixed a cache-order bug that caused newly loaded entries to evict one another before use",
        "Investigated how ransomware write bursts interact with an SSD's internal cleanup process, identified a race that may destroy recoverable data before detection responds, and assessed whether a targeted defense could form a new research contribution"
      ]
    },
    {
      title: "Research — Taraksi (Silver Filigree)",
      company: "Discover India Program (DIP)",
      location: "FLAME University",
      period: "Sept 2025 – April 2026",
      description: "Faculty-facilitated research examining the transition of Taraksi from household craft to commercial practice",
      responsibilities: [
        "Studied, within a 13-member research team, how Taraksi silver filigree moved from a household craft to a commercial practice",
        "Traced the craft's history and technique through literature, then designed field surveys and semi-structured interviews to capture how artisans describe the shift from craft to commerce",
        "Synthesized qualitative findings into academic documentation and cultural analysis"
      ]
    },
    {
      title: "QA Testing Intern",
      company: "PartyHub",
      location: "Remote",
      period: "Jul 2025 – Aug 2025",
      description: "Platform connecting users with party venues and event services",
      responsibilities: [
        "Tested frontend and backend features before release, focusing on edge cases that could break real user flows rather than checking only the happy path",
        "Wrote reproducible bug reports with exact steps and expected-versus-actual behavior, giving developers a clear path from discovery to triage",
        "Checked API responses and cross-device behavior to expose integration issues before release"
      ]
    },
    {
      title: "Research and Operations Intern",
      company: "Goonj",
      location: "Delhi",
      period: "May 2025 – Jul 2025",
      description: "Non-profit addressing issues of surplus and shortage in urban and rural India",
      responsibilities: [
        "Traced donation and redistribution data through the sorting pipeline, isolated stages that created backlog, and built structured datasets and visual summaries to support allocation decisions",
        "Tested data patterns against field-team observations before proposing process changes, separating patterns that reflected real field conditions from patterns caused by incomplete records"
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
