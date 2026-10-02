import React from 'react'
import './moment-optimization.css'

const momentAssets = import.meta.glob('../assets/image/moment/*.png', { eager: true, query: '?url', import: 'default' })
const momentImage = name => momentAssets[`../assets/image/moment/${name}`]

const decisions = [
  { title: ['讓專家服務真正可以預約', 'Make expert services bookable'], problem: ['首頁看見的寵物專家，想預約諮詢卻發現無法預約。', 'Experts appeared on the homepage even when appointments were unavailable.'], copy: ['隱藏未開放預約的專家，將有更多服務時段的專家移至清單最前方，並強調服務內容。', 'Hide experts who are not accepting appointments, prioritize those with more available slots, and emphasize the services they offer.'], images: ['1_02.png', '1_01.png'], alt: ['舊版專家清單', '新版可預約專家服務清單'] },
  { title: ['從健康工具到日常陪伴', 'Bring everyday companionship into care'], problem: ['只有寵物生病時才會開啟 App 做紀錄，平常缺少使用動機。', 'Owners only opened the app to record care when their pets were ill.'], copy: ['讓用戶看見與寵物相伴的天數，以及距離生日的天數，增加產品的情感價值，讓日常照護也成為值得記錄的時刻。', 'Show the days spent together and a countdown to the pet’s birthday, adding emotional value and making everyday care a moment worth recording.'], images: ['4_02.png', '2_02.png'], alt: ['舊版健康紀錄首頁', '新版相伴天數與生日提醒'] },
  { title: ['擴充日誌的生活情境', 'Expand the journal beyond illness'], problem: ['原有紀錄分類偏向生病與醫療情境，難以涵蓋日常生活。', 'The original journal categories focused on illness and medical care.'], copy: ['日誌分類從 5 種增加至 9 種，涵蓋提醒、就診、用藥、飲食、排泄、體重、心跳、呼吸與其他。讓飼主在寵物健康時，也能記錄日常生活，增加開啟 App 的動機。', 'Expand the journal from five to nine categories: reminders, visits, medication, food, elimination, weight, heart rate, breathing, and other notes. Owners can record daily life even when their pets are healthy, creating more reasons to return.'], images: ['3.png'], alt: ['九種日誌分類：提醒、就診、用藥、飲食、排泄、體重、心跳、呼吸、其他'] },
  { title: ['一眼辨識正在記錄的毛孩', 'Recognize the right pet at a glance'], problem: ['飼養兩隻以上寵物時，做日誌紀錄常常記錯對象。', 'Owners with multiple pets sometimes recorded care under the wrong profile.'], copy: ['讓寵物照片成為頁面的主要元素，幫助用戶快速分辨寵物檔案，也讓開啟 App 的第一眼帶來愉快的感受。', 'Make the pet’s photo the main visual element so owners can quickly distinguish profiles and enjoy a welcoming first impression when opening the app.'], images: ['4_02.png', '4_01.png'], alt: ['舊版小頭像寵物檔案', '新版以寵物大照片辨識檔案'] },
  { title: ['讓日誌串接專家諮詢', 'Connect the journal to expert consultations'], problem: ['使用諮詢服務時，飼主無法直接分享日誌，專家也無法瀏覽紀錄。', 'Owners could not directly share their pet’s journal during consultations.'], copy: ['在購買諮詢服務時，讓用戶選擇是否開放寵物日誌權限給專家。透過既有紀錄提供照護背景，減少重複描述與溝通成本。', 'Let owners choose whether to share their pet’s journal when booking a consultation. Existing records provide care context and reduce repeated explanations and communication effort.'], images: ['5_02.png', '5_01.png'], alt: ['舊版諮詢資料填寫頁', '新版諮詢表單與日誌分享權限'] },
]
const feedback = [
  { text: ['新版 app 更好用了', 'The redesigned app is easier to use.'] },
  { text: ['非常感謝 Moment 團隊和線上獸醫們的幫助，我們家毛孩受益許多，在專業知識上有更多的參考和選擇～Moment 真的是非常好用而且設計美觀又直覺的產品！！', 'Thank you so much to the Moment team and online vets. Our pets benefited greatly, and we gained more professional knowledge and care options. Moment is very useful, beautifully designed, and intuitive!'] },
  { text: ['真的很喜歡這樣靈活運用科技結合醫療需求，尤其有時並不方便帶貓咪出門看醫生，好喜歡你們團隊！順便讚一下 UI/UX 很用心，graphics 也很有美感。', 'I love how you bring technology and medical care together, especially when taking my cat to the vet is difficult. I love your team! The UI/UX is thoughtful and the graphics are beautiful.'] },
  { text: ['用過最好用的 app，可以紀錄好多東西捏。', 'The best app I have used—it lets me record so many things.'] },
]

