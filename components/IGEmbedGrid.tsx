'use client'
import { useEffect } from 'react'

type Props = { urls: string[] }

export default function IGEmbedGrid({ urls }: Props) {
  useEffect(() => {
    // Ensure the script loads once and only once
    const existing = document.querySelector('script#ig-embed')
    if (!existing) {
      const script = document.createElement('script')
      script.setAttribute('src', 'https://www.instagram.com/embed.js')
      script.setAttribute('async', '')
      script.setAttribute('id', 'ig-embed')
      document.body.appendChild(script)
      script.onload = () => {
        // Process embeds once script is loaded
        ;(window as any).instgrm?.Embeds?.process()
      }
    } else {
      // Script already loaded — just process embeds again
      setTimeout(() => {
        ;(window as any).instgrm?.Embeds?.process()
      }, 100)
    }
  }, [urls])

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {urls.map((url, i) => (
        <div
          key={i}
          className="relative rounded-xl scrapbook-frame p-4 pt-6 bg-white"
        >
          <div className="washi-strip left" />
          <div className="washi-strip right" />

          {/* IG embed placeholder */}
          <blockquote
            className="instagram-media"
            data-instgrm-permalink={url}
            data-instgrm-version="14"
            style={{
              background: '#fff',
              border: 0,
              margin: 0,
              padding: 0,
              width: '100%',
              minHeight: 400,
            }}
          />
        </div>
      ))}
    </div>
  )
}
