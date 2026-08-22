import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Newspaper, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const Writings = () => {
  const publications = [
    {
      title: "Lost in Instruction",
      publication: "Deccan Herald",
      description:
        "Co-authored article on education policy and technology, examining how policy frameworks meet the realities of classroom implementation.",
      tags: ["Education Policy", "Technology", "Op-Ed"],
      icon: Newspaper,
      link: "https://www.deccanherald.com/opinion/lost-in-instruction-2992854",
      linkLabel: "Read the article"
    },
    {
      title: "Kashmir Poetics",
      publication: "kashmirpoetics.com",
      description:
        "Contributed reflective and literary writing, including a published poem, exploring cultural narratives and regional perspectives.",
      tags: ["Creative Writing", "Poetry", "Cultural Studies"],
      icon: FileText,
      link: "https://kashmirpoetics.com",
      linkLabel: "Visit Kashmir Poetics"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="writings" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-[0.25em] text-primary text-center mb-4">Chapter VI</p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-center mb-6 italic">
              Writing &amp; Publications
            </h2>
            <div className="w-24 h-px bg-primary/40 mx-auto mb-8" />
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto leading-relaxed">
              Essays, articles, and verse committed to print
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {publications.map((pub, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-8 hover:shadow-elegant transition-smooth hover:-translate-y-1 shadow-card border-primary/10 h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0 border border-primary/20">
                      <pub.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-display font-semibold italic">{pub.title}</h4>
                      <p className="text-sm text-primary">{pub.publication}</p>
                    </div>
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={pub.linkLabel}
                      className="text-muted-foreground hover:text-primary transition-smooth"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="text-muted-foreground mb-4 font-serif flex-1">{pub.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {pub.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs border border-primary/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            className="text-center text-muted-foreground font-serif italic mt-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Comfortable synthesizing research material and communicating technical ideas to diverse audiences.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Writings;
