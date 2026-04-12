import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Plus, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What areas do you serve?",
      a: "We're based in Galveston, TX and serve Galveston Island and surrounding areas including Texas City, League City, and the Clear Lake area. Remote support is available anywhere in the US."
    },
    {
      q: "How much does it cost?",
      a: "We charge flat rates per job, not by the hour, so you're never surprised by a bill. After a free initial diagnosis, you'll get a clear, upfront quote before any work begins."
    },
    {
      q: "Do you offer remote support?",
      a: "Yes! Many common software, email, and optimization issues can be fixed entirely remotely. If you can connect to the internet, we can usually help — no matter where you are."
    },
    {
      q: "What if you can't fix it?",
      a: "You pay absolutely nothing. Our no-fix, no-fee guarantee means our diagnostic time is free, and you only pay when your problem is actually solved to your satisfaction."
    },
    {
      q: "Do you work on Macs and PCs?",
      a: "Absolutely. We provide full support for Windows PCs, macOS devices, common Linux systems, as well as smartphones (iOS and Android) and tablets."
    },
    {
      q: "How fast can you respond?",
      a: "For remote support requests, we can often assist same-day. For on-site visits in the Galveston area, we do our best to accommodate urgent requests. Call or text our main line for the fastest scheduling."
    }
  ];

  return (
    <Layout>
      {/* HEADER */}
      <section className="bg-bg2 py-20 px-[5%] border-b-[3px] border-ink">
        <div className="max-w-[1200px] mx-auto text-center md:text-left">
          <h1 className="font-display text-[clamp(3.5rem,8vw,6rem)] leading-[0.92] tracking-[0.02em] text-ink">
            COMMON <span className="text-rust">QUESTIONS</span>
          </h1>
        </div>
      </section>

      {/* FAQ LAYOUT */}
      <section className="py-20 px-[5%] bg-bg">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">
          
          {/* Sticky Sidebar */}
          <div className="lg:sticky lg:top-[100px]">
            <h2 className="font-display text-[2rem] tracking-[0.04em] mb-6 text-ink">
              NEED MORE SPECIFICS?
            </h2>
            <p className="text-[0.88rem] text-steel leading-[1.7] font-light mb-8 max-w-[400px]">
              If your question isn't answered here, don't hesitate to reach out. We're happy to provide custom assessments for unique technical situations.
            </p>
            <div className="p-6 bg-[#070d1a] border-2 border-rust inline-block w-full sm:w-auto">
              <div className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-[#888] mb-2">Fastest Response</div>
              <a href="tel:4099963178" className="font-display text-[2rem] text-white hover:text-rust transition-colors leading-none">
                409-996-3178
              </a>
            </div>
          </div>

          {/* Accordion List */}
          <div className="flex flex-col gap-[1px] bg-line border-2 border-line">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="bg-bg">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className={cn(
                      "w-full text-left px-6 py-6 sm:px-8 sm:py-7 flex justify-between items-center gap-4 transition-colors duration-200",
                      isOpen ? "bg-rust text-white" : "hover:bg-bg2 text-ink"
                    )}
                  >
                    <span className="font-sans font-semibold text-[0.95rem] leading-[1.4] pr-4">
                      {faq.q}
                    </span>
                    <span className="shrink-0 text-rust">
                      {isOpen ? (
                        <X className="w-5 h-5 text-white" />
                      ) : (
                        <Plus className="w-5 h-5" />
                      )}
                    </span>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-2 text-[0.95rem] leading-[1.75] text-steel font-light">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </Layout>
  );
}
