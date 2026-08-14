import React, { useEffect, useRef, useState } from 'react'
import ProjectDetail from './ProjectDetail.jsx'
import SiteFooter from './SiteFooter.jsx'
import StructureProjectDetail from './StructureProjectDetail.jsx'
import MemberSystemDetail from './MemberSystemDetail.jsx'
import HealthChatbotDetail from './HealthChatbotDetail.jsx'
import ResumePage from './ResumePage.jsx'
import AppProjectDetail from './AppProjectDetail.jsx'

const capabilityItems = [
  { number: '01', headline: '房間開啟率提升 11%：透過實際用戶研究優化 Moodii 群聊體驗', summary: '從用戶回饋、使用者訪談與產品數據出發，重新定義群聊功能的核心問題與設計目標，並透過快速迭代，讓情緒交流更安心、更容易開始。', tags: ['User Research', 'UX Design'], image: '/assets/figma/understand-source.png', alt: 'Moodii 社交 App 群聊體驗優化' },
  { number: '02', headline: '重整 TVBS News 舊後台資訊架構：打造可持續擴充的新聞 CMS', summary: '觀察新聞編輯的操作習慣與需求，重整資訊架構、內容流程與互動規範，讓複雜的後台工作更一致，也為未來功能保留擴充彈性。', tags: ['Information Architecture', 'System Design'], image: '/assets/figma/structure-source.png', alt: 'TVBS News CMS 新聞編輯後台' },
  { number: '03', headline: '重新定義健康 AI 問答的使用場域，提升平台參與率最高達 88%', summary: '結合提問數據分析、使用者訪談與 Prototype 測試，探索 AI 在健康服務中的適合場景，並持續追蹤數據、提升問題與回答品質。', tags: ['Product Discovery', 'UX Research', 'UX Design'], image: '/assets/project/health20-wide.jpg', alt: 'Health 2.0 AI Chatbot 體驗優化' },
  { number: '04', headline: 'TVBS 五品牌會員登入改版：平衡使用體驗、系統與商業需求', summary: '盤點跨品牌登入流程與使用痛點，在優化介面體驗的同時整合商業需求，建立一致、可延伸的會員服務策略與產品發展方向。', tags: ['Product Strategy', 'Service Design'], image: '/assets/detail/member-cover.jpg', alt: '會員登入情境畫面' },
]

const capabilityItemsEn = [
  { headline: 'Room activation +11%: Improving Moodii group chat through real user research', summary: 'Starting from user feedback, interviews, and product data, I redefined the core problem and design goals, then iterated rapidly to make emotional conversations feel safer and easier to begin.', tags: ['User Research', 'UX Design'], alt: 'Moodii social app group chat optimization' },
  { headline: 'Restructuring the legacy TVBS News backend information architecture: A scalable newsroom CMS', summary: 'I observed editorial habits and needs, then restructured the information architecture, content workflow, and interaction patterns to make complex newsroom work more consistent and extensible.', tags: ['Information Architecture', 'System Design'], alt: 'TVBS News CMS editorial system' },
  { headline: 'Redefining where health AI Q&A creates value, increasing platform engagement to as high as 88%', summary: 'Combining question-data analysis, interviews, and prototype testing, I explored the right role for AI in health services and continuously improved question and answer quality.', tags: ['Product Discovery', 'UX Research', 'UX Design'], alt: 'Health 2.0 AI Chatbot optimization' },
  { headline: 'Redesigning membership login across five TVBS brands: Balancing experience, systems, and business needs', summary: 'I mapped cross-brand login friction and balanced experience improvements with business needs to create a consistent, extensible membership strategy and product direction.', tags: ['Product Strategy', 'Service Design'], alt: 'Member login experience' },
]

