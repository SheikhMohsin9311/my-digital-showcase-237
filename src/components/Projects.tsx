import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, BarChart3, Globe, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  const technicalProjects = [
    {
      title: "Cache Performance Benchmark Suite",
      period: "May 2026",
      stack: "C++, perf_event_open, RDTSCP",
      description:
        "Built a benchmarking harness that measured hardware clock-cycle costs across 16 data structures, using performance counters to isolate machine-level behavior from wall-clock noise. Compared contiguous (array-of-structs / struct-of-arrays) and pointer-based layouts across access patterns and data sizes, then automated collection, CSV export, and Chart.js visualization to make the results reproducible.",
      tags: ["C++", "perf_event_open", "RDTSCP", "Chart.js", "Benchmarking"],
      icon: Code,
      link: "https://github.com/SheikhMohsin9311/Performance-and-Data-Representation",
      linkLabel: "Repository"
    },
    {
      title: "IPL Data Mining",
      period: "April 2026",
      stack: "Python, Data Analysis, Data Visualization",
      description:
        "Cleaned and explored IPL data to compare team and player patterns, turning match records into findings that could be inspected through visual summaries. Built a repeatable analysis workflow in Python, separating data preparation from interpretation so conclusions could be checked against the underlying records.",
      tags: ["Python", "Data Mining", "Data Visualization", "Pandas"],
      icon: BarChart3,
      link: "https://github.com/SheikhMohsin9311/IPL---Data-Mining",
      linkLabel: "Repository"
    },
    {
      title: "Personal Website & Portfolio",
      period: "2025 – Present",
      stack: "HTML, CSS, JavaScript, Vercel",
      description:
        "Designed and built a responsive personal website from scratch to present projects, research, and writing in one place. Deployed the site through GitHub and Vercel and kept the structure focused on making technical work easy to find and inspect.",
      tags: ["HTML", "CSS", "JavaScript", "Vercel", "GitHub"],
      icon: Globe,
      link: "https://sheikh-mohsin.github.io",
      linkLabel: "Website"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-[0.25em] text-primary text-center mb-4">Chapter IV</p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-center mb-6 italic">
              Selected Works
            </h2>
            <div className="w-24 h-px bg-primary/40 mx-auto mb-8" />
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto leading-relaxed">
              A curated collection of technical projects, built to be measured, repeated, and inspected
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {technicalProjects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-6 hover:shadow-elegant transition-smooth hover:-translate-y-1 shadow-card border-primary/10 h-full flex flex-col">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 flex-shrink-0 border border-primary/20">
                      <project.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-display font-semibold italic">{project.title}</h4>
                      <p className="text-xs text-muted-foreground">{project.period}</p>
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} — ${project.linkLabel}`}
                      className="text-muted-foreground hover:text-primary transition-smooth"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="text-sm text-primary/80 italic mb-3 font-serif">{project.stack}</p>
                  <p className="text-muted-foreground text-sm mb-4 font-serif flex-1">{project.description}</p>
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
