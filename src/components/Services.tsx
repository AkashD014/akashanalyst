import { Database, FileSpreadsheet, LayoutDashboard, FileText, BarChart3 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  { icon: Database, title: "SQL Database Querying", desc: "Data extraction and complex query writing for meaningful insights from databases." },
  { icon: FileSpreadsheet, title: "Data Cleaning & Analysis", desc: "Data cleaning, transformation, and analysis using Microsoft Excel." },
  { icon: LayoutDashboard, title: "Dashboard Creation", desc: "Interactive and insightful dashboard creation using Tableau." },
  { icon: FileText, title: "Data Reporting", desc: "Basic data reporting and insights generation for business decisions." },
  { icon: BarChart3, title: "Data Visualization", desc: "Visual storytelling with data to support business decision-making." },
];

const Services = () => {
  const ref = useScrollReveal();

  return (
    <section id="services" className="section-padding bg-secondary/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <p className="text-primary text-sm tracking-widest uppercase text-center mb-2">Services</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">
          What I Can Do
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="glass-card p-6 hover:glow-border transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <s.icon className="text-primary" size={22} />
              </div>
              <h3 className="font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
