import { Card } from "@/components/ui/card";
import { BookOpen, Lightbulb, GraduationCap, Users } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Full Ride Scholar",
      description: "Need- and merit-based full ride scholarship at FLAME University — cumulative GPA 7.65/10"
    },
    {
      icon: Lightbulb,
      title: "Systems Researcher",
      description: "SSD cache and prefetching research at IIT Ropar under Prof. Venkata Kalyan Tavva"
    },
    {
      icon: BookOpen,
      title: "Published Writer",
      description: "Co-authored education policy article in Deccan Herald and contributed to Kashmir Poetics"
    },
    {
      icon: Users,
      title: "Karta Initiative Leader",
      description: "Mentored a cohort of 40+ students and coordinated transition programs at FLAME University"
    }
  ];


  const education = [
    {
      institution: "FLAME University, Pune",
      degree: "B.Sc. Computer Science & Business Analytics (Full Ride Scholarship)",
      period: "Aug 2024 – Present · Cumulative GPA: 7.65/10",
      details: [
        "Modeled and verified concurrent and distributed systems with SAT solvers, temporal-logic model checking, and Alloy/TLA+ specifications",
        "Implemented and compared classification and clustering methods, using PCA to test how feature selection affected model behavior",
        "Term paper on globalization and India's LPG-era economic reforms (Public Policy coursework)",
        "Joined Dot Slash Club and completed interdisciplinary projects connecting computer science with Philosophy and Public Policy"
      ]
    },
    {
      institution: "Jawahar Navodaya Vidyalaya, Ganderbal",
      degree: "Senior Secondary Education (Merit Scholarship, Residential)",
      period: "2017 – 2024 · Grades 6–12",
      details: [
        "Led extracurricular activities and coordinated Atal Tinkering Labs; taught junior students to turn ideas into 3D-printed prototypes"
      ]
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
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-[0.25em] text-primary text-center mb-4">Chapter I</p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-center mb-6 italic">
              About the Author
            </h2>
            <div className="w-24 h-px bg-primary/40 mx-auto mb-8" />
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto leading-relaxed">
              Third-year B.Sc. Computer Science and Business Analytics student who builds, tests, and explains
              technical work. At IIT Ropar, I implement and evaluate SSD cache strategies; in operations and QA
              roles, I turn raw data and edge cases into clearer decisions and more reliable releases. I bring
              systems thinking, applied analysis, and careful technical writing to new problems.
            </p>

          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {highlights.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card 
                  className="p-6 text-center hover:shadow-elegant transition-smooth hover:-translate-y-1 shadow-card border-primary/10 h-full"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-5 border border-primary/20">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-display font-semibold mb-2 italic">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-display font-semibold text-center italic mb-8">Education</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 hover:shadow-card transition-smooth border-primary/10 h-full">
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
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
