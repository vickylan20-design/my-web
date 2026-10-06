import React, { useEffect, useRef, useState } from 'react'
import SiteFooter from './SiteFooter.jsx'
import FittedProjectTitle from './FittedProjectTitle.jsx'
import { healthChatbotCase } from './content/healthChatbotCase.js'
import './health-chatbot-detail.css'

function ResearchFacts({ items }) {
  return <dl className="chatbot-case__facts">{items.map(([label, value]) =>
    <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
  )}</dl>
}

function CaseSection({ id, number, label, title, children }) {
  return <section id={id} className="detail-section chatbot-case__section" aria-labelledby={`${id}-title`}>
    <div className="chatbot-case__section-heading"><span>{number} / {label}</span><h2 id={`${id}-title`}>{title}</h2></div>
    <div className="chatbot-case__section-body">{children}</div>
  </section>
}

function revealChapterLink(row, link) {
  if (!row || !link) return
  const rowBounds = row.getBoundingClientRect()
  const linkBounds = link.getBoundingClientRect()
  const overflow = linkBounds.left < rowBounds.left
    ? linkBounds.left - rowBounds.left
    : linkBounds.right > rowBounds.right ? linkBounds.right - rowBounds.right : 0
  if (overflow) row.scrollTo({ left: row.scrollLeft + overflow, behavior: 'instant' })
}

function CaseNavigation({ items, isEnglish }) {
  const [activeSection, setActiveSection] = useState(items[0][0])
  const navigationRef = useRef(null)
  const rowRef = useRef(null)

  useEffect(() => {
    let frame = 0
    const headings = items.map(([id]) => ({
      id,
      element: document.querySelector(`#${id} .chatbot-case__section-heading`),
    }))
    const updateActiveSection = () => {
      frame = 0
      const navigation = navigationRef.current
      const styles = window.getComputedStyle(navigation)
      // Keep the reading threshold stable while the site header slides in or out.
      const stickyBottom = parseFloat(styles.getPropertyValue('--case-header-height'))
        + parseFloat(styles.getPropertyValue('--case-tab-height'))
      const readingLine = Math.max(stickyBottom, navigation.getBoundingClientRect().bottom) + 64
      let current = items[0][0]
      for (const { id, element } of headings) {
        if (element && element.getBoundingClientRect().top <= readingLine) current = id
      }
      setActiveSection(current)
    }
    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActiveSection)
    }
    scheduleUpdate()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)
    // Product images can shift the later chapter positions as they load.
    document.addEventListener('load', scheduleUpdate, true)
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      document.removeEventListener('load', scheduleUpdate, true)
    }
  }, [items])

  useEffect(() => {
    const row = rowRef.current
    revealChapterLink(row, row.querySelector('[aria-current="location"]'))
  }, [activeSection, items])

  return <nav ref={navigationRef} className="chatbot-case__navigation" aria-label={isEnglish ? 'Case study sections' : '案例章節'}>
    <div ref={rowRef} className="chatbot-case__navigation-row">
      {items.map(([id, label], index) => <a key={id} href={`#${id}`} aria-current={activeSection === id ? 'location' : undefined} onFocus={event => {
        const link = event.currentTarget
        window.requestAnimationFrame(() => {
          if (document.activeElement === link) revealChapterLink(rowRef.current, link)
        })
      }}>
        <span>0{index + 1}</span>{label}
      </a>)}
    </div>
  </nav>
}

