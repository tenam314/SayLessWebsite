import React from "react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-superpower-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-start gap-10 md:flex-row md:gap-16">
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">About Me</h2>
            <Separator className="w-20 h-1 bg-superpower-orange" />

            <div className="space-y-6 text-lg">
              <p>
                As a seasoned VP of Engineering with over 15 years of leadership experience,
                I've built and led high-performing engineering teams across multiple domains.
                My expertise spans from early-stage startups to established enterprises,
                consistently driving technological innovation and business growth.
              </p>
              <p>
                I'm passionate about creating scalable, resilient systems and fostering a
                culture of engineering excellence. My approach combines strategic vision with
                hands-on technical knowledge, allowing me to bridge the gap between business
                objectives and technical execution.
              </p>
              <p>
                Throughout my career, I've successfully delivered complex projects using
                cutting-edge technologies, while mentoring the next generation of
                engineering and product leaders.
              </p>
            </div>

            <div className="pt-6 flex flex-wrap gap-2">
              <Badge className="bg-secondary hover:bg-secondary text-foreground px-3 py-1 text-sm rounded-full">Strategic Leadership</Badge>
              <Badge className="bg-secondary hover:bg-secondary text-foreground px-3 py-1 text-sm rounded-full">Team Building</Badge>
              <Badge className="bg-secondary hover:bg-secondary text-foreground px-3 py-1 text-sm rounded-full">Technical Architecture</Badge>
              <Badge className="bg-secondary hover:bg-secondary text-foreground px-3 py-1 text-sm rounded-full">Mentorship</Badge>
              <Badge className="bg-secondary hover:bg-secondary text-foreground px-3 py-1 text-sm rounded-full">Product Development</Badge>
              <Badge className="bg-secondary hover:bg-secondary text-foreground px-3 py-1 text-sm rounded-full">Engineering Culture</Badge>
            </div>
          </div>

          <div className="w-full md:w-1/2 space-y-8">
            <div className="rounded-lg overflow-hidden bg-secondary p-6 md:p-8">
              <h3 className="text-xl font-bold mb-4">Core Values</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-superpower-orange font-bold">01.</span>
                  <span>Engineering excellence and sustainable technical practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-superpower-orange font-bold">02.</span>
                  <span>Transparent leadership and authentic communication</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-superpower-orange font-bold">03.</span>
                  <span>Continuous learning and knowledge sharing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-superpower-orange font-bold">04.</span>
                  <span>Balancing innovation with pragmatic execution</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-superpower-orange font-bold">05.</span>
                  <span>Empowering teams and fostering a growth mindset</span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-secondary p-6">
                <h4 className="font-bold mb-2">Education</h4>
                <p className="text-sm text-muted-foreground">MS in Computer Science</p>
                <p className="text-sm">Stanford University</p>
              </div>
              <div className="rounded-lg bg-secondary p-6">
                <h4 className="font-bold mb-2">Certifications</h4>
                <p className="text-sm text-muted-foreground">AWS Solutions Architect</p>
                <p className="text-sm text-muted-foreground">Google Cloud Professional</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
