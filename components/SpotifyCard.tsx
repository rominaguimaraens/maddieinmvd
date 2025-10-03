'use client'
import { useEffect, useState } from 'react'

type Props = {
  // your playlist/album/track embed URL (can be any Spotify embed)
  url?: string
  // optional local fallback image in /public (recommended)
  fallbackImg?: string
  title?: string
  note?: string
}

export default function SpotifyCard({
  url = "open.spotify.com/embed/playlist/37i9dQZF1DXaPKG3ZvmX8f?utm_source=generator",
  fallbackImg = "/textures/paper.png", // put a cute cover in /public and change this
  title = "What I’m listening to",
  note = "Cozy sleepover vibes ✨",
}: Props) {
  const [loaded, setLoaded] = useState(false)
  const [blocked, setBlocked] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => {
      // if iframe didn't load within 2s, assume blocked
      if (!loaded) setBlocked(true)
    }, 2000)
    return () => clearTimeout(t)
  }, [loaded, url])

  return (
    <div className="paper torn">
      <div className="mb-3 flex items-center gap-2">
        <span className="sticker">🎧</span>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>

      {!blocked ? (
        <div className="rounded-xl overflow-hidden shadow-md bg-white">
          <iframe
            style={{ border: 0, width: '100%', height: 352 }}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            src={url}
            onLoad={() => setLoaded(true)}
          />
        </div>
      ) : (
        // Fallback card if iframe is blocked
        <a
          href={url.replace('/embed/', '/')} // open normal spotify page
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-xl overflow-hidden shadow-md scrapbook-frame bg-white hover:scale-[1.01] transition"
          style={{ textDecoration: 'none' }}
        >
          <div className="relative" style={{ aspectRatio: '1.6 / 1' }}>
            <img
              src={fallbackImg}
              alt="Open on Spotify"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/15" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
              <span className="sticker">🎵</span>
              <span className="font-semibold">Open on Spotify ↗</span>
            </div>
          </div>
        </a>
      )}

      {note && <p className="text-sm text-ink/70 mt-3">{note}</p>}
    </div>
  )
}
