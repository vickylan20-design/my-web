import React from 'react'
import SiteFooter from './SiteFooter.jsx'
import FittedProjectTitle from './FittedProjectTitle.jsx'
import './app-project-detail.css'

const projects = {
  'moment-app': {
    title: 'Moment APP',
    service: 'Moment',
    role: 'APP Redesign, User Research',
    date: '2023',
    image: '/assets/project/Momentapp.jpg',
    description: {
      zh: 'Moment Pet App 是一款專為現代毛孩家庭打造的寵物照護產品，希望協助飼主更輕鬆地掌握毛孩的日常狀態，陪伴牠們擁有健康、快樂且更有品質的生活。此次改版從飼主實際的照護情境出發，重新梳理資訊架構與關鍵流程，優化健康紀錄、生活提醒、照護知識的使用體驗。',
      en: 'Moment Pet App is designed for modern pet families, helping owners understand their pets’ daily condition and support a healthier, happier life together. The redesign began with real caregiving routines and reorganized the information architecture and key flows around health records, daily reminders, care knowledge, and related services. By bringing fragmented information into one clearer experience, it also makes long-term care easier to coordinate across the household.',
    },
  },
  'moodii-app': {
    title: 'Moodii APP',
    service: 'Moodii',
    role: '0–1 Product Design, User Research',
    date: '2021–2022',
    image: '/assets/project/Moodii_UIUX.jpg',
    description: {
      zh: '從零到一建立情緒社交產品，將情緒紀錄、匿名交流與陪伴機制整合成一致體驗，並透過研究與迭代，持續調整產品架構、視覺語言與核心互動。',
      en: 'A zero-to-one emotional social product combining mood tracking, anonymous connection, and companionship in one coherent experience, refined through continuous research and iteration.',
    },
  },
  'shapex-app': {
    title: 'ShapeX APP',
    service: 'ShapeX',
    role: '0–1 Product Design, User Research',
    date: '2021–2022',
    image: '/assets/project/ShapeX_UIUX.jpg',
    description: {
      zh: 'ShapeX 是一個結合智慧裝置的居家健身平台。面對現代人工作時間長、壓力大，以及聘請私人教練成本較高的痛點，產品以輕量運動為起點，透過數據化課程協助使用者逐步建立運動習慣。智慧裝置能在訓練過程中即時偵測姿勢、肌肉刺激與心跳訊號，搭配個人化課程、運動紀錄與進度回饋，讓使用者在家也能獲得更精準且持續的健身體驗。',
      en: 'ShapeX is a home-fitness platform connected to a smart training device. It responds to the time pressure of modern work and the cost of personal coaching by helping users begin with approachable exercises and gradually build lasting habits. During each session, the device tracks posture, muscle activation, and heart-rate signals in real time. Personalized programs, workout records, and progress feedback then turn that data into a more precise and sustainable at-home fitness experience.',
    },
  },
}

export default function AppProjectDetail({ slug, language = 'zh' }) {
  const project = projects[slug]
  if (!project) return null
  const isEnglish = language === 'en'

  return <main className="app-project-detail">
    <section className="app-project-detail__intro">
      <FittedProjectTitle>{project.title}</FittedProjectTitle>
      <div className="app-project-detail__overview">
        <p>{project.description[isEnglish ? 'en' : 'zh']}</p>
        <dl>
          <div><dt>Services</dt><dd>{project.service}</dd></div>
          <div><dt>My Role</dt><dd>{project.role}</dd></div>
          {project.date && <div><dt>Date</dt><dd>{project.date}</dd></div>}
        </dl>
      </div>
    </section>
    <figure className="app-project-detail__case-image">
      <img src={project.image} alt={`${project.title} case study`} />
    </figure>
    <SiteFooter />
  </main>
}
