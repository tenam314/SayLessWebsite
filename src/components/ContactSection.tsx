"use client";

import React from "react";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Twitter, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form handling logic would go here
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Get In Touch</h2>
          <Separator className="w-20 h-1 bg-superpower-orange mx-auto mb-6" />
          <p className="text-lg text-muted-foreground">
            Have a project in mind or interested in discussing engineering leadership opportunities?
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-secondary rounded-lg p-6 md:p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-superpower-orange" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:contact@vpengineering.com"
                      className="text-muted-foreground hover:text-superpower-orange transition-colors"
                    >
                      contact@vpengineering.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-superpower-orange" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">San Francisco Bay Area, CA</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="font-medium mb-4">Connect on social media</p>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary-foreground/10 p-3 rounded-full hover:bg-superpower-orange/20 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-superpower-orange" />
                  </a>
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary-foreground/10 p-3 rounded-full hover:bg-superpower-orange/20 transition-colors"
                  >
                    <Github className="w-5 h-5 text-superpower-orange" />
                  </a>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary-foreground/10 p-3 rounded-full hover:bg-superpower-orange/20 transition-colors"
                  >
                    <Twitter className="w-5 h-5 text-superpower-orange" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-superpower-orange/20 to-superpower-black rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Available For</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-superpower-orange"></div>
                  <span>VP of Engineering Opportunities</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-superpower-orange"></div>
                  <span>Technical Advisory Roles</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-superpower-orange"></div>
                  <span>Speaking Engagements</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-superpower-orange"></div>
                  <span>Mentoring & Coaching</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-secondary rounded-lg p-6 md:p-8 shadow-lg space-y-6">
            <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>

            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">
                  Your Name
                </label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  className="bg-background border-none"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="bg-background border-none"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="What's this about?"
                  className="bg-background border-none"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  className="min-h-[120px] bg-background border-none"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-superpower-orange hover:bg-orange-600 text-white"
            >
              Send Message <Send className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
