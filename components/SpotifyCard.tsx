'use client'

export default function SpotifyCard() {
  return (
    <div className="paper torn">
      <div className="mb-3 flex items-center gap-2">
        <span className="sticker">🎧</span>
        <h3 className="text-xl font-bold">What I’m listening to</h3>
      </div>
      {/* Replace playlist URL if you like */}
      <div className="rounded-xl overflow-hidden shadow-md">
        <iframe
          style={{ border: 0, width: '100%', height: 352 }}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          src="https://open.spotify.com/playlist/37i9dQZF1DX6QClArDhvcW?si=bee4793ea75b498f"
        />
      </div>
      <p className="text-sm text-ink/70 mt-3">Soft pop + girly vibes while editing ✨</p>
    </div>
  )
}
