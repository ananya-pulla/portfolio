export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto border-t-2 border-brand-pink-border">
      <div className="mb-10 pb-6 border-b-2 border-brand-pink-border flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-brand-magenta font-black tracking-tight leading-none">
            Selected Work <span className="text-brand-wine font-normal italic text-2xl sm:text-3xl">• Curated Projects</span>
          </h2>
          <p className="text-brand-dark/80 mt-3 max-w-2xl font-medium">
            A collection of creative technology experiments, interactive web environments, and real-time audio-visual systems.
          </p>
        </div>
      </div>

      {/* 8 Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
        {/* 1. Aetherium XR Blueprint (7 cols) */}
        <article className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border-2 border-brand-pink-border shadow-[0_12px_32px_rgba(217,0,108,0.08)] flex flex-col justify-between">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl text-brand-wine font-black">Aetherium XR Blueprint</h3>
            <p className="text-brand-magenta italic text-sm font-bold mt-1">Spatial Canvas for 3D Sketching & Volumetric Shaders</p>
            <div className="h-56 my-5 rounded-2xl overflow-hidden border-2 border-brand-pink-border bg-brand-pink-subtle relative">
              <img
                alt="Aetherium XR"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDugdc05zx79D2aWPf9eOHvsBGpc_3d8zHhf4gTBaTWwtS4VSv7umBA3e0X6MJEEHmm1PqSx22id66my_oWA7zmqfuEIskXLpGyxuG9ZWdFsCWSyWWSS23AcWltD5N-olLsgImvnu1Sig85eWlIEUshz2GSm42qtt0b5mNprPAFp_hzYcjPlpBD9H7ALmKjOg8hH7MJnof-E84Tqx7wT_U3dOXXJIpVcNWHGBbLO5YFVqDpr3I2pm_R7w"
              />
              <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-brand-wine text-brand-gold font-mono text-[10px] font-bold">
                WEBXR • SHADER TOY ENGINE
              </span>
            </div>
            <p className="text-sm text-brand-dark/80 leading-relaxed mb-4">
              Zero-latency six-degree-of-freedom volumetric brush simulation running directly in browser headsets. Custom signed distance field (SDF) raymarching with dual quaternion skinning.
            </p>
          </div>
          <div className="pt-4 border-t border-brand-pink-border flex flex-wrap items-center justify-between gap-3">
            <div className="flex gap-2">
              <span className="px-2.5 py-1 bg-brand-pink-subtle border border-brand-pink-border text-xs font-mono font-bold text-brand-wine rounded-full">WebXR</span>
              <span className="px-2.5 py-1 bg-brand-pink-subtle border border-brand-pink-border text-xs font-mono font-bold text-brand-wine rounded-full">Three.js</span>
              <span className="px-2.5 py-1 bg-brand-pink-subtle border border-brand-pink-border text-xs font-mono font-bold text-brand-wine rounded-full">GLSL</span>
            </div>
            <div className="flex gap-2">
              <a href="#" className="px-4 py-2 bg-brand-wine text-white font-mono text-xs font-bold rounded-full shadow-sm hover:scale-105 transition-all">Live Demo ↗</a>
              <a href="#" className="px-3.5 py-2 bg-white text-brand-magenta border border-brand-magenta font-mono text-xs font-bold rounded-full hover:bg-brand-pink-subtle transition-all">Source</a>
            </div>
          </div>
        </article>

        {/* 2. EchoGarden Synthesizer (5 cols) */}
        <article className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border-2 border-brand-pink-border shadow-[0_12px_32px_rgba(217,0,108,0.08)] flex flex-col justify-between">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl text-brand-wine font-black">EchoGarden Synthesizer</h3>
            <p className="text-brand-magenta italic text-sm font-bold mt-1">Procedural Music Ecosystem & Biosphere</p>
            <div className="h-52 my-5 rounded-2xl border-2 border-brand-pink-border bg-brand-pink-subtle flex items-center justify-center relative p-4">
              <svg className="w-full h-full" fill="none" viewBox="0 0 360 140">
                <path d="M 10,70 Q 55,125 110,70 T 220,70 T 330,70" stroke="#D9006C" strokeLinecap="round" strokeWidth="4"></path>
                <circle cx="110" cy="70" fill="#FFBA20" r="14" stroke="#63001E" strokeWidth="2"></circle>
                <circle cx="220" cy="70" fill="#FFB6CE" r="18" stroke="#63001E" strokeWidth="2"></circle>
              </svg>
              <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-brand-wine text-brand-gold font-mono text-[10px] font-bold">FFT 2048 BINS • P5.JS</span>
            </div>
            <p className="text-sm text-brand-dark/80 leading-relaxed mb-4">
              Generates self-pollinating digital flora whose morphological growth vectors bind dynamically to live microphone input frequencies.
            </p>
          </div>
          <div className="pt-4 border-t border-brand-pink-border flex items-center justify-between">
            <div className="flex gap-1.5">
              <span className="px-2.5 py-1 bg-brand-pink-subtle border border-brand-pink-border text-xs font-mono font-bold text-brand-wine rounded-full">React</span>
              <span className="px-2.5 py-1 bg-brand-pink-subtle border border-brand-pink-border text-xs font-mono font-bold text-brand-wine rounded-full">p5.js</span>
            </div>
            <a href="#" className="px-4 py-2 bg-brand-gold text-brand-dark font-mono text-xs font-black rounded-full shadow-sm hover:scale-105 transition-all">Player ▶</a>
          </div>
        </article>

        {/* 3. Orbital Telemetry Simulation (6 cols) */}
        <article className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border-2 border-brand-pink-border shadow-[0_12px_32px_rgba(217,0,108,0.08)] flex flex-col justify-between">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl text-brand-wine font-black">Orbital Telemetry Simulation</h3>
            <p className="text-brand-magenta italic text-sm font-bold mt-1">GSLV Spacecraft Telemetry & VR Flight Rig</p>
            <div className="h-48 my-5 rounded-2xl overflow-hidden border-2 border-brand-pink-border bg-brand-pink-subtle relative">
              <img
                alt="Telemetry Simulation"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBY4GYKsbMNoUKQYb5x-H3YRwhd_YfzCf4wtRyGChsrFHz0IWzppHkuWxFZupdRvbiuZ2GqcjIm-YGf7uutO0OqOtP5yI1qvn5chRsGKQejDrCQQSCWsGycKysY2ClgNulQ4_VaULV9B1rma4U9QodEPJIPtjY14s_uZBTRTN8qMC6QWh3hHwq92XFM9R30HKvYwVzY96bRXQbt3S-kNodcBXfvVw3mRSvts2vq_BpktRaqIf6izc2hg"
              />
              <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-brand-wine text-brand-gold font-mono text-[10px] font-bold">ISRO RESEARCH FELLOWSHIP</span>
            </div>
            <p className="text-sm text-brand-dark/80 leading-relaxed mb-4">
              Built during an HCI research fellowship with ISRO scientists to evaluate spatial ergonomic indicators during high-G trajectory shifts.
            </p>
          </div>
          <div className="pt-4 border-t border-brand-pink-border flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-brand-wine">Unity 3D • C# • Spatial HCI</span>
            <a href="#" className="px-4 py-2 bg-brand-wine text-white font-mono text-xs font-bold rounded-full shadow-sm hover:scale-105 transition-all">Paper PDF</a>
          </div>
        </article>

        {/* 4. Typography as Physics (6 cols) */}
        <article className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border-2 border-brand-pink-border shadow-[0_12px_32px_rgba(217,0,108,0.08)] flex flex-col justify-between">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl text-brand-wine font-black">Typography as Physics</h3>
            <p className="text-brand-magenta italic text-sm font-bold mt-1">Physics-Driven Font Engine & Collider System</p>
            <div className="h-48 my-5 rounded-2xl border-2 border-brand-pink-border bg-brand-pink-subtle flex items-center justify-center relative">
              <div className="flex items-baseline gap-2 select-none font-serif text-3xl sm:text-4xl font-black text-brand-wine">
                <span className="rotate-[-8deg]">A</span>
                <span className="rotate-[12deg] text-brand-magenta">N</span>
                <span className="rotate-[-4deg] text-brand-gold">A</span>
                <span className="rotate-[16deg]">N</span>
                <span className="rotate-[-6deg] text-brand-magenta">Y</span>
                <span className="rotate-[10deg]">A</span>
              </div>
              <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-white border border-brand-pink-border text-brand-wine font-mono text-[10px] font-bold">MATTER.JS SOLVER</span>
            </div>
            <p className="text-sm text-brand-dark/80 leading-relaxed mb-4">
              Glyphs decompose into spring-damper polygon colliders that wobble, crush, and ricochet with gravity and pointer impulses.
            </p>
          </div>
          <div className="pt-4 border-t border-brand-pink-border flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-brand-wine">TypeScript • Matter.js • Canvas</span>
            <a href="#" className="px-4 py-2 bg-brand-magenta text-white font-mono text-xs font-bold rounded-full shadow-sm hover:scale-105 transition-all">Sandbox ↗</a>
          </div>
        </article>

        {/* 5. PaperNotes App (4 cols) */}
        <article className="lg:col-span-4 bg-white rounded-3xl p-6 border-2 border-brand-pink-border shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="font-serif text-2xl text-brand-wine font-black">PaperNotes App</h3>
            <p className="text-brand-magenta italic text-xs font-bold">Dual-Layer Apple Pencil Journal</p>
            <div className="h-36 my-4 rounded-xl border-2 border-brand-pink-border bg-brand-pink-subtle p-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="h-2 w-3/4 bg-brand-magenta/30 rounded-full"></div>
                <div className="h-2 w-full bg-brand-gold/40 rounded-full"></div>
              </div>
              <span className="font-mono text-[10px] font-bold text-brand-magenta uppercase">MARKDOWN + STYLUS INK</span>
            </div>
            <p className="text-xs text-brand-dark/80 leading-relaxed mb-4">
              Zero cloud dependencies. Stores vectors in client-side IndexedDB with Apple Pencil stylus smoothing algorithms.
            </p>
          </div>
          <div className="pt-3 border-t border-brand-pink-border flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-brand-wine">Next.js • IndexedDB</span>
            <a href="#" className="px-3.5 py-1.5 rounded-full bg-brand-pink text-brand-magenta font-mono text-xs font-bold">Open App ↗</a>
          </div>
        </article>

        {/* 6. HoloSonics 3D Audio (4 cols) */}
        <article className="lg:col-span-4 bg-white rounded-3xl p-6 border-2 border-brand-pink-border shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="font-serif text-2xl text-brand-wine font-black">HoloSonics 3D Audio</h3>
            <p className="text-brand-magenta italic text-xs font-bold">Spatial Headset Synthesizer</p>
            <div className="h-36 my-4 rounded-xl border-2 border-brand-pink-border bg-brand-pink-subtle flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-brand-magenta text-white flex items-center justify-center shadow-md">
                <span className="material-symbols-outlined text-lg">spatial_audio</span>
              </div>
            </div>
            <p className="text-xs text-brand-dark/80 leading-relaxed mb-4">
              Calculates head-related transfer functions (HRTF) in real-time to simulate room impulse responses (RIR) with occlusion.
            </p>
          </div>
          <div className="pt-3 border-t border-brand-pink-border flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-brand-wine">HRTF • WebRTC • C++</span>
            <a href="#" className="px-3.5 py-1.5 rounded-full bg-brand-pink text-brand-magenta font-mono text-xs font-bold">GitHub</a>
          </div>
        </article>

        {/* 7. CipherCraft Lab (4 cols) */}
        <article className="lg:col-span-4 bg-white rounded-3xl p-6 border-2 border-brand-pink-border shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="font-serif text-2xl text-brand-wine font-black">CipherCraft Lab</h3>
            <p className="text-brand-magenta italic text-xs font-bold">Visual Cryptography Sandbox</p>
            <div className="h-36 my-4 rounded-xl border-2 border-brand-pink-border bg-brand-pink-subtle flex flex-col justify-center items-center p-3 font-mono text-xs">
              <div className="grid grid-cols-4 gap-1.5">
                <span className="p-1 rounded bg-brand-gold text-brand-dark font-black">0x3F</span>
                <span className="p-1 rounded bg-white text-brand-wine">0xAA</span>
                <span className="p-1 rounded bg-white text-brand-wine">0x0C</span>
                <span className="p-1 rounded bg-brand-magenta text-white">0x7B</span>
              </div>
              <span className="mt-2 text-brand-wine text-[10px] font-bold">RSA • SHA-256</span>
            </div>
            <p className="text-xs text-brand-dark/80 leading-relaxed mb-4">
              Makes abstract asymmetric cryptography visually transparent through tactile animated key pairs and entropy bars.
            </p>
          </div>
          <div className="pt-3 border-t border-brand-pink-border flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-brand-wine">Web Crypto • Svelte</span>
            <a href="#" className="px-3.5 py-1.5 rounded-full bg-brand-pink text-brand-magenta font-mono text-xs font-bold">Sandbox ↗</a>
          </div>
        </article>

        {/* 8. Light Spectrum to Audio Intonation (12 cols) */}
        <article className="lg:col-span-12 bg-white rounded-3xl p-6 sm:p-8 border-2 border-brand-pink-border shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl text-brand-wine font-black">Light Spectrum to Audio Intonation</h3>
            <p className="text-brand-magenta italic text-sm font-bold">ChromaSound: Color-to-Frequency Synesthesia Experiment</p>
            <p className="text-sm text-brand-dark/80 mt-2 max-w-2xl leading-relaxed">
              Commissioned interactive installation mapping visible nanometer wavelengths (380nm–750nm) to harmonic audio microtones (20Hz–20kHz) via spectrophotometers to Max/MSP.
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <div className="flex gap-2 p-2 bg-brand-pink-subtle border border-brand-pink-border rounded-full">
              <div className="w-6 h-6 rounded-full bg-brand-magenta"></div>
              <div className="w-6 h-6 rounded-full bg-brand-gold"></div>
              <div className="w-6 h-6 rounded-full bg-brand-lime"></div>
              <div className="w-6 h-6 rounded-full bg-brand-wine"></div>
            </div>
            <a href="#" className="px-6 py-3 bg-brand-wine text-white font-mono text-xs font-black uppercase rounded-full shadow hover:scale-105 transition-all">Exhibition Photos ↗</a>
          </div>
        </article>
      </div>
    </section>
  )
}
