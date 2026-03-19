import ProjectTemplate from './ProjectTemplate'

import cover from '../../assets/projects/MagneticBrushHolder/Climbing brush magnet.png'
import img1 from '../../assets/projects/MagneticBrushHolder/gma1.jpg'
import img2 from '../../assets/projects/MagneticBrushHolder/Zack Profile Pic.jpg'

const project = {
  slug: 'magnetic-brush-holder',
  title: 'Magnetic Brush Holder',
  date: '2026-01-19',
  problem:
    'Climbers often want a brush to stay easily accessible on a chalk bag without swinging awkwardly, snagging, or being difficult to remove and reattach during use.',
  coverImage: cover,
  hoverSlides: [cover, img1, img2],
  solutionMedia: [
    {
      type: 'image',
      src: img1,
      caption: 'Early concept direction.',
    },
    {
      type: 'image',
      src: img2,
      caption: 'Refined form and attachment detail.',
    },
  ],
}

export const projectMeta = {
  slug: project.slug,
  title: project.title,
  date: project.date,
  coverImage: project.coverImage,
  hoverSlides: project.hoverSlides,
}

export default function MagneticBrushHolder() {
  return <ProjectTemplate {...project} />
}