import React from 'react'
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
  ['擔任 Lovart 內部講師', '規劃並執行 50+ 人參與的 AI 設計工作坊。'],
]

const variants = {
  default: {
    eyebrow: 'Resume · 2026',
    title: '產品探索、使用者研究與設計落地',
    profile: '具備 0→1 行動產品、複雜內容平台及 Design System 經驗，能獨立推進使用者研究、前期產品規劃與跨平台設計；並運用 AI 建立高效率的設計工作流，延伸至前端實作與品質驗證。',
    impact: [...baseImpact, ['推動團隊 AI 設計能力', '擔任 Lovart 內部講師，工作坊累計超過 50 人參與。'], ['連續參與 2 屆 AI Hackathon', '其中作品獲選佳作。']],
    pdf: '/resume/lan-hsiao-chi-resume.pdf',
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

function BulletList({ items }) {
  return <div className="resume-bullets">{items.map(([lead, detail], index) => <article key={lead}><span>{String(index + 1).padStart(2, '0')}</span><p><strong>{lead}</strong>{detail}</p></article>)}</div>
}

export default function ResumePage({ variant = 'default' }) {
  const content = variants[variant] || variants.default
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
          <div className="resume-contact"><a href="mailto:vickylan20@gmail.com">vickylan20@gmail.com</a><a href="/">Portfolio ↗</a></div>
        </section>

        <section className="resume-section">
          <div className="resume-section__label"><span>01</span><h3>Selected Impact</h3></div>
          <BulletList items={content.impact} />
        </section>

        <section className="resume-section">
          <div className="resume-section__label"><span>02</span><h3>Work Experience</h3></div>
          <div className="resume-experience">{experience.map(([company, role, year, detail]) => <article key={company}><div><h4>{company}</h4><p>{role}</p></div><time>{year}</time><p>{detail}</p></article>)}</div>
        </section>

        <section className="resume-section">
          <div className="resume-section__label"><span>03</span><h3>AI Design Workflow</h3></div>
          <BulletList items={aiWorkflow} />
        </section>

        <section className="resume-section resume-skills">
          <div className="resume-section__label"><span>04</span><h3>Skills</h3></div>
          <div><p>Product Discovery · User Research · Information Architecture · UX/UI Design</p><p>Design System · Prototyping · RWD Web · iOS · Android</p><p>Figma · Figma MCP · Codex · AI Image Generation · Lovart</p></div>
        </section>

        <footer className="resume-download">
          <div><p>Available for product design opportunities</p><h2>完整履歷，隨時帶走。</h2></div>
          <a href={content.pdf} download>Download PDF <span>↓</span></a>
        </footer>
      </div>
    </main>
  )
}
