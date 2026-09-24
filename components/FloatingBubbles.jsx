'use client'

import { useState, useEffect, useCallback } from 'react'

const BUBBLE_COUNT = 38

const createBubble = (id) => {
  const size = Math.floor(Math.random() * 110) + 55 // 55px to 165px
  const left = (Math.random() * 88 + 2).toFixed(2) // 2% to 90%
  const top = (Math.random() * 95 + 1).toFixed(2) // 1% to 96% of entire document height
  const driftDuration = (Math.random() * 6 + 5).toFixed(2) // 5s to 11s drift duration
  const opacity = (Math.random() * 0.25 + 0.45).toFixed(2) // 0.45 to 0.70
  const delay = -(Math.random() * driftDuration).toFixed(2)
  const swayDist = (Math.floor(Math.random() * 30) + 15) * (Math.random() > 0.5 ? 1 : -1) // 15px to 45px
  const floatDist = -(Math.floor(Math.random() * 35) + 20) // -20px to -55px

  return {
    id: id || Math.random().toString(36).substring(2, 9),
    size,
    left,
    top,
    driftDuration,
    opacity,
    delay,
    swayDist,
    floatDist,
    popping: false,
  }
}

export default function FloatingBubbles() {
  const [bubbles, setBubbles] = useState([])

  useEffect(() => {
    // Generate initial set of bubbles distributed across full document height
    const initialBubbles = Array.from({ length: BUBBLE_COUNT }).map((_, i) =>
      createBubble(`init-${i}-${Math.random().toString(36).substring(2, 6)}`)
    )
    setBubbles(initialBubbles)
  }, [])

  const handlePop = useCallback((id, e) => {
    e.stopPropagation()
    e.preventDefault()

    setBubbles((prev) =>
      prev.map((b) => (b.id === id ? { ...b, popping: true } : b))
    )

    // Remove popped bubble and respawn a new one distributed across document
    setTimeout(() => {
      setBubbles((prev) => {
        const remaining = prev.filter((b) => b.id !== id)
        const newBubble = createBubble(`respawn-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`)
        return [...remaining, newBubble]
      })
    }, 220)
  }, [])

  if (bubbles.length === 0) return null

  return (
    <div className="absolute inset-0 w-full min-h-full h-full pointer-events-none z-0 overflow-hidden select-none">
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="absolute pointer-events-auto"
          style={{
            left: `${b.left}%`,
            top: `${b.top}%`,
            width: `${b.size}px`,
            height: `${b.size}px`,
            animation: `bubbleDrift ${b.driftDuration}s ease-in-out infinite`,
            animationDelay: `${b.delay}s`,
            '--sway-dist': `${b.swayDist}px`,
            '--float-dist': `${b.floatDist}px`,
          }}
        >
          {b.popping ? (
            /* Click-to-Pop Burst Animation */
            <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
              {/* Pop expand ring */}
              <div
                className="absolute inset-0 rounded-full bg-[#D9006C]/30 border border-white scale-150 opacity-0 transition-all duration-200 ease-out"
              />
              {/* 6 outward fading droplet particles */}
              {[0, 60, 120, 180, 240, 300].map((deg, i) => {
                const rad = (deg * Math.PI) / 180
                const dist = b.size * 0.75
                const tx = Math.cos(rad) * dist
                const ty = Math.sin(rad) * dist
                return (
                  <div
                    key={i}
                    className="absolute rounded-full bg-white/90 shadow-sm"
                    style={{
                      width: `${Math.max(4, Math.floor(b.size / 5))}px`,
                      height: `${Math.max(4, Math.floor(b.size / 5))}px`,
                      transform: `translate(${tx}px, ${ty}px)`,
                      opacity: 0,
                      transition: 'transform 0.2s ease-out, opacity 0.2s ease-out',
                    }}
                  />
                )
              })}
            </div>
          ) : (
            /* Glossy Bubble */
            <button
              type="button"
              aria-label="Pop bubble"
              onClick={(e) => handlePop(b.id, e)}
              className="w-full h-full rounded-full bubble-gloss cursor-pointer transition-transform duration-150 hover:scale-115 active:scale-90 focus:outline-none"
              style={{ opacity: b.opacity }}
            />
          )}
        </div>
      ))}
    </div>
  )
}
