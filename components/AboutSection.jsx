export default function AboutSection() {
  return (
    <section id="about" className="pt-12 pb-16 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 flex flex-col">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[56px] text-brand-magenta font-black tracking-tight leading-[1.08] mb-5">
            Where spatial computing meets <span className="text-brand-wine underline decoration-wavy decoration-brand-gold decoration-4">tactile</span> storytelling.
          </h1>
          <p className="text-lg lg:text-xl text-brand-wine/90 mb-5 font-medium leading-relaxed">
            I'm Ananya Pulla — a final-year Computer Science & Engineering undergrad who views source code like charcoal sticks and 3D spatial matrices like fresh vellum paper.
          </p>
          <p className="text-base lg:text-lg text-brand-dark/85 mb-8 leading-relaxed font-normal">
            I build spatial computing environments and playful software that respect physical human warmth: interfaces you can practically feel, real-time shaders tuned to acoustic resonance, and computational tools that feel as joyful and forgiving as rough draft pencil sketches.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/Ananya_Pulla_Resume.pdf"
              download="Ananya_Pulla_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-wine text-white px-7 py-3.5 rounded-full font-mono text-sm font-black shadow-md hover:bg-brand-wine/90 transition-all hover:scale-105"
            >
              <span>Download Resume</span>
              <span className="material-symbols-outlined text-lg">download</span>
            </a>
          </div>
        </div>

        {/* Illustration Avatar Card */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative w-full max-w-md bg-white p-5 rounded-3xl shadow-[0_20px_50px_rgba(217,0,108,0.18)] border-4 border-white rotate-1">
            <div className="w-full aspect-square rounded-2xl overflow-hidden bg-brand-pink-subtle">
              <img
                alt="Ananya Pulla"
                className="w-full h-full object-cover"
                src="/avatar.jpg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Milestones Sub-grid */}
      <div className="mt-20 pt-12 border-t-2 border-brand-pink-border">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-magenta font-black">
            Leadership & Venture Milestones
          </h2>
          <p className="text-brand-wine italic font-medium mt-2 md:mt-0">
            Building spaces for creative collisions, collaborative game jams, and playful tech prototypes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-7 rounded-2xl border-2 border-brand-pink-border shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[11px] font-black bg-brand-gold text-brand-dark px-2.5 py-1 rounded-full">
                  ★ COLLECTIVE • XR
                </span>
                <span className="font-mono text-[11px] font-black bg-brand-magenta text-white px-2.5 py-1 rounded-full">
                  HEAD OF PR
                </span>
              </div>
              <h3 className="font-serif text-2xl font-black text-brand-wine mb-1">The GameSmiths</h3>
              <p className="font-mono text-xs text-brand-magenta font-bold uppercase mb-3">
                Game Design & Interactive Tech
              </p>
              <p className="text-sm text-brand-dark/80 leading-relaxed">
                Led brand storytelling, game jam curation, and digital dissemination for over 350+ student game designers, VR developers, and 3D environment artists.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-brand-pink-border flex items-center justify-between text-xs font-mono text-brand-wine font-black">
              <span>3 Hackathons • 8 Titles</span>
              <span className="material-symbols-outlined text-brand-magenta">sports_esports</span>
            </div>
          </div>

          <div className="bg-white p-7 rounded-2xl border-2 border-brand-pink-border shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[11px] font-black bg-brand-gold text-brand-dark px-2.5 py-1 rounded-full">
                  ★ VENTURE TRACK
                </span>
                <span className="font-mono text-[11px] font-black bg-brand-gold text-brand-dark px-2.5 py-1 rounded-full">
                  FELLOW • 2024
                </span>
              </div>
              <h3 className="font-serif text-2xl font-black text-brand-wine mb-1">
                National Entrepreneurship
              </h3>
              <p className="font-mono text-xs text-brand-magenta font-bold uppercase mb-3">
                Leadership & Venture Fellow
              </p>
              <p className="text-sm text-brand-dark/80 leading-relaxed">
                Selected among top undergraduate innovators across 40+ engineering campuses. Spearheaded early-stage research into spatial accessibility tools for neurodivergent creators.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-brand-pink-border flex items-center justify-between text-xs font-mono text-brand-wine font-black">
              <span>Grant Finalist • Incubated</span>
              <span className="material-symbols-outlined text-brand-magenta">lightbulb</span>
            </div>
          </div>

          <div className="bg-white p-7 rounded-2xl border-2 border-brand-pink-border shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[11px] font-black bg-brand-gold text-brand-dark px-2.5 py-1 rounded-full">
                  ★ ACOUSTIC UNION
                </span>
                <span className="font-mono text-[11px] font-black bg-brand-wine text-white px-2.5 py-1 rounded-full">
                  FOUNDER • LEAD
                </span>
              </div>
              <h3 className="font-serif text-2xl font-black text-brand-wine mb-1">
                Ananya Pulla, The Music Club
              </h3>
              <p className="font-mono text-xs text-brand-magenta font-bold uppercase mb-3">
                Live Sets & Acoustic Jams
              </p>
              <p className="text-sm text-brand-dark/80 leading-relaxed">
                Founded an open-source sanctuary for campus instrumentalists, vocalists, and sound designers. Curated 14 intimate acoustic campfire sessions and 3D audio recordings.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-brand-pink-border flex items-center justify-between text-xs font-mono text-brand-wine font-black">
              <span>120+ Musicians • 14 Sets</span>
              <span className="material-symbols-outlined text-brand-magenta">graphic_eq</span>
            </div>
          </div>
        </div>
      </div>

      {/* The Hybrid Toolkit */}
      <div className="mt-16 pt-12 border-t-2 border-brand-pink-border">
        <h2 className="font-serif text-3xl sm:text-4xl text-brand-magenta font-black mb-2">
          The Hybrid Toolkit
        </h2>
        <p className="text-brand-wine font-medium mb-8">
          Organized in three complementary orbits: technical infrastructure, HCI heuristics, and expressive analog media.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border-2 border-brand-pink-border shadow-sm">
            <h3 className="font-serif text-lg font-black text-brand-wine mb-1">Spatial & Code</h3>
            <p className="text-xs text-brand-dark/70 mb-4">
              Three.js, WebGL, WebXR, Unity (C#), TypeScript, React, Next.js, Python, GLSL
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-brand-pink-subtle border border-brand-pink-border rounded-full text-xs font-mono font-bold text-brand-wine">
                WebXR
              </span>
              <span className="px-3 py-1 bg-brand-pink-subtle border border-brand-pink-border rounded-full text-xs font-mono font-bold text-brand-wine">
                Three.js
              </span>
              <span className="px-3 py-1 bg-brand-pink-subtle border border-brand-pink-border rounded-full text-xs font-mono font-bold text-brand-wine">
                GLSL
              </span>
              <span className="px-3 py-1 bg-brand-pink-subtle border border-brand-pink-border rounded-full text-xs font-mono font-bold text-brand-wine">
                Unity
              </span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border-2 border-brand-pink-border shadow-sm">
            <h3 className="font-serif text-lg font-black text-brand-wine mb-1">Interaction & Design</h3>
            <p className="text-xs text-brand-dark/70 mb-4">
              Designing user psychology models, spatial audio attenuation curves, and gestural ergonomics.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-brand-gold text-brand-dark rounded-full text-xs font-mono font-black">
                HCI Research
              </span>
              <span className="px-3 py-1 bg-brand-pink-subtle border border-brand-pink-border rounded-full text-xs font-mono font-bold text-brand-wine">
                Figma
              </span>
              <span className="px-3 py-1 bg-brand-pink-subtle border border-brand-pink-border rounded-full text-xs font-mono font-bold text-brand-wine">
                Blender 3D
              </span>
              <span className="px-3 py-1 bg-brand-pink-subtle border border-brand-pink-border rounded-full text-xs font-mono font-bold text-brand-wine">
                Spatial Audio
              </span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border-2 border-brand-pink-border shadow-sm">
            <h3 className="font-serif text-lg font-black text-brand-wine mb-1">Creative Soul</h3>
            <p className="text-xs text-brand-dark/70 mb-4">
              Physical roots that keep digital work tangible, warm, and musical.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-brand-gold text-brand-dark rounded-full text-xs font-mono font-black">
                Gouache
              </span>
              <span className="px-3 py-1 bg-brand-pink-subtle border border-brand-pink-border rounded-full text-xs font-mono font-bold text-brand-wine">
                Acoustic Guitar
              </span>
              <span className="px-3 py-1 bg-brand-pink-subtle border border-brand-pink-border rounded-full text-xs font-mono font-bold text-brand-wine">
                Vocal Polyphony
              </span>
              <span className="px-3 py-1 bg-brand-pink-subtle border border-brand-pink-border rounded-full text-xs font-mono font-bold text-brand-wine">
                Nonfiction
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
