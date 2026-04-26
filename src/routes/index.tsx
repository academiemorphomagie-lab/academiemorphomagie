import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useRef, useState, useCallback } from 'react'

export const Route = createFileRoute('/')({
  component: AcademieMorphomagie,
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

// ── Scroll Reveal ──
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1 },
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

// ── Magic Circle SVG ──
function MagicCircle() {
  return (
    <svg viewBox="0 0 620 520" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: 620, display: 'block', margin: '0 auto' }}>
      <defs>
        <radialGradient id="glow2" cx="50%" cy="55%" r="50%">
          <stop offset="0%" stopColor="#f0c060" stopOpacity={0.16} />
          <stop offset="100%" stopColor="#f0c060" stopOpacity={0} />
        </radialGradient>
        <filter id="soft2"><feGaussianBlur stdDeviation={2.5} /></filter>
      </defs>
      <ellipse cx={310} cy={300} rx={240} ry={230} fill="url(#glow2)" />
      <circle cx={310} cy={310} r={195} fill="none" stroke="#c9a84c" strokeWidth={1} strokeDasharray="6 5" opacity={0.45} />
      <circle cx={310} cy={310} r={165} fill="none" stroke="#c9a84c" strokeWidth={0.5} opacity={0.25} />
      <text x={310} y={135} fontSize={18} fill="#f0c060" opacity={0.45} textAnchor="middle">★</text>
      <text x={155} y={195} fontSize={13} fill="#f0c060" opacity={0.5} textAnchor="middle">✦</text>
      <text x={465} y={195} fontSize={13} fill="#f0c060" opacity={0.5} textAnchor="middle">✦</text>
      {/* Animated particles */}
      <circle cx={180} cy={220} r={3} fill="#f0c060" opacity={0.4}>
        <animate attributeName="cy" values="220;208;220" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx={440} cy={235} r={2.5} fill="#f0c060" opacity={0.5}>
        <animate attributeName="cy" values="235;222;235" dur="2.6s" repeatCount="indefinite" />
      </circle>
      <circle cx={310} cy={155} r={2.5} fill="#c9a84c" opacity={0.55}>
        <animate attributeName="cy" values="155;142;155" dur="4s" repeatCount="indefinite" />
      </circle>

      {/* Child 1: Black girl, afro with star clip, burgundy dress */}
      <rect x={104} y={318} width={36} height={50} rx={6} fill="#7a1a2e" />
      <line x1={104} y1={330} x2={87} y2={354} stroke="#5c3a1e" strokeWidth={7} strokeLinecap="round" />
      <line x1={140} y1={330} x2={157} y2={354} stroke="#5c3a1e" strokeWidth={7} strokeLinecap="round" />
      <rect x={109} y={366} width={10} height={30} rx={4} fill="#2a1a0e" />
      <rect x={125} y={366} width={10} height={30} rx={4} fill="#2a1a0e" />
      <circle cx={122} cy={303} r={22} fill="#5c3a1e" />
      <ellipse cx={122} cy={289} rx={26} ry={20} fill="#1a0d05" />
      <circle cx={103} cy={294} r={11} fill="#1a0d05" />
      <circle cx={141} cy={294} r={11} fill="#1a0d05" />
      <circle cx={122} cy={278} r={10} fill="#1a0d05" />
      <text x={134} y={285} fontSize={10} fill="#f0c060">★</text>
      <ellipse cx={116} cy={306} rx={2.5} ry={3} fill="#3a2010" />
      <ellipse cx={128} cy={306} rx={2.5} ry={3} fill="#3a2010" />
      <path d="M115,315 Q122,320 129,315" fill="none" stroke="#3a2010" strokeWidth={1.5} strokeLinecap="round" />
      <rect x={80} y={350} width={16} height={12} rx={2} fill="#c9a84c" transform="rotate(-15,88,356)" />
      <rect x={88} y={350} width={16} height={12} rx={2} fill="#f0c060" transform="rotate(-15,96,356)" />

      {/* Child 2: Asian boy, straight black hair, green vest */}
      <rect x={200} y={276} width={34} height={52} rx={6} fill="#1a4a2e" />
      <line x1={200} y1={290} x2={183} y2={313} stroke="#c8a882" strokeWidth={7} strokeLinecap="round" />
      <line x1={234} y1={290} x2={251} y2={313} stroke="#c8a882" strokeWidth={7} strokeLinecap="round" />
      <rect x={205} y={326} width={10} height={34} rx={4} fill="#2a1a0e" />
      <rect x={221} y={326} width={10} height={34} rx={4} fill="#2a1a0e" />
      <circle cx={217} cy={259} r={21} fill="#d4a574" />
      <ellipse cx={217} cy={244} rx={21} ry={12} fill="#1a0d05" />
      <rect x={196} y={245} width={42} height={10} rx={3} fill="#1a0d05" />
      <ellipse cx={217} cy={251} rx={18} ry={7} fill="#1a0d05" />
      <ellipse cx={210} cy={262} rx={2.5} ry={2.5} fill="#7a4a20" />
      <ellipse cx={224} cy={262} rx={2.5} ry={2.5} fill="#7a4a20" />
      <path d="M209,271 Q217,276 225,271" fill="none" stroke="#7a4a20" strokeWidth={1.5} strokeLinecap="round" />
      <line x1={251} y1={313} x2={270} y2={292} stroke="#c9a84c" strokeWidth={3} strokeLinecap="round" />
      <circle cx={271} cy={290} r={5.5} fill="#f0c060" opacity={0.9}>
        <animate attributeName="r" values="5.5;7.5;5.5" dur="1.5s" repeatCount="indefinite" />
      </circle>

      {/* Child 3: Latinx girl, black curly hair, purple dress */}
      <rect x={292} y={256} width={36} height={58} rx={7} fill="#4a1a6e" />
      <line x1={292} y1={270} x2={268} y2={248} stroke="#c8a070" strokeWidth={7} strokeLinecap="round" />
      <line x1={328} y1={270} x2={352} y2={248} stroke="#c8a070" strokeWidth={7} strokeLinecap="round" />
      <rect x={297} y={312} width={11} height={36} rx={4} fill="#2a1a0e" />
      <rect x={313} y={312} width={11} height={36} rx={4} fill="#2a1a0e" />
      <circle cx={310} cy={238} r={22} fill="#c8a070" />
      <ellipse cx={310} cy={223} rx={25} ry={16} fill="#1a0d05" />
      <ellipse cx={287} cy={238} rx={10} ry={21} fill="#1a0d05" />
      <ellipse cx={333} cy={238} rx={10} ry={21} fill="#1a0d05" />
      <ellipse cx={303} cy={241} rx={2.5} ry={3} fill="#7a4a10" />
      <ellipse cx={317} cy={241} rx={2.5} ry={3} fill="#7a4a10" />
      <path d="M302,251 Q310,257 318,251" fill="none" stroke="#8b3a1a" strokeWidth={2} strokeLinecap="round" />

      {/* Child 4: Black boy, braids with beads, blue shirt */}
      <rect x={386} y={274} width={34} height={52} rx={6} fill="#1a3a5c" />
      <line x1={386} y1={288} x2={369} y2={311} stroke="#4a2c0e" strokeWidth={7} strokeLinecap="round" />
      <line x1={420} y1={288} x2={438} y2={314} stroke="#4a2c0e" strokeWidth={7} strokeLinecap="round" />
      <rect x={391} y={324} width={10} height={34} rx={4} fill="#2a1a0e" />
      <rect x={407} y={324} width={10} height={34} rx={4} fill="#2a1a0e" />
      <circle cx={403} cy={257} r={21} fill="#4a2c0e" />
      <rect x={382} y={245} width={42} height={14} rx={7} fill="#1a0d05" />
      <rect x={384} y={238} width={7} height={20} rx={3} fill="#1a0d05" />
      <rect x={394} y={236} width={7} height={22} rx={3} fill="#1a0d05" />
      <rect x={404} y={236} width={7} height={22} rx={3} fill="#1a0d05" />
      <rect x={414} y={238} width={7} height={20} rx={3} fill="#1a0d05" />
      <circle cx={388} cy={257} r={2.5} fill="#c9a84c" />
      <circle cx={398} cy={258} r={2.5} fill="#8b1a1a" />
      <circle cx={408} cy={258} r={2.5} fill="#c9a84c" />
      <ellipse cx={396} cy={260} rx={2.5} ry={3} fill="#2a1505" />
      <ellipse cx={410} cy={260} rx={2.5} ry={3} fill="#2a1505" />
      <path d="M395,269 Q403,275 411,269" fill="none" stroke="#2a1505" strokeWidth={1.5} strokeLinecap="round" />

      {/* Child 5: Redhead girl, freckles, orange dress */}
      <rect x={472} y={316} width={34} height={50} rx={6} fill="#c05a1a" />
      <line x1={472} y1={328} x2={455} y2={351} stroke="#e8c090" strokeWidth={7} strokeLinecap="round" />
      <line x1={506} y1={328} x2={523} y2={350} stroke="#e8c090" strokeWidth={7} strokeLinecap="round" />
      <rect x={477} y={364} width={10} height={30} rx={4} fill="#2a1a0e" />
      <rect x={493} y={364} width={10} height={30} rx={4} fill="#2a1a0e" />
      <circle cx={489} cy={300} r={21} fill="#e8c090" />
      <ellipse cx={489} cy={286} rx={23} ry={14} fill="#8b3a05" />
      <ellipse cx={467} cy={301} rx={9} ry={18} fill="#8b3a05" />
      <ellipse cx={511} cy={301} rx={9} ry={18} fill="#8b3a05" />
      <circle cx={481} cy={301} r={1.5} fill="#c07030" opacity={0.6} />
      <circle cx={487} cy={299} r={1.5} fill="#c07030" opacity={0.6} />
      <circle cx={497} cy={302} r={1.5} fill="#c07030" opacity={0.6} />
      <ellipse cx={483} cy={302} rx={2.5} ry={3} fill="#5a3010" />
      <ellipse cx={495} cy={302} rx={2.5} ry={3} fill="#5a3010" />
      <path d="M482,311 Q489,317 496,311" fill="none" stroke="#8b3a1a" strokeWidth={1.5} strokeLinecap="round" />

      {/* Central glow */}
      <ellipse cx={310} cy={308} rx={65} ry={32} fill="#f0c060" opacity={0.05} filter="url(#soft2)" />
    </svg>
  )
}

