import { Plane } from "./plane.ts"

export interface PlanesRepositoryInterface {
  readonly activePlanes: Plane[]
  readonly passivePlanes: Plane[]

  addActivePlane(plane: Plane): void
  removeActivePlane(plane: Plane): void
  activatePlane(plane: Plane): void
  deactivatePlane(plane: Plane): void
}

export class PlaneManager implements PlanesRepositoryInterface {
  private activePlanes: Plane[]
  private passivePlanes: Plane[]

  addActivePlane(plane: Plane): void {
      this.activePlanes.push(plane)
  }

  removeActivePlane(planeToRemove: Plane): void {
      const indexToRemove = this.activePlanes.findIndex(activePlane => activePlane.getId() === planeToRemove.getId())
      if (indexToRemove != -1) {
        this.activePlanes.splice(indexToRemove, 1)
      }
  }

  private removePassivePlane(planeToRemove: Plane): void {
    const indexToRemove = this.passivePlanes.findIndex(passivePlane => passivePlane.getId() === planeToRemove.getId())
  }

  activatePlane(plane: Plane): void {
      // You were working here
  }


}



