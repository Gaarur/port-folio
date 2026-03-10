import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";

const navLinks = ["About", "Skills", "Projects", "Experience", "Contact"];

const socials = [
  { icon: Github, href: "https://github.com/utkarshraj", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/utkarshraj", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/utkarshraj", label: "Twitter" },
  { icon: Mail, href: "mailto:uraj33175@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-glass-border mt-32">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl text-text-primary mb-2">
              Utkarsh Raj
            </h3>
            <p className="text-text-secondary text-sm max-w-xs leading-relaxed">
              AI Engineer & Full Stack Developer building intelligent systems
              that matter.
            </p>
            <p className="text-text-tertiary text-xs mt-4">
              uraj33175@gmail.com
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-text-tertiary text-xs uppercase tracking-widest mb-4">
              Navigation
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link.toLowerCase()}`}
                    className="text-text-secondary hover:text-neon-cyan transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p className="text-text-tertiary text-xs uppercase tracking-widest mb-4">
              Connect
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 glass rounded-full flex items-center justify-center text-text-secondary hover:text-neon-cyan hover:border-neon-cyan/30 transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-glass-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-text-tertiary text-xs">
            © 2025 Utkarsh Raj. Crafted with Next.js & Framer Motion.
          </p>
          <a
            href="#top"
            className="flex items-center gap-2 text-text-tertiary hover:text-neon-cyan text-xs transition-colors"
          >
            <ArrowUp size={12} />
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
