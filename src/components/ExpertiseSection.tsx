import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Cloud,
  Rocket,
  Brain,
  MessageSquareShare,
  Users
} from "lucide-react";

const expertiseAreas = [
  {
    title: "Infrastructure as Code",
    description: "Expert in designing and implementing robust, scalable infrastructure using Terraform, AWS CloudFormation, and Kubernetes. Experienced in building fully automated, self-healing systems that enable rapid iteration and deployment.",
    icon: <Cloud className="h-10 w-10 text-superpower-orange" />,
    technologies: ["Terraform", "AWS CloudFormation", "Kubernetes", "Docker", "CI/CD", "GitOps"],
  },
  {
    title: "0-1 Product Development",
    description: "Proven track record of taking products from conception to market. Skilled in translating business requirements into technical architectures that balance innovation with time-to-market constraints.",
    icon: <Rocket className="h-10 w-10 text-superpower-orange" />,
    technologies: ["Agile Methodologies", "MVP Definition", "Technology Selection", "Architecture Design", "Team Composition"],
  },
  {
    title: "Machine Learning",
    description: "Deep expertise in building and deploying machine learning systems at scale. Experience with both supervised and unsupervised learning approaches, MLOps, and creating data pipelines that support AI initiatives.",
    icon: <Brain className="h-10 w-10 text-superpower-orange" />,
    technologies: ["TensorFlow", "PyTorch", "MLOps", "Computer Vision", "NLP", "Predictive Analytics"],
  },
  {
    title: "Kafka Streaming Architecture",
    description: "Specialist in designing and implementing event-driven architectures using Kafka. Skilled in building real-time data processing systems that handle high throughput while maintaining resilience and fault tolerance.",
    icon: <MessageSquareShare className="h-10 w-10 text-superpower-orange" />,
    technologies: ["Apache Kafka", "Kafka Streams", "Event Sourcing", "CQRS", "Microservices", "Real-time Analytics"],
  },
  {
    title: "Engineering Leadership",
    description: "Passionate about building and mentoring high-performing engineering teams. Experienced in coaching both Product and Engineering Managers, developing career paths, and fostering a culture of technical excellence.",
    icon: <Users className="h-10 w-10 text-superpower-orange" />,
    technologies: ["Team Building", "Performance Coaching", "Technical Mentoring", "Career Development", "Engineering Culture"],
  },
];

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="py-24 bg-gradient-to-b from-superpower-black to-black">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Technical Expertise</h2>
          <Separator className="w-20 h-1 bg-superpower-orange mx-auto mb-6" />
          <p className="text-lg text-muted-foreground">
            Specialized in cutting-edge technologies and methodologies that drive innovation
            and enable organizations to build scalable, resilient systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((area, index) => (
            <Card key={index} className="bg-secondary border-none hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-start space-x-4">
                <div className="mt-1">{area.icon}</div>
                <div>
                  <CardTitle className="text-xl">{area.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {area.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {area.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-2 py-1 bg-background rounded-full text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
