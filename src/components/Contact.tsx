import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Linkedin } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please provide your distinguished name").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please provide a valid electronic address").max(255, "Email must be less than 255 characters"),
  subject: z.string().trim().min(1, "Please provide a subject of inquiry").max(200, "Subject must be less than 200 characters"),
  message: z.string().trim().min(10, "Your message should be at least 10 characters").max(2000, "Message must be less than 2000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    // Create mailto link with form data
    const mailtoLink = `mailto:sheikh.mohsin@flame.edu.in?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(
      `From: ${data.name}\nEmail: ${data.email}\n\n${data.message}`
    )}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success toast
    toast({
      title: "Letter Prepared",
      description: "Your email client has been opened with your message. Please send the email to complete your correspondence.",
    });
    
    // Reset form after submission
    form.reset();
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-[0.25em] text-primary text-center mb-4">Chapter V</p>
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
                  <a href="mailto:sheikh.mohsin@flame.edu.in" className="text-muted-foreground hover:text-primary transition-smooth">
                    sheikh.mohsin@flame.edu.in
                  </a>
                </div>
              </Card>
              
              <Card className="p-6 flex items-start gap-4 hover:shadow-card transition-smooth border-primary/10">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0 border border-primary/20">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1 italic">Telephone</h3>
                  <a href="tel:+916005277810" className="text-muted-foreground hover:text-primary transition-smooth">
                    +91 6005277810
                  </a>
                </div>
              </Card>
              
              <Card className="p-6 flex items-start gap-4 hover:shadow-card transition-smooth border-primary/10">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0 border border-primary/20">
                  <Linkedin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1 italic">LinkedIn</h3>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    View Profile
                  </a>
                </div>
              </Card>
              
              <Card className="p-6 flex items-start gap-4 hover:shadow-card transition-smooth border-primary/10">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0 border border-primary/20">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1 italic">Place of Study</h3>
                  <p className="text-muted-foreground">FLAME University, Pune, Maharashtra, India</p>
                </div>
              </Card>
            </div>
            
            <Card className="p-8 shadow-card border-primary/10">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input 
                            placeholder="Your Distinguished Name" 
                            className="transition-smooth focus:shadow-elegant font-serif"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="font-serif text-sm" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="Your Electronic Address"
                            className="transition-smooth focus:shadow-elegant font-serif"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="font-serif text-sm" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input 
                            placeholder="Subject of Inquiry"
                            className="transition-smooth focus:shadow-elegant font-serif"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="font-serif text-sm" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea 
                            placeholder="Compose your message here..." 
                            rows={5}
                            className="transition-smooth focus:shadow-elegant resize-none font-serif"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="font-serif text-sm" />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    className="w-full shadow-elegant hover:scale-105 transition-smooth font-serif"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? "Preparing..." : "Dispatch Letter"}
                  </Button>
                </form>
              </Form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
