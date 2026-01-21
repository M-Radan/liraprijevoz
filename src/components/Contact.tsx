import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useState, FormEvent } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/8a615b02d32073f28fd9070a8d8e32c0", // <-- OVdje ide hash
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        }
      );

      if (response.ok) {
        toast({
          title: "Poruka uspješno poslana!",
          description: "Javit ćemo vam se u najkraćem mogućem roku.",
        });
        form.reset();
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Greška pri slanju",
        description: "Molimo pokušajte ponovno ili nas kontaktirajte telefonom.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Telefon",
      value: "091 381 1118",
      href: "tel:+385913811118",
    },
    {
      icon: Mail,
      label: "Email",
      value: "liraprijevoz@gmail.com",
      href: "mailto:liraprijevoz@gmail.com",
    },
    {
      icon: MapPin,
      label: "Adresa",
      value: "Dobrinče 76, 21260 Dobrinče",
      href: "https://maps.google.com/?q=Dobrinče+76,+21260+Dobrinče,+Croatia",
    },
  ];

  return (
    <section id="kontakt" className="py-20 bg-secondary">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Kontakt
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Javite nam se
          </h2>
          <p className="text-muted-foreground text-lg">
            Kontaktirajte nas za ponudu ili bilo kakva pitanja. Stojimo vam na raspolaganju.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form - FormSubmit */}
          <div className="bg-card p-8 rounded-xl card-shadow">
            <h3 className="text-xl font-bold text-foreground mb-6">Pošaljite upit</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Ime i prezime *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  maxLength={100}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  placeholder="Vaše ime"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    maxLength={255}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    placeholder="vas@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    maxLength={50}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    placeholder="+385 91 xxx xxxx"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Poruka *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  maxLength={2000}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                  placeholder="Opišite vaš upit..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-4 rounded-lg font-semibold text-lg transition-all button-shadow hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Šalje se..." : <><Send className="w-5 h-5" />Pošalji upit</>}
              </button>
            </form>
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                target={info.label === "Adresa" ? "_blank" : undefined}
                rel={info.label === "Adresa" ? "noopener noreferrer" : undefined}
                className="flex items-start gap-5 p-6 bg-card rounded-xl card-shadow hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors">
                  <info.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">{info.label}</div>
                  <div className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                    {info.value}
                  </div>
                </div>
              </a>
            ))}

            {/* Map */}
            <div className="bg-primary rounded-xl overflow-hidden h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2894.5!2d17.0735!3d43.4380278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDI2JzE2LjkiTiAxN8KwMDQnMjQuNiJF!5e0!3m2!1sen!2shr!4v1600000000000!5m2!1sen!2shr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokacija LIRA PRIJEVOZ"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
