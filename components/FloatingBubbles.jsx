'use client'

import { useState, useEffect, useCallback } from 'react'

const BUBBLE_COUNT = 24

const createBubble = (id, isInitial = false) => {
  // Increased randomized sizes from 55px up to 165px
  const size = Math.floor(Math.random() * 110) + 55 
  const left = Math.random() * 90 // 0% to 90%
  const duration = Math.random() * 12 + 10 // 10s to 22s for smooth flow
  const swayDuration = Math.random() * 3 + 3.5 // 3.5s to 6.5s
  // Reduced transparency (higher opacity: 0.45 to 0.70)
  const opacity = (Math.random() * 0.25 + 0.45).toFixed(2) 
  const delay = isInitial ? -(Math.random() * duration).toFixed(2) : 0
  const swayDist = (Math.floor(Math.random() * 30) + 20) * (Math.random() > 0.5 ? 1 : -1) // 20px to 50px

  return {
    id: id || Math.random().toString(36).substring(2, 9),
    size,
    left,
    duration,
    swayDuration,
    opacity,
    delay,
    swayDist,
    popping: false,
  }
}

export default function FloatingBubbles() {
  const [bubbles, setBubbles] = useState([])

  useEffect(() => {
    // Generate initial set of bubbles scattered across screen
    const initialBubbles = Array.from({ length: BUBBLE_COUNT }).map((_, i) =>
      createBubble(`init-${i}-${Math.random().toString(36).substring(2, 6)}`, true)
    )
    setBubbles(initialBubbles)
  }, [])

  const handlePop = useCallback((id, e) => {
    e.stopPropagation()
    e.preventDefault()

    setBubbles((prev) =>
      prev.map((b) => (b.id === id ? { ...b, popping: true } : b))
    )

    // Remove popped bubble and continuously respawn a new one at bottom
    setTimeout(() => {
      setBubbles((prev) => {
        const remaining = prev.filter((b) => b.id !== id)
        const newBubble = createBubble(`respawn-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`, false)
        return [...remaining, newBubble]
      })
    }, 220)
  }, [])

  if (bubbles.length === 0) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden select-none">
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="absolute bottom-0 pointer-events-none"
          style={{
            left: `${b.left}%`,
            width: `${b.size}px`,
            height: `${b.size}px`,
            animation: `floatUp ${b.duration}s linear infinite`,
            animationDelay: `${b.delay}s`,
          }}
        >
          <div
            className="w-full h-full pointer-events-auto"
            style={{
              animation: `bubbleSway ${b.swayDuration}s ease-in-out infinite`,
              '--sway-dist': `${b.swayDist}px`,
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
                onMouseDown={(e) => handlePop(b.id, e)}
                className="w-full h-full rounded-full bubble-gloss cursor-pointer transition-transform duration-150 hover:scale-115 active:scale-90 focus:outline-none"
                style={{ opacity: b.opacity }}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
