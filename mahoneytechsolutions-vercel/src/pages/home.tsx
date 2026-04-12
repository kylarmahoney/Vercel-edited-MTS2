import { useEffect, useRef, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";

export default function Home() {
  const [, setLocation] = useLocation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoPlaying, setVideoPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onPlaying = () => setVideoPlaying(true);
    video.addEventListener("playing", onPlaying);

    const tryPlay = () => {
      video.muted = true;
      video.play().then(() => setVideoPlaying(true)).catch(() => {});
    };

    tryPlay();
    video.addEventListener("canplay", tryPlay, { once: true });
    video.addEventListener("loadedmetadata", tryPlay, { once: true });

    const onTouch = () => {
      tryPlay();
      document.removeEventListener("touchstart", onTouch);
    };
    document.addEventListener("touchstart", onTouch);

    return () => {
      video.removeEventListener("playing", onPlaying);
      video.removeEventListener("canplay", tryPlay);
      video.removeEventListener("loadedmetadata", tryPlay);
      document.removeEventListener("touchstart", onTouch);
    };
  }, []);

  const handleServicesClick = () => {
    setLocation("/services");
  };

  return (
    <Layout>
      {/* HERO SECTION — full-screen video background */}
      <section className="relative min-h-[calc(100vh-58px)] flex flex-col justify-between overflow-hidden border-b-[3px] border-rust">

        {/* Static poster image — always visible, no play button ever */}
        <img
          src="/hero-poster.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Video — completely hidden until confirmed playing */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
          className="hero-bg absolute inset-0 w-full h-full object-cover z-[1] transition-opacity duration-1000"
          style={{ opacity: videoPlaying ? 1 : 0, pointerEvents: "none" }}
        >
          <source src="/galveston_beach_hero.mp4" type="video/mp4" />
        </video>

        {/* Dark gradient overlay — navy-heavy to match brand */}
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#0d1929]/90 via-[#0d1929]/75 to-[#142338]/60" />
        {/* Bottom fade for stat bar */}
        <div className="absolute bottom-0 left-0 right-0 h-48 z-10 bg-gradient-to-t from-[#0d1929] to-transparent" />

        {/* Hero Content */}
        <div className="relative z-20 flex-1 flex flex-col justify-center px-[6%] pt-16 pb-8 max-w-[860px]">

          <div className="font-mono text-[0.72rem] tracking-[0.22em] uppercase text-rust2 mb-7 flex items-center gap-2.5">
            <span className="text-rust font-medium">//</span> Galveston, TX &amp; Surrounding Areas
          </div>

          <h1 className="font-display text-[clamp(3.8rem,9vw,8rem)] leading-[0.9] tracking-[0.02em] mb-7 text-white drop-shadow-lg">
            IT &amp; <span className="text-rust2">CYBER</span>
            <br />SECURITY
          </h1>

          <p className="text-[1.1rem] leading-[1.75] text-ink2 font-light max-w-[480px] mb-10 drop-shadow">
            Fast, reliable tech support for individuals and small businesses in Galveston and surrounding areas. On-site visits or remote help — available when you need it.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button onClick={() => window.location.href = "tel:4099963178"} size="lg">
              Call Now
            </Button>
            <Button variant="outline" size="lg" onClick={handleServicesClick}>
              Our Services
            </Button>
          </div>
        </div>

        {/* Stats bar — sits above the bottom fade */}
        <div className="relative z-20 grid grid-cols-2 sm:grid-cols-4 border-t border-white/10">
          {[
            { value: "7+", label: "Services Offered" },
            { value: "24/7", label: "Remote Support" },
            { value: "TX", label: "Galveston Based" },
            { value: "1:1", label: "Personal Service" },
          ].map((stat) => (
            <div
              key={stat.value}
              className="p-6 lg:p-8 bg-[#0d1929]/70 backdrop-blur-sm border-r border-white/10 last:border-r-0"
            >
              <div className="font-display text-[2.8rem] lg:text-[3.5rem] text-rust2 leading-none mb-1">
                {stat.value}
              </div>
              <div className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-steel">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES STRIP */}
      <section className="bg-bg2 py-20 border-b-[3px] border-rust">
        <div className="max-w-[1200px] mx-auto px-[5%]">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 border-b border-line pb-6 gap-4">
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] text-ink tracking-[0.03em] leading-none">
              WHAT WE FIX
            </h2>
            <Link
              href="/services"
              className="font-mono text-[0.7rem] tracking-[0.15em] uppercase text-rust no-underline border-b border-rust pb-[2px] hover:text-rust2 hover:border-rust2 transition-colors"
            >
              View All Services →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-line">
            {[
              { num: "01", name: "Computer & Laptop Troubleshooting" },
              { num: "02", name: "Wi-Fi & Network Issues" },
              { num: "03", name: "Printer Setup & Fixes" },
              { num: "04", name: "Software Install & Config" },
              { num: "05", name: "Email & Account Issues" },
              { num: "06", name: "POS & Office Systems" },
              { num: "07", name: "On-Site or Remote Help" },
              { num: "08", name: "Cybersecurity & Protection" },
            ].map((svc) => (
              <div
                key={svc.num}
                onClick={handleServicesClick}
                className="bg-bg p-7 cursor-pointer hover:bg-bg2 transition-colors group"
              >
                <div className="font-mono text-[0.6rem] text-rust tracking-[0.15em] mb-4 group-hover:text-rust2 transition-colors">
                  {svc.num} ——
                </div>
                <div className="font-sans font-semibold text-[0.88rem] text-ink leading-[1.4]">
                  {svc.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-rust py-16 px-[5%] border-b-[3px] border-bg">
        <div className="max-w-[1200px] w-full mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="font-display text-[clamp(2rem,4vw,3.5rem)] text-white tracking-[0.02em] leading-none">
              TECH PROBLEMS?<br />WE FIX THEM.
            </div>
            <div className="font-mono text-[0.75rem] text-white/70 tracking-[0.12em] uppercase mt-2">
              On-Site · Remote · Same-Day Available
            </div>
          </div>
          <Button variant="white" size="lg" onClick={() => window.location.href = "tel:4099963178"}>
            Call 409-996-3178
          </Button>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-bg border-b-[3px] border-line">
        <div className="max-w-[1200px] mx-auto px-[5%]">
          <div className="font-mono text-[0.72rem] tracking-[0.2em] uppercase text-steel flex items-center gap-2.5 mb-12">
            <span className="text-rust font-medium">//</span> Real Client Stories
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-line">
            {[
              {
                quote: "Kylar fixed my computer in under an hour. Super professional, fair price. Will definitely call again.",
                name: "Sandra R.",
                role: "Galveston Resident",
              },
              {
                quote: "Saved our business. Our POS system crashed before a busy weekend and Kylar had it running the same day.",
                name: "Marco T.",
                role: "Restaurant Owner",
              },
              {
                quote: "Finally someone who explains things in plain English. Set up our whole office network without any hassle.",
                name: "Denise W.",
                role: "Small Business Owner",
              },
            ].map((t) => (
              <div key={t.name} className="bg-bg2 p-10 hover:bg-bg transition-colors">
                <p className="text-[1rem] leading-[1.7] font-light italic text-ink2 mb-6">
                  <span className="font-display text-[3rem] text-rust leading-[0] align-[-0.8rem] mr-1">"</span>
                  {t.quote}
                </p>
                <div className="font-mono text-[0.7rem] tracking-[0.12em] uppercase text-steel">{t.name}</div>
                <div className="font-mono text-[0.65rem] text-steel/70 mt-1">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
