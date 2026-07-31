import React, { useEffect, useRef, useState } from 'react'
import ProjectDetail from './ProjectDetail.jsx'
import SiteFooter from './SiteFooter.jsx'
import StructureProjectDetail from './StructureProjectDetail.jsx'
import MemberSystemDetail from './MemberSystemDetail.jsx'
import HealthChatbotDetail from './HealthChatbotDetail.jsx'
import ResumePage from './ResumePage.jsx'

const capabilityItems = [
  { number: '01', name: 'Define', caption: '（定義真正的問題）', project: 'Moodii APP', title: '群聊功能體驗優化', scope: 'User Research, UX Design', points: ['收集用戶回饋與使用者訪談', '分析產品數據與使用行為', '定義產品問題與設計目標', '快速迭代產品服務設計與體驗'], outcome: '整體使用率提升5%、房間開啟率提升11%', image: '/assets/figma/understand-source.png', alt: 'Moodii 社交 App 群聊體驗優化' },
  { number: '02', name: 'Structure', caption: '（建立一致可持續的產品框架）', project: 'TVBS News', title: '後台系統改版設計', scope: 'Information Architecture, System Design', points: ['觀察使用者操作習慣與需求', '重整資訊架構與操作流程', '建立一致的介面與互動規範', '保留可擴充的資訊架構'], outcome: '新版 CMS 於 2026 / 8 正式上線啟用', image: '/assets/figma/structure-source.png', alt: 'TVBS News CMS 新聞編輯後台' },
  { number: '03', name: 'Explore', caption: '（找到產品合適的應用場景）', project: 'Health 2.0', title: 'AI Chatbot 體驗優化', scope: 'Product Discovery, UX Research, UX Design', points: ['分析數據與提問內容', '使用者訪談與 Prototype 測試', '設計新的服務場景與體驗', '持續追蹤數據並優化提問品質'], outcome: '提升健康平台參與率最高至88%', image: '/assets/project/health20-wide.jpg', alt: 'Health 2.0 AI Chatbot 體驗優化' },
  { number: '04', name: 'Strategize', caption: '（平衡商業需求與產品體驗）', project: 'TVBS Member System', title: '介面體驗優化＆商業結合', scope: 'Product Strategy, Service Design', points: ['盤點用戶使用流程中的痛點', '優化產品介面和使用體驗', '建立一致的跨品牌登入體驗', '創造可兼顧商業需求的彈性設計'], outcome: 'Redesign 上線、會員產品 Roadmap 建立', image: '/assets/detail/member-cover.jpg', alt: '會員登入情境畫面' },
]

const capabilityItemsEn = [
  { title: 'Group Chat Experience Optimization', points: ['Gathered user feedback and conducted interviews', 'Analyzed product data and user behavior', 'Defined product problems and design goals', 'Rapidly iterated the service design and experience'], outcome: 'Overall usage +5% · Room activation +11%', alt: 'Moodii social app group chat optimization' },
  { title: 'CMS Redesign', points: ['Observed user habits and needs', 'Restructured information architecture and workflows', 'Built consistent UI and interaction patterns', 'Created an extensible information architecture'], outcome: 'New CMS scheduled to launch in Aug 2026', alt: 'TVBS News CMS editorial system' },
  { title: 'AI Chatbot Experience Optimization', points: ['Analyzed usage data and question content', 'Conducted interviews and prototype tests', 'Designed new service scenarios and experiences', 'Tracked data and improved question quality'], outcome: 'Health-platform engagement reached 88%', alt: 'Health 2.0 AI Chatbot optimization' },
  { title: 'Experience Optimization & Business Integration', points: ['Mapped pain points across the user journey', 'Improved the product interface and experience', 'Created a consistent cross-brand login experience', 'Designed a flexible model that supports business needs'], outcome: 'Redesign launched · Membership roadmap established', alt: 'Member login experience' },
]

const workItems = [
  { title: 'TVBS News CMS', type: 'CMS Redesign, Design System', year: '2026', company: 'TVBS', image: '/assets/project/tvbs-news-cms.png', detail: '重整近二十年的新聞內容工作流程與設計系統。', detailSlug: 'news-cms' },
  { title: 'TVBS Member System', type: 'System Redesign, Service Design', year: '2025', company: 'TVBS', image: '/assets/detail/member-cover.jpg', detail: '將五大品牌的零散登入需求整合成長期會員策略。', detailSlug: 'member-system' },
  { title: 'Nutrition Site', type: 'Web UIUX Design, Design System', year: '2025', company: 'TVBS', image: '/assets/project/nutrition-site.png', detail: '建立清楚、一致且可持續擴充的健康內容體驗。' },
  { title: 'Health 2.0 AI Chatbot', type: 'Web / APP UIUX Design, User Research', year: '2024–2025', company: 'TVBS', image: '/assets/project/health20-wide.jpg', detail: '從研究出發，探索 AI 如何協助使用者找到真正需要的健康答案。', detailSlug: 'health-chatbot' },
  { title: 'Moment APP', type: 'App Redesign, User Research', year: '2023', company: 'Moment Pet Wellness', image: '/assets/project/moment-pet.png', detail: '優化寵物醫療 App 的產品體驗與介面，讓健康管理流程更直覺、易用。', externalUrl: '/assets/project/Momentapp.jpg' },
  { title: 'Moodii APP', type: 'App 0–1 Product Design, User Research', year: '2020–2022', company: 'Zoomo Space', image: '/assets/project/moodii.png', detail: '從 0–1 打造一個能安心表達情緒的社交產品。', externalUrl: '/assets/project/Moodii_UIUX.jpg' },
  { title: 'ShapeX APP', type: 'App 0–1 Product Design', year: '2020–2022', company: 'Zoomo Space', image: '/assets/project/shapex.png', detail: '從 0→1 設計隨身運動教練 App，以動作軌跡比對概念，打造直覺的訓練與回饋體驗。', externalUrl: '/assets/project/ShapeX_UIUX.jpg' },
]

