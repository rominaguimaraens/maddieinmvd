import ScrapCard from '@/components/ScrapCard'
import SpotifyCard from '@/components/SpotifyCard'
import IGEmbedGrid from '@/components/IGEmbedGrid'

export default function ServicesPage(){
  // put real IG post/reel URLs here:
  const IG_URLS = [
    "https://www.instagram.com/maddie_malann/reel/DPSf6BUjBT9",
    "https://www.instagram.com/maddieinmvd/reel/DPM-N6kDrUv",
    "https://www.instagram.com/maddieinmvd/p/DPMbwMwDsUt",
  ]

  return (
    <div className="space-y-10">
      <ScrapCard>
        <h1 className="text-3xl font-extrabold">Services</h1>
        <p className='text-ink/80'>Translations + Residency support + 1:1 consultations — tailored for new arrivals and the Uruguay‑curious.</p>
      </ScrapCard>

      <div className="grid lg:grid-cols-2 gap-8">
        <ScrapCard>
          <h2 className="text-2xl font-bold mb-2">Translator & Appointment Support</h2>
          <ul className="list-disc pl-5 text-ink/80">
            <li>In‑person accompaniment to immigration/residency appointments</li>
            <li>Document translation & explanation (EN ↔ ES)</li>
            <li>Cultural context so you feel confident</li>
          </ul>
          <a href="/contact" className="btn mt-4">Enquire</a>
        </ScrapCard>

        <ScrapCard>
          <h2 className="text-2xl font-bold mb-2">1:1 Consultations</h2>
          <p className="text-ink/80">30–60 min Zoom/Meet. Ask anything about paperwork, neighborhoods, lifestyle, costs, and culture shock.</p>
          <div className="flex gap-3 mt-4">
            <a href="https://calendly.com/" target="_blank" className="btn">Book a time</a>
            <a href="/checklist" className="btn ghost">See moving checklist</a>
          </div>
        </ScrapCard>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        <SpotifyCard />
        <ScrapCard>
          <h3 className="text-xl font-bold mb-3">Latest on Instagram</h3>
          <p className="text-sm text-ink/70 mb-4">Peeks into daily life and culture shocks:</p>
          {IG_URLS.length === 0 ? (
            <p className="text-ink/60 text-sm">Add post/reel links in <code>app/services/page.tsx</code> (array <code>IG_URLS</code>)</p>
          ) : (
            <IGEmbedGrid urls={IG_URLS} />
          )}
        </ScrapCard>
      </div>
    </div>
  )
}
