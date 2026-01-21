import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-truck.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <div className="animate-fade-in">
            <span className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-accent/30">
              Pouzdani partner u prijevozu
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-slide-up">
            Cestovni prijevoz robe{" "}
            <span className="text-gradient">sigurno i na vrijeme</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
            LIRA PRIJEVOZ d.o.o. pruža profesionalne usluge cestovnog prijevoza robe. 
            Vaša roba je naša odgovornost - pouzdano, brzo i sigurno.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all button-shadow hover:scale-105 group"
            >
              Zatražite ponudu
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+385917812745"
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all border border-primary-foreground/20"
            >
              Nazovite nas
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-primary-foreground/20 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          {[
            { value: "2022", label: "Godina osnivanja" },
            { value: "4+", label: "Zaposlenika" },
            { value: "AA+", label: "Bonitetna ocjena" },
            { value: "24/7", label: "Dostupnost" },
          ].map((stat, index) => (
            <div key={index} className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-1">{stat.value}</div>
              <div className="text-primary-foreground/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
