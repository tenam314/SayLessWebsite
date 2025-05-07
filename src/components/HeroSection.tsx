import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDownCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pb-10 overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black via-black to-superpower-black z-[-1]"
        aria-hidden="true"
      ></div>

      {/* Orange gradient circle */}
      <div
        className="absolute top-1/4 right-1/3 w-96 h-96 bg-superpower-orange/30 rounded-full blur-[100px] z-[-1]"
        aria-hidden="true"
      ></div>

      <div className="container px-4 md:px-6 flex flex-col items-start gap-6 pt-24">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl header-shadow space-y-4">
          <span className="block gradient-text">Technology Leadership</span>
          <span className="block">Engineering Expertise.</span>
          <span className="block">Driving Innovation.</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-xl">
          VP of Engineering with 15+ years of leadership experience building high-performing teams and cutting-edge technology solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Button
            className="bg-superpower-orange hover:bg-orange-600 text-white rounded-md px-8 py-6 text-lg"
            size="lg"
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            className="border-superpower-orange text-superpower-orange hover:bg-superpower-orange/10 rounded-md px-8 py-6 text-lg"
            size="lg"
          >
            Get in Touch
          </Button>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ArrowDownCircle className="h-10 w-10 text-superpower-orange" />
          </a>
        </div>
      </div>
    </section>
  );
}
