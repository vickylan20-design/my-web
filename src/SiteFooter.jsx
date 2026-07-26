import React from 'react'

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer__image"><img src="/assets/figma/footer.jpg" alt="" /></div>
      <div className="footer__marquee" aria-label="LET’S MAKE IT MATTER.">
        <div className="footer__marquee-track" aria-hidden="true">
          <div className="footer__marquee-group"><span>LET’S MAKE IT MATTER.</span><span>LET’S MAKE IT MATTER.</span></div>
          <div className="footer__marquee-group"><span>LET’S MAKE IT MATTER.</span><span>LET’S MAKE IT MATTER.</span></div>
        </div>
      </div>
      <small>Lan Hsiao-Chi © 2026</small>
    </footer>
  )
}
