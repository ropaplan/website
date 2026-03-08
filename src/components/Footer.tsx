const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <span className="font-heading text-lg font-bold tracking-tight text-foreground opacity-70">Ropaplan</span>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Ropaplan Oy. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
