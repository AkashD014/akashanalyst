import { ArrowDown, Mail, Database, BarChart3, TrendingUp } from "lucide-react";
import profileImg from "@/assets/profile.png";
import { useEffect, useState } from "react";

const titles = [
  "Aspiring Data Analyst",
  "BCA Student",
  "SQL & Data Enthusiast",
];

const stats = [
  { label: "Internships", value: 2 },
  { label: "Skills", value: 6 },
  { label: "Projects", value: 3, suffix: "+" },
];

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, titleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[hsl(190,90%,55%)]/5 rounded-full blur-[100px]" style={{ animationDelay: "1.5s" }} />
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "linear-gradient(hsl(217 91% 60%) 1px, transparent 1px), linear-gradient(90deg, hsl(217 91% 60%) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />
        {/* Floating icons */}
        <Database className="absolute top-32 right-[15%] text-primary/10 animate-float" size={40} style={{ animationDelay: "0.5s" }} />
        <BarChart3 className="absolute bottom-32 right-[25%] text-primary/10 animate-float" size={32} style={{ animationDelay: "1s" }} />
        <TrendingUp className="absolute top-[40%] left-[8%] text-primary/10 animate-float" size={36} style={{ animationDelay: "2s" }} />
        {/* Top gradient line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-6 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium text-primary/80 tracking-wide">Open to Opportunities</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Hello, I'm{" "}
              <span className="text-gradient">Akash Das</span>
            </h1>

            <div className="h-8 md:h-10 mb-6 flex items-center justify-center lg:justify-start">
              <span className="font-display text-lg md:text-2xl text-primary/80 font-semibold">
                {displayed}
              </span>
              <span className="inline-block w-0.5 h-6 md:h-7 bg-primary ml-1 animate-blink" />
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 text-sm md:text-base animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              A motivated and growth-oriented tech professional with a strong interest in SQL, data analysis, and problem-solving. Passionate about continuously improving technical skills and building a successful career in the IT industry.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <a
                href="#skills"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground rounded-xl font-medium hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                <ArrowDown size={18} className="group-hover:animate-bounce" />
                View My Skills
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 glass-card text-foreground rounded-xl font-medium hover:border-primary/40 hover:text-primary transition-all duration-300 hover:-translate-y-0.5"
              >
                <Mail size={18} />
                Contact Me
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              {stats.map((s, i) => (
                <div key={i} className="text-center lg:text-left">
                  <p className="font-display text-2xl md:text-3xl font-bold text-gradient">
                    {s.value}{s.suffix || ""}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Profile image */}
          <div className="flex-shrink-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              {/* Outer ring */}
              <div className="absolute -inset-3 rounded-full border border-primary/10 animate-[spin_20s_linear_infinite]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary/40" />
              </div>
              <div className="absolute -inset-6 rounded-full border border-primary/5 animate-[spin_30s_linear_infinite_reverse]">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-[hsl(190,90%,55%)]/40" />
              </div>

              {/* Image */}
              <div className="w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/20 relative">
                <img src={profileImg} alt="Akash Das" className="w-full h-full object-cover object-[center_20%]" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
              </div>

              {/* Floating badges */}
              <div className="absolute -bottom-3 -right-3 glass-card px-4 py-2.5 glow-border animate-float">
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Currently</p>
                <p className="text-sm font-bold text-primary font-display">BCA 4th Sem</p>
              </div>

              <div className="absolute -top-2 -left-4 glass-card px-3 py-2 glow-border animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-1.5">
                  <Database className="text-primary" size={14} />
                  <p className="text-xs font-semibold text-foreground">SQL</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "1s" }}>
          <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-primary/30 flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-primary/60 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
