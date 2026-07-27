import React from 'react'
import SiteFooter from './SiteFooter.jsx'
import './structure-project-detail.css'
import './structure-project-layout.css'
import './cms-images.css'

const TokenStrip = ({ name, colors }) => (
  <div className="cms-redesign__token-row">
    <span>{name}</span>
    <div>{colors.map(({ scale, color }) => <i key={`${name}-${scale}`}><small>{scale}</small><em>{color}</em><b style={{ backgroundColor: color }} /></i>)}</div>
  </div>
)

const semanticColors = [
  { name: 'Primary', code: '#165DFB (Blue 600)', color: '#165dfb' },
  { name: 'Foreground', code: '#09090B (Zinc 900)', color: '#09090b' },
  { name: 'Accent', code: '#F4F4F5 (Zinc 100)', color: '#f4f4f5' },
  { name: 'Destructive', code: '#E7000B (Red 600)', color: '#e7000b' },
]

const typographySample = 'TVBS新聞 您最信賴的新聞品牌'
const typographyWeightSample = '第一時接收重大新聞通知，隨時掌握新聞脈動'
const typeSizes = [
  ['text-2xl', '24px', 24], ['text-xl', '20px', 20], ['text-lg', '18px', 18],
  ['text-base', '16px', 16], ['text-sm', '14px', 14], ['text-xs', '12px', 12],
]
const typeWeights = [
  ['ExtraLight / 200', '200', 200], ['Light / 300', '300', 300], ['Regular / 400', '400', 400],
  ['Medium / 500', '500', 500], ['SemiBold / 600', '600', 600], ['Bold / 700', '700', 700],
  ['ExtraBold / 800', '800', 800], ['Black / 900', '900', 900],
  ['Italic', '400', 400, { fontStyle: 'italic' }],
  ['Underlined', '400', 400, { textDecoration: 'underline' }],
  ['Strikethrough', '400', 400, { textDecoration: 'line-through' }],
]

