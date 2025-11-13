import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing
          </p>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card className="p-6 flex items-start gap-4 hover:shadow-card transition-smooth">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">your.email@example.com</p>
                </div>
              </Card>
              
              <Card className="p-6 flex items-start gap-4 hover:shadow-card transition-smooth">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </Card>
              
              <Card className="p-6 flex items-start gap-4 hover:shadow-card transition-smooth">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-muted-foreground">San Francisco, CA</p>
                </div>
              </Card>
            </div>
            
            <Card className="p-8 shadow-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input 
                    placeholder="Your Name" 
                    className="transition-smooth focus:shadow-elegant"
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Your Email"
                    className="transition-smooth focus:shadow-elegant"
                  />
                </div>
                <div>
                  <Input 
                    placeholder="Subject"
                    className="transition-smooth focus:shadow-elegant"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Your Message" 
                    rows={5}
                    className="transition-smooth focus:shadow-elegant resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full shadow-elegant hover:scale-105 transition-smooth"
                >
                  Send Message
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
