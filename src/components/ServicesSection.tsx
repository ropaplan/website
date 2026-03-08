import steelImg from "@/assets/steel-structure.jpg";
import inspectionImg from "@/assets/inspection.jpg";
import femImg from "@/assets/fem-analysis.jpg";
import consultingImg from "@/assets/consulting.jpg";
import FadeIn from "./FadeIn";

const services = [
  {
    title: "Steel Structure & Deck Outfitting Design",
    desc: "Our design team creates efficient and effective solutions for your engineering projects, from initial concept to detailed production drawings.",
    img: steelImg,
  },
  {
    title: "Inspection Services",
    desc: "Ensuring compliance with classification society standards and project specifications throughout the construction process.",
    img: inspectionImg,
  },
  {
    title: "Strength Analysis & Calculations",
    desc: "Advanced calculations including FEM analysis, fatigue strength assessments, vibration studies, and structural optimization.",
    img: femImg,
  },
  {
    title: "Consulting & Project Management",
    desc: "We ensure that your projects are completed on time and within budget with experienced maritime project management.",
    img: consultingImg,
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24 lg:py-32 bg-card">
    <div className="container mx-auto px-6">
      <FadeIn className="text-center mb-16">
        <p className="text-primary text-sm font-semibold tracking-wide uppercase mb-3">
          What We Do
        </p>
        <h2 className="text-3xl lg:text-5xl font-bold">Our Services</h2>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {services.map((s, i) => (
          <FadeIn key={s.title} delay={i * 0.1}>
            <div className="group bg-gradient-card border-glow rounded-xl overflow-hidden shadow-glow hover:border-primary/30 transition-colors h-full">
              <div className="aspect-video overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