export default function StructureProjectDetail({ language = 'zh' }) {
  const isEnglish = language === 'en'
  const sizeSample = isEnglish ? 'TVBS News — Your Trusted News Source' : typographySample
  const weightSample = isEnglish ? 'Get breaking-news alerts and stay informed wherever you are' : typographyWeightSample
  return <main className="project-detail cms-detail cms-redesign">
    <section className="detail-intro cms-hero">
      <h1>CMS System Redesign</h1>
      <div className="detail-intro__copy">
        <p>{isEnglish ? 'TVBS News CMS had served editors, reporters, and business teams for nearly twenty years. As content demands grew, the legacy system could no longer support modern workflows, yet a full redesign also imposed a significant learning cost. The project preserved familiar habits while rebuilding the system for sustainable growth.' : 'TVBS News CMS 是一套使用近二十年的新聞編輯後台，同時服務編輯、記者與業務。隨著內容需求持續增加，原有系統逐漸難以支撐現在的工作流程；但對每天高度依賴它的團隊而言，全面改版也意味著重新學習的成本。因此，本次改版從保留既有習慣出發，重新建立可持續擴展的內容管理系統。'}</p>
        <dl><div><dt>Services</dt><dd>TVBS News</dd></div><div><dt>My Role</dt><dd>System Redesign</dd></div><div><dt>Date</dt><dd>2025–2026</dd></div></dl>
      </div>
      <div className="detail-goal-split cms-redesign__goal">
        <div className="detail-hero cms-hero__image" data-image-reveal><img src="/assets/figma/structure-source.png" alt={isEnglish ? 'TVBS News CMS interface' : 'TVBS News CMS 系統畫面'} /></div>
        <div className="detail-mobile-goal"><small>Project Goal</small><strong>{isEnglish ? <>Build an extensible<br />content management system</> : <>建立可擴展的<br />後台內容管理系統</>}</strong></div>
      </div>
    </section>

    <section className="cms-redesign__section cms-redesign__original">
      <h2>Original CMS</h2>
      <figure data-image-reveal><img src="/assets/detail/cms_1.jpg" alt={isEnglish ? 'Legacy CMS editor interface' : '原有 CMS 編輯器介面'} /></figure>
      <p>{isEnglish ? 'As editorial workflows and content formats expanded, the twenty-year-old CMS became increasingly complex. The redesign retained essential, familiar interaction logic while reorganizing content hierarchy, component rules, and operational workflows.' : 'TVBS 新聞 CMS 使用超過二十年，隨著新聞產製流程與內容型態持續增加，原有系統逐漸變得複雜。此次改版從使用者熟悉的工作方式出發，保留必要操作邏輯，重新梳理內容層級、元件規則與操作流程。'}</p>
    </section>

    <section className="cms-redesign__section cms-redesign__system">
      <h2>New Design System</h2>
      <div className="cms-redesign__system-block">
        <span>Color</span>
        <div className="cms-redesign__system-content">
          <h3>{isEnglish ? 'Tailwind Color provides the foundation palette.' : '選用 Tailwind Color 作為基礎色票。'}</h3>
          <div className="cms-redesign__semantic-colors">{semanticColors.map((item) => <div className="cms-redesign__semantic-card" key={item.name}><i style={{ background: item.color }} /><b>{item.name}</b><small>{item.code}</small></div>)}</div>
          <TokenStrip name="Zinc" colors={[[50,'#fafafa'],[100,'#f4f4f5'],[200,'#e4e4e7'],[300,'#d4d4d8'],[400,'#9f9fa9'],[500,'#71717a'],[600,'#52525c'],[700,'#3f3f47'],[800,'#27272a'],[900,'#18181b'],[950,'#09090b']].map(([scale,color]) => ({scale,color}))} />
          <TokenStrip name="Neutral" colors={[[50,'#fafafa'],[100,'#f5f5f5'],[200,'#e5e5e5'],[300,'#d4d4d4'],[400,'#a1a1a1'],[500,'#737373'],[600,'#525252'],[700,'#404040'],[800,'#262626'],[900,'#171717'],[950,'#0a0a0a']].map(([scale,color]) => ({scale,color}))} />
          <TokenStrip name="Blue" colors={[[50,'#eff6ff'],[100,'#dbeafe'],[200,'#bfdbfe'],[300,'#93c5fd'],[400,'#60a5fa'],[500,'#3b82f6'],[600,'#2563eb'],[700,'#1d4ed8'],[800,'#1e40af'],[900,'#1e3a8a'],[950,'#172554']].map(([scale,color]) => ({scale,color}))} />
          <TokenStrip name="Red" colors={[[50,'#fff1f2'],[100,'#ffe4e6'],[200,'#fecdd3'],[300,'#fda4af'],[400,'#fb7185'],[500,'#f43f5e'],[600,'#e7000b'],[700,'#be123c'],[800,'#9f1239'],[900,'#881337'],[950,'#4c0519']].map(([scale,color]) => ({scale,color}))} />
        </div>
      </div>
      <div className="cms-redesign__system-block cms-redesign__type-block">
        <span>Typography</span>
        <div className="cms-redesign__type-sample">
          <h3>{isEnglish ? 'Noto Sans TC for Chinese / Geist for Latin text.' : '中文使用 Noto Sans TC / 英數使用 Geist。'}</h3>
          <h4>Size</h4>
          <div className="cms-redesign__type-table cms-redesign__type-table--sizes">{typeSizes.map(([name, value, size]) => <div key={name}><span>{name}</span><small>{value}</small><b style={{ '--cms-sample-size': `${size}px` }}>{sizeSample}</b></div>)}</div>
          <h4>Weight</h4>
          <div className="cms-redesign__type-table">{typeWeights.map(([name, value, weight, style]) => <div key={name}><span>{name}</span><small>{value}</small><b style={{ fontSize: 12, fontWeight: weight, ...style }}>{weightSample}</b></div>)}</div>
        </div>
      </div>
      <div className="cms-redesign__system-block cms-redesign__icon-block">
        <span>Icon</span>
        <div className="cms-redesign__icons"><p>{isEnglish ? 'Lucide Icons create a consistent, extensible icon system.' : '選用 Lucide Icons，建立一致且可延展的圖示系統。'}</p><img src="/assets/detail/cms_2.jpg" alt={isEnglish ? 'CMS icon system' : 'CMS icon 系統'} /></div>
      </div>
    </section>

    <section className="cms-redesign__dark">
      <div className="cms-redesign__dark-section">
        <h2>Components</h2>
        <p className="cms-redesign__dark-subtitle">{isEnglish ? 'A shared component system extended from shadcn/ui' : '以 shadcn/ui 為基礎，延展全站共用元件系統'}</p>
        <img src="/assets/detail/cms_3.jpg" alt={isEnglish ? 'CMS component design' : 'CMS 元件設計'} />
      </div>
      <div className="cms-redesign__dark-section">
        <h2>Flow</h2>
        <img src="/assets/detail/cms_4.jpg" alt={isEnglish ? 'CMS key workflows' : 'CMS 關鍵操作流程'} />
      </div>
      <div className="cms-redesign__dark-section cms-redesign__pages">
        <h2>Pages</h2>
        <img className="cms-redesign__pages-image" src="/assets/detail/cms_5.jpg" alt={isEnglish ? 'CMS page designs' : 'CMS 頁面設計'} />
      </div>
    </section>
    <SiteFooter />
  </main>
}
