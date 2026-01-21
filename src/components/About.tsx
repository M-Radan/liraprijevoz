import { CheckCircle } from "lucide-react";

const About = () => {
  const features = [
    "Pouzdana i pravovremena dostava",
    "Konkurentne cijene usluga",
    "Moderna vozila i oprema",
    "Iskusni profesionalni vozači",
    "Osiguran teret tijekom transporta",
    "Fleksibilnost prema potrebama klijenta",
  ];

  return (
    <section id="o-nama" className="py-20 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              O nama
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Vaš pouzdani partner u prijevozu robe
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed text-justify">
              <strong className="text-foreground">LIRA PRIJEVOZ d.o.o.</strong> je tvrtka osnovana 2022. godine sa sjedištem u Dobrinčama. Specijalizirani smo za cestovni prijevoz robe i pružamo profesionalne transportne usluge.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed text-justify">
              Naš tim iskusnih profesionalaca posvećen je sigurnom i pravovremenom prijevozu vaše robe. S bonitetnom ocjenom AA+, pozicioniramo se kao pouzdan partner u transportnoj industriji.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Info cards */}
          <div className="space-y-6">
            <div className="bg-primary p-8 rounded-xl text-primary-foreground">
              <h3 className="text-2xl font-bold mb-4">Podaci o tvrtki</h3>
              <div className="space-y-3">
                <div className="flex justify-between border-b border-primary-foreground/20 pb-2">
                  <span className="text-primary-foreground/70">Naziv:</span>
                  <span className="font-medium">LIRA PRIJEVOZ d.o.o.</span>
                </div>
                <div className="flex justify-between border-b border-primary-foreground/20 pb-2">
                  <span className="text-primary-foreground/70">OIB:</span>
                  <span className="font-medium">79096997996</span>
                </div>
                <div className="flex justify-between border-b border-primary-foreground/20 pb-2">
                  <span className="text-primary-foreground/70">MBS:</span>
                  <span className="font-medium">060452446</span>
                </div>
                <div className="flex justify-between border-b border-primary-foreground/20 pb-2">
                  <span className="text-primary-foreground/70">Direktor:</span>
                  <span className="font-medium">Jakov Granić</span>
                </div>
                <div className="flex justify-between border-b border-primary-foreground/20 pb-2">
                  <span className="text-primary-foreground/70">Djelatnost:</span>
                  <span className="font-medium">Cestovni prijevoz robe</span>
                </div>
              </div>
            </div>

            <div className="bg-accent p-6 rounded-xl text-accent-foreground">
              <div className="flex items-center gap-6">
                {/* Vizualni badge AA+ */}
                <div className="text-5xl font-bold">AA+</div>

                {/* Tekstualni sadržaj */}
                <div className="flex flex-col">
                  <div className="font-semibold text-lg">Pouzdani partner u transportu</div>
                  <div className="text-accent-foreground/80 text-sm">
                    Svaka ruta izvedena s profesionalnošću i preciznošću
                  </div>
                  <div className="font-semibold text-lg mt-3">Iskustvo i sigurnost</div>
                  <div className="text-accent-foreground/80 text-sm">
                    Pouzdanost na svakom kilometru
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
