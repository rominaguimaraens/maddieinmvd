
import ScrapCard from '@/components/ScrapCard'
export default function ServicesPage(){
  return (
    <div className='space-y-8'>
      <ScrapCard>
        <h1 className='text-3xl font-extrabold'>Translator Services</h1>
        <h3 className='text-xl font-semibold mt-4'>Immigration & Residency Support</h3>
        <p className='text-ink/80'>In-person accompaniment to appointments in Montevideo, document translation & explanation, and cultural context.</p>
        <a href='/contact' className='btn mt-3'>Enquire</a>
      </ScrapCard>
      <ScrapCard>
        <h3 className='text-xl font-semibold'>Remote Translation</h3>
        <p className='text-ink/80'>Have a letter, email, or form in Spanish? Get fast help understanding and responding.</p>
        <a href='/contact' className='btn mt-3'>Get in touch</a>
      </ScrapCard>
    </div>
  )
}
