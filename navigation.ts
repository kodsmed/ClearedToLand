export interface Point {
  getCoordinates(): {x: number, y: number, z: number}
}

export class Position implements Point{
  // Properties
  private x: number;
  private y: number;
  private z: number;
  constructor (args: {x: number, y: number, z: number}) {
    this.x = args.x;
    this.y = args.y;
    this.z = args.z;
  }

  getCoordinates() {
    return {x: this.x, y: this.y, z: this.z}
  }
}

export class Approach implements Point {
  private position: Position;
  private navTarget: NavPoint;

  Approach(args: {position: Position, navTarget: NavPoint}) {
    this.position = args.position
    this.navTarget = args.navTarget
  }

  getCoordinates() {
    return this.position.getCoordinates()
  }

  getNavTarget() {
    return this.navTarget
  }

  getNavTargetCoordinates() : {x: number, y: number, z: number} {
    return this.navTarget.getCoordinates()
  }
}

export class NavPoint implements Point {
  private name: string;
  private position: Position;

  NavPoint(args: {name: string, position:Position}) {
    this.name = args.name
    this.position = args.position
  }

  getName() : string {
    return `${this.name}`
  }

  getCoordinates(): { x: number; y: number; z: number; } {
      return this.position.getCoordinates()
  }
}