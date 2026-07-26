import React from 'react'
import './project-detail.css'
import SiteFooter from './SiteFooter.jsx'

const interviews = [
  ['sasa.png','Sasa','32歲 社工','為尋找普同感而使用Moodii的群聊功能，但時間差跟匿名的關係，導致話題容易無法繼續，也常常遇到話題終止的尷尬'],
  ['tong.png','Tong','31歲 社區關懷員','受到 Moodii 正向氛圍吸引而開始使用群聊功能，比起交更多的朋友，更喜歡發展長期的友誼關係，但在Moodii常遇到潛水的人'],
  ['fang.png','Fang','23歲 學生','喜歡和其他人交流經驗和思想探討而開始使用 Moodii 群聊，但目前是學生的關係，考試期間不會使用App，無法配合房間的倒數機制。'],
  ['anna.png','Anna','22歲 待業','覺得Moodii 契合度蠻精準，可以藉此找到聊的來的朋友。但開啟房間需要等待2~3天，有時候事件、情緒過了，就不想聊了。'],
]

const decisions = [
  ['房間分類內容優化', <><p>在匿名社交場景下，分類標籤就是使用者判斷聊天方向的第一依據，模糊的分類會直接拉低對話品質。因此捨棄原本模糊感性的分類名稱，透過歷史數據拆解使用率最高的「我喜歡的事」，拆分為更具象的垂直分類。</p><p><b>Before：</b>感情悄悄話、社畜的心聲、時事報報、我喜歡的事、家家那本經、想不到類別</p><p><b>After：</b>興趣愛分享、感情悄悄話、生活與時事、社畜的心聲、戶外與健身、動漫與追星、揪團玩遊戲、想不到類別</p></>],
  ['房間介紹外層引導', <><div className="decision-copy"><p>我們引導房主建立房間介紹時，可以寫下詳細的房間規範和想招攬的成員特性，藉此避免不適合的成員加入，減少後續發生成員潛水不發言的情況發生。</p><p>另外也將介紹版位拉至外層，讓用戶在第一時間就能快速了解每個房間的資訊。</p></div><img src="/assets/detail/room-intro.png" alt="房間介紹外層設計" /></>],
  ['倒數機制拔除', <><p>最開始倒數機制的設計是為了促進用戶之間能快速建立連結，避免一個不互動的房間。然而這樣的作法，在維護關係上卻反而給用戶造成了壓力，並且加速了房間的關閉。</p><p>在充分了解到用戶的個性特質後，我們發現用戶更傾向緩慢且舒適的溝通環境，比起快速聊天解決問題，他們期待的是花更多時間去了解對方，發展成互相扶持的關係。</p></>],
  ['邀請流程簡化', <><p>原本為了提供房主更高的主動權，群聊房間的建立規則是用戶需要先從推薦名單中挑選出至少2~4人，邀請他們加入群聊房間一起來討論話題。但在研究和訪談後，發現推薦名單雖然有經驗標籤和契合度的輔助資訊，房主依舊很難從其中挑選出適合的人選，多數人都是隨機選擇，而且有些被選中的用戶並未開啟通知，導致根本不會做出回應。</p><p>故而我們最終的調整方案為，如若用戶對於推薦名單的人選並無想法，可以<em>選擇跳過此流程</em>，被動地讓其他用戶來選擇加入房間，加快房間的開啟速度。</p></>],
  ['群聊主頁入口調整', <div className="decision-copy-with-image"><div><p>群聊主頁「社區」為了符合APP的產品定位，希望能夠展現出溫暖舒適的氛圍，設計了滿版的房間情境，希望用戶能夠在使用群聊功能時有更好的體驗和想像。</p><p>然而也因為過大篇幅沒有資訊量，反而讓用戶在滑過群聊主頁時不容易被吸引進來，導致群聊功能的使用率只佔了8%。</p><p>最後我們選擇將最多房間的分類「興趣愛分享」取代了情境圖，讓用戶在第一層就能快速看到房間內容，藉此引發用戶的興趣。</p></div><img src="/assets/detail/selectedwork-1_2.jpg" alt="群聊首頁入口調整"/></div>],
]

