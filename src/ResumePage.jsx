import React, { useState } from 'react'
import './resume.css'

const baseImpact = [
  ['從 0→1 完成 2 款 App 產品設計', '涵蓋需求探索、使用者流程、介面設計至開發交付。'],
  ['主導大型內容管理平台資訊架構重構', '梳理複雜內容與操作流程，提升系統的可理解性及使用效率。'],
  ['建置多平台 Design System', '建立 Design Token、共用元件與使用規範，提高設計一致性及交付效率。'],
  ['獨立規劃並執行多輪使用者研究', '將訪談洞察轉化為產品需求、功能優先級及前期產品方向。'],
  ['具備 RWD Web、iOS 與 Android 跨平台設計經驗', '與產品、工程及利害關係人協作推進落地。'],
]

const aiWorkflow = [
  ['建立 PRD／需求文件轉譯 Skill', '將原始需求轉化為設計重點、待釐清問題與初步流程，加速前期分析。'],
  ['建立 AI 視覺探索流程', '快速產生多方向設計提案，協助 Stakeholders 提前對焦產品方向。'],
  ['串接 AI 與 Figma MCP 整理設計資產', '建立 Design Token、元件及 Design Guideline，提升規範維護效率。'],
  ['運用 Codex 延伸前端原型與實作', '縮短設計驗證週期，提高最終介面與設計稿的一致性。'],
  ['持續與團隊交流 AI 設計工作流', '定期分享實作經驗、應用案例與流程方法，促進團隊共同探索並落實 AI 於產品設計流程。'],
]

const variants = {
  default: {
    eyebrow: 'Resume · 2026',
    title: '擅長產品探索、使用者研究與設計落地',
    profile: '具備 0→1 行動產品、複雜內容平台及 Design System 經驗，能獨立推進使用者研究、前期產品規劃與跨平台設計；並運用 AI 建立高效率的設計工作流，延伸至前端實作與品質驗證。',
    impact: [...baseImpact, ['推動團隊 AI 設計能力', '擔任 Lovart 內部講師，工作坊累計超過 50 人參與。']],
    pdf: '/resume/lan-hsiao-chi-resume.pdf',
    fullResume: true,
  },
  strategy: {
    eyebrow: 'Product Strategy Resume · 2026',
    title: '從洞察定義問題，推動產品方向與落地',
    profile: '擅長從使用者洞察、行為數據與商業需求定義產品問題，將研究結論轉化為功能優先級、產品 Roadmap 與可執行方案。',
    impact: [
      ['獨立推進多輪使用者研究', '將訪談與行為洞察轉化為產品需求及功能優先級。'],
      ['優化社交 App 群聊體驗', '整體使用率提升 5%，房間開啟率提升 11%。'],
      ['探索 AI 健康服務場景', '以數據分析、訪談及 Prototype 測試推進產品體驗，平台參與率最高達 88%。'],
      ['整合 5 大品牌會員需求', '建立一致登入體驗及長期會員產品 Roadmap。'],
      ['完成 2 款 0→1 App', '從需求探索、產品流程到開發交付完整推進。'],
    ],
    pdf: '/resume/lan-hsiao-chi-product-strategy.pdf',
  },
  systems: {
    eyebrow: 'Product Systems Resume · 2026',
    title: '複雜系統設計與可持續的產品框架',
    profile: '專注複雜內容平台、資訊架構與 Design System，能梳理跨角色工作流程，建立一致、可理解且可擴充的產品體驗。',
    impact: [
      ['主導大型新聞 CMS 重構', '梳理近 20 年內容工作流程與複雜操作情境。'],
      ['重建資訊架構與操作流程', '提升後台系統的可理解性、效率與擴充彈性。'],
      ['建置多平台 Design System', '建立 Design Token、共用元件與使用規範。'],
      ['設計跨品牌會員系統', '整合 5 大品牌零散需求，建立一致登入體驗。'],
      ['具備跨平台交付經驗', '涵蓋 RWD Web、iOS、Android 及前後台產品。'],
    ],
    pdf: '/resume/lan-hsiao-chi-product-systems.pdf',
  },
  ai: {
    eyebrow: 'AI & Startup Resume · 2026',
    title: '把 AI 應用轉化為可驗證的產品體驗',
    profile: '具備新創 0→1、AI 服務探索與快速落地能力，能從需求定義、原型測試到前端實作，建立可持續迭代的 AI 產品流程。',
    impact: [
      ['完成 2 款 0→1 App', '在新創環境獨立推進探索、設計與開發交付。'],
      ['推進 AI 健康服務體驗', '以研究與 Prototype 驗證新場景，平台參與率最高達 88%。'],
      ['建立 AI 設計工作流', '串接需求轉譯、視覺探索、Figma MCP 與前端實作。'],
      ['推動團隊 AI 能力', '擔任 Lovart 講師，工作坊累計 50+ 人參與。'],
      ['連續參與 2 屆 AI Hackathon', '其中作品獲選佳作。'],
    ],
    pdf: '/resume/lan-hsiao-chi-ai-startup.pdf',
  },
}

