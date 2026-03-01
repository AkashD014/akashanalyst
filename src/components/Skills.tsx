import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Database, BarChart3, FileSpreadsheet, LayoutDashboard, Brain, Lightbulb, BookOpen, Shield } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const technicalSkills = [
  { name: "SQL", level: 65, icon: Database },
  { name: "Data Analysis", level: 55, icon: BarChart3 },
  { name: "Microsoft Excel", level: 70, icon: FileSpreadsheet },
  { name: "Tableau", level: 50, icon: LayoutDashboard },
];

const coreStrengths = [
  { name: "Problem-Solving", icon: Brain },
  { name: "Analytical Thinking", icon: Lightbulb },
  { name: "Continuous Learning", icon: BookOpen },
  { name: "Consistency & Discipline", icon: Shield },
];

const SkillBar = ({ name, level, icon: Icon }: { name: string; level: number; icon: React.ElementType }) => {
  const barRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.unobserve(el); }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={barRef} className="glass-card p-5">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <Icon className="text-primary" size={18} />
          <span className="font-medium text-sm">{name}</span>
        </div>
        <span className="text-primary font-display font-bold text-sm">{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-[hsl(190,90%,55%)] rounded-full transition-all duration-1000 ease-out"
          style={{ width: visible ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <p className="text-primary text-sm tracking-widest uppercase text-center mb-2">Skills</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">
          Technical Expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">Technical Skills</h3>
            <div className="space-y-4">
              {technicalSkills.map((s) => (
                <SkillBar key={s.name} {...s} />
              ))}
            </div>
          </div>

          {/* Core Strengths */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">Core Strengths</h3>
            <div className="grid grid-cols-2 gap-4">
              {coreStrengths.map((s) => (
                <div key={s.name} className="glass-card p-5 text-center hover:glow-border transition-all duration-300 group">
                  <s.icon className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" size={28} />
                  <p className="text-sm font-medium">{s.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
