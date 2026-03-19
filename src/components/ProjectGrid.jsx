import { useState } from 'react'
import ProjectCard from './ProjectCard'

export default function ProjectGrid({ projects }) {
  const [activeTouchSlug, setActiveTouchSlug] = useState(null)

  return (
    <section className="project-grid-wrapper">
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            isTouchActive={activeTouchSlug === project.slug}
            setActiveTouchSlug={setActiveTouchSlug}
          />
        ))}
      </div>
    </section>
  )
}