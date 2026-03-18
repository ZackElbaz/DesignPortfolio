import Header from '../components/Header'
import ProjectGrid from '../components/ProjectGrid'
import { projectPages } from '../data/projectRegistry'

export default function HomePage() {
  return (
    <div className="page-shell">
      <Header />
      <main className="home-main">
        <ProjectGrid projects={projectPages} />
      </main>
    </div>
  )
}