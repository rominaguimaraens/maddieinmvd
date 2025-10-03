
import ScrapCard from '@/components/ScrapCard'
export default function AboutPage(){
  return (
    <div className='space-y-8'>
      <ScrapCard>
        <h1 className='text-3xl font-extrabold'>About Maddie</h1>
        <p><strong>Hi! I’m Maddie 👋</strong> I was born in Adelaide, Australia and in 2020 I moved across the world to Montevideo, Uruguay. Since then, I’ve built a life here with my husband Alejandro, navigating everything from learning Spanish to figuring out the residency process, the quirks of Uruguayan bureaucracy, and the everyday joys (and surprises!) of life in South America.</p>
        <p>Because I know firsthand how overwhelming it can feel to move abroad, I created this space to share what I’ve learned and to help make the process smoother for other foreigners coming to Uruguay.</p>
        <p>On my platforms — Instagram, TikTok, and YouTube — I share real stories, tips, and videos about expat life, culture shocks, daily life, and the beautiful parts of living in Uruguay.</p>
        <ul className='list-disc pl-6'>
          <li><strong>Translator services:</strong> I can accompany you to your residency or immigration appointments, helping you communicate and understand the process.</li>
          <li><strong>1:1 consultations:</strong> Book an online session with me via Zoom or Google Meets to ask questions about moving to Uruguay, paperwork, lifestyle, and more.</li>
        </ul>
        <p>If you’re dreaming of starting your own adventure here, I’d love to help you feel supported and confident in taking the next step. <em>Bienvenidos a Uruguay 🇺🇾</em></p>
      </ScrapCard>
    </div>
  )
}