export default function HealthChatbotDetail({ language = 'zh' }) {
  const isEnglish = language === 'en'
  const copy = healthChatbotCase[isEnglish ? 'en' : 'zh']
  return <main className="project-detail chatbot-case">
    <section className="detail-intro chatbot-case__intro">
      <FittedProjectTitle>AI Chatbot UX Design</FittedProjectTitle>
      <div className="detail-intro__copy">
        <p>{copy.intro}</p>
        <dl><div><dt>Services</dt><dd>TVBS Health 2.0</dd></div><div><dt>My Role</dt><dd>User Research, UX Design</dd></div><div><dt>Date</dt><dd>{copy.date}</dd></div></dl>
      </div>
      <div className="chatbot-case__goal">
        <div className="chatbot-case__goal-image" data-image-reveal><img src="/assets/project/health20-wide.jpg" alt={isEnglish ? 'Reading a Health 2.0 article on a phone' : '使用手機閱讀健康 2.0 文章'} /></div>
        <div className="chatbot-case__goal-copy"><small>Project Goal</small><strong>{copy.goal}</strong></div>
      </div>
      <dl className="chatbot-case__summary">{copy.summary.map(({ value, mobileValue, label, description, mobileDescription }) => <div key={label}>
        <dt>{label}</dt><dd>
          <strong className={mobileValue ? 'chatbot-case__summary-full' : undefined}>{value}</strong>
          {mobileValue && <strong className="chatbot-case__summary-compact">{mobileValue}</strong>}
          <span className="chatbot-case__summary-full">{description}</span>
          {mobileDescription && <span className="chatbot-case__summary-compact">{mobileDescription}</span>}
        </dd>
      </div>)}</dl>
    </section>

    <CaseNavigation items={copy.navigation} isEnglish={isEnglish} />

    <CaseSection id="problem" number="01" label="PROBLEM & DATA" title={copy.problemTitle}>
      <p className="chatbot-case__body-copy">{copy.problemCopy}</p>
      <div className="chatbot-case__data-chart" role="img" aria-label={copy.data.map(row => `${row[0]} ${row[3]}`).join('；')}>
        {copy.data.map(([label, , , share, value]) => <div className="chatbot-case__data-row" key={label} aria-hidden="true">
          <span>{label}</span><div className="chatbot-case__data-track"><i style={{width: `${value / 45 * 100}%`}} /></div><b>{share}</b>
        </div>)}
      </div>
      <p className="chatbot-case__insight">{copy.dataInsight}</p>
      <p className="chatbot-case__note">{copy.dataNote}</p>
    </CaseSection>

    <CaseSection id="interviews" number="02" label="USER INTERVIEWS" title={copy.interviewTitle}>
      <p className="chatbot-case__body-copy">{copy.interviewCopy}</p>
      <ResearchFacts items={copy.interviewMeta} />
      <h3 className="chatbot-case__minor-title">{copy.interviewLabel}</h3>
      <div className="chatbot-case__interview-findings">{copy.interviewFindings.map(([title, observation, implication], index) => <article key={title}>
        <span>0{index + 1}</span><div><h4>{title}</h4><p>{observation}</p><p className="chatbot-case__implication">{implication}</p></div>
      </article>)}</div>
      <p className="chatbot-case__insight">{copy.researchBridge}</p>
    </CaseSection>

    <CaseSection id="concept-test" number="03" label="CONCEPT TESTING" title={copy.conceptTitle}>
      <p className="chatbot-case__body-copy">{copy.conceptCopy}</p>
      <ResearchFacts items={copy.conceptMeta} />
      <p className="chatbot-case__note">{copy.cohortNote}</p>
      <div className="chatbot-case__concepts">
        <div className="chatbot-case__concept-head">{copy.conceptTableHead.map(label => <span key={label}>{label}</span>)}</div>
        {copy.concepts.map(([title, feedback, implication]) => <article key={title}><h3>{title}</h3><div><span className="chatbot-case__mobile-label">{copy.conceptTableHead[1]}</span><p>{feedback}</p></div><div><span className="chatbot-case__mobile-label">{copy.conceptTableHead[2]}</span><p>{implication}</p></div></article>)}
      </div>
      <p className="chatbot-case__note">{copy.conceptNote}</p>
      <blockquote className="chatbot-case__key-finding"><p>{copy.keyFinding}</p></blockquote>
    </CaseSection>

    <CaseSection id="decisions" number="04" label="DESIGN DECISIONS" title={copy.decisionTitle}>
      <p className="chatbot-case__body-copy">{copy.decisionCopy}</p>
      <div className="chatbot-case__decisions">{copy.decisions.map(item => <article key={item.number}>
        <header><span>{item.number}</span><div><h3>{item.title}</h3></div></header>
        <div className="chatbot-case__decision-copy"><div><h4>{copy.evidenceLabel}</h4><p>{item.evidence}</p></div><div><h4>{copy.solutionLabel}</h4><p>{item.solution}</p></div></div>
        {item.number !== '01' && <div className="chatbot-case__journey"><div><small>{copy.beforeLabel}</small><p>{item.before}</p></div><div><small>{copy.afterLabel}</small><p>{item.after}</p></div></div>}
        {item.number === '02' && <figure className="chatbot-case__decision-showcase">
          <img loading="lazy" src="/assets/detail/chatbot_UI_mobile.jpg" alt={copy.uiCaption} />
        </figure>}
        {item.number === '01' && <div className="chatbot-case__app-comparison">
          {copy.appComparison.map(({ label, alt }, index) => <figure key={label}>
            <figcaption>{label}</figcaption>
            <img loading="lazy" src={`/assets/detail/chatbot-app-${index === 0 ? 'before' : 'after'}.png`} width={index === 0 ? 340 : 341} height="675" alt={alt} />
            <p>{index === 0 ? item.before : item.after}</p>
          </figure>)}
        </div>}
      </article>)}</div>
    </CaseSection>

    <CaseSection id="outcomes" number="05" label="OUTCOMES & REFLECTION" title={copy.outcomeTitle}>
      <p className="chatbot-case__body-copy">{copy.outcomeCopy}</p>
      <dl className="chatbot-case__metrics">{copy.metrics.map(([value, label]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
      <p className="chatbot-case__note">{copy.metricNote}</p>
      <div className="chatbot-case__reflections">{copy.reflections.map(([title, text]) => <article key={title}><h4>{title}</h4><p>{text}</p></article>)}</div>
    </CaseSection>
    <SiteFooter />
  </main>
}
