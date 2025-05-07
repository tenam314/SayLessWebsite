"use client";

import React, { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, ChevronLeft, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "One of the most technically adept engineering leaders I've worked with. Their ability to set technical vision while still understanding implementation details is unparalleled.",
    name: "Sarah Chen",
    title: "Chief Technology Officer",
    company: "Enterprise Solutions Inc.",
    image: "https://ext.same-assets.com/1019752789/3954391819.webp",
  },
  {
    quote: "They transformed our engineering organization from a siloed, slow-moving team to an agile, collaborative powerhouse. Their leadership in implementing event-driven architecture was game-changing for our platform.",
    name: "Michael Rodriguez",
    title: "CEO",
    company: "TechForward Inc.",
    image: "https://ext.same-assets.com/1019752789/1315090759.webp",
  },
  {
    quote: "Their expertise in machine learning operations allowed us to take our AI initiatives from research projects to production systems serving millions of users. A true technical leader who delivers results.",
    name: "Jamie Wilson",
    title: "VP of Product",
    company: "DataStream Systems",
    image: "https://ext.same-assets.com/2675109532/1378009285.webp",
  },
  {
    quote: "Not only a technical powerhouse but also an exceptional mentor. They've built a culture of engineering excellence while developing the next generation of technical leaders.",
    name: "Alex Thompson",
    title: "Engineering Director",
    company: "TechForward Inc.",
    image: "https://ext.same-assets.com/2675109532/2815912913.webp",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-superpower-black">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">What Colleagues Say</h2>
          <Separator className="w-20 h-1 bg-superpower-orange mx-auto mb-6" />
          <p className="text-lg text-muted-foreground">
            Perspectives from the executives, product managers, and engineers
            I've had the pleasure of working with.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-secondary border-0 overflow-hidden shadow-xl">
            <CardContent className="p-6 md:p-10">
              <div className="flex flex-col items-center md:flex-row md:items-start gap-6 md:gap-10">
                <Avatar className="w-20 h-20 md:w-24 md:h-24 border-2 border-superpower-orange">
                  <AvatarImage src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} />
                  <AvatarFallback>{testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>

                <div className="flex-1 relative">
                  <Quote className="absolute -left-2 -top-2 text-superpower-orange/20 w-12 h-12" />

                  <p className="text-lg md:text-xl italic mb-6 relative z-10">
                    "{testimonials[currentIndex].quote}"
                  </p>

                  <div>
                    <p className="font-bold text-lg">{testimonials[currentIndex].name}</p>
                    <p className="text-superpower-orange">{testimonials[currentIndex].title}</p>
                    <p className="text-sm text-muted-foreground">{testimonials[currentIndex].company}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-secondary hover:bg-superpower-orange/20 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? "bg-superpower-orange" : "bg-gray-600"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-secondary hover:bg-superpower-orange/20 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
