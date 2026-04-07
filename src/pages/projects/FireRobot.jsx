import ProjectTemplate from './ProjectTemplate'

import cover from '../../assets/projects/FireRobot/FireRobot.png'

import img1 from '../../assets/projects/FireRobot/design 4 (1).png'
import img2 from '../../assets/projects/FireRobot/design 5 (1).png'
import img3 from '../../assets/projects/FireRobot/design 1 (1).png'
import img4 from '../../assets/projects/FireRobot/design 3 (1).png'
import img5 from '../../assets/projects/FireRobot/design 2 (1).png'

import img6 from '../../assets/projects/FireRobot/ARM 1 (1).png'
import img7 from '../../assets/projects/FireRobot/ARM 2 (1).png'
import img8 from '../../assets/projects/FireRobot/ARM 3 (1).png'
import img9 from '../../assets/projects/FireRobot/ARM 4 (1).png'
import img10 from '../../assets/projects/FireRobot/End Effector 3 (1) (1).jpg'

import img11 from '../../assets/projects/FireRobot/Final Design Drawing (1) (1).jpg'

import img12 from '../../assets/projects/FireRobot/End Effector 1 (2).png'

import img13 from '../../assets/projects/FireRobot/End Effector 3 (2).png'
import img14 from '../../assets/projects/FireRobot/End Effector 2 (2).png'

import img15 from '../../assets/projects/FireRobot/wheel concepts (1).png'

import img16 from '../../assets/projects/FireRobot/Wheel 1 (1).png'
import img17 from '../../assets/projects/FireRobot/Wheel 2 (1).jpg'

import img18 from '../../assets/projects/FireRobot/image (97).png'

import img19 from '../../assets/projects/FireRobot/Robot 6 (3).png'
import img20 from '../../assets/projects/FireRobot/Robot 7 (1).png'
import img21 from '../../assets/projects/FireRobot/Robot 8 (1).png'

import img22 from '../../assets/projects/FireRobot/Robot 2 (1) (1).png'

const project = {
  slug: 'FireRobot',
  title: 'Fire Robot',
  date: '2021-05-04',
  problem: [
    'Residential fire environments are highly unstable, with low visibility, toxic smoke, extreme heat, and rapidly changing structural conditions making internal spaces difficult to assess safely.',

    'Physically accessing these environments is inherently dangerous, with limited entry points, obstructed routes, and the need to navigate through confined, unfamiliar spaces under time pressure.',

    'Firefighters are often required to enter with limited information, exposing them to significant risk from inhalation, disorientation, and unseen hazards during initial search and assessment.',

    'Reducing the level of direct human exposure in these environments is critical, as current conditions make early-stage assessment both dangerous and difficult to perform reliably.',
    ],
  coverImage: cover,
  hoverSlides: [cover, img5, img14. img16, img18, img21],
  solutionMedia: [
  {
    type: 'row',
    items: [
      { type: 'image', src: img1 },
      { type: 'image', src: img2 },
      { type: 'image', src: img3 },
      { type: 'image', src: img4 },
      { type: 'image', src: img5 },
    ],
  },
  {
    type: 'row',
    items: [
      { type: 'image', src: img6 },
      { type: 'image', src: img7 },
      { type: 'image', src: img8 },
      { type: 'image', src: img9 },
      { type: 'image', src: img10 },
    ],
  },
    {
    type: 'image',
    src: img11,
  },
  {
    type: 'image',
    src: img12,
  },
  {
    type: 'row',
    items: [
      { type: 'image', src: img13 },
      { type: 'image', src: img14 },
    ],
  },
  {
    type: 'image',
    src: img15,
  },
  {
    type: 'row',
    items: [
      { type: 'image', src: img16 },
      { type: 'image', src: img17 },
    ],
  },
  {
    type: 'image',
    src: img18,
  },
  {
    type: 'image',
    src: img19,
  },
  {
    type: 'row',
    items: [
      { type: 'image', src: img20 },
      { type: 'image', src: img21 },
      { type: 'image', src: img22 },
    ],
  },
  {
    type: 'image',
    src: cover,
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

export default function FireRobot() {
  return <ProjectTemplate {...project} />
}