const workItems = [
  { category: 'APP', title: 'Moment APP', type: 'APP Redesign ｜ User Research', image: '/assets/work/moment-pet 1.jpg', detailSlug: 'moment-app' },
  { category: 'APP', title: 'Moodii APP', type: 'APP 0-1 Product Design ｜ User Research', image: '/assets/work/MoodiiApp.jpg', detailSlug: 'moodii-app' },
  { category: 'APP', title: 'ShapeX APP', type: 'APP 0-1 Product Design ｜ User Research', image: '/assets/work/ShapeXApp.jpg', detailSlug: 'shapex-app' },
  { category: 'WEB', title: 'TVBS ESG Official Website', type: 'Web UIUX Redesign', image: '/assets/work/202510-esg首頁改版-2.jpg' },
  { category: 'WEB', title: 'TVBS News FIFA Campaign Site', type: 'Web UIUX Design ｜ Key Visual Design', image: '/assets/work/202605-fifa-2.jpg' },
  { category: 'WEB', title: 'Health 2.0 Nutrition Official Website', type: 'Web UIUX Design', image: '/assets/work/202412-Nutrition Site.jpg' },
  { category: 'WEB', title: 'TVBS News GMA36 Campaign Site', type: 'Web UIUX Design ｜ Key Visual Design', image: '/assets/work/202504-金曲-2.jpg' },
  { category: 'WEB', title: 'TVBS ESG Breakfast Campaign Site', type: 'Web UIUX Design ｜ Key Visual Design', image: '/assets/work/202607-esg早餐特輯-2.jpg' },
  { category: 'WEB', title: 'Lion Travel Small Town Campaign Site', type: 'Web UIUX Design', image: '/assets/work/2019-travel.jpg' },
]

const heroRoles = [
  { title: 'Product Designer', lines: ['Product', 'Designer'], image: '/assets/figma/myrole_1.jpg', alt: 'Lan 作為產品設計師的工作情境' },
  { title: 'User Researcher', lines: ['User', 'Researcher'], image: '/assets/figma/myrole_2.jpg', alt: 'Lan 進行使用者研究的工作情境' },
  { title: 'AI Design Educator', lines: ['AI Design', 'Educator'], image: '/assets/figma/myrole_3.jpg', alt: 'Lan 進行 AI 設計工具教學的工作情境' },
  { title: 'Product Builder', lines: ['Product', 'Builder'], image: '/assets/figma/myrole_4.jpg', alt: 'Lan 打造產品的工作情境' },
]

function HeroRoleCarousel() {
  const [activeRole, setActiveRole] = useState(0)
  const [nextRole, setNextRole] = useState(null)
  const activeRoleRef = useRef(0)

  useEffect(() => {
    heroRoles.forEach(({ image }) => {
      const preload = new Image()
      preload.src = image
    })

    let swapTimer
    const interval = window.setInterval(() => {
      const next = (activeRoleRef.current + 1) % heroRoles.length
      setNextRole(next)
      swapTimer = window.setTimeout(() => {
        activeRoleRef.current = next
        setActiveRole(next)
        setNextRole(null)
      }, 1080)
    }, 3000)

    return () => {
      window.clearInterval(interval)
      window.clearTimeout(swapTimer)
    }
  }, [])

  const role = heroRoles[activeRole]
  const renderRole = (item) => <><h1 aria-label={item.title}>{item.lines.map((line) => <span key={line}>{line}</span>)}</h1><div className="hero__image"><img src={item.image} alt={item.alt} /></div></>

  return (
    <div className={`hero__role-carousel${nextRole !== null ? ' is-transitioning' : ''}`}>
      {nextRole !== null && <div className="hero__role-layer hero__role-layer--incoming">{renderRole(heroRoles[nextRole])}</div>}
      <div className="hero__role-layer hero__role-layer--outgoing">{renderRole(role)}</div>
    </div>
  )
}

