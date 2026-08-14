import React from 'react'
import SiteFooter from './SiteFooter.jsx'
import FittedProjectTitle from './FittedProjectTitle.jsx'
import './project-detail.css'
import './member-system-detail.css'

const content = {
  zh: {
    title: 'TVBS Member',
    intro: '重新設計 TVBS 旗下五個品牌共用的會員登入與註冊體驗。這次改版不只修復舊版介面，也必須配合 CIAM 身分系統更新，並在高流量的登入頁中，找到使用體驗與商業曝光可以共存的方式。',
    role: 'Product Strategy, UX Design',
    situation: 'Project Background',
    situationCopy: 'TVBS 旗下新聞、健康、食尚、女人我最大與地球黃金線等品牌，共用同一套會員身分系統，但舊版登入／註冊頁長期缺乏一致的設計規範。頁面在不同裝置上容易出現破版，各品牌的 Logo、色彩、表單與操作回饋也不統一，使用者即使熟悉其中一個品牌，到了另一個入口仍需要重新理解介面。',
    situationDetail: '專案進行期間，團隊也準備汰換既有會員後端並導入新的 CIAM 身分認證系統，因此登入、註冊、信箱驗證、忘記密碼與社群帳號綁定等流程都必須重新梳理。同時，業務希望運用高流量的會員入口增加廣告曝光，使這次設計需要同時處理既有體驗、系統轉換與商業需求。',
    painPoint: 'User Pain Points',
    painPointCopy: '從使用情境來看，多數使用者不是為了探索會員服務而來，而是從抽獎活動、優惠券或內容頁被導向登入。他們已有明確目的，只想快速完成驗證、領取權益，再返回原本的任務。當登入頁加入過多品牌說明、會員訊息或不相干內容時，反而增加認知負擔；不完整的錯誤回饋與返回路徑，也可能讓使用者在流程中斷後直接離開。',
    insight: '真正的設計問題，不是如何在登入頁放進更多內容，而是如何讓使用者更快通過，同時保留品牌與商業需求。',
    task: 'Design Goals',
    taskCopy: '本次設計首先釐清使用者進入登入頁的真實意圖，並將產品、系統與商業需求轉譯成可落地的體驗架構。短期目標是最大化登入轉換：讓介面做減法、優先呈現便捷登入方式、補齊流程狀態，並確保完成驗證後能返回原始頁面。',
    taskDetail: '設計同時需要建立一套可被五個品牌共用的模組。底層保留跨品牌帳號能力，前台則避免過早強調「通用會員」而增加隱私疑慮；品牌差異透過 Logo、主色與文案呈現，核心操作、表單結構與回饋規則維持一致。商業曝光則必須被安排在不干擾登入主線的位置。',
    action: 'Design Approach',
    actionCopy: '設計初期先盤點既有頁面的資訊層級、跨裝置問題及各品牌差異，再參考具備多種登入方式、但服務目的單純的產品，重新判斷登入頁應保留的資訊。設計決策以「快速完成並返回原任務」為核心：降低非必要說明的權重，將社群登入、Email 登入與註冊入口整理成容易掃讀的順序，並隱藏尚未形成使用者價值的跨品牌訊息。',
    system: 'One system, five brands',
    systemCopy: '以共用的資訊架構、表單元件與互動規則建立會員模組，再依入口品牌切換 Logo、主色與文案。五個版本維持一致的操作邏輯，同時保留各品牌的辨識度。這也讓產品與開發團隊能用同一套規則維護表單、錯誤訊息與後續狀態，不必為每個品牌重複設計。',
    systemNote: '共同骨架確保體驗與維護效率一致；品牌層則保留使用者從原平台進入時所期待的視覺連續性。',
    flow: 'Registration Flow',
    flowCopy: '配合 CIAM 導入，重新梳理註冊、信箱驗證、Email 與社群登入、忘記密碼，以及帳號綁定等關鍵路徑。這次不是只重畫單一登入頁，而是把每一個可能中斷的節點、系統回饋與返回路徑一起納入。',
    flowDetail: '流程以「使用者現在要做什麼」為主線，統一不同入口的命名與操作規則。驗證碼寄出、資料錯誤、帳號已存在、第三方登入失敗等狀態，都提供清楚的下一步；完成登入或註冊後，則保留來源資訊，將使用者送回原本的活動或閱讀位置。',
    ads: 'Commercial scenarios',
    adsCopy: '商業需求並沒有被放進表單流程，而是被重新定義成登入模組之外的「內容舞台」。登入卡片維持固定位置、尺寸與清楚的視覺權重，將活動、產品或品牌影片放進周圍背景，讓訊息可以被看見，但不會阻斷主要操作。',
    adsDetail: '同一套版型可以因應活動資訊、360° 產品展示、Before／After 對照與品牌影片等不同素材。當沒有商業內容時，頁面仍能回到簡潔的品牌版本；行動版則優先保留登入操作，再依可用空間調整曝光範圍。',
    result: 'Project Outcomes',
    resultCopy: '最終產出涵蓋五個品牌的登入頁、完整註冊與身分驗證流程，以及無廣告、活動資訊、產品展示、Before／After 與影音等商業情境。原本分散的品牌頁面被整理成同一套可延伸的會員模組，使使用者在不同入口都能沿用相同操作邏輯，也讓產品與開發團隊能共同維護表單、狀態與錯誤訊息。',
    resultDetail: '這次提案也讓團隊從「重畫登入頁」進一步討論會員產品的發展方向。短期先降低登入阻力；中期可銜接 Web 與 App 的閱讀位置、未完成內容及待領優惠；長期則透過資料同步、行為聯動與權益疊加，建立跨品牌服務協同。由於專案仍屬設計提案階段，本案例聚焦於策略共識、系統化產出與後續產品方向，不宣稱尚未上線驗證的轉換數據。',
  },
  en: {
    title: 'TVBS Member',
    intro: 'Redesigning a shared login and registration experience across five TVBS brands. The work combined a legacy UI refresh, a new CIAM identity system, and a way for commercial exposure to coexist with a focused sign-in journey.',
    role: 'Product Strategy, UX Design',
    situation: 'Project context and problems',
    situationCopy: 'TVBS brands shared one identity system, but their legacy login and registration pages lacked a consistent design standard. Responsive layouts, branding, forms, and feedback varied by entry point, forcing people to relearn the interface across brands.',
    situationDetail: 'At the same time, the team was replacing the membership backend with a new CIAM platform, requiring registration, verification, password recovery, and social-account linking to be rebuilt. Business teams also wanted commercial exposure on these high-traffic pages.',
    painPoint: 'User pain points',
    painPointCopy: 'Most people arrived from a campaign, offer, or article with a clear goal. They wanted to authenticate, claim a benefit, and return. Extra membership messaging increased cognitive load, while incomplete errors and return paths made interruption more likely.',
    insight: 'The real design problem was not how to add more content, but how to help people pass through faster while preserving brand and business needs.',
    task: 'Design Goals',
    taskCopy: 'User, system, and commercial needs were translated into an implementable experience architecture. The immediate goal was to maximize successful authentication by reducing the interface, prioritizing convenient paths, completing system states, and returning people to their source.',
    taskDetail: 'The solution also needed one reusable module for five brands. Shared behavior would remain consistent, brand identity would adapt at the visual layer, and commercial exposure could not interrupt authentication.',
    action: 'Design actions',
    actionCopy: 'The design process began with an audit of legacy hierarchy, responsive issues, and brand differences, followed by a review of products with multiple authentication methods and focused service propositions. Every decision was filtered through one intent: finish quickly and return to the original task.',
    system: 'One system, five brands',
    systemCopy: 'A shared information architecture, form system, and interaction model adapts its logo, color, and copy to each entry brand. All five versions behave consistently while retaining a distinct identity. Product and engineering can maintain one set of forms, errors, and states instead of rebuilding each brand.',
    systemNote: 'The shared foundation protects consistency and maintenance efficiency; the brand layer preserves visual continuity from the original platform.',
    flow: 'Registration flow',
    flowCopy: 'The CIAM migration required us to align registration, email verification, email and social sign-in, password recovery, and account linking. The work covered every interruption point, system response, and return path—not just a single login screen.',
    flowDetail: 'Naming and behavior are consistent across entry points. Verification sent, invalid data, existing accounts, and third-party failures all provide an explicit next step. Source context is preserved so successful authentication returns people to their campaign or reading position.',
    ads: 'Commercial scenarios',
    adsCopy: 'Commercial content was reframed as a stage around the login module, not something added to the form journey. The card keeps a stable position, size, and visual priority while campaigns, products, and films occupy the surrounding canvas.',
    adsDetail: 'One layout supports campaign information, 360° product views, before-and-after stories, and brand films. Without a campaign it returns to a focused brand version; on mobile, authentication remains the first priority.',
    result: 'Outcome and next direction',
    resultCopy: 'The proposal delivered five branded login pages, complete registration and identity flows, and layouts for ad-free, campaign, product, comparison, and video contexts. A fragmented set of pages became one extensible module with shared behavior and maintainable system feedback.',
    resultDetail: 'It also moved the conversation beyond a visual refresh: short term, reduce authentication friction; mid term, connect reading and benefits across Web and App; long term, create cross-brand value through shared data, behavior, and benefits. As this remained a design proposal, the case documents strategic alignment and system outputs rather than unverified conversion claims.',
  },
}

