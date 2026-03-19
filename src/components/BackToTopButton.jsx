import { useEffect, useState } from 'react'

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const docHeight = document.documentElement.scrollHeight

      const atBottom = scrollY + windowHeight >= docHeight - 2
      setVisible(atBottom)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      className={`back-to-top ${visible ? 'visible' : ''}`}
      onClick={handleClick}
    >
      <img
        src="/ScrollToTopArrow.svg"
        alt="Scroll to top"
        className="back-to-top-arrow"
      />
      <span className="back-to-top-text">SCROLL TO TOP</span>
    </button>
  )
}