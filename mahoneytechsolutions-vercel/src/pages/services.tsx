import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

export default function Services() {
  const servicesList = [
    { num: "01", title: "Computer & Laptop Troubleshooting", desc: "Slow performance, crashes, viruses, hardware failures, and general tune-ups.", tags: ["Hardware", "Software"] },
    { num: "02", title: "Wi-Fi & Network Issues", desc: "Router setup, dead zones, slow speeds, and whole-home or office networking.", tags: ["Networking", "Security"] },
    { num: "03", title: "Printer Setup & Fixes", desc: "Wireless printing, driver installation, and frustrating connectivity issues.", tags: ["Hardware", "Peripherals"] },
    { num: "04", title: "Software & Updates", desc: "Installation, system updates, driver updates, and application troubleshooting.", tags: ["Software", "OS"] },
    { num: "05", title: "Email & Account Help", desc: "Setup, recovery, and security for Gmail, Outlook, Apple Mail, and more.", tags: ["Cloud", "Security"] },
    { num: "06", title: "POS & Office Systems", desc: "Point-of-sale setup, maintenance, and troubleshooting for small business tech.", tags: ["Commercial", "Support"] },
    { num: "07", title: "Cybersecurity", desc: "Malware removal, antivirus setup, password security, and basic threat assessments.", tags: ["Security", "Protection"] },
  ];

  return (
    <Layout>
      {/* HEADER */}
      <section className="bg-[#070d1a] py-20 px-[5%] border-b-[3px] border-rust">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="font-display text-[clamp(3.5rem,8vw,7rem)] leading-[0.92] tracking-[0.02em] mb-6 text-white">
            OUR <span className="text-rust">SERVICES</span>
          </h1>
          <p className="text-[1rem] text-[#888] font-light max-w-[500px] leading-[1.7] font-mono">
            Comprehensive tech support tailored to your needs. If it connects to the internet or has a screen, we can probably fix it.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 px-[5%] bg-bg">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-line border-2 border-line">
            {servicesList.map((svc) => (
              <div key={svc.num} className="bg-bg2 p-10 hover:-translate-y-1 transition-transform duration-200 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-0 bg-rust group-hover:h-full transition-all duration-300"></div>
                
                <div className="font-mono text-[0.65rem] text-rust tracking-[0.2em] mb-4">
                  {svc.num} ——
                </div>
                <h3 className="font-display text-[1.6rem] tracking-[0.03em] mb-3 leading-[1.1] text-ink">
                  {svc.title}
                </h3>
                <p className="text-[0.9rem] leading-[1.7] text-steel font-light mb-6">
                  {svc.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {svc.tags.map(tag => (
                    <span key={tag} className="inline-flex font-mono text-[0.6rem] tracking-[0.15em] uppercase text-rust border border-rust/30 px-2 py-1 bg-rust/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            
            {/* CTA Box filling empty grid spot */}
            <div className="bg-[#070d1a] p-10 flex flex-col justify-center items-start text-white col-span-1 md:col-span-2 lg:col-span-2">
              <h3 className="font-display text-[2rem] tracking-[0.03em] mb-3 leading-[1.1]">
                DON'T SEE YOUR PROBLEM?
              </h3>
              <p className="text-[0.9rem] leading-[1.7] text-[#888] font-light mb-8 max-w-[400px]">
                These are just our most common services. Reach out with your specific issue and we'll let you know if we can help.
              </p>
              <Button onClick={() => window.location.href = "/contact"}>
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING BAND */}
      <section className="bg-[#070d1a] py-20 px-[5%] border-t-[3px] border-rust border-b-[3px] border-bg">
        <div className="max-w-[1200px] mx-auto">
          <div className="font-mono text-[0.72rem] tracking-[0.2em] uppercase text-[#888] mb-12 flex items-center gap-2.5">
            <span className="text-rust font-medium">//</span> Transparent Pricing
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[1px] bg-[#2a2a2a]">
            
            {/* Tier 1 */}
            <div className="bg-[#141414] p-10">
              <div className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-[#888] mb-4">Diagnostic</div>
              <div className="font-display text-[3rem] text-white leading-none mb-1">$0</div>
              <div className="font-mono text-[0.65rem] text-[#666] mb-8">Pay only if we fix it</div>
              
              <ul className="list-none m-0 p-0 space-y-3">
                {["Initial assessment", "Remote diagnosis", "No-fix no-fee guarantee", "Travel fee may apply for on-site"].map(feature => (
                  <li key={feature} className="flex items-start gap-2 text-[0.85rem] text-[#aaa] font-light pb-3 border-b border-[#1e1e1e]">
                    <span className="text-rust shrink-0">→</span> {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tier 2 (Featured) */}
            <div className="bg-rust p-10 transform scale-100 lg:scale-[1.02] shadow-2xl relative z-10">
              <div className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-white/70 mb-4">Standard Service</div>
              <div className="font-display text-[3rem] text-white leading-none mb-1">Per Job</div>
              <div className="font-mono text-[0.65rem] text-white/60 mb-8">Custom quote upfront</div>
              
              <ul className="list-none m-0 p-0 space-y-3">
                {["All service types", "On-site or remote", "Same-day when available", "Transparent flat-rate pricing"].map(feature => (
                  <li key={feature} className="flex items-start gap-2 text-[0.85rem] text-white/90 font-light pb-3 border-b border-white/15">
                    <span className="text-white font-bold shrink-0">→</span> {feature}
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-4">
                <Button variant="white" className="w-full" onClick={() => window.location.href = "/contact"}>Request Quote</Button>
              </div>
            </div>

            {/* Tier 3 */}
            <div className="bg-[#141414] p-10">
              <div className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-[#888] mb-4">Retainer</div>
              <div className="font-display text-[3rem] text-white leading-none mb-1">Monthly</div>
              <div className="font-mono text-[0.65rem] text-[#666] mb-8">For small businesses</div>
              
              <ul className="list-none m-0 p-0 space-y-3">
                {["Priority response", "Regular system check-ins", "Ongoing maintenance", "Network monitoring"].map(feature => (
                  <li key={feature} className="flex items-start gap-2 text-[0.85rem] text-[#aaa] font-light pb-3 border-b border-[#1e1e1e]">
                    <span className="text-rust shrink-0">→</span> {feature}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

    </Layout>
  );
}
