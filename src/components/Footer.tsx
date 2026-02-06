import { Link } from "react-router-dom";
import Logo from "@/components/Logo";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 border-t border-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-2">
            <Logo className="w-6 h-6" />
            <span className="font-display text-lg font-bold text-secondary-foreground">
              M-Square Architects
            </span>
          </Link>
          <div className="flex gap-8 text-sm text-secondary-foreground/60">
            {[
              { label: "Services", to: "/services" },
              { label: "Projects", to: "/projects" },
              { label: "About", to: "/about" },
              { label: "Contact", to: "/contact" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-secondary-foreground/40 text-sm">
            © 2024 M-Square Architects. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
