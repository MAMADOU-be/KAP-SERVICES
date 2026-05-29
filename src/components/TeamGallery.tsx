import { ScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/i18n/LanguageContext";
import encadrante1 from "@/assets/team/encadrante-1.jpeg";
import encadrante1Work from "@/assets/team/encadrante-1-work.jpeg";
import encadrante2Desk from "@/assets/team/encadrante-2-desk.jpeg";
import encadrante2Work from "@/assets/team/encadrante-2-work.jpeg";
import encadrante2Ironing from "@/assets/team/encadrante-2-ironing.jpeg";

const teamImages = [
  { src: encadrante1, alt: "Encadrante Kap Services au bureau" },
  { src: encadrante2Desk, alt: "Encadrante Kap Services à l'accueil" },
  { src: encadrante1Work, alt: "Encadrante Kap Services au repassage" },
  { src: encadrante2Ironing, alt: "Repassage professionnel Kap Services" },
  { src: encadrante2Work, alt: "Encadrante Kap Services en action" },
];

export function TeamGallery() {
  const { t } = useLanguage();

  return (
    <ScrollAnimation animation="fade-up" delay={300} className="my-16">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          {t.about.teamGallery.title}
        </h3>
        <p className="text-muted-foreground max-w-xl mx-auto">
          {t.about.teamGallery.description}
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
        {teamImages.map((img, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden group relative aspect-[3/4] bg-muted shadow-sm"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </ScrollAnimation>
  );
}
