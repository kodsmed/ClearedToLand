import { MOVEMENT_TYPE, MovementTypeConstants } from "./enums.ts";

export class Movement {
  private movementType: MOVEMENT_TYPE;
  private speed: number;
  private heading: number;
  constructor (movementType: MOVEMENT_TYPE, heading?: number) {
    this.speed = MovementTypeConstants[movementType].speed
    this.heading = heading || 0;
    this.movementType = movementType;
  }

  getMovementType(): MOVEMENT_TYPE {
    return this.movementType;
  }

  setMovementType(movementType: MOVEMENT_TYPE): void {
    this.movementType = movementType;
    this.speed = MovementTypeConstants[movementType].speed
  }

  getSpeed(): number {
    return this.speed;
  }

  getHeading(): number {
    return this.heading;
  }

  setHeading(heading: number): void {
    this.heading = heading;
  }

  getMovement(): Movement {
    return this;
  }
}