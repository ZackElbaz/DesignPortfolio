import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function ProjectCard({
  project,
  isTouchActive,
  setActiveTouchSlug,
}) {
  const slides =
    project.hoverSlides && project.hoverSlides.length > 0
      ? project.hoverSlides
      : [project.coverImage]

  const [isHovered, setIsHovered] = useState(false)
  const [slideIndex, setSlideIndex] = useState(0)

  const isActive = isHovered || isTouchActive

  useEffect(() => {
    if (!isActive || slides.length <= 1) {
      setSlideIndex(0)
      return
    }

    let interval

    const firstTimeout = setTimeout(() => {
      setSlideIndex((prev) => (prev + 1) % slides.length)

      interval = setInterval(() => {
        setSlideIndex((prev) => (prev + 1) % slides.length)
      }, 1800)
    }, 300)

    return () => {
      clearTimeout(firstTimeout)
      clearInterval(interval)
    }
  }, [isActive, slides.length])

  const handlePointerDown = (event) => {
    if (event.pointerType === 'touch') {
      event.preventDefault()
      setActiveTouchSlug(project.slug)
    }
  }

  return (
    <Link
      to={`/project/${project.slug}`}
      className={`project-card ${isActive ? 'active' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onPointerDown={handlePointerDown}
      onContextMenu={(event) => event.preventDefault()}
    >
      <img
        src={slides[slideIndex]}
        alt={project.title}
        className={`project-card-image ${isActive ? 'active' : ''}`}
        draggable="false"
      />

      <div className={`project-card-overlay ${isActive ? 'visible active' : ''}`}>
        <span className="project-card-title">{project.title}</span>
      </div>
    </Link>
  )
}