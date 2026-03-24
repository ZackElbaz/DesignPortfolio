import FlightGlobePage, { projectMeta as FlightGlobeMeta } from '../pages/projects/FlightGlobe'
import MagneticBrushHolderPage, { projectMeta as MagneticBrushHolderMeta } from '../pages/projects/MagneticBrushHolder'
import KneeImplantTestRigPage, { projectMeta as KneeImplantTestRigMeta } from '../pages/projects/KneeImplantTestRig'

export const projectPages = [
  {
    ...FlightGlobeMeta,
    Component: FlightGlobePage,
  },
  {
    ...MagneticBrushHolderMeta,
    Component: MagneticBrushHolderPage,
  },
  {
    ...KneeImplantTestRigMeta,
    Component: KneeImplantTestRigPage,
  },
].sort((a, b) => new Date(b.date) - new Date(a.date))