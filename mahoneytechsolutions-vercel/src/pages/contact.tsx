import { Layout } from "@/components/layout/Layout";
import { Tag } from "@/components/ui/tag";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, User, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Form Schema
const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  contact: z.string().min(5, "Phone or Email is required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please provide a brief description"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      contact: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || "Failed to send message.");
      }

      const result = await res.json();
      toast({
        title: "Message Sent!",
        description: result.clientConfirmationSent
          ? "Kylar will follow up shortly. A confirmation has been sent to your email."
          : "Kylar will follow up shortly by phone — remote support available 24/7.",
      });
      form.reset();
    } catch (err) {
      toast({
        title: "Something went wrong",
        description: err instanceof Error ? err.message : "Please try again or call 409-996-3178.",
        variant: "destructive",
      });
    }
  };

  return (
    <Layout>
      {/* HEADER */}
      <section className="bg-rust py-20 px-[5%] border-b-[3px] border-ink">
        <div className="max-w-[1200px] mx-auto text-center md:text-left">
          <Tag variant="white" className="mb-6 border-white/40 text-white/80">Reach Out</Tag>
          <h1 className="font-display text-[clamp(3.5rem,8vw,6rem)] leading-[0.92] tracking-[0.02em] text-white mb-4">
            GET IN<br />TOUCH
          </h1>
          <p className="font-mono text-[0.8rem] text-white/70 tracking-[0.1em] uppercase">
            Call · Text · Or Fill Out The Form Below
          </p>
        </div>
      </section>

      {/* CONTACT LAYOUT */}
      <section className="py-20 px-[5%] max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[2px] bg-line border-2 border-line mb-20 shadow-xl">
          
          {/* Info Side */}
          <div className="bg-bg2 p-8 md:p-12">
            <Tag variant="rust" className="mb-10">Contact Info</Tag>
            
            <div className="flex flex-col gap-6">
              <div className="flex gap-6 items-start pb-6 border-b border-line">
                <div className="w-10 h-10 bg-rust flex items-center justify-center shrink-0 text-white mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-steel mb-1">Phone / Text</div>
                  <div className="font-display text-[1.6rem] tracking-[0.02em] leading-none text-white hover:text-rust transition-colors">
                    <a href="tel:4099963178">409-996-3178</a>
                  </div>
                </div>
              </div>

              <div className="flex gap-6 items-start pb-6 border-b border-line">
                <div className="w-10 h-10 bg-rust flex items-center justify-center shrink-0 text-white mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-steel mb-1">Service Area</div>
                  <div className="font-display text-[1.6rem] tracking-[0.02em] leading-none text-white">
                    Galveston, TX
                  </div>
                </div>
              </div>

              <div className="flex gap-6 items-start pb-6 border-b border-line">
                <div className="w-10 h-10 bg-rust flex items-center justify-center shrink-0 text-white mt-1">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-steel mb-1">Specialist</div>
                  <div className="font-display text-[1.6rem] tracking-[0.02em] leading-none text-white">
                    Kylar Mahoney
                  </div>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-10 h-10 bg-rust flex items-center justify-center shrink-0 text-white mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-steel mb-2">Availability</div>
                  <div className="font-sans font-semibold text-[1.1rem] leading-[1.4] text-white">
                    Remote: 24/7<br />
                    <span className="text-steel font-normal">On-Site: Call Ahead</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-[#070d1a] p-8 md:p-12">
            <Tag className="mb-10 text-rust2 border-rust2">Send a Message</Tag>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-[#888]">Your Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="John Smith" 
                          {...field} 
                          className="bg-[#1a1a1a] border-[#333] text-white placeholder:text-[#555] font-mono text-[0.82rem] h-12 px-4 focus-visible:ring-0 focus-visible:border-rust rounded-none"
                        />
                      </FormControl>
                      <FormMessage className="text-rust2 text-xs" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="contact"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-[#888]">Phone or Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="409-555-0000 or email@example.com" 
                          {...field} 
                          className="bg-[#1a1a1a] border-[#333] text-white placeholder:text-[#555] font-mono text-[0.82rem] h-12 px-4 focus-visible:ring-0 focus-visible:border-rust rounded-none"
                        />
                      </FormControl>
                      <FormMessage className="text-rust2 text-xs" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-[#888]">Service Needed</FormLabel>
                      <FormControl>
                        <select 
                          {...field}
                          className="w-full bg-[#1a1a1a] border border-[#333] text-white font-mono text-[0.82rem] h-12 px-4 focus:outline-none focus:border-rust transition-colors appearance-none rounded-none"
                        >
                          <option value="" disabled hidden>Select a service...</option>
                          <option value="Computer/Laptop">Computer / Laptop Troubleshooting</option>
                          <option value="Network">Wi-Fi & Network Issues</option>
                          <option value="Printer">Printer Setup & Fixes</option>
                          <option value="Software">Software Installation</option>
                          <option value="Email">Email & Account Issues</option>
                          <option value="POS">POS & Office Systems</option>
                          <option value="Cybersecurity">Cybersecurity</option>
                          <option value="Other">Other</option>
                        </select>
                      </FormControl>
                      <FormMessage className="text-rust2 text-xs" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-[#888]">Tell us what's going on</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe your tech issue briefly..." 
                          {...field}
                          className="bg-[#1a1a1a] border-[#333] text-white placeholder:text-[#555] font-sans text-[0.9rem] min-h-[120px] p-4 focus-visible:ring-0 focus-visible:border-rust rounded-none resize-y"
                        />
                      </FormControl>
                      <FormMessage className="text-rust2 text-xs" />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full mt-4 h-14 bg-rust text-white border-2 border-rust hover:bg-rust2 hover:border-rust2 font-mono text-[0.8rem] tracking-[0.15em]"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? "SENDING..." : "SEND MESSAGE →"}
                </Button>

                <p className="font-mono text-[0.6rem] text-[#555] tracking-[0.08em] mt-4 leading-[1.5] text-center">
                  OR JUST CALL / TEXT <a href="tel:4099963178" className="text-[#888] hover:text-white transition-colors">409-996-3178</a> FOR THE FASTEST RESPONSE
                </p>

              </form>
            </Form>

          </div>
        </div>

        {/* Map Placeholder */}
        <div className="bg-[#0a101e] h-[300px] flex items-center justify-center border-2 border-line relative overflow-hidden shadow-lg">
          <div className="map-grid absolute inset-0"></div>
          <div className="text-center relative z-10 p-6 bg-[#2a2a2a]/80 backdrop-blur-sm border border-line/20 shadow-2xl">
            <div className="w-4 h-4 bg-rust rounded-full mx-auto mb-4 animate-ping-slow"></div>
            <p className="font-mono text-[0.75rem] text-white tracking-[0.12em] uppercase font-bold">Galveston, Texas</p>
            <p className="mt-1 font-mono text-[0.65rem] text-[#888] tracking-widest">Serving the Island & Surrounding Areas</p>
          </div>
        </div>

      </section>
    </Layout>
  );
}
