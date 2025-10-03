
'use client'
import Link from 'next/link'
import Image from 'next/image'
import ScrapCard from '@/components/ScrapCard'
import ScrapbookGallery from '@/components/ScrapbookGallery'

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
            <Link href="/services" className="btn ghost">Translator Services</Link>
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

      <ScrapCard>
        <h2 className="text-2xl font-extrabold mb-2">Follow along</h2>
        <p className="text-ink/80 mb-4">Daily snippets of life in Uruguay:</p>
        <div className="flex flex-wrap gap-3">
          <a href="https://www.instagram.com/maddieinmvd" target="_blank" className="btn">Instagram</a>
          <a href="https://www.tiktok.com/@maddieinmvd" target="_blank" className="btn">TikTok</a>
          <a href="https://www.youtube.com/@MaddieinMontevideo" target="_blank" className="btn">YouTube</a>
        </div>
      </ScrapCard>

      <section className="space-y-6 mt-10">
        <h2 className="text-2xl font-bold text-center">Latest from Instagram</h2>
        <ScrapbookGallery />
      </section>

      <div className="grid lg:grid-cols-2 gap-8">
        <ScrapCard>
          <h3 className="text-xl font-bold mb-2">Translator services</h3>
          <p className="text-ink/80">Help for immigration/residency appointments. In-person support and document translation.</p>
          <Link href="/services" className="btn mt-4">Learn more</Link>
        </ScrapCard>
        <ScrapCard>
          <h3 className="text-xl font-bold mb-2">1:1 Consultations</h3>
          <p className="text-ink/80">Zoom/Meet calls about moving to Uruguay, paperwork, lifestyle and more.</p>
          <Link href="/consult" className="btn mt-4">Book now</Link>
        </ScrapCard>
      </div>
    </div>
  )
}
