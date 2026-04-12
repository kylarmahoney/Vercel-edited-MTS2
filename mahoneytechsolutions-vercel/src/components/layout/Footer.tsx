import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-[#070d1a] border-t-[3px] border-rust pt-16 px-[5%] pb-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 md:gap-16 pb-12 border-b border-[#2a2a2a] mb-8">
          <div>
            <div className="flex items-center gap-4 mb-3">
              <img src="/mts_logo.png" alt="MTS Shield" className="h-12 w-12 object-contain" />
              <div className="font-display text-[1.8rem] text-white tracking-[0.05em] leading-none">
                MAHONEY TECH<br /><span className="text-rust2 text-[1.2rem]">SOLUTIONS</span>
              </div>
            </div>
            <div className="text-[0.85rem] text-[#666] leading-[1.6] font-light max-w-[280px]">
              IT & Cybersecurity solutions for individuals and small businesses. Galveston, TX and surrounding areas.
            </div>
          </div>
          
          <div>
            <div className="font-mono text-[0.62rem] tracking-[0.2em] uppercase text-rust mb-[1.2rem]">
              Pages
            </div>
            <ul className="flex flex-col gap-[0.6rem] list-none">
              <li><Link href="/" className="text-[#666] text-[0.85rem] font-light hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-[#666] text-[0.85rem] font-light hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/about" className="text-[#666] text-[0.85rem] font-light hover:text-white transition-colors">About</Link></li>
              <li><Link href="/faq" className="text-[#666] text-[0.85rem] font-light hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="text-[#666] text-[0.85rem] font-light hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <div className="font-mono text-[0.62rem] tracking-[0.2em] uppercase text-rust mb-[1.2rem]">
              Contact
            </div>
            <ul className="flex flex-col gap-[0.6rem] list-none text-[#666] text-[0.85rem] font-light">
              <li><a href="tel:4099963178" className="hover:text-white transition-colors">409-996-3178</a></li>
              <li>Galveston, TX</li>
              <li>On-Site & Remote</li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="font-mono text-[0.65rem] text-[#444] tracking-[0.08em]">
            © {new Date().getFullYear()} MAHONEY TECH SOLUTIONS · GALVESTON, TX
          </div>
          <div className="font-display text-[1.4rem] text-rust tracking-[0.05em] hover:text-rust2 transition-colors">
            <a href="tel:4099963178">409-996-3178</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
