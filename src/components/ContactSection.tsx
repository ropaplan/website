import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import FadeIn from "./FadeIn";
import profilePhoto from "@/assets/profile-photo.jpg";

const ContactSection = () => (
  <section id="contact" className="py-24 lg:py-32">
    <div className="container mx-auto px-6">
      <FadeIn className="max-w-2xl mx-auto text-center">
        <p className="text-primary text-sm font-semibold tracking-wide uppercase mb-3">
          Get in Touch
        </p>
        <h2 className="text-3xl lg:text-5xl font-bold mb-6">Contact Us</h2>
        <p className="text-muted-foreground text-lg mb-12">
          Ready to discuss your next maritime engineering project? Reach out to
          our team.
        </p>
      </FadeIn>

      <FadeIn delay={0.2} className="max-w-2xl mx-auto">
        <div className="bg-gradient-card border-glow rounded-xl p-8 sm:p-10 shadow-glow text-left">
          <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start">
            <img
              src={profilePhoto}
              alt="Pasi Niemi"
              className="w-32 h-32 rounded-full object-cover border-2 border-primary/20 shrink-0"
            />
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-1">Ropaplan Oy</h3>
                <p className="text-sm text-muted-foreground">
                  Business ID: 3481558-2
                </p>
              </div>

              <p className="text-sm font-medium">Pasi Niemi</p>

              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <MapPin size={16} className="text-primary" />
                Turku, Finland
              </div>

              <a
                href="tel:+358400432577"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Phone size={16} className="text-primary" />
                +358 400 432 577
              </a>

              <a
                href="mailto:pasi.niemi@ropaplan.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Mail size={16} className="text-primary" />
                pasi.niemi@ropaplan.com
              </a>

              <a
                href="https://fi.linkedin.com/company/ropaplan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Linkedin size={16} className="text-primary" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

export default ContactSection;
