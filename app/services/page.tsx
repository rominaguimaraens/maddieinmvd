import ScrapCard from '@/components/ScrapCard'

export default function ServicesPage(){
 
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
            <li>Document explanation (EN ↔ ES)</li>
            <li>Cultural context so you feel confident</li>
          </ul>
          <a href="/contact" className="btn mt-4">Enquire</a>
        </ScrapCard>

        <ScrapCard>
          <h2 className="text-2xl font-bold mb-2">1:1 Consultations</h2>
          <p className="text-ink/80">30–60 min Zoom/Meet. Ask anything about paperwork, neighborhoods, lifestyle, costs, and culture shock.</p>
          <div className="flex gap-3 mt-4">
            <a href="https://calendly.com/" target="_blank" className="btn">Book a time</a>
          </div>
        </ScrapCard>
      </div>
    </div>
  )
}
