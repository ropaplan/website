import { Users } from "lucide-react";
import FadeIn from "./FadeIn";

const CareerSection = () => (
  <section id="career" className="py-24 lg:py-32 bg-card">
    <div className="container mx-auto px-6">
      <FadeIn className="max-w-3xl mx-auto text-center">
        <p className="text-primary text-sm font-semibold tracking-wide uppercase mb-3">
          Career
        </p>
        <h2 className="text-3xl lg:text-5xl font-bold mb-6">Join Our Team</h2>
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-8">
          <Users size={28} className="text-primary" />
        </div>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          We are always keen to connect with talented professionals in the
          maritime sector. Whether you're an experienced naval architect, a
          structural engineer, or a specialist in marine inspection — we'd love
          to hear from you.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8">
          If you share our passion for maritime engineering and want to be part
          of a growing consultancy, don't hesitate to reach out.
        </p>
        <a
          href="mailto:pasi.niemi@ropaplan.com"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Send Your CV
        </a>
      </FadeIn>
    </div>
  </section>
);

export default CareerSection;
