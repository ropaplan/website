import { Shield, Compass, Wrench } from "lucide-react";
import FadeIn from "./FadeIn";

const stats = [
  { icon: Shield, label: "Quality Assured", desc: "Standards compliance" },
  { icon: Compass, label: "Maritime Focus", desc: "Specialized expertise" },
  { icon: Wrench, label: "Full Service", desc: "End-to-end solutions" },
];

const AboutSection = () => (
  <section id="about" className="py-24 lg:py-32">
    <div className="container mx-auto px-6">
      <FadeIn className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-primary text-sm font-semibold tracking-wide uppercase mb-3">
          About Ropaplan
        </p>
        <h2 className="text-3xl lg:text-5xl font-bold mb-6">
          Dynamic Engineering Consultancy
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Established in 2024, Ropaplan is a dynamic engineering consultancy
          firm specializing in delivering a wide range of solutions to the
          maritime sector. We provide expertise tailored to the unique challenges
          of maritime industries — from technical assessments to operational
          optimizations.
        </p>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {stats.map((s, i) => (
          <FadeIn key={s.label} delay={i * 0.15}>
            <div className="bg-gradient-card border-glow rounded-xl p-8 text-center shadow-glow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                <s.icon size={22} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-1">{s.label}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
