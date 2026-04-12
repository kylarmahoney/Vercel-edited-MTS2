import { Layout } from "@/components/layout/Layout";
import { Tag } from "@/components/ui/tag";

export default function About() {
  return (
    <Layout>
      {/* HEADER / BIO */}
      <section className="bg-bg2 py-20 lg:py-24 px-[5%] border-b-[3px] border-ink">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Photo Block Placeholder */}
          <div className="bg-[#070d1a] h-[280px] sm:h-[350px] lg:h-[420px] flex items-center justify-center relative overflow-hidden border-[3px] border-line shadow-2xl">
            <div className="font-display text-[8rem] sm:text-[12rem] text-white/5 leading-none absolute select-none pointer-events-none">
              KM
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 bg-rust p-4 sm:p-6 border-t-[3px] border-ink">
              <div className="font-display text-[1.4rem] sm:text-[1.6rem] text-white tracking-[0.04em] leading-none">
                KYLAR MAHONEY
              </div>
              <div className="font-mono text-[0.55rem] sm:text-[0.65rem] tracking-[0.15em] uppercase text-white/70 mt-1">
                IT & Cybersecurity Specialist
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <Tag variant="rust" className="mb-6">About Mahoney Tech</Tag>
            <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[0.95] tracking-[0.02em] mb-6 text-ink">
              LOCAL. <span className="text-rust">RELIABLE.</span> HONEST.
            </h1>
            
            <div className="space-y-5 text-[1rem] leading-[1.8] text-steel font-light">
              <p>
                Mahoney Tech Solutions is built on a simple idea: <strong className="text-ink font-semibold">everyone deserves straightforward, honest tech support without the runaround.</strong> Based in Galveston, TX, we serve real people — homeowners, small businesses, and everyone in between.
              </p>
              <p>
                Kylar Mahoney brings hands-on experience across hardware, networking, and cybersecurity — with a focus on actually solving problems instead of just talking about them.
              </p>
              <p>
                No corporate nonsense. No tech jargon. Just real help from a real person who shows up and gets the job done.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-10 pt-8 border-t border-line">
              {["CompTIA A+", "CompTIA Network+", "CompTIA Security+", "Google IT Support"].map(cert => (
                <div key={cert} className="font-mono text-[0.6rem] tracking-[0.12em] uppercase px-3 py-1.5 border border-line text-steel bg-bg2">
                  {cert}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 px-[5%] bg-bg border-b-[3px] border-ink">
        <div className="max-w-[1200px] mx-auto">
          <div className="font-mono text-[0.72rem] tracking-[0.2em] uppercase text-steel mb-12 flex items-center gap-2.5">
            <span className="text-rust font-medium">//</span> Core Values
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2px] bg-line border-2 border-line">
            <div className="bg-bg2 p-8">
              <div className="font-display text-[3rem] text-rust/30 leading-none mb-3">01</div>
              <h3 className="font-sans font-semibold text-[0.95rem] text-white mb-2">Honesty</h3>
              <p className="text-[0.82rem] text-steel leading-[1.6] font-light">
                We tell you exactly what's wrong and what it'll cost upfront. If we can't fix it, you don't pay.
              </p>
            </div>
            
            <div className="bg-bg2 p-8">
              <div className="font-display text-[3rem] text-rust/30 leading-none mb-3">02</div>
              <h3 className="font-sans font-semibold text-[0.95rem] text-white mb-2">Speed</h3>
              <p className="text-[0.82rem] text-steel leading-[1.6] font-light">
                We know downtime is expensive and frustrating. We respond fast and aim to fix issues the same day.
              </p>
            </div>
            
            <div className="bg-bg2 p-8">
              <div className="font-display text-[3rem] text-rust/30 leading-none mb-3">03</div>
              <h3 className="font-sans font-semibold text-[0.95rem] text-white mb-2">Clarity</h3>
              <p className="text-[0.82rem] text-steel leading-[1.6] font-light">
                Plain English only. No unnecessary tech jargon, and absolutely no high-pressure upselling.
              </p>
            </div>
            
            <div className="bg-bg2 p-8">
              <div className="font-display text-[3rem] text-rust/30 leading-none mb-3">04</div>
              <h3 className="font-sans font-semibold text-[0.95rem] text-white mb-2">Local Focus</h3>
              <p className="text-[0.82rem] text-steel leading-[1.6] font-light">
                We're your neighbors. We understand the Galveston area and show up reliably when you need hands-on help.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
