import React from "react";
import Link from "next/link";
import { Linkedin, Github, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-secondary py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold gradient-text">VP.ENGINEER</span>
            </Link>
            <p className="text-muted-foreground max-w-xs">
              VP of Engineering with expertise in Infrastructure as Code,
              0-1 Product Development, Machine Learning, Event-Driven Architecture,
              and Engineering Leadership.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-superpower-orange transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-superpower-orange transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-superpower-orange transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#about"
                  className="text-muted-foreground hover:text-superpower-orange transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#expertise"
                  className="text-muted-foreground hover:text-superpower-orange transition-colors"
                >
                  Expertise
                </Link>
              </li>
              <li>
                <Link
                  href="#experience"
                  className="text-muted-foreground hover:text-superpower-orange transition-colors"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-muted-foreground hover:text-superpower-orange transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-muted-foreground hover:text-superpower-orange transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic space-y-3 text-muted-foreground">
              <p>San Francisco Bay Area, CA</p>
              <p>
                <a
                  href="mailto:contact@vpengineering.com"
                  className="hover:text-superpower-orange transition-colors"
                >
                  contact@vpengineering.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-secondary flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} VP.Engineer. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex flex-wrap gap-4 md:gap-6 text-sm">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-superpower-orange transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-superpower-orange transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
