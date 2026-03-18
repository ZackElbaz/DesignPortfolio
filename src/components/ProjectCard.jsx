import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function ProjectCard({ project }) {
  const slides =
    project.hoverSlides && project.hoverSlides.length > 0
      ? project.hoverSlides
      : [project.coverImage]

  const [isHovered, setIsHovered] = useState(false)
  const [slideIndex, setSlideIndex] = useState(0)

  useEffect(() => {
    if (!isHovered || slides.length <= 1) {
      setSlideIndex(0)
      return
    }

    let interval

    const firstTimeout = setTimeout(() => {
      setSlideIndex((prev) => (prev + 1) % slides.length)

      interval = setInterval(() => {
        setSlideIndex((prev) => (prev + 1) % slides.length)
      }, 1800)
    }, 350)

    return () => {
      clearTimeout(firstTimeout)
      clearInterval(interval)
    }
  }, [isHovered, slides.length])

  return (
    <Link
      to={`/project/${project.slug}`}
      className="project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={slides[slideIndex]}
        alt={project.title}
        className="project-card-image"
      />

      <div className={`project-card-overlay ${isHovered ? 'visible' : ''}`}>
        <span className="project-card-title">{project.title}</span>
      </div>
    </Link>
  )
}