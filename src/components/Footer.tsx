import { HardHat } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 border-t border-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <HardHat className="w-6 h-6 text-primary" />
            <span className="font-display text-lg font-bold text-secondary-foreground">
              BuildCraft
            </span>
          </div>
          <div className="flex gap-8 text-sm text-secondary-foreground/60">
            {["Services", "Projects", "About", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
          <p className="text-secondary-foreground/40 text-sm">
            © 2024 BuildCraft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
