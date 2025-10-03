
import './globals.css'
import Link from 'next/link'
import GlitterCursor from '@/components/GlitterCursor'
import ThemeToggle from '@/components/ThemeToggle'


export const metadata = {
  title: 'Maddie in Montevideo — maddieinmvd',
  description: 'Australian creator living in Uruguay. Lifestyle and fashion content.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen font-display">
        <header className="sticky top-4 z-50">
          <nav className="mx-auto max-w-6xl px-4">
            <div className="nav-pill rounded-full px-4 py-3 flex items-center justify-between">
              <Link href="/" className="text-lg sm:text-xl font-extrabold tracking-tight">
                <span className="text-sky-700">maddieinmvd</span>
                <span className="ml-2 text-ink/80">/ Maddie in Montevideo</span>
              </Link>
              <div className="hidden md:flex items-center gap-2">
                <Link className="sticker" href="/about">About</Link>
                <Link className="sticker" href="/services">Services</Link>
                <Link className="sticker" href="/contact">Contact</Link>
                <ThemeToggle />
              </div>
            </div>
          </nav>
        </header>

        <GlitterCursor />

        <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
          {children}
        </main>

        <a href="/consult" className="fixed bottom-6 right-6 z-50 btn" aria-label="Book a consultation">
          Book a consultation
        </a>

        <footer className="mt-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 text-sm flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Maddie in Montevideo</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
