'use client'
import Image from 'next/image'

const posts = [
  { src: '/gallery/pride-building.png', alt: 'Maddie at pride-lit building', caption: 'Montevideo Pride 🏳️‍🌈' },
  { src: '/gallery/gauchos-back.png', alt: 'Maddie at rural event', caption: 'Little beach moment 🏖️'},
  { src: '/gallery/rio-beach.png', alt: 'Maddie on beach in Brazil', caption: 'Rural vibes in Uruguay 🐴' }
]

export default function ScrapbookGallery() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {posts.map((post, i) => (
        <div key={i} className="relative rounded-lg p-4 pt-6 scrapbook-frame">
          <div className="washi-strip left" />
          <div className="washi-strip right" />
          <div className="relative h-[300px] w-full rounded-lg overflow-hidden mb-4">
            <Image src={post.src} alt={post.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
          </div>
          <p className="text-center text-sm text-ink/80">{post.caption}</p>
        </div>
      ))}
    </div>
  )
}
