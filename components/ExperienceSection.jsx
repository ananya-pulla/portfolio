"use client";

import { useEffect, useRef } from "react";

const experiences = [
  {
    company: "ISRO / VSSC",
    role: "Research Intern • Spatial Developer & Engineering",
    location: "Vikram Sarabhai Space Centre • Space Physics Lab",
    date: "Jan 2024 — Jun 2024",
    desc: "Architected immersive VR and spatial simulation runtime for launch trajectory visualization; processed real-time telemetry pipelines translating 1,200+ raw flight telemetry streams into performant volumetric fields; evaluated spatial ergonomic indicators.",
    tags: [
      ["WebXR", "bg-brand-pink text-brand-wine"],
      ["Unity", "bg-brand-gold text-brand-dark"],
      ["C#", "bg-brand-lime text-brand-dark"],
      ["Telemetry", "bg-white text-brand-wine"],
      ["Shaders", "bg-brand-pink text-brand-wine"],
    ],
  },
  {
    company: "NRSC / ISRO",
    role: "Machine Learning & Geospatial Engineering Intern",
    location: "National Remote Sensing Centre • Earth Observation | Hyderabad",
    date: "May 2023 — Aug 2023",
    desc: "Trained spatial clustering models to detect anomaly hotspots over multispectral satellite feeds; accelerated browser-based GeoJSON and raster rendering workflows by 4× via WebGL shaders and Mapbox GL pipelines.",
    tags: [
      ["Python", "bg-brand-pink text-brand-wine"],
      ["GeoPandas", "bg-brand-lime text-brand-dark"],
      ["Scikit-learn", "bg-brand-gold text-brand-dark"],
      ["Mapbox GL", "bg-white text-brand-wine"],
    ],
  },
  {
    company: "Krisintek",
    role: "Frontend Engineer & Web Technologist",
    location: "Independent Studio",
    date: "Aug 2022 — Present",
    desc: "Spearheading high-impact client web applications and design systems with obsessive detail toward WCAG AAA accessibility, micro-motion physics, and generative Canvas animations.",
    tags: [
      ["TypeScript", "bg-brand-magenta text-white"],
      ["Next.js / React", "bg-brand-gold text-brand-dark"],
      ["Tailwind CSS", "bg-brand-pink text-brand-wine"],
      ["GSAP", "bg-brand-lime text-brand-dark"],
    ],
  },
  {
    company: "Supraja Technologies",
    role: "Security & Systems Engineering Intern",
    location: "Cybersecurity Division",
    date: "May 2022 — Jul 2022",
    desc: "Developed a standalone desktop file encryption utility incorporating military-grade AES-256 in CBC mode paired with PBKDF2 key derivation. Conducted network traffic audits with Wireshark.",
    tags: [
      ["Python", "bg-brand-pink text-brand-wine"],
      ["AES-256", "bg-brand-gold text-brand-dark"],
      ["Wireshark", "bg-brand-lime text-brand-dark"],
    ],
  },
];

export default function ExperienceSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const cards = sectionRef.current.querySelectorAll(".service-card");

    const updateStackState = () => {
      let activeIndex = 0;
      cards.forEach((card, i) => {
        const rect = card.getBoundingClientRect();
        const stickyThreshold = 96 + i * 80;
        if (rect.top <= stickyThreshold + 10) {
          activeIndex = i;
        }
      });

      cards.forEach((card, i) => {
        if (i < activeIndex) {
          const depth = activeIndex - i;
          const scale = Math.max(0.88, 1 - depth * 0.03);
          const brightness = Math.max(0.78, 1 - depth * 0.07);

          card.style.transform = `scale(${scale})`;
          card.style.filter = `brightness(${brightness})`;
        } else {
          card.style.transform = "scale(1)";
          card.style.filter = "brightness(1)";
        }
      });
    };

    const handleScroll = () => {
      requestAnimationFrame(updateStackState);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    updateStackState();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-16 px-4 sm:px-8 max-w-5xl mx-auto border-t-2 border-brand-pink-border"
    >
      <div className="mb-12">
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-brand-wine font-black tracking-tight leading-tight">
          A journey rather than a{" "}
          <span className="text-brand-magenta underline decoration-brand-gold decoration-wavy decoration-4">
            resume.
          </span>
        </h2>

        <p className="text-brand-dark/80 text-base sm:text-lg mt-3 max-w-2xl font-medium">
          A warm, authentic note about building across systems, spatial
          interaction, real-time graphics, and playful software experiments.
        </p>
      </div>

      <div className="relative pb-24 sm:pb-36">
        {experiences.map((exp, index) => (
          <div
            key={exp.company}
            className="service-card sticky mb-24 sm:mb-32 last:mb-0 transition-all duration-300 ease-out will-change-transform"
            style={{
              top: `${96 + index * 80}px`,
              zIndex: index + 1,
            }}
          >
            <div className="bg-white rounded-3xl border-2 border-brand-dark shadow-[6px_6px_0px_#2E131C] p-7 sm:p-9 min-h-[460px] flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-3 border-brand-pink-border">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-brand-wine font-black">
                    {exp.company}
                  </h3>

                  <p className="font-mono text-sm text-brand-magenta font-black">
                    {exp.role}
                  </p>

                  <p className="text-xs text-brand-dark/70 mt-0.5">
                    {exp.location}
                  </p>
                </div>

                <span className="self-start sm:self-center font-mono text-xs font-bold text-brand-wine bg-brand-pink px-4 py-1.5 rounded-full border border-brand-dark">
                  {exp.date}
                </span>
              </div>

              <p className="text-sm sm:text-base text-brand-dark/90 leading-relaxed">
                {exp.desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {exp.tags.map(([label, classes]) => (
                  <span
                    key={label}
                    className={`font-mono text-xs font-bold px-3 py-1 rounded-full border border-brand-dark ${classes}`}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}