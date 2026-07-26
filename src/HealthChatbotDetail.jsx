import React from 'react'
import SiteFooter from './SiteFooter.jsx'
import './health-chatbot-detail.css'
import './health-chatbot-chart-fix.css'
import './health-chatbot-background.css'
import './health-chatbot-findings-layout.css'
import './health-chatbot-hero-image.css'

const findings = [
  ['01', '分析產品數據與提問內容', '分析 AI Chatbot 的使用率、提問紀錄與內容類型，了解使用者真正關心的健康議題，以及哪些情境最容易產生提問需求，作為後續產品策略與設計方向的依據。'],
  ['02', '使用者訪談與 Prototype 驗證', '根據研究結果建立 Prototype，邀請目標使用者進行測試，驗證提供建議 AI 提問（Prompt）、不同 AI 角色、不同使用場景中是否能降低開始對話的門檻，以及得到 AI 回應後是否有覺得獲得健康幫助。'],
  ['03', '建立內容情境下的互動體驗', '從用戶測試中發現，大部分用戶還是很難主動提問，因此我們改從用戶旅程出發，找到用戶最可能想提問的時機點，將 AI Chatbot 改放在健康文章內，讓用戶的提問在了解健康資訊的時候自然發生，並提供文章延伸閱讀類型的 AI 提問，讓用戶可以獲得延續的閱讀體驗。'],
  ['04', '優化 AI 提問策略', '除了調整服務入口，也重新設計 AI 建議提問的呈現方式，讓問題更貼近文章內容與使用者閱讀情境，提高點擊意願與互動品質。'],
  ['05', '持續追蹤與迭代優化', '功能正式上線後，持續分析不同文章、不同提問內容與使用數據的表現。研究發現，不同文章對 AI 使用率有明顯影響，同時提問品質也會直接影響互動效果，因此持續優化 AI 建議問題與內容策略，提升整體產品體驗。'],
]

const chartData = [
  ['完整健康問題', 42], ['模糊的\n健康描述', 31], ['只輸入健康\n關鍵字（症狀）', 23], ['與健康無相關\n文字', 4],
]

export default function HealthChatbotDetail() {
  return <main className="project-detail chatbot-case">
    <section className="detail-intro chatbot-case__intro">
      <h1>AI Chatbot UX Design</h1>
      <div className="detail-intro__copy">
        <p>Health 2.0 APP 推出 AI Chatbot 服務，但實際使用率只佔整體的 2%。觀察產品使用情況後發現，真正的問題並非使用者沒有健康需求，而是不知道該如何開始提問。專案以提升 AI Chatbot 使用率為目標，重新檢視使用者提出健康問題的行為模式，從研究、產品設計到驗證。</p>
        <dl><div><dt>Services</dt><dd>TVBS Health 2.0</dd></div><div><dt>My Role</dt><dd>User Research, UX Design</dd></div><div><dt>Date</dt><dd>2024–2025</dd></div></dl>
      </div>
      <div className="chatbot-case__goal"><div className="chatbot-case__goal-image" data-image-reveal><img src="/assets/project/health20-wide.jpg" alt="Health 2.0 AI Chatbot 使用情境"/></div><div><small>Project Goal</small><strong>提高 AI Chatbot<br/>服務使用率</strong></div></div>
    </section>

    <section className="detail-section chatbot-case__research">
      <h2>Research</h2>
      <div className="chatbot-case__research-grid"><h3>Data</h3><div><p>為了了解 AI Chatbot 使用率偏低的原因，我先分析上線後的提問紀錄，觀察使用者輸入內容的完整程度與健康相關性，從而找出影響 AI 使用體驗的關鍵因素。</p><div className="chatbot-chart"><div className="chatbot-chart__scale"><span>40%</span><span>30%</span><span>20%</span><span>10%</span><span>0%</span></div><div className="chatbot-chart__bars">{chartData.map(([label,value],index)=><article key={label}><div className={`${index === 0 ? 'is-primary ' : ''}${index === 3 ? 'is-muted' : ''}`} style={{'--bar-height': value / 45}}><b>{value}%</b></div><small>{label}</small></article>)}</div></div><div className="chatbot-table"><div><b>類別</b><b>說明</b><b>事件數</b><b>佔比</b></div><div><span>完整健康問題</span><span>使用者以完整句子描述症狀、情境或直接提出問題。</span><span>8,482</span><span>41.7%</span></div><div><span>健康描述</span><span>描述身體狀況，但尚未形成明確問題，例如「長期壓力大」、「一直睡不好」。</span><span>6,282</span><span>30.9%</span></div><div><span>健康主題／症狀關鍵字</span><span>僅輸入疾病或症狀名稱，例如「頭痛」、「糖尿病」、「耳鳴」。</span><span>4,683</span><span>23.0%</span></div><div><span>非健康相關文字</span><span>打招呼、感謝、聊天或與健康無關內容，例如「你好」、「謝謝」、「今天颱風假嗎」。</span><span>791</span><span>3.9%</span></div><div><span>空白輸入</span><span>未輸入任何內容。</span><span>112</span><span>0.6%</span></div></div></div></div>
    </section>

    <section className="detail-section chatbot-case__synthesis">
      <h2>Synthesis &amp; Decision</h2>
      <div className="chatbot-case__research-photos"><img src="/assets/detail/photo_1.jpg" alt="使用者訪談情境"/><img src="/assets/detail/photo_2.jpg" alt="使用者訪談情境"/><img src="/assets/detail/photo_3.jpg" alt="使用者訪談情境"/></div>
      <p className="chatbot-case__lead">研究結果顯示，使用者並非沒有健康需求，而是不知道如何把健康文章中看見的問題轉化為可用 AI 回應的提問。真正的問題不是 AI 的回答能力，而是開始提問的門檻。因此，專案重新定位 AI Chatbot：讓它成為閱讀健康資訊後，協助使用者把疑問帶往下一步的入口。</p>
      <div className="chatbot-case__findings">{findings.map(([number,title,text],index)=><article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div>{index === 2 && <img src="/assets/detail/selectedwork-4_2.jpg" alt="健康文章內的 AI Chatbot 體驗"/>}</article>)}</div>
    </section>

    <section className="achievement chatbot-case__achievement"><h2>Achievement</h2><div><h3>健康文章導入 AI Chatbot 後，<br/>參與率最高達 <b>88.7%</b>，<br/>平均停留時間最高達 3 分 10 秒。</h3><p>（較全站平均提升約 35%）</p></div></section>
    <SiteFooter />
  </main>
}
