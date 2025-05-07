import React from "react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "VP of Engineering",
    company: "TechForward Inc.",
    period: "2020 - Present",
    description: "Leading a team of 80+ engineers across multiple product lines. Responsible for technical strategy, architecture decisions, and engineering culture. Implemented robust MLOps practices and migrated legacy systems to event-driven architecture.",
    achievements: [
      "Scaled engineering organization from 30 to 80+ across 8 teams",
      "Reduced deployment time by 70% through CI/CD improvements",
      "Led migration to Kubernetes and Infrastructure as Code",
      "Established ML platform serving 20M+ predictions daily"
    ],
    skills: ["Leadership", "Cloud Architecture", "ML Systems", "Event-Driven Design"],
  },
  {
    title: "Senior Director of Engineering",
    company: "DataStream Systems",
    period: "2017 - 2020",
    description: "Directed the engineering efforts for a data streaming platform processing 5TB+ of data daily. Built and mentored a team of engineering managers and staff engineers focusing on real-time analytics and event processing.",
    achievements: [
      "Built Kafka-based streaming architecture handling 2M+ events/second",
      "Designed automated failover systems with 99.99% uptime",
      "Implemented machine learning models for anomaly detection",
      "Restructured engineering teams for optimal delivery flow"
    ],
    skills: ["Kafka", "Streaming", "Team Building", "Microservices"],
  },
  {
    title: "Engineering Director",
    company: "InnovateAI",
    period: "2014 - 2017",
    description: "Led the development of an AI-powered product recommendation platform from concept to market launch. Managed cross-functional teams of data scientists, ML engineers, and backend developers.",
    achievements: [
      "Built product from 0-1, achieving $10M ARR within 2 years",
      "Created scalable ML infrastructure serving 100+ enterprise clients",
      "Reduced infrastructure costs by 40% through optimization",
      "Mentored 5 engineers to senior/lead positions"
    ],
    skills: ["0-1 Product", "ML Infrastructure", "Product Strategy", "Cloud Computing"],
  },
  {
    title: "Senior Engineering Manager",
    company: "TechGiant",
    period: "2010 - 2014",
    description: "Managed multiple engineering teams working on cloud infrastructure products. Responsible for roadmap planning, technical architecture, and cross-team coordination.",
    achievements: [
      "Led design and implementation of auto-scaling infrastructure services",
      "Built one of the company's first high-performance Kafka-based systems",
      "Increased team velocity by 45% through process improvements",
      "Achieved 35% cost reduction in cloud infrastructure"
    ],
    skills: ["Engineering Management", "Infrastructure", "Process Optimization"],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-black">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Professional Experience</h2>
          <Separator className="w-20 h-1 bg-superpower-orange mb-6" />
          <p className="text-lg text-muted-foreground">
            Over 15 years of engineering leadership experience building and scaling
            high-performing technical teams and systems.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-superpower-orange pl-8 ml-4 md:ml-8 space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute -left-[42px] mt-2 w-6 h-6 rounded-full bg-superpower-orange flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-black"></div>
                </div>

                <div className="bg-secondary rounded-lg p-6 md:p-8 shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-superpower-orange">{exp.company}</p>
                    </div>
                    <span className="text-muted-foreground mt-2 md:mt-0">{exp.period}</span>
                  </div>

                  <p className="mb-4 text-muted-foreground">{exp.description}</p>

                  <h4 className="font-semibold text-sm uppercase tracking-wider text-superpower-orange mt-4 mb-2">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-superpower-orange mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <Badge key={i} className="bg-black text-foreground">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
