import { Plane } from "./plane.ts";

export interface AnimationFunctions {
  startPlaneMovementAnimation(plane: Plane) : void
  stopPlaneMovementAnimation(plane: Plane): void
}

export class Ui implements AnimationFunctions {
  activeAircraft: Plane[] = [];
  startPlaneMovementAnimation(aircraft: Plane) {
    return
  }
  stopPlaneMovementAnimation(plane: Plane): void {
      return
  }
}

