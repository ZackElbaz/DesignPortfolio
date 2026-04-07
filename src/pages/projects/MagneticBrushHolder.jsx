import ProjectTemplate from './ProjectTemplate'

import cover from '../../assets/projects/MagneticBrushHolder/Climbing brush magnet.png'
import img1 from '../../assets/projects/MagneticBrushHolder/cabbage.png'
import img2 from '../../assets/projects/MagneticBrushHolder/ice blue.png'
import img3 from '../../assets/projects/MagneticBrushHolder/Khaki_orange.png'
import img4 from '../../assets/projects/MagneticBrushHolder/CarKey.png'
import img5 from '../../assets/projects/MagneticBrushHolder/clasps.jpeg'
import img6 from '../../assets/projects/MagneticBrushHolder/magnetclasps.jpeg'

const project = {
  slug: 'magnetic-brush-holder',
  title: 'Magnetic Brush Holder',
  date: '2026-03-26',
  problem: [
    'Climbing brushes are used to remove excess chalk from climbing holds, restoring friction. They are therefore a small but essential tool for climbing.',

    'Climbers lose brushes all the time. Most chalk bags don’t have a proper place to keep one, and the ones that do are often too tight to fit most brushes.',

    'People end up throwing brushes on the mat, struggling to clip them on, or stuffing them wherever they fit, and inevitably losing them.',

    'On routes, you just want quick, easy access, not something fiddly.',

    'Because brushes vary so much in size and shape, existing solutions don’t work consistently.',
  ],
coverImage: cover,
  hoverSlides: [cover, img4, img1, img2, img3],
  solutionMedia: [
    {
      type: 'image',
      src: img5,
    },{
      type: 'image',
      src: img6,
    },
    {
      type: 'row',
      items: [
        {
          type: 'image',
          src: img1,
        },
        {
          type: 'image',
          src: img2,
        },
        {
          type: 'image',
          src: img3,
        },
      ],
    },
    {
      type: 'image',
      src: cover,
    },
    {
      type: 'image',
      src: img4,
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