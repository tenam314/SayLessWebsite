import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const projects = [
  {
    title: "Event-Driven ML Platform",
    description: "Designed and built a machine learning platform powered by a Kafka-based event stream processing architecture. The platform processes millions of events per second, enabling real-time model predictions and automatic model retraining.",
    image: "https://ext.same-assets.com/2675109532/2619654206.webp",
    technologies: ["Kafka", "Kubernetes", "TensorFlow", "Go", "Python", "Terraform"],
    impact: "Enabled real-time personalization for 30M+ users, improving conversion rates by 42%",
  },
  {
    title: "Serverless Data Pipeline",
    description: "Led the architecture and implementation of a cloud-native data pipeline for processing petabytes of user interaction data. Implemented as a fully serverless solution with auto-scaling capabilities and robust error handling.",
    image: "https://ext.same-assets.com/1019752789/2841772130.webp",
    technologies: ["AWS Lambda", "S3", "Kinesis", "Glue", "Athena", "CDK"],
    impact: "Reduced data processing costs by 65% while handling 3x more data volume",
  },
  {
    title: "Enterprise IaC Framework",
    description: "Created a comprehensive Infrastructure as Code framework for enterprise cloud deployment. The framework includes security controls, compliance validation, and automated testing built directly into the deployment pipeline.",
    image: "https://ext.same-assets.com/2675109532/947918610.webp",
    technologies: ["Terraform", "AWS", "Azure", "Python", "GitHub Actions", "Sentinel"],
    impact: "Decreased infrastructure deployment time from weeks to hours while improving compliance",
  },
  {
    title: "Distributed Tracing System",
    description: "Architected a distributed tracing and observability platform for microservices environments. The system provides end-to-end visibility into request flows, performance bottlenecks, and failure points.",
    image: "https://ext.same-assets.com/1019752789/646767641.webp",
    technologies: ["OpenTelemetry", "Jaeger", "Prometheus", "Grafana", "Go", "Kubernetes"],
    impact: "Cut MTTR (Mean Time To Resolution) by 60% for production incidents",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-black to-superpower-black">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <Separator className="w-20 h-1 bg-superpower-orange mb-6" />
          <p className="text-lg text-muted-foreground">
            Selected technical initiatives that showcase my expertise in building
            scalable, resilient, and innovative systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-secondary border-0 overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <AspectRatio ratio={16/9}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </AspectRatio>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>

                <div className="flex flex-col space-y-4">
                  <div>
                    <p className="text-superpower-orange font-semibold text-sm mb-1">
                      Business Impact:
                    </p>
                    <p className="text-sm">{project.impact}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} className="bg-black hover:bg-black text-foreground">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
