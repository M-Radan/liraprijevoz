import { Truck, Package, Clock, Shield, MapPin, Users } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Cestovni prijevoz",
    description: "Profesionalni prijevoz robe cestovnim putevima diljem Hrvatske i Europe.",
  },
  {
    icon: Package,
    title: "Distribucija robe",
    description: "Sigurna i pravovremena dostava Vaše robe na željenu lokaciju.",
  },
  {
    icon: Clock,
    title: "Ekspresna dostava",
    description: "Hitne pošiljke s garantiranim rokom isporuke.",
  },
  {
    icon: Shield,
    title: "Osigurana roba",
    description: "Potpuna sigurnost Vaše robe tijekom cijelog transporta.",
  },
  {
    icon: MapPin,
    title: "Lokalni prijevoz",
    description: "Pouzdane transportne usluge na području Dalmacije i šire.",
  },
  {
    icon: Users,
    title: "Stručni tim",
    description: "Iskusni vozači i profesionalno osoblje na Vašoj usluzi.",
  },
];

const Services = () => {
  return (
    <section id="usluge" className="py-20 bg-secondary">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Naše usluge
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cjelovita transportna rješenja
          </h2>
          <p className="text-muted-foreground text-lg">
            Pružamo pouzdane i profesionalne usluge cestovnog prijevoza robe, 
            prilagođene upravo Vašim potrebama.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl card-shadow hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
