'use client'

import { useState } from 'react'

export default function FunStuffSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section id="fun-stuff" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto border-t-2 border-brand-pink-border">
      <div className="bg-white rounded-3xl p-8 border-2 border-brand-pink-border shadow-sm mb-10">
        <h2 className="font-serif text-3xl sm:text-5xl text-brand-magenta font-black">
          the little things that make me, me.
        </h2>
        <p className="text-brand-wine font-medium mt-3 text-base sm:text-lg">
          this is the corner where my hobbies escaped my resume. expect playlists, doodles, film photos, weird internet finds, tiny victories, and things that made me smile enough to save them.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
        {/* Cassette Tape Audio Player */}
        <article className="lg:col-span-7 bg-white rounded-3xl p-6 border-2 border-brand-pink-border shadow-sm">
          <div className="bg-brand-pink-subtle p-5 rounded-2xl border-2 border-brand-pink-border flex flex-col gap-4 shadow-inner">
            <div className="bg-brand-wine text-white p-5 rounded-xl border-2 border-brand-dark shadow-[4px_4px_0px_#2E131C] flex flex-col gap-3 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] font-black uppercase text-brand-gold tracking-wider">
                  TYPE-II • HIGH BIAS (CrO2) • C-60
                </span>
                <span className="font-mono text-[10px] bg-white/10 px-2.5 py-0.5 rounded text-pink-100 font-bold">
                  NR [B] ON
                </span>
              </div>
              <div className="bg-brand-lime text-brand-dark px-4 py-2 rounded-lg font-mono font-black text-sm flex items-center justify-between shadow-sm">
                <span>SIDE A : Sparks — Late Night Acoustic</span>
                <span className="text-xs text-brand-wine font-bold">03:42</span>
              </div>
              <div className="bg-black/30 p-3 rounded-lg flex items-center justify-around border border-white/15">
                <div className={`w-12 h-12 rounded-full border-2 border-brand-gold/60 flex items-center justify-center bg-brand-dark/80 shadow ${isPlaying ? 'animate-spin' : ''}`}>
                  <div className="w-5 h-5 rounded-full border border-brand-gold flex items-center justify-center">
                    <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="h-1.5 w-24 bg-brand-gold/40 rounded-full overflow-hidden">
                    <div className="h-full w-14 bg-brand-gold rounded-full"></div>
                  </div>
                  <span className="font-mono text-[9px] text-pink-200 tracking-widest">
                    TAPE COUNTER 023
                  </span>
                </div>
                <div className={`w-12 h-12 rounded-full border-2 border-brand-gold/60 flex items-center justify-center bg-brand-dark/80 shadow ${isPlaying ? 'animate-spin' : ''}`}>
                  <div className="w-5 h-5 rounded-full border border-brand-gold flex items-center justify-center">
                    <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between text-[11px] font-mono text-pink-200 pt-1">
                <span>MARTIN 000-15M • MAHOGANY</span>
                <span>BLUE YETI ON HCI TEXTBOOK</span>
              </div>
            </div>
            <div className="bg-white rounded-xl p-3 border border-brand-pink-border flex items-center justify-between px-4">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-6 bg-brand-magenta rounded"></span>
                <span className="w-1.5 h-10 bg-brand-magenta rounded"></span>
                <span className="w-1.5 h-4 bg-brand-gold rounded"></span>
                <span className="w-1.5 h-8 bg-brand-gold rounded"></span>
                <span className="w-1.5 h-7 bg-brand-magenta rounded"></span>
                <span className="w-1.5 h-3 bg-brand-magenta rounded"></span>
              </div>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="px-5 py-2 bg-brand-wine text-white font-mono text-xs font-black uppercase rounded-full hover:bg-brand-magenta shadow transition-all active:scale-95"
              >
                {isPlaying ? 'PAUSE TAKE ⏸' : 'PLAY TAKE ▶'}
              </button>
            </div>
          </div>
        </article>

        {/* Studio Desk Gouache Photo */}
        <article className="lg:col-span-5 bg-white rounded-3xl p-6 border-2 border-brand-pink-border shadow-sm flex flex-col justify-between">
          <div>
            <div className="rounded-xl overflow-hidden border border-brand-pink-border mb-4">
              <img
                alt="Studio Corner"
                className="w-full h-48 object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmDH2A2AloadiaLx-axVlPPy98MIND-z6g1jymmZeFBEaUSaLPk8aiIXQvoLqrkCBXaiwRuz10V0NFJW9qVu1J4tdFYqUNF9zmWJsKOy3aeBdqI9DNaSalMsdeh4WSGM-oF9w_1q1YRI9sipuopxL4ovkdnDwPm12z9q_dUJ2Q2pIag5Dfc3R9pVlnKj9olmDnpg1G4UAIOHtvvY4QLagOMsPvvuxf9gRpWU9zpz1rrFUXU7whpYCgYA"
              />
            </div>
            <h3 className="font-serif text-xl font-black text-brand-wine">Studio Corner at Golden Hour</h3>
            <p className="text-xs text-brand-dark/80 mt-1">
              Practicing wet-on-dry blending while waiting for webpack builds. Inspired by 1970s packaging.
            </p>
          </div>
          <div className="pt-3 border-t border-brand-pink-border flex items-center justify-between mt-4">
            <span className="text-xs font-mono font-bold text-brand-wine">Swatches: Lilac, Mint, Gold, Coral</span>
            <span className="font-mono text-xs font-black bg-brand-pink-subtle px-2.5 py-1 rounded text-brand-magenta">
              03/24 OPAQUE
            </span>
          </div>
        </article>

        {/* Mixtape Card */}
        <article className="lg:col-span-4 bg-brand-gold p-6 rounded-3xl border-2 border-amber-300 shadow-sm flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs font-black bg-brand-magenta text-white px-3 py-1 rounded-full">
              SPOTIFY CURATION
            </span>
            <h3 className="font-serif text-2xl font-black text-brand-dark mt-3">Code & Cinnamon Tea</h3>
            <p className="text-xs text-brand-dark/80 mt-1">
              24 tracks • 1 hr 48 min of math rock rhythms, jazz piano loops, and tape hum.
            </p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              <span className="bg-white text-brand-wine text-[11px] font-mono font-bold px-2 py-0.5 rounded">Toe</span>
              <span className="bg-white text-brand-wine text-[11px] font-mono font-bold px-2 py-0.5 rounded">Elephant Gym</span>
              <span className="bg-white text-brand-wine text-[11px] font-mono font-bold px-2 py-0.5 rounded">Ryo Fukui</span>
            </div>
          </div>
          <a
            href="#"
            className="mt-5 py-2.5 bg-brand-wine text-white text-center font-mono text-xs uppercase font-black rounded-full shadow hover:bg-brand-magenta transition-colors"
          >
            Open on Spotify ↗
          </a>
        </article>

        {/* Tablature & Lyrics */}
        <article className="lg:col-span-8 bg-white p-6 rounded-3xl border-2 border-brand-pink-border shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs font-black bg-brand-pink text-brand-wine px-3 py-1 rounded-full">
                ACOUSTIC CHARTS
              </span>
              <span className="font-mono text-xs font-bold text-brand-dark">KEY: D MINOR</span>
            </div>
            <h3 className="font-serif text-2xl font-black text-brand-wine">Echoes in the Terminal</h3>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 my-3">
              <div className="p-2 bg-brand-pink-subtle text-center rounded-lg border border-brand-pink-border font-mono text-xs font-bold text-brand-magenta">Dm7</div>
              <div className="p-2 bg-brand-pink-subtle text-center rounded-lg border border-brand-pink-border font-mono text-xs font-bold text-brand-magenta">BbM7</div>
              <div className="p-2 bg-brand-pink-subtle text-center rounded-lg border border-brand-pink-border font-mono text-xs font-bold text-brand-magenta">C</div>
              <div className="p-2 bg-brand-pink-subtle text-center rounded-lg border border-brand-pink-border font-mono text-xs font-bold text-brand-magenta">F</div>
              <div className="p-2 bg-brand-pink-subtle text-center rounded-lg border border-brand-pink-border font-mono text-xs font-bold text-brand-magenta">Asus4</div>
              <div className="p-2 bg-brand-pink-subtle text-center rounded-lg border border-brand-pink-border font-mono text-xs font-bold text-brand-magenta">A7</div>
            </div>
            <p className="italic text-sm text-brand-dark/90 bg-brand-pink-subtle p-3 rounded-lg border-l-4 border-brand-magenta">
              “Flashing cursors keep the cadence while the city goes to sleep...”
            </p>
          </div>
        </article>

        {/* Memo & Zines */}
        <article className="lg:col-span-5 bg-amber-100 p-6 rounded-3xl border-2 border-amber-300 shadow-sm">
          <span className="font-mono text-xs font-black text-brand-wine uppercase">TYPEWRITER MEMO • 01:14 AM</span>
          <h3 className="font-serif text-2xl font-black text-brand-wine mt-1">On Latency & Longing</h3>
          <p className="text-sm text-brand-dark/90 mt-2 leading-relaxed">
            We obsess over trimming 16 milliseconds from render frames so the interface feels instantaneous, yet we leave handwritten letters unposted for three weeks.
          </p>
        </article>
      </div>
    </section>
  )
}