export default function ProjectDetail() {
  return <main className="project-detail">
    <section className="detail-intro">
      <h1>Group Chat UX Iteration</h1>
      <div className="detail-intro__copy"><p>Moodii 社交App的主要功能有二，一是單向的情緒抒發，二是雙向的情感交流。然而在私訊功能有18%使用率的情況下，群聊功能僅有8%，透過用戶深度訪談與問卷數據分析，在強制活躍運營規則與使用者慢節奏情緒社交需求之間做權衡取捨，重構首頁資訊層級、開房流程與房間分類機制。</p><dl><div><dt>Services</dt><dd>Moodii</dd></div><div><dt>My Role</dt><dd>User Research, UX Design</dd></div><div><dt>Date</dt><dd>2021–2022</dd></div></dl></div>
      <div className="detail-goal-split"><div className="detail-hero detail-hero--single" data-image-reveal><img src="/assets/figma/understand-source.png" alt="Moodii Group Chat UX Iteration"/></div><div className="detail-mobile-goal"><small>Project Goal</small><strong>提高 Moodii<br/>群聊功能使用率</strong></div></div>
    </section>
    <section className="detail-section research"><h2>Research</h2><h3>User Interview</h3><div className="interviews">{interviews.map(([img,name,meta,text])=><article key={name}><img src={`/assets/detail/${img}`} alt={name}/><div><h4>{name}<small>{meta}</small></h4><p>{text}</p></div></article>)}</div><h3>Data</h3><div className="data-chart"><div className="data-chart__scale">{[40,30,20,10,0].map(value=><span key={value}>{value}%</span>)}</div><div className="data-chart__plot"><img src="/assets/detail/research-data.svg" alt=""/>{[14,14,8,42,14,8].map((v,i)=><div className={`data-chart__item ${i === 2 || i === 5 ? 'is-pale' : ''} ${i === 3 ? 'is-primary' : ''}`} key={i}><i style={{height:`${v / 45 * 100}%`}}>{i === 2 || i === 5 ? null : <b>{v} %</b>}</i><span>{['開啟群聊時長\n過久','3天自動關閉\n時間過短','公開的個人\n資訊太少','房間卡片卡頓','群聊房中潛水\n的人偏多','缺少語音通話\n功能'][i]}</span></div>)}</div></div></section>
    <section className="detail-section synthesis"><h2>Synthesis &amp; Decision</h2><img className="synthesis-placeholder" src="/assets/detail/selectedwork-1_1.jpg" alt="Moodii research synthesis"/><p className="synthesis-lead">使用者渴望在平台獲得舒適、緩慢的情緒交流，但混亂的分類、繁瑣的開房流程、強制性倒數關閉、資訊透明度不足，再加上性能卡頓問題，大幅消磨了使用者開啟對話、維持社群關係的動機。</p><div className="decisions">{decisions.map(([title,body],i)=><article key={title}><span>{String(i+1).padStart(2,'0')}</span><h3>{title}</h3><div>{body}</div></article>)}</div></section>
    <section className="achievement"><h2>Achievement<br/>&amp; Reflection</h2><div><h3>房間開啟率 ↑11%<br/>群聊整體使用率 ↑5%</h3><p><b>專案反思／</b><br/>這次優化讓我重新理解產品迭代的優先級：單純做「流程簡化、功能曝光」只能短期拉高使用率，如果底層存在性能卡頓這類基礎體驗缺陷，所有優化都只會事倍功半。在後續規劃中，房間卡頓性能問題列為最高優先級，體驗基礎穩定之後，再迭代社群活躍的運營機制。</p></div></section>
    <SiteFooter />
  </main>
}
