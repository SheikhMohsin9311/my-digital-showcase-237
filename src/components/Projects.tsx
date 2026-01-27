import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Newspaper, Code, BarChart3, Globe, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  const publications = [
    {
      title: "Lost in Instruction",
      publication: "Deccan Herald",
      description: "Co-authored faculty-collaborative article examining education policy and technology frameworks and their implementation challenges.",
      tags: ["Education Policy", "Technology", "Research"],
      icon: Newspaper
    },
    {
      title: "Kashmir Poetics",
      publication: "kashmirpoetics.com",
      description: "Contributed reflective and literary writing exploring cultural narratives, regional perspectives, and Kashmir's literary heritage.",
      tags: ["Creative Writing", "Cultural Studies", "Literature"],
      icon: FileText
    }
  ];

  const technicalProjects = [
    {
      title: "Personal Website & Portfolio",
      description: "Designed and developed a responsive personal website from scratch and deployed on Vercel. Used as a sandbox for experimenting with frontend architecture, deployment workflows, and iterative design.",
      tags: ["HTML", "CSS", "JavaScript", "Vercel", "Node.js"],
      icon: Globe,
      link: "https://github.com/SheikhMohsin9311"
    },
    {
      title: "Python Automation Tools",
      description: "Built Python scripts to automate data processing, file organization, and repetitive workflows. Implemented data cleaning pipelines and basic report generation for academic and personal use cases.",
      tags: ["Python", "Automation", "Data Processing"],
      icon: Code,
      link: "https://github.com/SheikhMohsin9311"
    },
    {
      title: "Data Analysis Projects",
      description: "Conducted exploratory data analysis on public datasets to examine socio-economic and educational trends. Applied visualization and statistical reasoning to extract interpretable insights from raw data.",
      tags: ["Python", "Pandas", "Matplotlib", "Data Visualization"],
      icon: BarChart3
    }
  ];

  const academicProjects = [
    {
      title: "Atal Tinkering Labs Initiative",
      description: "Coordinated and taught 3D printing techniques and prototyping fundamentals to junior students, fostering interest in maker culture and technology.",
      tags: ["Education", "3D Printing", "Leadership", "Mentoring"]
    },
    {
      title: "Data Analysis for Educational Impact",
      description: "Analysed book donation records and redistribution patterns at Goonj to quantify educational material utilisation and propose data-backed optimisations.",
      tags: ["Data Analysis", "Python", "Social Impact", "Research"]
    },
    {
      title: "QA Testing Framework",
      description: "Developed systematic testing approaches for PartyHub platform, including API verification, bug documentation, and cross-device compatibility testing.",
      tags: ["QA Testing", "Bug Tracking", "User Experience", "API Testing"]
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
              A curated collection of publications, technical projects, and academic endeavors
            </p>
          </motion.div>
          
          {/* Publications */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-display font-semibold text-center italic mb-8">Publications</h3>
            <motion.div 
              className="grid md:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {publications.map((pub, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card 
                    className="p-8 hover:shadow-elegant transition-smooth hover:-translate-y-1 shadow-card border-primary/10 h-full"
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
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Technical Projects */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-display font-semibold text-center italic mb-8">Technical Projects</h3>
            <motion.div 
              className="grid md:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {technicalProjects.map((project, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card 
                    className="p-6 hover:shadow-elegant transition-smooth hover:-translate-y-1 shadow-card border-primary/10 h-full flex flex-col"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 flex-shrink-0 border border-primary/20">
                        <project.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-display font-semibold italic">{project.title}</h4>
                      </div>
                      {project.link && (
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-smooth"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
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
          </motion.div>

          {/* Academic Projects */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-display font-semibold text-center italic mb-8">Academic Projects</h3>
            <motion.div 
              className="grid md:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {academicProjects.map((project, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card 
                    className="p-6 hover:shadow-elegant transition-smooth hover:-translate-y-1 shadow-card border-primary/10 h-full"
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
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
