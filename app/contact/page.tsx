
import ScrapCard from '@/components/ScrapCard'
export const metadata={title:'Contact — Maddie in Montevideo'}
export default function ContactPage(){
  return (
    <div className='max-w-2xl space-y-6'>
      <ScrapCard>
        <h1 className='text-3xl font-extrabold mb-4'>Contact</h1>
        <p className='mb-4'>Email: <a className='underline' href='mailto:hello@maddieinmvd.com'>hello@maddieinmvd.com</a></p>
        <form name='contact' method='POST' data-netlify='true' action='/success' className='space-y-4'>
          <input type='hidden' name='form-name' value='contact' />
          <label className='block'><span className='text-sm font-medium'>Name</span>
            <input required name='name' className='mt-1 w-full rounded-xl border border-sky-200/70 px-3 py-2 bg-white/70' />
          </label>
          <label className='block'><span className='text-sm font-medium'>Email</span>
            <input required type='email' name='email' className='mt-1 w-full rounded-xl border border-sky-200/70 px-3 py-2 bg-white/70' />
          </label>
          <label className='block'><span className='text-sm font-medium'>Message</span>
            <textarea required name='message' rows={5} className='mt-1 w-full rounded-xl border border-sky-200/70 px-3 py-2 bg-white/70' />
          </label>
          <button className='btn' type='submit'>Send</button>
        </form>
      </ScrapCard>
    </div>
  )
}
