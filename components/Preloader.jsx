'use client'

import { useState, useEffect } from 'react'

export default function Preloader() {
  const [progress, setProgress] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    // Lock scrolling while active
    document.body.style.overflow = 'hidden'

    const duration = 1600 // ~1.6 seconds for counter ramp up
    const startTime = performance.now()
    let animationFrameId

    const updateProgress = (currentTime) => {
      const elapsed = currentTime - startTime
      const calculatedProgress = Math.min(Math.floor((elapsed / duration) * 100), 100)
      setProgress(calculatedProgress)

      if (calculatedProgress < 100) {
        animationFrameId = requestAnimationFrame(updateProgress)
      } else {
        // Counter reached 100%: trigger smooth fade-out (0.5s)
        const fadeTimer = setTimeout(() => {
          setFadeOut(true)
        }, 150)

        // Once fade-out finishes (500ms transition), hide overlay and restore scrolling
        const removeTimer = setTimeout(() => {
          setHidden(true)
          document.body.style.overflow = ''
        }, 650)

        return () => {
          clearTimeout(fadeTimer)
          clearTimeout(removeTimer)
        }
      }
    }

    animationFrameId = requestAnimationFrame(updateProgress)

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
      document.body.style.overflow = ''
    }
  }, [])

  if (hidden) return null

  return (
    <div
      id="preloader-overlay"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FFE4EC] transition-opacity duration-500 ease-out select-none ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ backgroundColor: '#FFE4EC' }}
    >
      <div className="flex flex-col items-center justify-center space-y-6 px-4 text-center">
        {/* Rotating Flower SVG */}
        <div className="animate-spin text-[#a1105a]" style={{ animationDuration: '3s' }}>
          <svg
            width="64"
            height="64"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16"
          >
            {/* Flower Petals */}
            <g fill="#a1105a">
              <circle cx="50" cy="22" r="14" />
              <circle cx="69.8" cy="30.2" r="14" />
              <circle cx="78" cy="50" r="14" />
              <circle cx="69.8" cy="69.8" r="14" />
              <circle cx="50" cy="78" r="14" />
              <circle cx="30.2" cy="69.8" r="14" />
              <circle cx="22" cy="50" r="14" />
              <circle cx="30.2" cy="30.2" r="14" />
            </g>
            {/* Center pistil */}
            <circle cx="50" cy="50" r="15" fill="#FFBA20" stroke="#a1105a" strokeWidth="2.5" />
            <circle cx="50" cy="50" r="8" fill="#a1105a" />
          </svg>
        </div>

        {/* Loading Bar & Percentage */}
        <div className="flex flex-col items-center space-y-2">
          <div className="w-[220px] h-[8px] bg-[#FFD1DF] rounded-full overflow-hidden border border-[#FFB8CE]/50">
            <div
              className="h-full bg-[#a1105a] rounded-full transition-all duration-75 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-sm font-semibold tracking-wider text-[#a1105a] font-mono">
            {progress}%
          </span>
        </div>

        {/* Cutesy Text */}
        <p className="text-sm md:text-base font-medium text-[#a1105a] tracking-wide font-sans">
          loading my little corner of the internet, just for you :)))
        </p>
      </div>
    </div>
  )
}
