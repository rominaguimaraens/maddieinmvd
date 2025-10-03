'use client'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'day' | 'night'>('day')

  useEffect(() => {
    // read saved preference
    const saved = (localStorage.getItem('maddie-theme') as 'day' | 'night') || 'day'
    setTheme(saved)
    document.documentElement.setAttribute('data-theme', saved)
  }, [])

  const toggle = () => {
    const next = theme === 'day' ? 'night' : 'day'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('maddie-theme', next)
  }

  return (
    <button onClick={toggle} className="sticker" aria-label="Toggle theme">
      {theme === 'day' ? '🌙 Nightdream' : '🌤️ Daydream'}
    </button>
  )
}
