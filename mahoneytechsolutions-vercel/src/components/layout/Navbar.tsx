import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[500] bg-[#070d1a] flex items-stretch border-b-[3px] border-rust h-[58px]">
      <Link href="/" className="flex items-center gap-3 px-5 border-r border-[#1a2a40] bg-[#070d1a] hover:bg-[#0d1929] transition-colors">
        <img src="/mts_logo.png" alt="MTS Shield" className="h-9 w-9 object-contain shrink-0" />
        <div>
          <div className="font-display text-[1.05rem] tracking-[0.08em] text-white leading-none">MAHONEY TECH</div>
          <div className="font-mono text-[0.48rem] text-rust2/80 tracking-[0.18em] uppercase mt-[3px]">Solutions</div>
        </div>
      </Link>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-stretch list-none ml-auto">
        {links.map((link) => (
          <li key={link.href}>
            <Link 
              href={link.href}
              className={cn(
                "flex items-center h-full px-5 font-mono text-[0.72rem] tracking-[0.1em] uppercase border-l border-[#1a1a1a] transition-colors duration-150",
                location === link.href 
                  ? "text-white bg-[#1a1a1a]" 
                  : "text-[#888] hover:text-white hover:bg-[#1a1a1a]"
              )}
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <a 
            href="tel:4099963178"
            className="flex items-center h-full px-5 font-mono text-[0.72rem] tracking-[0.1em] uppercase text-white bg-rust border-l border-rust2 font-medium hover:bg-rust2 transition-colors duration-150 gap-2"
          >
            <Phone className="w-3 h-3" />
            409-996-3178
          </a>
        </li>
      </ul>

      {/* Mobile Hamburger */}
      <button 
        className="md:hidden flex items-center justify-center w-[58px] ml-auto border-l border-[#2a2a2a] text-white hover:bg-[#1a1a1a] transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[58px] left-0 right-0 bg-[#070d1a] border-b-[3px] border-rust flex flex-col md:hidden shadow-2xl"
          >
            <ul className="flex flex-col list-none w-full">
              {links.map((link) => (
                <li key={link.href} className="w-full">
                  <Link 
                    href={link.href}
                    className={cn(
                      "flex items-center w-full px-6 py-4 font-mono text-[0.72rem] tracking-[0.1em] uppercase border-b border-[#1a1a1a]",
                      location === link.href ? "text-white bg-[#1a1a1a]" : "text-[#888]"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="w-full">
                <a 
                  href="tel:4099963178"
                  className="flex items-center w-full px-6 py-4 font-mono text-[0.72rem] tracking-[0.1em] uppercase text-white bg-rust gap-2"
                >
                  <Phone className="w-3 h-3" />
                  409-996-3178
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
