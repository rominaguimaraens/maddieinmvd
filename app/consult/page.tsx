
import ScrapCard from '@/components/ScrapCard'
export default function ConsultPage(){
  return (
    <div className='space-y-8'>
      <ScrapCard>
        <h1 className='text-3xl font-extrabold'>1:1 Consultations</h1>
        <p className='text-ink/80 max-w-2xl'>Book a Zoom/Google Meet session to ask anything about moving to Uruguay — paperwork, neighborhoods, lifestyle costs, culture shock, and practical tips.</p>
        <div className='flex gap-3 mt-4'>
          <a href='https://calendly.com/' target='_blank' className='btn'>Open Booking</a>
          <a href='/contact' className='btn ghost'>Ask a question</a>
        </div>
      </ScrapCard>
      <ScrapCard>
        <h3 className='text-xl font-semibold mb-2'>What you get</h3>
        <ul className='list-disc pl-6 text-ink/80'>
          <li>30–60 min video call on Zoom/Meet</li>
          <li>Tailored advice for your situation</li>
          <li>Follow-up notes & relevant links</li>
        </ul>
      </ScrapCard>
    </div>
  )
}
