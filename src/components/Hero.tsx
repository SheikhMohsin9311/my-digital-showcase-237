import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23c9a962" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Welcome to my portfolio</p>
          <h1 className="text-5xl md:text-7xl font-display font-semibold tracking-tight leading-tight">
            <span className="italic">Sheikh</span> Mohsin
          </h1>
          <div className="w-24 h-px bg-primary/50 mx-auto" />
          <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto font-serif italic">
            "Understanding how technology can reduce inefficiencies, enhance accessibility, and solve problems that matter"
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Computer Science & Business Analytics Student at FLAME University, Pune
          </p>
          
          <div className="flex gap-6 justify-center flex-wrap pt-6">
            <Button 
              size="lg" 
              className="shadow-elegant hover:scale-105 transition-smooth font-serif text-base px-8"
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="hover:bg-accent transition-smooth font-serif text-base px-8 border-primary/30"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Correspondence
            </Button>
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="w-6 h-6 text-primary" />
      </button>
    </section>
  );
};

export default Hero;
