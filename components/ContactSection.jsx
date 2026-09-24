'use client'

import { useState } from 'react'

export default function ContactSection() {
  const [stamp, setStamp] = useState('SPATIAL / XR')
  const [copied, setCopied] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Letter folded and dispatched!')
  }

  const copyEmail = () => {
    navigator.clipboard.writeText('ananya.sketchcode@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto border-t-2 border-brand-pink-border pb-24">
      <div className="mb-10">
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-brand-wine font-black tracking-tight leading-none">
          Say hello.
        </h2>
        <p className="text-brand-dark/80 text-base sm:text-lg mt-3 max-w-xl font-medium">
          got an idea, a question, or just want to say hi? my inbox is always open.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Airmail Letter Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-3 border-2 border-brand-dark shadow-[6px_6px_0px_#2E131C]">
          <div className="airmail-stripe p-3 rounded-2xl">
            <div className="bg-[#FFFDF7] p-6 rounded-xl border border-brand-dark/20 flex flex-col gap-5">
              <div className="flex items-center justify-between border-b-2 border-dashed border-brand-pink-border pb-3">
                <span className="font-serif font-black text-base text-brand-wine flex items-center gap-2">
                  <span className="material-symbols-outlined text-brand-magenta">mail</span> Write a letter to Ananya
                </span>
                <span className="text-xs font-mono font-bold bg-white px-3 py-1 rounded-full border border-brand-wine">
                  📬 Direct Mail
                </span>
              </div>

              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-xs font-black uppercase text-brand-wine block mb-1">
                      What should I call you? *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Robin or Prof. Vance"
                      className="w-full bg-white px-4 py-2 rounded-full border-2 border-brand-dark font-mono text-xs focus:outline-none focus:border-brand-magenta"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs font-black uppercase text-brand-wine block mb-1">
                      Where can I write back? *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="name@domain.xyz"
                      className="w-full bg-white px-4 py-2 rounded-full border-2 border-brand-dark font-mono text-xs focus:outline-none focus:border-brand-magenta"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-mono text-xs font-black uppercase text-brand-wine block mb-2">
                    Select Postage Stamp / Intention:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <label
                      onClick={() => setStamp('SPATIAL / XR')}
                      className={`p-2.5 rounded-xl border border-brand-dark text-center cursor-pointer transition-colors ${
                        stamp === 'SPATIAL / XR' ? 'bg-brand-pink-border font-bold' : 'bg-brand-pink hover:bg-brand-pink-border'
                      }`}
                    >
                      <input type="radio" name="stamp" className="sr-only" checked={stamp === 'SPATIAL / XR'} readOnly />
                      <span className="block font-mono text-[11px] font-black text-brand-wine">SPATIAL / XR</span>
                      <span className="text-[10px] text-brand-dark/70">12¢</span>
                    </label>

                    <label
                      onClick={() => setStamp('SWE / HCI')}
                      className={`p-2.5 rounded-xl border border-brand-dark text-center cursor-pointer transition-colors ${
                        stamp === 'SWE / HCI' ? 'bg-brand-pink-border font-bold' : 'bg-brand-pink hover:bg-brand-pink-border'
                      }`}
                    >
                      <input type="radio" name="stamp" className="sr-only" checked={stamp === 'SWE / HCI'} readOnly />
                      <span className="block font-mono text-[11px] font-black text-brand-wine">SWE / HCI</span>
                      <span className="text-[10px] text-brand-dark/70">24¢</span>
                    </label>

                    <label
                      onClick={() => setStamp('MUSIC JAM')}
                      className={`p-2.5 rounded-xl border border-brand-dark text-center cursor-pointer transition-colors ${
                        stamp === 'MUSIC JAM' ? 'bg-amber-300 font-bold' : 'bg-brand-gold hover:bg-amber-300'
                      }`}
                    >
                      <input type="radio" name="stamp" className="sr-only" checked={stamp === 'MUSIC JAM'} readOnly />
                      <span className="block font-mono text-[11px] font-black text-brand-dark">MUSIC JAM</span>
                      <span className="text-[10px] text-brand-dark/70">08¢</span>
                    </label>

                    <label
                      onClick={() => setStamp('JUST SAY HI')}
                      className={`p-2.5 rounded-xl border border-brand-dark text-center cursor-pointer transition-colors ${
                        stamp === 'JUST SAY HI' ? 'bg-brand-pink-border font-bold' : 'bg-brand-pink-subtle hover:bg-brand-pink-border'
                      }`}
                    >
                      <input type="radio" name="stamp" className="sr-only" checked={stamp === 'JUST SAY HI'} readOnly />
                      <span className="block font-mono text-[11px] font-black text-brand-wine">JUST SAY HI</span>
                      <span className="text-[10px] text-brand-dark/70">05¢</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="font-mono text-xs font-black uppercase text-brand-wine block mb-1">
                    Your Message *
                  </label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Dear Ananya, I came across your work on tactile spatial interfaces and wanted to chat about..."
                    className="w-full bg-white p-3 rounded-xl border-2 border-brand-dark font-sans text-sm focus:outline-none focus:border-brand-magenta"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto self-end px-8 py-3.5 bg-brand-wine text-white font-mono text-xs font-black uppercase rounded-full border border-brand-dark shadow-[3px_3px_0px_#2E131C] hover:bg-brand-magenta transition-all"
                >
                  Fold & Dispatch Letter ✉
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Right: Find Me Elsewhere */}
        <div className="lg:col-span-5 bg-white p-7 rounded-3xl border-2 border-brand-dark shadow-[6px_6px_0px_#2E131C] flex flex-col gap-5">
          <div className="flex items-center justify-between border-b pb-3 border-brand-pink-border">
            <h3 className="font-serif text-2xl font-black text-brand-wine">Find Me Elsewhere</h3>
            <span className="font-mono text-xs font-bold bg-brand-pink px-3 py-1 rounded-full border border-brand-dark">
              6 Links
            </span>
          </div>

          <div className="bg-brand-pink-subtle p-3 rounded-xl border border-brand-dark/20 flex items-center justify-between">
            <div>
              <span className="block font-mono text-[10px] uppercase font-bold text-brand-wine">Direct Email</span>
              <span className="font-mono text-xs font-bold text-brand-dark">ananya.sketchcode@gmail.com</span>
            </div>
            <button
              onClick={copyEmail}
              className="px-3 py-1.5 bg-brand-magenta text-white font-mono text-xs font-black rounded-lg"
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>

          <div className="flex flex-col gap-2.5">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white hover:bg-brand-pink-subtle rounded-xl border border-brand-dark/20 flex items-center justify-between text-xs font-mono font-bold text-brand-wine transition-all"
            >
              <span>GitHub (@ananya-codes)</span> ↗
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white hover:bg-brand-pink-subtle rounded-xl border border-brand-dark/20 flex items-center justify-between text-xs font-mono text-brand-wine font-bold transition-all"
            >
              <span>LinkedIn (/in/ananya-creative)</span> ↗
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white hover:bg-brand-pink-subtle rounded-xl border border-brand-dark/20 flex items-center justify-between text-xs font-mono text-brand-wine font-bold transition-all"
            >
              <span>Instagram (@ananya.art.journal)</span> ↗
            </a>
            <a
              href="https://spotify.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white hover:bg-brand-pink-subtle rounded-xl border border-brand-dark/20 flex items-center justify-between text-xs font-mono text-brand-wine font-bold transition-all"
            >
              <span>Spotify (Playlists & Open D Jams)</span> ↗
            </a>
            <a
              href="https://behance.net"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white hover:bg-brand-pink-subtle rounded-xl border border-brand-dark/20 flex items-center justify-between text-xs font-mono text-brand-wine font-bold transition-all"
            >
              <span>Behance (Spatial Case Studies)</span> ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