function Capability({ item, onOpen, id }) {
  return (
    <article id={id} className={`capability capability--${item.number} ${onOpen ? 'capability--clickable' : ''}`} data-reveal onClick={onOpen} onKeyDown={(event) => event.key === 'Enter' && onOpen?.()} role={onOpen ? 'link' : undefined} tabIndex={onOpen ? 0 : undefined}>
      <div className="capability__visual" data-image-reveal>
        <img src={item.image} alt={item.alt} loading="eager" />
      </div>
      <div className="capability__content">
        <h2>{item.headline}</h2>
        <p>{item.summary}</p>
        <div className="capability__tags" aria-label="Project capabilities">
          {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
      </div>
    </article>
  )
}

function App() {
  const resumeRoute = window.location.pathname.replace(/\/+$/, '')
  const resumePage = new URLSearchParams(window.location.search).get('page')
  const resumeVariant = resumePage === 'resume' ? 'default' : resumePage === 'resume-product-strategy' ? 'strategy' : resumePage === 'resume-product-systems' ? 'systems' : resumePage === 'resume-ai-startup' ? 'ai' : resumeRoute === '/resume/product-strategy' ? 'strategy' : resumeRoute === '/resume/product-systems' ? 'systems' : resumeRoute === '/resume/ai-startup' ? 'ai' : resumeRoute === '/resume' ? 'default' : null
  if (resumeVariant) return <ResumePage variant={resumeVariant} />
  const projectSlug = new URLSearchParams(window.location.search).get('project')
  const [isDetail, setIsDetail] = useState(() => Boolean(projectSlug))
  const [navVisible, setNavVisible] = useState(true)
  const [emailCopied, setEmailCopied] = useState(false)
  const [language, setLanguage] = useState(() => window.localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'zh')
  const lastScrollY = useRef(0)
  const isEnglish = language === 'en'
  const localizedCapabilityItems = capabilityItems.map((item, index) => isEnglish ? { ...item, ...capabilityItemsEn[index], caption: '' } : item)
  const localizedWorkItems = workItems

  const changeLanguage = (nextLanguage) => {
    setLanguage(nextLanguage)
    window.localStorage.setItem('portfolio-language', nextLanguage)
    document.documentElement.lang = nextLanguage === 'en' ? 'en' : 'zh-Hant'
  }

  useEffect(() => {
    document.documentElement.lang = isEnglish ? 'en' : 'zh-Hant'
  }, [isEnglish])

  useEffect(() => {
    const revealImage = (node) => {
      if (node.dataset.imageRevealed) return

      const startReveal = () => {
        if (node.dataset.imageRevealed) return
        node.dataset.imageRevealed = 'true'
        // Keep the blue curtain in its initial state for two frames, so the
        // transition is reliably painted instead of jumping straight to image.
        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => node.classList.add('is-visible'))
        })
      }

      const image = node.querySelector('img')
      if (!image || (image.complete && image.naturalWidth > 0)) {
        startReveal()
      } else {
        image.loading = 'eager'
        image.addEventListener('load', startReveal, { once: true })
        image.addEventListener('error', startReveal, { once: true })
      }
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.matches('[data-image-reveal]')) {
              revealImage(entry.target)
            } else {
              entry.target.classList.add('is-visible')
            }
        }
      })
    }, { threshold: 0.12 })
    document.querySelectorAll('[data-reveal], [data-image-reveal]').forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [isDetail])

  useEffect(() => {
    let ticking = false

    const updateNavigation = () => {
      const currentScrollY = Math.max(window.scrollY, 0)
      const difference = currentScrollY - lastScrollY.current

      if (currentScrollY < 64) {
        setNavVisible(true)
      } else if (difference > 8) {
        setNavVisible(false)
      } else if (difference < -8) {
        setNavVisible(true)
      }

      lastScrollY.current = currentScrollY
      ticking = false
    }

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateNavigation)
        ticking = true
      }
    }

    lastScrollY.current = window.scrollY
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const openDetail = (slug = 'group-chat') => {
    window.history.scrollRestoration = 'manual'
    window.location.assign(`${window.location.pathname}?project=${slug}`)
  }
  const goHome = (hash = '#about') => {
    window.history.scrollRestoration = 'manual'
    window.location.assign(`${window.location.pathname}${hash}`)
  }
  useEffect(() => { const pop = () => setIsDetail(new URLSearchParams(window.location.search).get('project') === 'group-chat'); window.addEventListener('popstate', pop); return () => window.removeEventListener('popstate', pop) }, [])

  useEffect(() => {
    if (!isDetail) return
    window.history.scrollRestoration = 'manual'
    const previousBehavior = document.documentElement.style.scrollBehavior
    document.documentElement.style.scrollBehavior = 'auto'
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    document.documentElement.style.scrollBehavior = previousBehavior
  }, [isDetail])

  useEffect(() => {
    if (isDetail || !window.location.hash) return
    const target = document.getElementById(window.location.hash.slice(1))
    if (!target) return

    const frame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => target.scrollIntoView({ block: 'start', behavior: 'auto' }))
    })
    return () => window.cancelAnimationFrame(frame)
  }, [isDetail])

  return (
    <div className="site-shell">
      <header className={`site-nav ${navVisible ? 'is-visible' : 'is-hidden'}`}>
        <a href="#about" className="site-brand" onClick={(e) => { if(isDetail){e.preventDefault();goHome()} }}><strong>LAN</strong><span>(Product Designer)</span></a>
        <nav className="site-links" aria-label="Main navigation">
          <a href="/?page=resume">About</a><a href="#selected-work" onClick={(e)=>{if(isDetail){e.preventDefault();goHome('#selected-work')}}}>Selected Work</a><a href="#work-experience" onClick={(e)=>{if(isDetail){e.preventDefault();goHome('#work-experience')}}}>Experience</a>
        </nav>
        <div className="language" role="group" aria-label="Language"><button type="button" className={language === 'zh' ? 'is-active' : ''} onClick={() => changeLanguage('zh')} aria-pressed={language === 'zh'}>ZH</button><button type="button" className={language === 'en' ? 'is-active' : ''} onClick={() => changeLanguage('en')} aria-pressed={language === 'en'}>EN</button></div>
      </header>

      {isDetail ? (['moment-app','moodii-app','shapex-app'].includes(projectSlug) ? <AppProjectDetail slug={projectSlug} language={language} /> : projectSlug === 'news-cms' ? <StructureProjectDetail language={language} /> : projectSlug === 'member-system' ? <MemberSystemDetail language={language} /> : projectSlug === 'health-chatbot' ? <HealthChatbotDetail language={language} /> : <ProjectDetail language={language} />) : <main>
        <div className="portfolio-stage">
          <div className="portfolio-stage__glow" aria-hidden="true"><img src="/assets/figma/gradient-ellipse.svg" alt="" /></div>
          <div className="portfolio-stage__veil" aria-hidden="true" />
          <section className="hero" id="about">
            <HeroRoleCarousel />
            <p data-reveal>A senior product designer who turns user research and complex product problems into clear, scalable digital experiences. Working across product strategy, UX, and system design.</p>
          </section>

          <section className="capabilities" id="selected-work">
            <h2 className="capabilities__title" data-reveal>Selected Work</h2>
            {localizedCapabilityItems.map((item) => <Capability item={item} onOpen={item.number === '01' ? () => openDetail('group-chat') : item.number === '02' ? () => openDetail('news-cms') : item.number === '03' ? () => openDetail('health-chatbot') : item.number === '04' ? () => openDetail('member-system') : undefined} key={item.number} />)}
          </section>
        </div>

        <section className="work" id="work-experience">
          <h2>Work / Experience</h2>
          {['APP', 'WEB'].map((category) => <div className={`work-group work-group--${category.toLowerCase()}`} key={category}>
            <div className="work-grid">
              {localizedWorkItems.filter((item) => item.category === category).map((item) => {
                const content = <>
                  <span className="work-card__image"><img src={item.image} alt={`${item.title} project preview`} loading="lazy" /></span>
                  <strong>{item.title}</strong>
                  <small>{item.type}</small>
                </>
                return <article className="work-card" key={item.title}>
                  {item.detailSlug
                    ? <a href={`?project=${item.detailSlug}`} onClick={(event) => { event.preventDefault(); openDetail(item.detailSlug) }} aria-label={`${isEnglish ? 'Open' : '開啟'} ${item.title}`}>{content}</a>
                    : item.externalUrl
                    ? <a href={item.externalUrl} target="_blank" rel="noopener noreferrer" aria-label={`${isEnglish ? 'Open' : '開啟'} ${item.title}`}>{content}</a>
                    : <div>{content}</div>}
                </article>
              })}
            </div>
          </div>)}
        </section>

        <section className="contact" id="contact">
          <div className="contact__inner">
            <h2>Contact</h2>
            <button className="contact-email" type="button" aria-label={isEnglish ? 'Copy email address' : '複製電子信箱'} onClick={async () => {
              await navigator.clipboard.writeText('vickylan20@gmail.com')
              setEmailCopied(true)
              window.setTimeout(() => setEmailCopied(false), 1400)
            }}>vickylan20@gmail.com{emailCopied && <span className="contact-email__tooltip" role="status">{isEnglish ? 'Copied' : '已複製'}</span>}</button>
          </div>
        </section>

        <SiteFooter />
      </main>}
      <button className="back-to-top" type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label={isEnglish ? 'Back to top' : '回到頂端'}>TOP</button>
    </div>
  )
}

export default App
