// components/ScrapbookGallery.tsx
'use client'
import Image from 'next/image'

const posts = [
  { src: '/gallery/pride-building.png', alt: 'Maddie at pride-lit building', caption: 'Montevideo Pride 🏳️‍🌈' },
  { src: '/gallery/gauchos-back.png',   alt: 'Maddie at rural event',        caption: 'Rural vibes in Uruguay 🐴' },
  { src: '/gallery/rio-beach.png',      alt: 'Maddie on beach in Brazil',    caption: 'Little beach moment 🏖️' },
]

export default function ScrapbookGallery() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {posts.map((post, i) => (
        <div key={i} className="relative p-4 pt-6 ig-card hover:scale-[1.01] transition">
          {/* washi takes theme colors via CSS vars */}
          <div className="washi-strip left" />
          <div className="washi-strip right" />

          <div className="relative h-[300px] w-full rounded-lg overflow-hidden mb-4">
            <Image
              src={post.src}
              alt={post.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority={i === 0}
            />
          </div>

          {/* caption -> off-white at night via CSS var */}
          <p className="ig-note">{post.caption}</p>
        </div>
      ))}
    </div>
  )
}
