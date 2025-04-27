import { Plane } from './plane.ts'
import { NavPoint, Approach, Position } from './navigation.ts'
import { ACTION, MOVEMENT_TYPE } from './enums.ts'
import { AnimationFunctions } from './ui.ts'


export class Pilot {
  private plane : Plane;
  private action: ACTION;
  private navTarget: NavPoint;
  private Iui: AnimationFunctions;

  Pilot(myAircraft: Plane, Iui: AnimationFunctions) {
    this.plane = myAircraft;
    this.Iui

  }

  enterFromApproach(approach: Approach){

    this.plane.movement.setMovementType(MOVEMENT_TYPE.CRUISING)
    this.plane.movement.setHeading(this.getHeadingByApproach(approach))
    this.Iui.startPlaneMovementAnimation(this.plane)
  }

  private getHeadingByApproach(approach:Approach) : number {
    const aCoords : {x: number, y: number, z: number} = approach.getCoordinates()
    const bCoords : {x: number, y: number, z: number} = approach.getNavTargetCoordinates()
    const xDifference: number = aCoords.x - bCoords.x
    const yDifference: number = aCoords.y - bCoords.y
    return Math.atan2(yDifference, xDifference)
  }
}