export default function MomentOptimization({ isEnglish }) {
  const lang = isEnglish ? 1 : 0
  return <div className="moment-case">
    <section className="moment-case__section" aria-labelledby="moment-research">
      <h2 id="moment-research">Research &amp; Problem</h2>
      <div className="moment-case__row"><h3>{isEnglish ? 'Redesigning around real care routines' : '從真實照護情境出發'}</h3><div><p>{isEnglish ? 'A review of the original app and user interviews revealed four recurring experience problems. The project aimed to improve the experience and grow the user base through an app-wide redesign.' : '針對舊版 App 進行產品檢視與用戶訪談後，發現四項使用體驗問題。專案目標是透過整體 App 改版，提升使用體驗與用戶數。'}</p><ol className="moment-case__problems">{[decisions[0], decisions[1], decisions[3], decisions[4]].map(item => <li key={item.images.join()}>{item.problem[lang]}</li>)}</ol></div></div>
    </section>
    <section className="moment-case__section" aria-labelledby="moment-decisions">
      <h2 id="moment-decisions">Synthesis &amp; Decision</h2>
      <div className="moment-case__decisions">{decisions.map((item, index) => <article key={item.title[0]}><div className="moment-case__row"><h3><span className="moment-case__number">{String(index + 1).padStart(2, '0')}</span>{item.title[lang]}</h3><div><p className="moment-case__problem">{item.problem[lang]}</p><p>{item.copy[lang]}</p></div></div><div className={`moment-case__comparison ${item.images.length === 1 ? 'moment-case__comparison--single' : ''}`}>{item.images.map((asset, i) => <figure key={asset}><figcaption>{item.images.length === 1 ? (isEnglish ? '5 → 9 journal categories' : '5 → 9 種日誌分類') : i === 0 ? 'Before' : 'After'}</figcaption><img src={momentImage(asset)} alt={isEnglish ? `${item.title[1]} — ${i === 0 && item.images.length > 1 ? 'before' : 'after'}` : item.alt[i]} loading="lazy" /></figure>)}</div></article>)}</div>
    </section>
    <section className="moment-case__section moment-case__result" aria-labelledby="moment-results">
      <h2 id="moment-results">Achievement</h2>
      <div className="moment-case__row"><h3>{isEnglish ? 'Qualitative user feedback after the redesign' : '改版後來自用戶的質性回饋'}</h3></div>
      <div className="moment-case__feedback">{feedback.map((item, index) => <figure className="moment-case__quote" key={index}>
        <span className="moment-case__quote-mark" aria-hidden="true">“</span>
        <blockquote><p>{item.text[lang]}</p></blockquote>
        <figcaption><img className="moment-case__quote-avatar" src={momentImage(['avatar-user-dog.png', 'avatar-dog.png', 'avatar-white-dog.png', 'avatar-user-cat.png'][index])} alt="" loading="lazy" /><div><strong>Moment 用戶</strong></div></figcaption>
      </figure>)}</div>
    </section>
  </div>
}
