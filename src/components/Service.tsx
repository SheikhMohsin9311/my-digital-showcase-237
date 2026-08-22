import { Card } from "@/components/ui/card";
import { Calendar, Users } from "lucide-react";
import { motion } from "framer-motion";

const Service = () => {
  const roles = [
    {
      title: "University Leader",
      organisation: "FLAME University — Karta Initiative",
      period: "Aug 2024 – Present",
      responsibilities: [
        "Coordinated student transition and orientation programs for incoming cohorts",
        "Ran weekly mentoring check-ins, providing academic guidance and peer support to a cohort of more than 40 students"
      ]
    }
  ];

  return (
    <section id="service" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-[0.25em] text-primary text-center mb-4">Chapter V</p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-center mb-6 italic">
              Leadership &amp; Service
            </h2>
            <div className="w-24 h-px bg-primary/40 mx-auto mb-8" />
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto leading-relaxed">
              Time given to the community of scholars
            </p>
          </motion.div>

          <div className="space-y-8">
            {roles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 hover:shadow-elegant transition-smooth border-primary/10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0 border border-primary/20">
                        <Users className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-display font-semibold italic text-primary">{role.title}</h3>
                        <p className="text-lg font-serif text-foreground">{role.organisation}</p>
                      </div>
                    </div>
                    <span className="flex items-center gap-2 text-sm text-muted-foreground md:justify-end">
                      <Calendar className="w-4 h-4 text-primary" />
                      {role.period}
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {role.responsibilities.map((item, i) => (
                      <li key={i} className="text-muted-foreground flex items-start gap-3">
                        <span className="text-primary mt-1.5">•</span>
                        <span className="font-serif">{item}</span>
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

export default Service;
