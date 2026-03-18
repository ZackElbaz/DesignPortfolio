import ProjectCard from './ProjectCard'

export default function ProjectGrid({ projects }) {
  return (
    <section className="project-grid-wrapper">
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}