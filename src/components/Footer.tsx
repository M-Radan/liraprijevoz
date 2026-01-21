import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">LP</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">LIRA PRIJEVOZ</span>
                <span className="text-primary-foreground/60 text-xs">d.o.o. za prijevoz i usluge</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 mb-4 max-w-md">
              Pouzdani partner za cestovni prijevoz robe. Pružamo profesionalne 
              transportne usluge s naglaskom na sigurnost i pravovremenu dostavu.
            </p>
            <div className="flex items-center gap-2">
              <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                Bonitet: AA+
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Brzi linkovi</h4>
            <ul className="space-y-2">
              <li>
                <a href="#usluge" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Usluge
                </a>
              </li>
              <li>
                <a href="#o-nama" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  O nama
                </a>
              </li>
              <li>
                <a href="#kontakt" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+385913811118" className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors">
                  <Phone className="w-4 h-4" />
                  091 381 1118
                </a>
              </li>
              <li>
                <a href="mailto:liraprijevoz@gmail.com" className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors">
                  <Mail className="w-4 h-4" />
                  liraprijevoz@gmail.com
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-primary-foreground/70">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  Dobrinče 76, 21260 Dobrinče
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/10 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <div>
              © {currentYear} LIRA PRIJEVOZ d.o.o. Sva prava pridržana.
            </div>
            <div className="flex items-center gap-4">
              <span>OIB: 79096997996</span>
              <span>•</span>
              <span>MBS: 060452446</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
