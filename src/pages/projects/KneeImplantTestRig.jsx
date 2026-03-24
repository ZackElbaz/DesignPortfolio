import ProjectTemplate from './ProjectTemplate'

import cover from '../../assets/projects/KneeImplantTestRig/finalcadmodel.jpg'

import img1 from '../../assets/projects/KneeImplantTestRig/comprehensiveknee.jpg'

import img2 from '../../assets/projects/KneeImplantTestRig/knee-replacement-xray.jpg'

import img3 from '../../assets/projects/KneeImplantTestRig/OriginalMocapMarkers.jpg'
import img4 from '../../assets/projects/KneeImplantTestRig/ortholoaduntouched.jpg'

import img5 from '../../assets/projects/KneeImplantTestRig/OpenPoseSkeleton.jpg'
import img6 from '../../assets/projects/KneeImplantTestRig/OpenposeMocapRepresentation.jpg'
import img7 from '../../assets/projects/KneeImplantTestRig/2peopleopenpose.jpg'

import img8 from '../../assets/projects/KneeImplantTestRig/Firstgocadmodel.jpg'
import img9 from '../../assets/projects/KneeImplantTestRig/secondgocadmodel.jpg'

import img11 from '../../assets/projects/KneeImplantTestRig/vonmises.jpg'
import img12 from '../../assets/projects/KneeImplantTestRig/displacements.jpg'

import img13 from '../../assets/projects/KneeImplantTestRig/3D_Prints_Instron.jpg'
import img14 from '../../assets/projects/KneeImplantTestRig/finalprototype.jpg'

const project = {
  slug: 'knee-implant-test-rig',
  title: 'Knee Implant Test Rig',
  date: '2024-05-04',
  problem: [
    'Revision knee surgeries place a significant and growing burden on the NHS. They are costly, invasive, and often the result of implants that are not optimally suited to the patient.',

    'In many cases, implant selection is influenced by what surgeons are familiar with, rather than what best matches an individual’s anatomy and biomechanics. This is partly due to limitations in how implants are evaluated before surgery.',

    'Current testing methods sit at two extremes. Cadaveric testing is expensive, inconsistent, and difficult to repeat reliably, while standard mechanical testing often fails to accurately represent real human joint behaviour.',

    'This creates a gap in the development and validation process, where there is no accessible method that is both representative of real use and repeatable at scale.',
    ],
  coverImage: cover,
  hoverSlides: [cover, img6, img12, img13],
  solutionMedia: [
    {
        type: 'image',
        src: img1,
    },
    {
        type: 'image',
        src: img2,
    },

    {
        type: 'row',
        items: [
        { type: 'image', src: img3 },
        { type: 'image', src: img4 },
        ],
    },

    {
        type: 'row',
        items: [
        { type: 'image', src: img5 },
        { type: 'image', src: img6 },
        { type: 'image', src: img7 },
        ],
    },

    {
        type: 'row',
        items: [
        { type: 'image', src: img8 },
        { type: 'image', src: img9 },
        { type: 'image', src: cover },
        ],
    },

    {
        type: 'row',
        items: [
        { type: 'image', src: img11 },
        { type: 'image', src: img12 },
        ],
    },

    {
        type: 'row',
        items: [
        { type: 'image', src: img13 },
        { type: 'image', src: img14 },
        ],
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

export default function KneeImplantTestRig() {
  return <ProjectTemplate {...project} />
}