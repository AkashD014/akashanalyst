import { ArrowDown, Mail } from "lucide-react";
import profileImg from "@/assets/profile.png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-28 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(hsl(217 91% 60%) 1px, transparent 1px), linear-gradient(90deg, hsl(217 91% 60%) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />
      </div>

      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20 relative z-10">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4 animate-fade-in-up">
            Welcome to my Portfolio
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Hello, I'm{" "}
            <span className="text-gradient">Akash Das</span>
          </h1>
          <div className="overflow-hidden mb-6">
            <p className="text-lg md:text-xl text-primary/80 font-medium" style={{ animationDelay: "0.2s" }}>
              Aspiring Data Analyst | BCA Student | SQL &amp; Data Enthusiast
            </p>
          </div>
          <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8" style={{ animationDelay: "0.4s" }}>
            I am a motivated and growth-oriented aspiring tech professional with a strong interest in SQL, data analysis, and problem-solving. Passionate about continuously improving technical skills and building a successful career in the IT industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#skills"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-200 hover:shadow-lg hover:shadow-primary/25"
            >
              <ArrowDown size={18} />
              View My Skills
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:border-primary/50 hover:text-primary transition-all duration-200"
            >
              <Mail size={18} />
              Contact Me
            </a>
          </div>
        </div>

        {/* Profile image */}
        <div className="flex-shrink-0">
          <div className="relative">
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary/30 animate-pulse-glow">
              <img src={profileImg} alt="Akash Das" className="w-full h-full object-cover" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-2 -right-2 glass-card px-4 py-2 glow-border animate-float">
              <p className="text-xs text-muted-foreground">Currently</p>
              <p className="text-sm font-semibold text-primary">BCA 4th Sem</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
