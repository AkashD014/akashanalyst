import { Database, FileSpreadsheet, LayoutDashboard, Rocket } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const projects = [
  { icon: Database, title: "SQL Case Study Project", tag: "Coming Soon" },
  { icon: FileSpreadsheet, title: "Excel Dashboard Project", tag: "Coming Soon" },
  { icon: LayoutDashboard, title: "Tableau Visualization Project", tag: "Coming Soon" },
];

const Projects = () => {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <p className="text-primary text-sm tracking-widest uppercase text-center mb-2">Portfolio</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          Projects Coming Soon
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          I am currently building real-world data analysis projects. This section will soon showcase my work including dashboards, SQL case studies, and business insights projects.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {projects.map((p, i) => (
            <div
              key={i}
              className="glass-card p-6 text-center border-dashed hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <p.icon className="text-primary/60" size={24} />
              </div>
              <h3 className="font-display font-semibold text-sm mb-2">{p.title}</h3>
              <span className="inline-flex items-center gap-1 text-xs text-primary/70 bg-primary/10 px-3 py-1 rounded-full">
                <Rocket size={12} />
                {p.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
