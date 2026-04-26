import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'

export const Route = createFileRoute('/exploration')({
  component: ExplorationPage,
})

type Lang = 'fr' | 'en'

function LangBlock({ lang, current, children }: { lang: Lang; current: Lang; children: React.ReactNode }) {
  if (lang !== current) return null
  return <>{children}</>
}

// ── Starfield ──
function Starfield() {
  const starsRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const container = starsRef.current
    if (!container || container.children.length > 0) return
    for (let i = 0; i < 120; i++) {
      const el = document.createElement('div')
      el.className = 'star'
      const sz = Math.random() * 2.2 + 0.4
      el.style.cssText = `left:${Math.random() * 100}%;top:${Math.random() * 100}%;width:${sz}px;height:${sz}px;--dur:${(Math.random() * 4 + 2).toFixed(1)}s;--op:${(Math.random() * 0.5 + 0.2).toFixed(2)};animation-delay:${(Math.random() * 6).toFixed(1)}s`
      container.appendChild(el)
    }
  }, [])
  return <div id="stars" ref={starsRef} />
}

function ExplorationPage() {
  const [lang, setLang] = useState<Lang>('fr')

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Starfield />
      
      {/* Header-like Nav */}
      <nav className="exploration-nav">
        <Link to="/" className="back-link">
          {lang === 'fr' ? '← Retour à l\'accueil' : '← Back to home'}
        </Link>
        <button 
          onClick={() => setLang(l => l === 'fr' ? 'en' : 'fr')}
          className="lang-toggle"
        >
          {lang === 'fr' ? 'English' : 'Français'}
        </button>
      </nav>

      <main className="exploration-container reveal visible">
        <header className="exploration-header">
          <LangBlock lang="fr" current={lang}>
            <div className="section-label">Réservation</div>
            <h1>Séance d'exploration</h1>
            <div className="gold-rule" />
            <p className="exploration-intro">
              Choisissez un moment qui vous convient pour discuter de vos besoins et découvrir comment la Guilde peut accompagner votre enfant.
            </p>
          </LangBlock>
          <LangBlock lang="en" current={lang}>
            <div className="section-label">Booking</div>
            <h1>Discovery Session</h1>
            <div className="gold-rule" />
            <p className="exploration-intro">
              Choose a time that works for you to discuss your needs and discover how the Guild can support your child.
            </p>
          </LangBlock>
        </header>

        <section className="widget-section">
          <TutorBirdWidget />
        </section>
      </main>

      <footer className="exploration-footer">
        ✦ &nbsp; Académie Morphomagie &nbsp;·&nbsp; 2026 &nbsp; ✦
      </footer>
    </>
  )
}

function TutorBirdWidget() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scriptLoaded = useRef(false)

  useEffect(() => {
    if (scriptLoaded.current) return
    
    const container = containerRef.current
    if (!container) return

    const script = document.createElement('script')
    script.src = "https://app.tutorbird.com/Widget/v4/Widget.ashx?settings=eyJTY2hvb2xJRCI6InNjaF80WDJKRyIsIldlYnNpdGVJRCI6Indic19kZGdKQiIsIldlYnNpdGVCbG9ja0lEIjoid2JiX1BXN1dKdCJ9"
    script.async = true
    
    container.appendChild(script)
    scriptLoaded.current = true

    return () => {
      if (container.contains(script)) {
        container.removeChild(script)
      }
      scriptLoaded.current = false
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className="tutorbird-widget-container"
      style={{ 
        minHeight: '600px', 
        width: '100%', 
        background: 'rgba(255, 255, 255, 0.05)', 
        borderRadius: '12px', 
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* The script will inject the iframe here */}
    </div>
  )
}
