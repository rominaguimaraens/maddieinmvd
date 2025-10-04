
import './globals.css'
import Link from 'next/link'
import GlitterCursor from '@/components/GlitterCursor'
import ThemeToggle from '@/components/ThemeToggle'


export const metadata = {
  title: 'Maddie in Montevideo',
  description: 'Australian creator living in Uruguay. Lifestyle and fashion content.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
       <head>
        <link rel="preconnect" href="https://open.spotify.com" />
        <link rel="preconnect" href="https://i.scdn.co" />
      </head>
      <body className="min-h-screen font-display">
       
       <header className="sticky top-4 z-50 site-header">
  <nav className="mx-auto max-w-6xl px-4">
    <div className="header-inner flex items-center justify-between">
      <Link href="/" className="text-lg sm:text-xl font-extrabold tracking-tight flex gap-2">
        <span className="accent">maddieinmvd</span>
        <span className="brand-sub">/ Maddie in Montevideo</span>
      </Link>

      <div className="hidden md:flex items-center gap-2">
        <Link className="nav-pill" href="/about">About</Link>
        <Link className="nav-pill" href="/services">Services</Link>
        <Link className="nav-pill" href="/contact">Contact</Link>
        <ThemeToggle className="theme-toggle" />
      </div>
    </div>
  </nav>
</header>

        <GlitterCursor />

        <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
          {children}
        </main>

      <a href="/consult" className="fab btn" aria-label="Book a consultation">
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
