import React from 'react'
import SiteFooter from './SiteFooter.jsx'
import './project-detail.css'
import './member-system-detail.css'

const roadmap = [
  ['短期', '最大化登入轉換率', '介面做減法、強化便捷登入路徑，並確保完成驗證後返回原始頁面。技術上保留跨品牌能力，但不讓尚未形成價值的資訊增加認知負擔。'],
  ['中期', '建立主動選擇的便利', '讓 Web 與 App 銜接閱讀位置、未完成內容與待領優惠，使下載與登入成為便利。'],
  ['長期', '創造跨品牌服務協同', '透過資料同步、行為聯動與權益疊加，讓一次登入真正解決多個使用場景。'],
]

const solutions = [
  ['降低登入操作成本', <><p>重新安排頁面資訊層級，將社群登入、帳號輸入與主要操作集中在清楚的視覺路徑中。</p><p>將不同登入方式整理為連續、容易理解的操作流程，讓使用者能快速選擇適合自己的登入方式，完成註冊或登入後回到原本的任務。</p><p>同步簡化按鈕與說明內容，並補齊 Loading、錯誤提示及完成狀態，降低使用者在每一步操作中的不確定感。</p></>, '/assets/detail/selectedwork-2_3.jpg'],
  ['重整身分認證流程', <p>配合 CIAM 更新，整理註冊與信箱驗證、Email／社群登入、忘記密碼，以及社群帳號綁定與解除綁定等關鍵流程，統一不同入口的操作規則與回饋。</p>],
  ['延伸五個品牌版本', <p>以相同的資訊結構、表單元件與互動規則建立共用會員模組，再依使用者進入的品牌切換 Logo、主色與相關文案。五個版本共享操作邏輯，同時保留各品牌原有的視覺辨識。</p>, '/assets/figma/strategize-source.jpg'],
  ['適配不同商業曝光情境', <><p>無廣告版維持純粹、聚焦的登入體驗；有廣告版則固定登入模組的結構與主要視覺權重，將活動資訊、產品展示或品牌影片融入頁面背景，讓商業內容保有曝光效果，同時不阻斷主要操作。</p><div className="member-case__ad-gallery"><figure><img src="/assets/detail/member-no-ad.png" alt="無廣告會員登入頁提案"/><figcaption>無廣告版</figcaption></figure><figure><img src="/assets/detail/member-ad-activity.png" alt="有廣告會員登入頁提案"/><figcaption>有廣告版</figcaption></figure></div></>],
]

function NumberedList({items}) {
  return <div className="decisions">{items.map(([title,body,image],index)=>image ? <article className={`member-case__solution-first${index === 2 ? ' member-case__solution-brands' : ''}`} key={title}><span>{String(index+1).padStart(2,'0')}</span><div className="member-case__solution-copy"><h3>{title}</h3>{typeof body === 'string' ? <p>{body}</p> : body}</div><img src={image} alt={title}/></article> : <article key={title}><span>{String(index+1).padStart(2,'0')}</span><h3>{title}</h3><div>{typeof body === 'string' ? <p>{body}</p> : body}</div></article>)}</div>
}

export default function MemberSystemDetail(){
  return <main className="project-detail member-case">
    <section className="detail-intro">
      <h1>TVBS Member System</h1>
      <div className="detail-intro__copy">
        <p>舊版會員登入／註冊頁存在介面破版與體驗不一致的問題，同時團隊正準備汰換既有會員後端，導入全新的 CIAM 身分認證系統。業務端也希望運用高流量的登入頁增加廣告曝光。因此，這次改版需要在同一個登入流程中，同時處理既有體驗修復、系統架構升級與商業曝光三項需求。</p>
        <dl><div><dt>Services</dt><dd>TVBS</dd></div><div><dt>My Role</dt><dd>Product Strategy, UX Design</dd></div><div><dt>Date</dt><dd>2025</dd></div></dl>
      </div>
      <div className="detail-goal-split"><div className="detail-hero member-case__hero member-case__hero--single" data-image-reveal><img src="/assets/detail/member-cover.jpg" alt="會員登入情境畫面"/></div><div className="detail-mobile-goal"><small>Project Goal</small><strong>讓商業需求與<br/>使用體驗共存</strong></div></div>
    </section>

    <section className="detail-section member-case__challenge">
      <h2>The Challenge</h2>
      <div className="member-case__challenge-layout">
        <img className="member-case__challenge-image" src="/assets/detail/selectedwork-2_2.jpg" alt="舊版會員登入與註冊介面問題"/>
        <div className="member-case__challenge-copy"><p>這次改版需要同時處理三類彼此牽動的問題：</p><ul><li><b>既有體驗</b><span>介面破版、跨裝置顯示不穩定，Logo、色彩與表單樣式也缺乏一致的品牌識別。</span></li><li><b>認證流程</b><span>配合 CIAM 身分認證系統導入，重新梳理註冊、登入、密碼重設與社群帳號綁定。</span></li><li><b>商業需求</b><span>業務希望在五個品牌會員皆會經過的登入／註冊頁加入廣告版位。</span></li></ul></div>
      </div>
    </section>

    <section className="detail-section member-case__intent">
      <h2>User Intent</h2>
      <div className="member-case__intent-copy"><p>在開始設計前，先了解用戶進入會員登入頁的原因：</p><p>由於目前 TVBS 會員尚未有強力的會員服務，大部分時候用戶是為了領取活動的獎品而登入／註冊會員。因此可判斷使用者將登入頁視為抵達目的地前必須經過的通道。他們追求的是快速通過，而不是停留探索。</p></div>
      <div className="member-case__intent-flow">{['活動頁','登入／註冊頁','返回原始任務'].map((item,index)=><article key={item}><span>{String(index+1).padStart(2,'0')}</span><strong>{item}</strong></article>)}</div>
    </section>

    <section className="detail-section synthesis member-case__solutions">
      <h2>Design Solution</h2>
      <NumberedList items={solutions}/>
    </section>

    <section className="detail-section member-case__roadmap">
      <h2>Future Roadmap</h2>
      <p className="synthesis-lead">這次登入頁改版是會員產品的起點。後續策略從降低阻力，逐步走向跨裝置便利與跨品牌服務協同。</p>
      <div className="member-case__roadmap-list">{roadmap.map(([phase,title,text])=><article key={phase}><span>{phase}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <SiteFooter/>
  </main>
}
