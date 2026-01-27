import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Tools",
      skills: ["Python", "C++", "JavaScript", "SQL", "HTML/CSS", "Git/GitHub", "Linux", "LaTeX", "Markdown"]
    },
    {
      title: "Data & Algorithms",
      skills: ["Data Structures & Algorithms", "Data Analysis", "Data Mining", "Data Visualization", "Statistical Reasoning"]
    },
    {
      title: "Systems",
      skills: ["Systems Programming", "Unix Command Line", "AWS", "Testing & QA Workflows"]
    },
    {
      title: "Soft Skills",
      skills: ["Technical Writing", "Research Communication", "Independent Learning", "Analytical Thinking", "Collaboration"]
    },
    {
      title: "Research Interests",
      skills: ["Operating Systems", "Distributed Systems", "Complexity Theory", "Graph Algorithms", "Computational Social Science", "Digital Governance"]
    },
    {
      title: "Languages",
      skills: ["English", "Hindi", "Urdu", "Kashmiri"]
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
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-[0.25em] text-primary text-center mb-4">Chapter II</p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-center mb-6 italic">
              Areas of Expertise
            </h2>
            <div className="w-24 h-px bg-primary/40 mx-auto mb-8" />
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto leading-relaxed">
              The tools and disciplines refined through dedicated study and practical application
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {skillCategories.map((category, index) => (
              <motion.div key={index} className="space-y-4" variants={itemVariants}>
                <h3 className="text-xl font-display font-semibold text-center mb-4 italic">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="px-3 py-1.5 text-sm font-serif hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default border border-primary/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
