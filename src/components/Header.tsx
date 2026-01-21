import { Phone, Mail, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#usluge", label: "Usluge" },
    { href: "#o-nama", label: "O nama" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary-foreground/10">
      <div className="container">
        {/* Top bar with contact info */}
        <div className="hidden md:flex items-center justify-end gap-6 py-2 text-sm text-primary-foreground/80 border-b border-primary-foreground/10">
          <a href="tel:+385917812745" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Phone className="w-3.5 h-3.5" />
            091 781 2745
          </a>
          <a href="mailto:liraprijevoz@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Mail className="w-3.5 h-3.5" />
            liraprijevoz@gmail.com
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5" />
            Dobrinče 76, 21260 Dobrinče
          </span>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-lg">LP</span>
            </div>
            <div className="flex flex-col">
              <span className="text-primary-foreground font-bold text-lg leading-tight">LIRA PRIJEVOZ</span>
              <span className="text-primary-foreground/60 text-xs">d.o.o.</span>
            </div>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-primary-foreground/80 hover:text-accent transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-5 py-2.5 rounded-lg font-semibold transition-all button-shadow hover:scale-105"
            >
              Zatražite ponudu
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-primary-foreground p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-primary-foreground/10 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-primary-foreground/80 hover:text-accent transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#kontakt"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-5 py-3 rounded-lg font-semibold transition-all text-center mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Zatražite ponudu
              </a>
              <div className="flex flex-col gap-3 pt-4 border-t border-primary-foreground/10 text-sm text-primary-foreground/70">
                <a href="tel:+385917812745" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" /> 091 781 2745
                </a>
                <a href="mailto:liraprijevoz@gmail.com" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" /> liraprijevoz@gmail.com
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
