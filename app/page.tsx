
'use client'
import Link from 'next/link'
import Image from 'next/image'
import ScrapCard from '@/components/ScrapCard'
import ScrapbookGallery from '@/components/ScrapbookGallery'
import SpotifyCard from '@/components/SpotifyCard'
import { section } from 'framer-motion/client'


export default function HomePage() {
  return (
    <div className="space-y-14">
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-5">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            <span className="highlight">Hi! I’m Maddie 👋</span><br/>
            <span className="text-sky-700">Australian in Uruguay</span>
          </h1>
          <p className="text-lg text-ink/80">
            Scrapbook vibes, real stories about expat life in Montevideo — culture shocks, everyday joys, and everything in between.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/consult" className="btn">Book a Consultation</Link>
         
          </div>
        </div>
        <div className="polaroid relative">
          <span className="washi-corner top left" />
          <span className="washi-corner top right" />
          <span className="washi-corner bottom left" />
          <span className="washi-corner bottom right" />
          <div className="relative h-[360px] sm:h-[420px] rounded-md overflow-hidden">
            <Image 
            src="/gallery/portrait.jpg" 
            alt="Maddie aesthetic portrait" 
            fill className="object-cover" 
            />
          </div>
        </div>
      </section>
        <section className="space-y-6 mt-10">
        <h2 className="text-2xl font-bold text-center">Latest from Instagram</h2>
        <ScrapbookGallery />
      </section>
      <section className="space-y-6 mt-10">
      <ScrapCard>
        <h2 className="text-2xl font-extrabold mb-2">Follow along</h2>
        <p className="note text-sm">Daily snippets of life in Uruguay:</p>
        <div className="flex flex-wrap gap-3">
          <a href="https://www.instagram.com/maddieinmvd" target="_blank" className="btn">Instagram</a>
          <a href="https://www.tiktok.com/@maddieinmvd" target="_blank" className="btn">TikTok</a>
          <a href="https://www.youtube.com/@MaddieinMontevideo" target="_blank" className="btn">YouTube</a>
        </div>
      </ScrapCard>
      </section>
      <section className="space-y-6 mt-10">
      <SpotifyCard
      url="https://open.spotify.com/embed/show/4PX0a6D6I5Fb9Tu2T8OtBV?utm_source=generator"
      fallbackImg="/gallery/podcast.jpg"   // put a dedicated cover if you want
      title="Podcast 🎙️"
      />
    </section>
    </div>
  )
}
