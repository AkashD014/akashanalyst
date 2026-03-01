import { GraduationCap, Target, TrendingUp } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const About = () => {
  const ref = useScrollReveal();

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <p className="text-primary text-sm tracking-widest uppercase text-center mb-2">About Me</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">
          Designing Solutions, Not Just Visuals
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text side */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I am a BCA student specializing in Data Analysis, currently in my 2nd year (4th Semester). My focus is on building strong foundations in SQL, analytics tools, and real-world data problem solving.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I believe in consistent learning, practical implementation, and stepping out of my comfort zone to achieve long-term goals in the IT industry.
            </p>

            <div className="glass-card p-5 flex items-start gap-4">
              <Target className="text-primary mt-1 flex-shrink-0" size={22} />
              <div>
                <h4 className="font-display font-semibold mb-1">Career Objective</h4>
                <p className="text-sm text-muted-foreground">
                  Focused on building strong foundations in SQL, analytics tools, and real-world data problem solving to become a skilled Data Analyst.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline side */}
          <div className="space-y-6">
            <h3 className="font-display text-lg font-semibold flex items-center gap-2">
              <GraduationCap className="text-primary" size={20} />
              Education Timeline
            </h3>
            <div className="relative pl-6 border-l-2 border-primary/20 space-y-8">
              <TimelineItem
                year="2024 – Present"
                title="BCA in Data Analysis"
                desc="Currently in 4th Semester, specializing in data analysis, SQL, and analytics tools."
                active
              />
              <TimelineItem
                year="2024"
                title="12th Grade Completed"
                desc="Completed higher secondary education, building a strong academic foundation."
              />
            </div>

            <div className="glass-card p-5 flex items-start gap-4 mt-6">
              <TrendingUp className="text-primary mt-1 flex-shrink-0" size={22} />
              <div>
                <h4 className="font-display font-semibold mb-1">Growth Mindset</h4>
                <p className="text-sm text-muted-foreground">
                  Continuously upskilling through internships, hands-on projects, and real-world data scenarios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ year, title, desc, active = false }: { year: string; title: string; desc: string; active?: boolean }) => (
  <div className="relative">
    <div className={`absolute -left-[31px] w-4 h-4 rounded-full border-2 ${active ? "bg-primary border-primary" : "bg-background border-primary/40"}`} />
    <p className="text-xs text-primary font-medium mb-1">{year}</p>
    <h4 className="font-display font-semibold">{title}</h4>
    <p className="text-sm text-muted-foreground">{desc}</p>
  </div>
);

export default About;
