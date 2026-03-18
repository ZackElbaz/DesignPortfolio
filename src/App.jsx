import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import { projectPages } from './data/projectRegistry'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/portfolio" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />

      {projectPages.map((project) => (
        <Route
          key={project.slug}
          path={`/project/${project.slug}`}
          element={<project.Component />}
        />
      ))}
    </Routes>
  )
}