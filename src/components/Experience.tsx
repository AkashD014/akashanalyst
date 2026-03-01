import { Cloud, Database } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const experiences = [
  {
    icon: Cloud,
    title: "Virtual Microsoft Azure Internship",
    duration: "4 Weeks",
    points: [
      "Exposure to cloud computing fundamentals",
      "Basic understanding of Azure environment and services",
      "Hands-on experience with cloud infrastructure concepts",
    ],
  },
  {
    icon: Database,
    title: "Imarticus Pvt. Ltd – SQL Internship",
    duration: "1 Month",
    points: [
      "Learning SQL from fundamentals to advanced queries",
      "Working with databases and writing complex queries",
      "Practicing real-world data scenarios and case studies",
    ],
  },
];

const Experience = () => {
  const ref = useScrollReveal();

  return (
    <section id="experience" className="section-padding bg-secondary/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <p className="text-primary text-sm tracking-widest uppercase text-center mb-2">Experience</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">
          My Professional Journey
        </h2>

        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20" />

          {experiences.map((exp, i) => (
            <div key={i} className={`relative flex items-start gap-6 mb-12 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

              {/* Card */}
              <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 1 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}>
                <div className="glass-card p-6 hover:glow-border transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-3">
                    <exp.icon className="text-primary" size={22} />
                    <span className="text-xs text-primary font-medium">{exp.duration}</span>
                  </div>
                  <h3 className="font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                    {exp.title}
                  </h3>
                  <ul className="space-y-2">
                    {exp.points.map((p, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
