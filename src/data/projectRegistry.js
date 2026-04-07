import FlightGlobePage, { projectMeta as FlightGlobeMeta } from '../pages/projects/FlightGlobe'
import MagneticBrushHolderPage, { projectMeta as MagneticBrushHolderMeta } from '../pages/projects/MagneticBrushHolder'
import KneeImplantTestRigPage, { projectMeta as KneeImplantTestRigMeta } from '../pages/projects/KneeImplantTestRig'
import RTKPage, { projectMeta as RTKMeta } from '../pages/projects/RTK'
import BicycleAmbulancePage, { projectMeta as BicycleAmbulanceMeta } from '../pages/projects/BicycleAmbulance'
import FireRobotPage, { projectMeta as FireRobotMeta } from '../pages/projects/FireRobot'
import RaceTrackerPage, { projectMeta as RaceTrackerMeta } from '../pages/projects/RaceTracker'

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
  {
    ...RTKMeta,
    Component: RTKPage,
  },
  {
    ...BicycleAmbulanceMeta,
    Component: BicycleAmbulancePage,
  },
  {
    ...FireRobotMeta,
    Component: FireRobotPage,
  },
  {
    ...RaceTrackerMeta,
    Component: RaceTrackerPage,
  }
].sort((a, b) => new Date(b.date) - new Date(a.date))