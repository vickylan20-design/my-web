import React, { useEffect, useRef } from 'react'

export default function FittedProjectTitle({ children }) {
  const titleRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const title = titleRef.current
    const text = textRef.current
    if (!title || !text) return undefined

    const fit = () => {
      // Reset to the stylesheet value before every measurement so resizing
      // never compounds a previously calculated size.
      title.style.fontSize = ''
      if (window.innerWidth <= 700) return

      const available = title.clientWidth
      const baseSize = Number.parseFloat(window.getComputedStyle(title).fontSize)
      const measured = text.getBoundingClientRect().width

      if (available > 0 && baseSize > 0 && measured > 0) {
        title.style.fontSize = `${baseSize * (available / measured)}px`
      }
    }

    fit()
    document.fonts?.ready.then(fit)
    const observer = new ResizeObserver(fit)
    observer.observe(title.parentElement || title)
    return () => observer.disconnect()
  }, [children])

  return (
    <h1 ref={titleRef} className="fitted-project-title">
      <span ref={textRef}>{children}</span>
    </h1>
  )
}