const experience = [
  ['TVBS', 'Product Designer', '2024—Now', '新聞 CMS、會員系統、健康內容平台與 AI Chatbot'],
  ['Moment Pet Wellness', 'Product Designer', '2023', '寵物健康 App Redesign 與使用者研究'],
  ['Zoomo Space', 'Product Designer', '2020—2022', 'Moodii、ShapeX 兩款 0→1 App'],
]

const fullExperience = [
  { company: 'TVBS 聯利媒體', role: 'Senior Product Designer', year: '2023/10—Now', points: ['TVBS 新聞 CMS 內容管理平台改版設計', '健康2.0 Web／App 使用者研究、數據分析與體驗介面設計', '健康2.0 AI Chatbot 功能規劃與體驗介面設計', 'TVBS 會員服務體驗優化設計'] },
  { company: 'Moment Pet Wellness', role: 'Product Designer', year: '2022/6—2023/7', points: ['App 改版體驗介面設計，建立新 Design System', 'App 使用者研究與使用者訪談'] },
  { company: 'Zoomo Space Inc', role: 'UI/UX Designer', year: '2020/6—2022/4', points: ['Moodii App 0→1 UI/UX 設計', 'ShapeX App 0→1 UI/UX 設計', 'App Store／Google Play Store 皆取得 4 分以上評分'] },
  { company: '雄獅旅遊', role: 'Web Designer', year: '2018/10—2020/5', points: ['雄獅旅展主視覺、活動網站與刊物設計', '台灣觀光局合作網站設計', '欣傳媒合作網站設計'] },
  { company: 'TCY Cosmetics', role: 'Graphic Designer', year: '2016/4—2018/10', points: ['Mollifix、Polynia 品牌主視覺、Banner 與活動頁設計', '好日子平台 Banner、活動頁與影片製作'] },
  { company: '台灣文摘', role: 'Graphic Designer', year: '2015/4—2016/4', points: ['中文觀光季刊《美好九州》排版設計', '日文月刊《な～るほど・ザ・台湾》排版設計', '中英日《大台北觀光地圖》視覺設計'] },
]

