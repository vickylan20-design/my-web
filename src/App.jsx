import React, { useEffect, useRef, useState } from 'react'

const viewImage = new URL('../assets/image/view.jpg', import.meta.url).href

const projects = [
  {
    number: '01',
    title: 'TVBS News CMS',
    subtitle: 'Redesigning the newsroom backend for faster, clearer editorial publishing.',
    tags: ['CMS redesign', 'Editorial workflow', 'Interaction design'],
    image: '/assets/project/tvbs-news-cms.png',
    alt: 'TVBS News CMS 新聞編輯後台改版介面',
    result: 'Newsroom workflow redesigned',
    fit: 'contain',
  },
  {
    number: '02',
    title: 'Health 2.0',
    subtitle: 'Turning user insights into AI-enabled health service directions.',
    tags: ['Product discovery', 'User research', 'AI chatbot'],
    image: '/assets/project/health20-wide.jpg',
    alt: '健康 2.0 從用戶研究、痛點洞察到 AI 健康服務與 Chatbot 產品方向',
    result: 'AI health service direction',
  },
  {
    number: '03',
    title: 'Moment Pet Wellness',
    subtitle: 'Pet health, designed around real care.',
    tags: ['Product redesign', 'Design system', 'UX research'],
    image: '/assets/project/moment-pet.png',
    alt: 'Moment Pet Wellness 寵物健康照護 App 介面',
    result: 'App Store rating 4.8',
  },
  {
    number: '04',
    title: 'Moodii',
    subtitle: 'A softer space for emotional connection.',
    tags: ['0–1 product', 'Social experience', 'UI/UX'],
    image: '/assets/project/moodii.png',
    alt: 'Moodii 心情社交平台 App 介面',
    result: '50K+ downloads',
  },
  {
    number: '05',
    title: 'ShapeX',
    subtitle: 'Making movement differences visible for smarter, more precise training.',
    tags: ['0–1 product', 'Smart fitness', 'Motion feedback'],
    image: '/assets/project/shapex.png',
    alt: 'ShapeX 智慧居家運動 App 介面',
    result: '4.0+ store rating',
  },
]

const experience = [
  ['TVBS', 'Senior Product Designer', '2023 — NOW'],
  ['MoneyBook', 'Senior Product Designer', '2023'],
  ['Moment Pet Wellness', 'Product Designer', '2022 — 2023'],
  ['Zoomo Space', 'UI/UX Designer', '2020 — 2022'],
  ['TCY Cosmetics', 'Visual Designer', 'Apr 2016 — Oct 2018'],
  ['Taiwandigest', 'Art Editor', 'Apr 2015 — Apr 2016'],
]