const workDetailsEn = [
  'Rebuilt two decades of editorial workflows and the design system.',
  'Unified fragmented login needs across five brands into a long-term membership strategy.',
  'Created a clear, consistent, and extensible health-content experience.',
  'Explored how AI can help people find the health answers they actually need.',
  'Redesigned the pet healthcare app experience and interface to make health management more intuitive and accessible.',
  'Built a safe social product from 0 to 1 for expressing emotions.',
  'Designed a personal fitness coach app from 0 to 1, using motion-path comparison to create an intuitive training and feedback experience.',
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

function Capability({ item, onOpen }) {
  return (
    <article className={`capability capability--${item.number} ${onOpen ? 'capability--clickable' : ''}`} data-reveal onClick={onOpen} onKeyDown={(event) => event.key === 'Enter' && onOpen?.()} role={onOpen ? 'link' : undefined} tabIndex={onOpen ? 0 : undefined}>
      <div className="capability__top">
        <div className="capability__name">
          <p>{item.number}</p>
          <div><h2>{item.name}</h2><span>{item.caption}</span></div>
        </div>
        <div className="capability__story">
          <p>{item.project}</p>
          <h3>{item.title}</h3>
          <span>{item.scope}</span>
        </div>
      </div>
      <div className="capability__bottom">
        <div className="capability__visual" data-image-reveal>
          {item.images
            ? item.images.map((image, index) => <img className={`capability__phone capability__phone--${index + 1}`} src={image} alt={index === 0 ? item.alt : ''} loading="eager" key={image} />)
            : <img src={item.image} alt={item.alt} loading="eager" />}
        </div>
        <div className="capability__proof">
          <h4>Key Actions</h4>
          <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
          <div className="outcome">
            <strong>Outcome</strong><span>{item.outcome}</span><img src="/assets/figma/outcome-arrow.svg" alt="" />
          </div>
        </div>
      </div>
    </article>
  )
}

function App() {
  const resumeRoute = window.location.pathname.replace(/\/+$/, '')
  const resumeVariant = resumeRoute === '/resume/product-strategy' ? 'strategy' : resumeRoute === '/resume/product-systems' ? 'systems' : resumeRoute === '/resume/ai-startup' ? 'ai' : resumeRoute === '/resume' ? 'default' : null
  if (resumeVariant) return <ResumePage variant={resumeVariant} />
  const projectSlug = new URLSearchParams(window.location.search).get('project')
  const [isDetail, setIsDetail] = useState(() => Boolean(projectSlug))
  const [navVisible, setNavVisible] = useState(true)
  const [activeWork, setActiveWork] = useState(null)
  const [emailCopied, setEmailCopied] = useState(false)
  const [language, setLanguage] = useState(() => window.localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'zh')
  const workRef = useRef(null)
  const lastScrollY = useRef(0)
  const isEnglish = language === 'en'
  const localizedCapabilityItems = capabilityItems.map((item, index) => isEnglish ? { ...item, ...capabilityItemsEn[index], caption: '' } : item)
  const localizedWorkItems = workItems.map((item, index) => isEnglish ? { ...item, detail: workDetailsEn[index] } : item)

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

  const movePreview = (event) => {
    if (!workRef.current) return
    const list = workRef.current.querySelector('.work-list')
    if (!list) return
    const rect = list.getBoundingClientRect()
    workRef.current.style.setProperty('--preview-x', `${event.clientX - rect.left}px`)
  }

  const openDetail = (slug = 'group-chat') => {
    window.history.scrollRestoration = 'manual'
    window.location.assign(`${window.location.pathname}?project=${slug}`)
  }
  const goHome = (hash = '#about') => {
    window.history.scrollRestoration = 'manual'
    window.location.assign(`${window.location.pathname}${hash}`)
  }
  const openWorkItem = (item) => {
    if (item.detailSlug) {
      openDetail(item.detailSlug)
      return
    }
    if (item.externalUrl) {
      window.open(item.externalUrl, '_blank', 'noopener,noreferrer')
      return
    }
    const itemIndex = localizedWorkItems.indexOf(item)
    setActiveWork((current) => current === itemIndex ? null : itemIndex)
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

  return (
    <div className="site-shell">
      <header className={`site-nav ${navVisible ? 'is-visible' : 'is-hidden'}`}>
        <a href="#about" className="site-brand" onClick={(e) => { if(isDetail){e.preventDefault();goHome()} }}><strong>LAN</strong><span>(Product Designer)</span></a>
        <nav className="site-links" aria-label="Main navigation">
          <a href="#about" onClick={(e)=>{if(isDetail){e.preventDefault();goHome('#about')}}}>About</a><a href="#selected-work" onClick={(e)=>{if(isDetail){e.preventDefault();goHome('#selected-work')}}}>Selected Work</a><a href="#work-experience" onClick={(e)=>{if(isDetail){e.preventDefault();goHome('#work-experience')}}}>Experience</a><a href="/resume">Resume</a>
        </nav>
        <div className="language" role="group" aria-label="Language"><button type="button" className={language === 'zh' ? 'is-active' : ''} onClick={() => changeLanguage('zh')} aria-pressed={language === 'zh'}>ZH</button><button type="button" className={language === 'en' ? 'is-active' : ''} onClick={() => changeLanguage('en')} aria-pressed={language === 'en'}>EN</button></div>
      </header>

      {isDetail ? (projectSlug === 'news-cms' ? <StructureProjectDetail language={language} /> : projectSlug === 'member-system' ? <MemberSystemDetail language={language} /> : projectSlug === 'health-chatbot' ? <HealthChatbotDetail language={language} /> : <ProjectDetail language={language} />) : <main>
        <div className="portfolio-stage">
          <div className="portfolio-stage__glow" aria-hidden="true"><img src="/assets/figma/gradient-ellipse.svg" alt="" /></div>
          <div className="portfolio-stage__veil" aria-hidden="true" />
          <section className="hero" id="about">
            <HeroRoleCarousel />
            <p data-reveal>I'm Lan, a Senior Product Designer designing digital products across healthcare, wellness, media, and AI.</p>
          </section>

          <section className="capabilities" id="selected-work">
            {localizedCapabilityItems.map((item) => <Capability item={item} onOpen={item.number === '01' ? () => openDetail('group-chat') : item.number === '02' ? () => openDetail('news-cms') : item.number === '03' ? () => openDetail('health-chatbot') : item.number === '04' ? () => openDetail('member-system') : undefined} key={item.number} />)}
          </section>
        </div>

        <section className="work" id="work-experience" ref={workRef} onPointerMove={movePreview} onPointerLeave={() => setActiveWork(null)}>
          <h2 data-reveal>Work / Experience</h2>
          <div className="work-list" data-reveal>
            {localizedWorkItems.map((item, index) => {
              const active = activeWork === index
              const opensDestination = Boolean(item.detailSlug || item.externalUrl)
              const rowContent = <>
                <span className="work-row__main"><strong>{item.title}</strong><small>{item.type}</small><em>{item.detail}</em></span>
                <span className="work-row__meta"><b>{item.year}</b><small>{item.company}</small></span>
                <span className="work-row__toggle" aria-hidden="true">{active ? '−' : '+'}</span>
              </>
              return (
                <article className={`work-row ${active ? 'is-active' : ''} ${opensDestination ? 'work-row--link' : ''}`} key={item.title} onPointerEnter={() => setActiveWork(index)}>
                  {item.externalUrl
                    ? <a href={item.externalUrl} target="_blank" rel="noopener noreferrer" aria-label={`${isEnglish ? 'Open' : '開啟'} ${item.title}`}>{rowContent}</a>
                    : <button type="button" aria-expanded={opensDestination ? undefined : active} aria-label={opensDestination ? `${isEnglish ? 'Open' : '開啟'} ${item.title}` : undefined} onClick={() => openWorkItem(item)}>{rowContent}</button>}
                  {active && <div className="work-preview" aria-hidden="true"><img src={item.image} alt="" /></div>}
                </article>
              )
            })}
          </div>
        </section>

        <section className="contact" id="contact">
          <h2 data-reveal>Contact</h2>
          <button className="contact-email" type="button" data-reveal aria-label={isEnglish ? 'Copy email address' : '複製電子信箱'} onClick={async () => {
            await navigator.clipboard.writeText('vickylan20@gmail.com')
            setEmailCopied(true)
            window.setTimeout(() => setEmailCopied(false), 1400)
          }}>vickylan20@gmail.com{emailCopied && <span className="contact-email__tooltip" role="status">{isEnglish ? 'Copied' : '已複製'}</span>}</button>
        </section>

        <SiteFooter />
      </main>}
      <button className="back-to-top" type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label={isEnglish ? 'Back to top' : '回到頂端'}>TOP</button>
    </div>
  )
}

export default App