function TextRow({ title, children }) {
  return <div className="member-editorial__text-row"><div className="member-editorial__heading"><h3>{title}</h3></div><div>{children}</div></div>
}

export default function MemberSystemDetail({ language = 'zh' }) {
  const t = content[language === 'en' ? 'en' : 'zh']
  return <main className="project-detail member-editorial">
    <header className="member-editorial__intro">
      <FittedProjectTitle>{t.title}</FittedProjectTitle>
      <div className="member-editorial__intro-grid">
        <p className="member-editorial__lead">{t.intro}</p>
        <dl>
          <div><dt>Services</dt><dd>TVBS Member</dd></div>
          <div><dt>My Role</dt><dd>{t.role}</dd></div>
          <div><dt>Date</dt><dd>2025</dd></div>
        </dl>
      </div>
    </header>

    <figure className="member-editorial__hero"><img src="/assets/detail/member-cover.jpg" alt="TVBS 會員登入系統設計" /></figure>

    <section className="member-editorial__section">
      <TextRow title={t.situation}><p>{t.situationCopy}</p><p>{t.situationDetail}</p></TextRow>
      <TextRow title={t.painPoint}><p>{t.painPointCopy}</p></TextRow>
      <blockquote>{t.insight}</blockquote>
    </section>

    <section className="member-editorial__section">
      <TextRow title={t.task}><p>{t.taskCopy}</p><p>{t.taskDetail}</p></TextRow>
    </section>

    <section className="member-editorial__section">
      <TextRow title={t.action}><p>{t.actionCopy}</p><p>{t.flowCopy}</p><p>{t.flowDetail}</p></TextRow>
      <figure className="member-editorial__wide-image member-editorial__flow-image"><img src="/assets/detail/member-signup.jpg" alt="會員登入與註冊流程設計" /></figure>
    </section>

    <section className="member-editorial__section">
      <TextRow title={t.system}><p>{t.systemCopy}</p></TextRow>
      <figure className="member-editorial__wide-image"><img src="/assets/detail/member-1.jpg" alt="五個 TVBS 品牌的登入頁重新設計" /></figure>
      <p className="member-editorial__image-note">{t.systemNote}</p>
    </section>

    <section className="member-editorial__section">
      <TextRow title={t.ads}><p>{t.adsCopy}</p><p>{t.adsDetail}</p></TextRow>
      <div className="member-editorial__ad-grid">
        <figure><img src="/assets/detail/member-ad23.png" alt="會員登入頁多種商業情境提案" /></figure>
        <figure><img src="/assets/detail/member-car.gif" alt="地球黃金線汽車情境會員登入頁動態展示" /></figure>
      </div>
    </section>

    <section className="member-editorial__section member-editorial__result">
      <TextRow title={t.result}><p>{t.resultCopy}</p><p>{t.resultDetail}</p></TextRow>
    </section>
    <SiteFooter />
  </main>
}