// ── Main Page ──
function AcademieMorphomagie() {
  const [lang, setLang] = useState<Lang>('fr')
  useScrollReveal()

  const t = useCallback(
    (fr: string, en: string) => (lang === 'fr' ? fr : en),
    [lang],
  )

  return (
    <>
      <Starfield />

      {/* Language Switch */}
      <div className="lang-switch">
        <button
          className={`lang-btn ${lang === 'fr' ? 'active' : ''}`}
          onClick={() => setLang('fr')}
        >
          FR
        </button>
        <button
          className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
          onClick={() => setLang('en')}
        >
          EN
        </button>
      </div>

      {/* Hero */}
      <header className="hero">
        <span className="rune" style={{ top: '15%', left: '8%', '--dur': '9s', '--delay': '0s' } as React.CSSProperties}>ᚠ</span>
        <span className="rune" style={{ top: '25%', right: '10%', '--dur': '11s', '--delay': '1.5s' } as React.CSSProperties}>ᚱ</span>
        <span className="rune" style={{ top: '60%', left: '5%', '--dur': '7s', '--delay': '3s' } as React.CSSProperties}>ᚾ</span>
        <span className="rune" style={{ top: '70%', right: '7%', '--dur': '12s', '--delay': '0.8s' } as React.CSSProperties}>ᛗ</span>
        <span className="rune" style={{ top: '40%', left: '14%', '--dur': '10s', '--delay': '2s' } as React.CSSProperties}>ᛟ</span>
        <span className="rune" style={{ top: '50%', right: '16%', '--dur': '8s', '--delay': '4s' } as React.CSSProperties}>ᚹ</span>

        <div className="sigil">
          Académie
          <br />
          Morphomagie
        </div>

        <LangBlock lang="fr" current={lang}>
          <p className="hero-subtitle">Par Sarah &amp; Ève-Marie · La Guilde des Enchanteresses des Mots · Montréal</p>
          <div className="hero-divider" />
          <p className="hero-desc">L'enchantement des mots par le jeu. Ici, on explore et on découvre en ligne — pour libérer l'autonomie durable de l'élève.</p>
        </LangBlock>
        <LangBlock lang="en" current={lang}>
          <p className="hero-subtitle">By Sarah &amp; Ève-Marie · The Guild of Word Enchantresses · Montréal</p>
          <div className="hero-divider" />
          <p className="hero-desc">Word enchantment through play. We explore and discover online — to foster long-term student autonomy.</p>
        </LangBlock>

        <div className="scroll-hint">{t('↓ Découvrir', '↓ Discover')}</div>
      </header>

      {/* Philosophy */}
      <section className="reveal">
        <LangBlock lang="fr" current={lang}>
          <div className="section-label">Notre Vision</div>
          <h2>Jouer, Explorer, Découvrir</h2>
          <div className="gold-rule" />
          <div className="philo-block">
            <div className="philo-text">
              <p>
                Nous brisons les codes du tutorat classique. À la Guilde, on apprend en{' '}
                <strong>jouant</strong>, en <strong>explorant</strong> et en{' '}
                <strong>discutant</strong> au cœur de nos séances virtuelles. Défis interactifs et discussions métacognitives — nos élèves ne réalisent pas à quel point ils travaillent fort, parce qu'ils ont trop de plaisir.
              </p>
              <p>
                Tout notre matériel original est appuyé par la <strong>recherche récente</strong> en sciences de l'éducation. Grâce à une{' '}
                <strong>progression spiralaire</strong>, les notions reviennent naturellement sous de nouveaux angles.
              </p>
            </div>
            <div className="badge-cua">
              <p>
                <strong>CUA &amp; Inclusion :</strong> S'appuyant sur la{' '}
                <strong>Conception Universelle de l'Apprentissage</strong>, notre format s'adapte à tous (Dys, difficultés ou douance). Nous valorisons le plurilinguisme pour créer des ponts solides fondés sur les données probantes.
              </p>
            </div>
          </div>
        </LangBlock>
        <LangBlock lang="en" current={lang}>
          <div className="section-label">Our Vision</div>
          <h2>Play, Explore, Discover</h2>
          <div className="gold-rule" />
          <div className="philo-block">
            <div className="philo-text">
              <p>
                Tutoring, redefined. At the Guild, we learn by <strong>playing</strong>,{' '}
                <strong>exploring</strong>, and <strong>discussing</strong> within our virtual sessions. Interactive challenges and metacognitive conversation — students don't realize how hard they're working, because they're having too much fun.
              </p>
              <p>
                All our original material is supported by <strong>recent research</strong> in educational sciences. Through a{' '}
                <strong>spiral progression</strong>, concepts return naturally from fresh angles.
              </p>
            </div>
            <div className="badge-cua">
              <p>
                <strong>UDL &amp; Inclusivity:</strong> Based on{' '}
                <strong>Universal Design for Learning</strong>, our format adapts to everyone (Dys, challenges, or giftedness). We value plurilingualism to build strong bridges based on evidence-based research.
              </p>
            </div>
          </div>
        </LangBlock>
      </section>

      {/* Magic Circle */}
      <section className="magic-circle-section reveal">
        <LangBlock lang="fr" current={lang}>
          <div className="section-label">Le Cercle de la Guilde</div>
          <h2>Apprendre Ensemble en Ligne</h2>
        </LangBlock>
        <LangBlock lang="en" current={lang}>
          <div className="section-label">The Guild Circle</div>
          <h2>Learning Together Online</h2>
        </LangBlock>
        <div className="gold-rule" />
        <MagicCircle />
        <LangBlock lang="fr" current={lang}>
          <p className="circle-caption"><em>Un espace vivant où chaque voix, chaque langue, enrichit le groupe ✦</em></p>
        </LangBlock>
        <LangBlock lang="en" current={lang}>
          <p className="circle-caption"><em>A living space where every voice, every language, enriches the group ✦</em></p>
        </LangBlock>
      </section>

      {/* Approach */}
      <section className="reveal">
        <LangBlock lang="fr" current={lang}>
          <div className="section-label">Notre Approche</div>
          <h2>Jouer avec les Mots, Zéro Corvée</h2>
          <div className="gold-rule" />
          <div className="program-grid">
            <div className="program-card">
              <h3>Format « Découverte »</h3>
              <p>À la Guilde, nos élèves n'ont pas l'impression de travailler — ils ont l'impression de jouer. Un jeu intelligent, vivant et performant.</p>
            </div>
            <div className="program-card">
              <h3>L'Effet de Groupe</h3>
              <p>En petit groupe (max 6), la conversation métacognitive s'anime naturellement. C'est l'émulation collective : on réfléchit ensemble, on s'élève ensemble.</p>
            </div>
            <div className="program-card">
              <h3>Sûr &amp; Accessible</h3>
              <p>Le matériel est créé ici, par nous. Nous offrons des tarifs abordables sans sacrifier la profondeur de l'enseignement. L'inclusion n'est pas un luxe.</p>
            </div>
          </div>
        </LangBlock>
        <LangBlock lang="en" current={lang}>
          <div className="section-label">Our Approach</div>
          <h2>Playing with Words, Zero Drudgery</h2>
          <div className="gold-rule" />
          <div className="program-grid">
            <div className="program-card">
              <h3>The Discovery Format</h3>
              <p>At the Guild, students don't feel like they're working — they feel like they're playing. Intelligent, vibrant, high-performance play.</p>
            </div>
            <div className="program-card">
              <h3>The Group Effect</h3>
              <p>In small groups (max 6), metacognitive conversation flourishes naturally. Peer emulation: we think together, we rise together.</p>
            </div>
            <div className="program-card">
              <h3>Safe &amp; Accessible</h3>
              <p>All materials are created here, by us. Affordable rates without sacrificing pedagogical depth. Inclusion is not a luxury.</p>
            </div>
          </div>
        </LangBlock>
      </section>

      {/* Programs / Grimoires */}
      <section className="reveal">
        <LangBlock lang="fr" current={lang}>
          <div className="section-label">Les Grimoires</div>
          <h2>Programmes de la Guilde</h2>
          <div className="gold-rule" />
          <div className="program-grid">
            <div className="program-card featured-card">
              <span className="status-tag" style={{ background: 'var(--or)', color: 'var(--encre)' }}>Disponible</span>
              <h3>Les Secrets de l'Orthographe</h3>
              <p>Notre programme phare. Par le jeu et la découverte, l'élève développe sa <strong>contrôlabilité en orthographe lexicale</strong> et renforce son <strong>estime de soi</strong> comme apprenant. Bénéfique en <strong>français langue d'enseignement</strong> et en <strong>immersion</strong>.</p>
            </div>
            <div className="program-card">
              <span className="status-tag" style={{ background: 'var(--rubis)', color: '#fff' }}>En développement</span>
              <h3>Abracadaverbe</h3>
              <p>Domptez la conjugaison par la logique et la manipulation. Une enquête passionnante pour maîtriser les verbes sans par cœur.</p>
            </div>
            <div className="program-card">
              <span className="status-tag" style={{ background: 'var(--rubis)', color: '#fff' }}>En développement</span>
              <h3>Les Mots Enchantés</h3>
              <p>Bâtir une conscience linguistique profonde en reliant français, anglais et langues d'origine — ouvrir la porte à toutes les langues futures.</p>
            </div>
          </div>
        </LangBlock>
        <LangBlock lang="en" current={lang}>
          <div className="section-label">The Spellbooks</div>
          <h2>Guild Programs</h2>
          <div className="gold-rule" />
          <div className="program-grid">
            <div className="program-card featured-card">
              <span className="status-tag" style={{ background: 'var(--or)', color: 'var(--encre)' }}>Available Now</span>
              <h3>Spelling Secrets</h3>
              <p>Our flagship program. Through play and discovery, students develop <strong>control over lexical spelling</strong> and strengthen their <strong>self-confidence</strong> as learners. Beneficial for <strong>French instruction</strong> and <strong>immersion</strong> programs.</p>
            </div>
            <div className="program-card">
              <span className="status-tag" style={{ background: 'var(--rubis)', color: '#fff' }}>In Development</span>
              <h3>Abracadaverbe</h3>
              <p>Master conjugation through logic and manipulation. A fascinating investigation to master verbs without rote learning.</p>
            </div>
            <div className="program-card">
              <span className="status-tag" style={{ background: 'var(--rubis)', color: '#fff' }}>In Development</span>
              <h3>Enchanted Words</h3>
              <p>Building deep linguistic awareness by bridging French, English, and native languages — opening the door to all future languages.</p>
            </div>
          </div>
        </LangBlock>
      </section>

      {/* Pricing */}
      <section className="reveal">
        <LangBlock lang="fr" current={lang}>
          <div className="section-label">Investissement</div>
          <h2>Flexibilité &amp; Liberté</h2>
          <div className="gold-rule" />
          <div className="tarif-grid">
            <div className="tarif-card featured">
              <h3>Le Passeport Guilde</h3>
              <p className="tarif-subtitle">Notre format phare · Groupe · Progression spiralaire</p>
              <div className="price">25<sup>$</sup></div>
              <p>par personne · par séance de 30 min</p>
              <ul className="tarif-list">
                <li>Programme structuré, ancré dans la recherche</li>
                <li>Progression spiralaire — flexibilité sans perte de contenu</li>
                <li>Petit groupe animé (max 6) — conversation &amp; métacognition</li>
                <li>Jeu, manipulation &amp; exploration collective</li>
                <li>Artefacts pédagogiques inclus</li>
                <li>Venez selon vos disponibilités — zéro stress</li>
              </ul>
            </div>
            <div className="tarif-card">
              <h3>Le Solitaire</h3>
              <p className="tarif-subtitle">Service d'appoint · Pour des besoins très ciblés</p>
              <div className="price">80<sup>$</sup></div>
              <p>par personne · par séance</p>
              <ul className="tarif-list">
                <li>Pour des situations ou besoins très spécifiques</li>
                <li>En complément du format groupe</li>
                <li>Rythme et contenu adaptés au profil de l'élève</li>
                <li>Sur disponibilité — contactez-nous pour discuter</li>
              </ul>
            </div>
          </div>
        </LangBlock>
        <LangBlock lang="en" current={lang}>
          <div className="section-label">Investment</div>
          <h2>Flexibility &amp; Freedom</h2>
          <div className="gold-rule" />
          <div className="tarif-grid">
            <div className="tarif-card featured">
              <h3>The Guild Passport</h3>
              <p className="tarif-subtitle">Our flagship format · Group · Spiral progression</p>
              <div className="price">25<sup>$</sup></div>
              <p>per person · per 30-min session</p>
              <ul className="tarif-list">
                <li>Structured program, grounded in research</li>
                <li>Spiral progression — flexibility without missing content</li>
                <li>Small animated group (max 6) — conversation &amp; metacognition</li>
                <li>Play, manipulation &amp; collective exploration</li>
                <li>Pedagogical materials included</li>
                <li>Come when you can — zero stress</li>
              </ul>
            </div>
            <div className="tarif-card">
              <h3>The Solitary</h3>
              <p className="tarif-subtitle">Supplementary service · For very specific needs</p>
              <div className="price">80<sup>$</sup></div>
              <p>per person · per session</p>
              <ul className="tarif-list">
                <li>For very specific or targeted situations</li>
                <li>Best used as a complement to the group format</li>
                <li>Pace and content adapted to student profile</li>
                <li>By availability — contact us to discuss</li>
              </ul>
            </div>
          </div>
          <div className="pioneer-box">
            <p>
              For the launch of our first group, enjoy <strong>privileged access</strong> to exclusive
              pedagogical artifacts — game bank, reminder cards and interactive tools — reserved for the founding cohort.
            </p>
          </div>
        </LangBlock>
      </section>

      {/* Founders */}
      <section className="reveal">
        <LangBlock lang="fr" current={lang}>
          <div className="section-label">Les Enchanteresses</div>
          <h2>Qui Sommes-Nous ?</h2>
          <div className="gold-rule" />
          <p style={{ maxWidth: 700, marginBottom: 36 }}>
            Nous sommes deux enseignantes passionnées qui refusent le modèle du tutorat classique. Notre Guilde est née d'une conviction
            commune : l'apprentissage durable passe par la <strong>curiosité</strong>, le{' '}
            <strong>jeu</strong> et la <strong>métacognition</strong> — pas
            par la répétition mécanique.
          </p>
          <div className="founders-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', maxWidth: 640, margin: '0 auto' }}>
            <div className="founder-card">
              <div className="founder-avatar">✨</div>
              <div className="founder-name">Sarah</div>
              <div className="founder-role">Enseignante spécialisée en soutien linguistique</div>
              <p>Sarah s'appuie sur la morphologie et les forces linguistiques de chaque élève pour rendre l'apprentissage vivant et durable.</p>
            </div>
            <div className="founder-card">
              <div className="founder-avatar">🔮</div>
              <div className="founder-name">Ève-Marie</div>
              <div className="founder-role">Enseignante spécialisée en adaptation scolaire</div>
              <p>Ève-Marie place l'inclusion au cœur de chaque séance. Son expertise garantit un espace sûr et stimulant pour tous les profils d'apprenants.</p>
            </div>
          </div>
        </LangBlock>
        <LangBlock lang="en" current={lang}>
          <div className="section-label">The Enchantresses</div>
          <h2>Who Are We?</h2>
          <div className="gold-rule" />
          <p style={{ maxWidth: 700, marginBottom: 36 }}>
            We are two passionate teachers who refuse the classical tutoring model. Our Guild was born from a shared conviction: lasting learning
            comes through <strong>curiosity</strong>,{' '}
            <strong>play</strong>, and <strong>metacognition</strong> — not
            mechanical repetition.
          </p>
          <div className="founders-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', maxWidth: 640, margin: '0 auto' }}>
            <div className="founder-card">
              <div className="founder-avatar">✨</div>
              <div className="founder-name">Sarah</div>
              <div className="founder-role">Specialized Teacher in Linguistic Support</div>
              <p>Sarah draws on morphology and each student's linguistic strengths to make learning vibrant and lasting.</p>
            </div>
            <div className="founder-card">
              <div className="founder-avatar">🔮</div>
              <div className="founder-name">Ève-Marie</div>
              <div className="founder-role">Specialized Teacher in Learning Adaptation</div>
              <p>Ève-Marie places inclusion at the heart of every session. Her expertise ensures a safe and stimulating space for all learner profiles.</p>
            </div>
          </div>
        </LangBlock>
      </section>

      {/* Workshops */}
      <section className="reveal">
        <LangBlock lang="fr" current={lang}>
          <div className="section-label">Exclusif aux Membres</div>
          <h2>Ateliers Surprise de la Guilde</h2>
          <div className="gold-rule" />
          <p style={{ marginBottom: 28 }}>
            En plus des séances régulières, les membres de la Guilde ont accès à des{' '}
            <strong>ateliers ponctuels surprises</strong> — annoncés sur notre calendrier. Des moments
            intenses et ciblés pour explorer de nouvelles stratégies.
          </p>
          <div className="ateliers-box">
            <h3 style={{ marginBottom: 6, color: 'var(--or-vif)' }}>Exemples d'ateliers à venir</h3>
            <ul className="atelier-list">
              <li>Stratégies de lecture</li>
              <li>Défi orthographe</li>
              <li>Morphologie adaptée au 1er cycle</li>
              <li>Atelier plurilingue — faire les ponts entre les langues</li>
              <li>Tournoi des verbes</li>
              <li>Dictée collaborative</li>
            </ul>
            <p className="atelier-note">📅 Consultez notre calendrier de la Guilde — réservé aux membres inscrits.</p>
          </div>
          <div style={{ marginTop: 28, padding: '20px 24px', border: '1px dashed rgba(201,168,76,.3)', borderRadius: 6, background: 'rgba(201,168,76,.03)' }}>
            <p>
              <strong>Progression spiralaire :</strong> Pas de stress si vous manquez une séance. Notre
              structure garantit que chaque élève reste dans le flot.
              Plusieurs plages horaires variées sont offertes pour s'adapter à votre réalité.
            </p>
          </div>
        </LangBlock>
        <LangBlock lang="en" current={lang}>
          <div className="section-label">Exclusive to Members</div>
          <h2>Guild Surprise Workshops</h2>
          <div className="gold-rule" />
          <p style={{ marginBottom: 28 }}>
            In addition to regular sessions, Guild members get access to{' '}
            <strong>surprise pop-up workshops</strong> — announced on our calendar.
          </p>
          <div className="ateliers-box">
            <h3 style={{ marginBottom: 6, color: 'var(--or-vif)' }}>Sample upcoming workshops</h3>
            <ul className="atelier-list">
              <li>Reading strategies</li>
              <li>Spelling challenge</li>
              <li>Morphology for early elementary students</li>
              <li>Plurilingual workshop — bridging languages</li>
              <li>Verb tournament</li>
              <li>Collaborative dictation</li>
            </ul>
            <p className="atelier-note">📅 Check our Guild calendar — reserved for registered members.</p>
          </div>
          <div style={{ marginTop: 28, padding: '20px 24px', border: '1px dashed rgba(201,168,76,.3)', borderRadius: 6, background: 'rgba(201,168,76,.03)' }}>
            <p>
              <strong>Spiral progression:</strong> No stress if you miss a session. Multiple varied time slots are offered
              to fit your reality.
            </p>
          </div>
        </LangBlock>
      </section>

      {/* CTA */}
      <section className="cta-section reveal">
        <LangBlock lang="fr" current={lang}>
          <h2>On a hâte de vous connaître !</h2>
          <p style={{ marginBottom: 12, opacity: 0.85, fontStyle: 'italic', maxWidth: 580, marginLeft: 'auto', marginRight: 'auto' }}>
            Réservez votre <strong>séance découverte gratuite</strong> — un moment pour qu'on apprenne à
            connaître votre enfant, comprendre ses besoins et vous présenter nos horaires disponibles.
          </p>
          <p style={{ marginBottom: 32, opacity: 0.7, fontSize: '0.95em', fontStyle: 'italic' }}>
            Notre premier programme <strong>Les Secrets de l'Orthographe</strong> est disponible dès
            maintenant. Venez voir si la Guilde est faite pour vous !
          </p>
          <Link
            to="/exploration"
            className="cta-btn"
          >
            Réserver ma séance découverte
          </Link>
          <p className="cta-note">academiemorphomagie@gmail.com · Séance découverte offerte gratuitement</p>
        </LangBlock>
        <LangBlock lang="en" current={lang}>
          <h2>We Can't Wait to Meet You!</h2>
          <p style={{ marginBottom: 12, opacity: 0.85, fontStyle: 'italic', maxWidth: 580, marginLeft: 'auto', marginRight: 'auto' }}>
            Book your <strong>free discovery session</strong> — a chance for us to get to know your child,
            understand their needs, and walk you through our available schedules.
          </p>
          <p style={{ marginBottom: 32, opacity: 0.7, fontSize: '0.95em', fontStyle: 'italic' }}>
            Our first program <strong>Spelling Secrets</strong> is available now. Come see if the Guild is
            right for you!
          </p>
          <Link
            to="/exploration"
            className="cta-btn"
          >
            Book my Discovery Session
          </Link>
          <p className="cta-note">academiemorphomagie@gmail.com · Discovery session offered free of charge</p>
        </LangBlock>
      </section>

      {/* Footer */}
      <footer>
        ✦ &nbsp; Académie Morphomagie &nbsp;·&nbsp; Sarah &amp; Ève-Marie, Enchanteresses des Mots &nbsp;·&nbsp; Montréal &nbsp;·&nbsp; 2026
        &nbsp; ✦
      </footer>
    </>
  )
}