const primaryResume = {
  zh: {
    headline: '擅長產品探索、使用者研究與設計落地',
    profile: '具備 0→1 行動產品、複雜內容平台及 Design System 經驗，能獨立推進使用者研究、前期產品規劃與跨平台設計；並運用 AI 建立高效率的設計工作流，延伸至前端實作與品質驗證。',
    impact: [...baseImpact, ['推動團隊 AI 設計能力', '擔任 Lovart 內部講師，工作坊累計超過 50 人參與。']],
    experience: fullExperience,
    ai: aiWorkflow,
    download: '下載 PDF',
  },
  en: {
    headline: 'Product discovery, user research, and design delivery',
    profile: 'Experienced in 0-to-1 mobile products, complex content platforms, and design systems. I independently drive user research, early product planning, and cross-platform design, while using AI workflows to extend design into frontend implementation and quality validation.',
    impact: [
      ['Designed 2 mobile apps from 0 to 1', 'Owned discovery, user flows, interface design, and developer handoff.'],
      ['Led the IA redesign of a large-scale CMS', 'Simplified complex content and operational workflows to improve clarity and efficiency.'],
      ['Built multi-platform design systems', 'Created design tokens, shared components, and usage guidelines for consistent delivery.'],
      ['Planned and conducted multiple rounds of user research', 'Translated interview insights into product requirements, priorities, and early product direction.'],
      ['Designed across responsive web, iOS, and Android', 'Partnered with product, engineering, and stakeholders to bring designs to production.'],
      ['Advanced the team’s AI design capability', 'Facilitated internal Lovart workshops attended by more than 50 colleagues.'],
    ],
    experience: [
      { company: 'TVBS Media', role: 'Senior Product Designer', year: 'Oct 2023—Present', points: ['Redesigned the TVBS News content management system', 'Led user research, data analysis, and experience design for Health 2.0 Web and App', 'Planned features and designed the experience for the Health 2.0 AI Chatbot', 'Optimized the TVBS membership service experience'] },
      { company: 'Moment Pet Wellness', role: 'Product Designer', year: 'Jun 2022—Jul 2023', points: ['Redesigned the mobile app experience and established a new design system', 'Conducted user research and interviews'] },
      { company: 'Zoomo Space Inc', role: 'UI/UX Designer', year: 'Jun 2020—Apr 2022', points: ['Designed Moodii App from 0 to 1', 'Designed ShapeX App from 0 to 1', 'Both apps achieved ratings above 4 on the App Store and Google Play'] },
      { company: 'Lion Travel', role: 'Web Designer', year: 'Oct 2018—May 2020', points: ['Designed campaign identities, event websites, and publications', 'Designed collaborative websites for the Taiwan Tourism Bureau', 'Designed collaborative websites for XinMedia'] },
      { company: 'TCY Cosmetics', role: 'Graphic Designer', year: 'Apr 2016—Oct 2018', points: ['Created brand visuals, banners, and campaign pages for Mollifix and Polynia', 'Produced banners, campaign pages, and videos for the Good Day platform'] },
      { company: 'Taiwan Panorama', role: 'Graphic Designer', year: 'Apr 2015—Apr 2016', points: ['Editorial design for the Chinese tourism quarterly Beautiful Kyushu', 'Editorial design for the Japanese monthly Naruhodo The Taiwan', 'Visual design for the multilingual Greater Taipei Tourist Map'] },
    ],
    ai: [
      ['Built a PRD translation skill', 'Converted raw requirements into design priorities, open questions, and initial flows.'],
      ['Established an AI visual exploration workflow', 'Generated multiple design directions quickly to align stakeholders earlier.'],
      ['Connected AI with Figma MCP', 'Organized design assets and created tokens, components, and design guidelines.'],
      ['Extended design into frontend implementation with Codex', 'Shortened validation cycles and improved fidelity between design and production.'],
      ['Shared AI design workflows with the team', 'Regularly exchanged practical methods and use cases to embed AI in the design process.'],
    ],
    download: 'Download PDF',
  },
}

function PrimaryResume({ pdf }) {
  const [language, setLanguage] = useState(() => window.localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'zh')
  const copy = primaryResume[language]
  const switchLanguage = (next) => {
    setLanguage(next)
    window.localStorage.setItem('portfolio-language', next)
    document.documentElement.lang = next === 'en' ? 'en' : 'zh-Hant'
  }
  return <main className="primary-resume">
    <header className="site-nav is-visible">
      <a href="/#about" className="site-brand"><strong>LAN</strong><span>(Product Designer)</span></a>
      <nav className="site-links" aria-label="Main navigation"><a href="/#about">About</a><a href="/#selected-work">Selected Work</a><a href="/#work-experience">Experience</a><a href="/?page=resume">Resume</a></nav>
      <div className="language" role="group" aria-label="Language"><button type="button" className={language === 'zh' ? 'is-active' : ''} onClick={() => switchLanguage('zh')} aria-pressed={language === 'zh'}>ZH</button><button type="button" className={language === 'en' ? 'is-active' : ''} onClick={() => switchLanguage('en')} aria-pressed={language === 'en'}>EN</button></div>
    </header>

    <div className="primary-resume__page">
      <section className="primary-resume__hero">
        <div><h1>Lan Hsiao Chi</h1><h2>{copy.headline}</h2><p>{copy.profile}</p></div>
        <aside><img src="/resume/assets/resume-portrait.png" alt="Lan Hsiao Chi" /><strong>藍筱淇</strong><span>Senior Product Designer</span></aside>
      </section>

      <ResumeEditorialSection number="01" title="Selected Impact">
        <div className="primary-resume__impact">{copy.impact.map(([lead, detail], index) => <article key={lead}><b>{index + 1}</b><div><h3>{lead}</h3><p>{detail}</p></div></article>)}</div>
      </ResumeEditorialSection>

      <div className="primary-resume__gallery" aria-label="Product design work highlights">
        <div className="primary-resume__gallery-track">
          <img src="/resume/assets/resume-photo-b.png" alt="CMS product design" />
          <img src="/resume/assets/resume-photo-c.png" alt="Mobile app product design" />
          <img src="/resume/assets/resume-photo-a.png" alt="User research interview" />
          <img src="/resume/assets/resume-photo-b.png" alt="" aria-hidden="true" />
          <img src="/resume/assets/resume-photo-c.png" alt="" aria-hidden="true" />
          <img src="/resume/assets/resume-photo-a.png" alt="" aria-hidden="true" />
        </div>
      </div>

      <ResumeEditorialSection number="02" title="Work Experience">
        <div className="primary-resume__timeline">{copy.experience.map((item) => <article key={item.company}><div className="primary-resume__job-head"><div><h3>{item.company}</h3><strong>{item.role}</strong></div><time>{item.year}</time></div><ul>{item.points.map(point => <li key={point}>{point}</li>)}</ul></article>)}</div>
      </ResumeEditorialSection>

      <ResumeEditorialSection number="03" title="AI Design Workflow">
        <div className="primary-resume__impact primary-resume__impact--ai">{copy.ai.map(([lead, detail], index) => <article key={lead}><b>{index + 1}</b><div><h3>{lead}</h3><p>{detail}</p></div></article>)}</div>
      </ResumeEditorialSection>
    </div>

    <footer className="primary-resume__contact"><div><h2>Contact</h2></div><div><a href="mailto:vickylan20@gmail.com">vickylan20@gmail.com</a><a href="tel:+886922019178">+886 922-019-178</a></div><a className="primary-resume__download" href={pdf} download>{copy.download} ↓</a></footer>
  </main>
}

