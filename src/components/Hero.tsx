import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";
import { motion } from "framer-motion";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23c9a962" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Profile Photo */}
          <motion.div 
            className="relative inline-block"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/30 shadow-elegant mx-auto relative">
              <img 
                src={profileImage} 
                alt="Sheikh Mohsin" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Decorative frame corners */}
            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-primary/50" />
            <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-primary/50" />
            <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-primary/50" />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-primary/50" />
          </motion.div>
          
          <motion.p 
            className="text-sm uppercase tracking-[0.3em] text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Welcome to my portfolio
          </motion.p>
          <motion.h1 
            className="text-5xl md:text-7xl font-display font-semibold tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className="italic">Sheikh</span> Mohsin
          </motion.h1>
          <motion.div 
            className="w-24 h-px bg-primary/50 mx-auto"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          />
          <motion.p 
            className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto font-serif italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            "Understanding how technology can reduce inefficiencies, enhance accessibility, and solve problems that matter"
          </motion.p>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Computer Science & Business Analytics Student at FLAME University, Pune
          </motion.p>
          
          <motion.div 
            className="flex gap-4 justify-center flex-wrap pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Button 
              size="lg" 
              className="shadow-elegant hover:scale-105 transition-smooth font-serif text-base px-8 min-w-[160px]"
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="hover:bg-accent transition-smooth font-serif text-base px-8 border-primary/30 min-w-[160px]"
              asChild
            >
              <a href="/Sheikh_Mohsin_CV.pdf" download="Sheikh_Mohsin_CV.pdf">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="ghost"
              className="hover:bg-accent transition-smooth font-serif text-base px-8 min-w-[160px]"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Correspondence
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.button 
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-label="Scroll to about section"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ArrowDown className="w-6 h-6 text-primary" />
      </motion.button>
    </section>
  );
};

export default Hero;
