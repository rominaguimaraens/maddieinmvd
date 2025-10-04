'use client'
import { useEffect, useState } from 'react'
import clsx from 'clsx'

export default function ThemeToggle({ className = '' }: { className?: string }) {
  const [theme, setTheme] = useState<'day' | 'night'>('day')

  useEffect(() => {
    const current = document.documentElement.getAttribute('data-theme') as 'day' | 'night' | null
    if (current) setTheme(current)
  }, [])

  const toggle = () => {
    const next = theme === 'night' ? 'day' : 'night'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('theme', next)
  }

  return (
    <button onClick={toggle} className={clsx('theme-toggle', className)}>
      <span aria-hidden>{theme === 'night' ? '🌙' : '🌤️'}</span>
      {theme === 'night' ? 'Nightdream' : 'Daydream'}
    </button>
  )
}