function ResumeEditorialSection({ number, title, children }) {
  return <section className="primary-resume__section"><header><span>{number}</span><h2>{title}</h2></header>{children}</section>
}

function BulletList({ items }) {
  return <div className="resume-bullets">{items.map(([lead, detail], index) => <article key={lead}><span>{String(index + 1).padStart(2, '0')}</span><p><strong>{lead}</strong>{detail}</p></article>)}</div>
}

export default function ResumePage({ variant = 'default' }) {
  const content = variants[variant] || variants.default
  if (content.fullResume) {
    return <PrimaryResume pdf={content.pdf} />
  }
  return (
    <main className="resume-page">
      <header className="resume-topbar">
        <a className="resume-brand" href="/">LAN <span>Product Designer</span></a>
        <a className="resume-home" href="/">← Portfolio</a>
      </header>

      <div className="resume-wrap">
        <section className="resume-hero">
          <p className="resume-eyebrow">{content.eyebrow}</p>
          <h1>Lan Hsiao-Chi</h1>
          <h2>{content.title}</h2>
          <p className="resume-profile">{content.profile}</p>
          <div className="resume-contact"><span>藍筱淇 · Senior Product Designer</span><a href="mailto:vickylan20@gmail.com">vickylan20@gmail.com</a><a href="/">Portfolio ↗</a></div>
        </section>

        <section className="resume-section">
          <div className="resume-section__label"><span>01</span><h3>Selected Impact</h3></div>
          <BulletList items={content.impact} />
        </section>

        {content.fullResume && <div className="resume-photo-strip" aria-label="產品設計工作紀錄">
          <img src="/assets/highlight/cms-workflow.jpg" alt="新聞內容管理平台設計" />
          <img src="/assets/project/health20-wide.jpg" alt="健康服務與 AI Chatbot 產品設計" />
          <img src="/assets/figma/myrole_2.jpg" alt="使用者訪談與產品研究" />
        </div>}

        <section className="resume-section">
          <div className="resume-section__label"><span>02</span><h3>Work Experience</h3></div>
          {content.fullResume
            ? <div className="resume-experience resume-experience--timeline">{fullExperience.map((item) => <article key={item.company}><div><h4>{item.company}</h4><p>{item.role}</p></div><time>{item.year}</time><ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul></article>)}</div>
            : <div className="resume-experience">{experience.map(([company, role, year, detail]) => <article key={company}><div><h4>{company}</h4><p>{role}</p></div><time>{year}</time><p>{detail}</p></article>)}</div>}
        </section>

        <section className="resume-section">
          <div className="resume-section__label"><span>03</span><h3>AI Design Workflow</h3></div>
          <BulletList items={aiWorkflow} />
        </section>

        {!content.fullResume && <section className="resume-section resume-skills">
          <div className="resume-section__label"><span>04</span><h3>Skills</h3></div>
          <div><p>Product Discovery · User Research · Information Architecture · UX/UI Design</p><p>Design System · Prototyping · RWD Web · iOS · Android</p><p>Figma · Figma MCP · Codex · AI Image Generation · Lovart</p></div>
        </section>}

        <footer className="resume-download">
          <div><p>Contact</p><h2>一起打造有影響力的產品。</h2><div className="resume-download__contact"><a href="mailto:vickylan20@gmail.com">vickylan20@gmail.com</a><a href="tel:+886922019178">+886 922-019-178</a></div></div>
          <a href={content.pdf} download>Download PDF <span>↓</span></a>
        </footer>
      </div>
    </main>
  )
}