function App() {
  const staticPreview = new URLSearchParams(window.location.search).has('static')
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDarkHeader, setIsDarkHeader] = useState(false)
  const productDesignVideoRef = useRef(null)
  const productDesignHasPlayedRef = useRef(false)
  const viewParallaxRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.72)

      const darkSections = document.querySelectorAll('[data-header-theme="dark"]')
      const headerHeight = 76
      const isOverDarkSection = Array.from(darkSections).some((section) => {
        const rect = section.getBoundingClientRect()
        return rect.top <= headerHeight && rect.bottom > headerHeight
      })

      setIsDarkHeader(isOverDarkSection)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isProject = entry.target.classList.contains('project')
          const revealThreshold = isProject ? 0.35 : 0.12

          if (entry.isIntersecting && entry.intersectionRatio >= revealThreshold) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: [0.12, 0.35] },
    )
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const video = productDesignVideoRef.current
    if (!video || staticPreview) return undefined

    video.loop = false
    video.pause()
    video.currentTime = 0

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || productDesignHasPlayedRef.current) return

        productDesignHasPlayedRef.current = true
        observer.disconnect()

        video.play().catch(() => {
          productDesignHasPlayedRef.current = false
        })
      },
      {
        threshold: 0.65,
      },
    )

    observer.observe(video)

    return () => observer.disconnect()
  }, [staticPreview])

  useEffect(() => {
    const section = viewParallaxRef.current
    if (!section) return undefined

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const image = section.querySelector('img')
    let frameId = 0

    const updateParallax = () => {
      if (frameId) return

      frameId = window.requestAnimationFrame(() => {
        frameId = 0

        if (motionQuery.matches) {
          section.style.setProperty('--view-parallax-y', '0px')
          return
        }

        const rect = section.getBoundingClientRect()
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight
        const start = viewportHeight * 0.85
        const end = viewportHeight * 0.15 - rect.height
        const progress = (start - rect.top) / (start - end)
        const clamped = Math.min(1, Math.max(0, progress))
        const travel = image ? Math.max(0, image.offsetHeight - section.offsetHeight) : 0

        section.style.setProperty('--view-parallax-y', `${-travel * clamped}px`)
      })
    }

    updateParallax()
    window.addEventListener('scroll', updateParallax, { passive: true })
    window.addEventListener('resize', updateParallax)

    return () => {
      window.removeEventListener('scroll', updateParallax)
      window.removeEventListener('resize', updateParallax)
      if (frameId) window.cancelAnimationFrame(frameId)
    }
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className={`site-header ${isScrolled ? 'site-header--scrolled' : ''} ${isDarkHeader ? 'site-header--dark' : ''}`}>
        <div className="site-header__inner frame">
          <a className="brand" href="#top" onClick={closeMenu} aria-label="回到首頁">
            <span>Lan Hsiao-Chi</span>
            <small>Product Designer</small>
          </a>

          <nav className="desktop-nav" aria-label="主要導覽">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
          </nav>

          <a className="contact-pill desktop-contact" href="mailto:vickylan20@gmail.com" aria-label="Email vickylan20@gmail.com">
            <span className="contact-pill__track" aria-hidden="true">
              <span className="contact-pill__group">
                <span>Let’s talk</span>
                <span>Let’s talk</span>
                <span>Let’s talk</span>
              </span>
              <span className="contact-pill__group">
                <span>Let’s talk</span>
                <span>Let’s talk</span>
                <span>Let’s talk</span>
              </span>
            </span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </header>

      <div id="mobile-menu" className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}>
        <nav aria-label="行動版導覽">
          <a href="#work" onClick={closeMenu}>Work <span>01</span></a>
          <a href="#about" onClick={closeMenu}>About <span>02</span></a>
          <a href="#experience" onClick={closeMenu}>Experience <span>03</span></a>
          <a href="mailto:vickylan20@gmail.com" onClick={closeMenu}>Contact <span>04</span></a>
        </nav>
        <p>Taipei, Taiwan<br />Available for meaningful collaborations.</p>
      </div>

      <main>
        <section className="hero" id="top" aria-labelledby="hero-title">
          <video
            className="hero__video"
            autoPlay={!staticPreview}
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src="/assets/video/hero_0624.mp4?v=20260625-1119" type="video/mp4" />
          </video>
          <div className="hero__wash" />

          <div className="hero__content frame">
            <h1 id="hero-title">
              <span>Empathy</span>
              <span className="hero__title-indent">into Impact.</span>
            </h1>

            <div className="hero__footer">
              <p>
                I turn complex product challenges into clear, human experiences —
                from early research to shipped products.
              </p>
            </div>
          </div>

          <div className="hero__index">Portfolio / 2026</div>
        </section>

        <section className="intro section frame" id="about">
          <div className="section-label" data-reveal>
            <span>01</span>
            <span>Approach</span>
          </div>
          <div className="intro__statement" data-reveal>
            <h2 className="intro__lead">
              Designing with empathy, delivering with clarity.
            </h2>
            <div className="intro__copy">
              <p>
                I’m Lan, a Product Designer with 10+ years of experience across health,
                fintech, wellness and digital media. I lead across discovery, delivery
                and optimization — connecting user insight, product strategy and
                interface craft to move ideas into the real world.
              </p>
            </div>
          </div>
          <div className="approach-visual" data-reveal>
            <video
              ref={productDesignVideoRef}
              src="/assets/video/productDesign.webm"
              aria-label="Product design capabilities: Discovery, Craft, and Optimize"
              muted
              playsInline
              preload="auto"
            />
          </div>
        </section>

        <section
          className="view-band"
          id="work"
          ref={viewParallaxRef}
          aria-label="Research and observation atmosphere"
        >
          <img src={viewImage} alt="黑白視覺橫幅，呈現觀察與研究情境" loading="lazy" />
          <div className="view-band__content frame" data-reveal>
            <h2>Work that moved<br />people & products.</h2>
            <p>Selected product experiences from early discovery and AI concepts to 0–1 launches and meaningful redesigns.</p>
          </div>
        </section>

        <section className="work section">
          <div className="frame">
            <div className="work__eyebrow" data-reveal>Selected Works</div>
            <div className="project-list">
              {projects.map((project) => (
                <article className="project" key={project.title} data-reveal>
                  <div className="project__meta">
                    <span>{project.number}</span>
                    <span>{project.result}</span>
                  </div>
                  <div className={`project__visual ${project.fit === 'contain' ? 'project__visual--contain' : ''}`}>
                    {project.video ? (
                      <video autoPlay muted loop playsInline preload="metadata" aria-label={`${project.title} project film`}>
                        <source src={project.video} type="video/mp4" />
                      </video>
                    ) : (
                      <img src={project.image} alt={project.alt} loading="lazy" />
                    )}
                  </div>
                  <div className="project__content">
                    <h3>{project.title}</h3>
                    <p>{project.subtitle}</p>
                    <ul>
                      {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="experience section" id="experience" data-header-theme="dark">
          <div className="frame">
            <div className="section-label section-label--light" data-reveal>
              <span>03</span>
              <span>Experience</span>
            </div>
            <div className="experience__grid">
              <div className="experience__intro" data-reveal>
                <h2>10+ years.<br />One throughline:<br />make it human.</h2>
                <p>
                  From visual storytelling to product strategy, every chapter sharpened
                  how I listen, align teams and design for lasting impact.
                </p>
              </div>
              <div className="experience__list" data-reveal>
                {experience.map(([company, role, years]) => (
                  <div className="experience__row" key={company}>
                    <h3>{company}</h3>
                    <p>{role}</p>
                    <span>{years}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="contact section" id="contact" data-header-theme="dark">
          <div className="frame contact__inner">
            <div className="contact__copy" data-reveal>
              <a className="contact__marquee" href="mailto:vickylan20@gmail.com" aria-label="Contact Lan Hsiao-Chi">
                <span className="contact__marquee-track">
                  <span>LET’S MAKE IT MATTER.</span>
                  <span>LET’S MAKE IT MATTER.</span>
                  <span>LET’S MAKE IT MATTER.</span>
                  <span>LET’S MAKE IT MATTER.</span>
                </span>
              </a>
            </div>
            <footer>
              <span>Lan Hsiao-Chi © 2026</span>
              <a href="#top">Back to top</a>
            </footer>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
