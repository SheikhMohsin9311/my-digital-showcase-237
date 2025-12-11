import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-[0.25em] text-primary text-center mb-4">Chapter IV</p>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-center mb-6 italic">
            Correspondence
          </h2>
          <div className="w-24 h-px bg-primary/40 mx-auto mb-8" />
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto leading-relaxed">
            I welcome letters from fellow scholars and collaborators. Let us compose something remarkable together.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card className="p-6 flex items-start gap-4 hover:shadow-card transition-smooth border-primary/10">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0 border border-primary/20">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1 italic">Electronic Post</h3>
                  <p className="text-muted-foreground">your.email@example.com</p>
                </div>
              </Card>
              
              <Card className="p-6 flex items-start gap-4 hover:shadow-card transition-smooth border-primary/10">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0 border border-primary/20">
                  <Send className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1 italic">Telegraph</h3>
                  <p className="text-muted-foreground">@yourusername</p>
                </div>
              </Card>
              
              <Card className="p-6 flex items-start gap-4 hover:shadow-card transition-smooth border-primary/10">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0 border border-primary/20">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1 italic">Place of Study</h3>
                  <p className="text-muted-foreground">The Grand Library, Academia</p>
                </div>
              </Card>
            </div>
            
            <Card className="p-8 shadow-card border-primary/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input 
                    placeholder="Your Distinguished Name" 
                    className="transition-smooth focus:shadow-elegant font-serif"
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Your Electronic Address"
                    className="transition-smooth focus:shadow-elegant font-serif"
                  />
                </div>
                <div>
                  <Input 
                    placeholder="Subject of Inquiry"
                    className="transition-smooth focus:shadow-elegant font-serif"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Compose your message here..." 
                    rows={5}
                    className="transition-smooth focus:shadow-elegant resize-none font-serif"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full shadow-elegant hover:scale-105 transition-smooth font-serif"
                >
                  Dispatch Letter
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
