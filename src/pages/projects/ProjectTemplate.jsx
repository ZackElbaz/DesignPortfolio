import Header from '../../components/Header'
import MediaBlock from '../../components/MediaBlock'
import BackToTopButton from '../../components/BackToTopButton'

export default function ProjectTemplate({
  title,
  date,
  problem,
  solutionMedia,
}) {
  return (
    <div className="page-shell">
      <Header />

      <main className="project-main">
        <article className="project-article">
          <h1 className="project-title">{title}</h1>

          <section className="project-section">
            <h2 className="project-subtitle">The problem:</h2>
            <p className="project-text">{problem}</p>
          </section>

          <section className="project-section">
            <h2 className="project-subtitle">The solution</h2>
            <div className="project-media-stack">
              {solutionMedia.map((item, index) => (
                <MediaBlock key={index} item={item} />
              ))}
            </div>
          </section>

          <BackToTopButton />
        </article>
      </main>
    </div>
  )
}