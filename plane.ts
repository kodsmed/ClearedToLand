class Position {
  // Properties
  private latitude: number;
  private longitude: number;
  private altitude: number;
  constructor (latitude: number, longitude: number, altitude: number) {
    this.latitude = latitude;
    this.longitude = longitude;
    this.altitude = altitude;
  }

  getPosition() {
    return [this.latitude, this.longitude, this.altitude]
  }

  move(args:{speed:number, heading:number}) {
    // calculate and update position
  }
}

class Movement {
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

class Plane {
  // Properties
  private id: number;
  private position: Position;
  private movement: Movement;
  private heading: number;
  private fuelMinutes: number;
  private status: STATUS;
  private minRunwayLength: number;
  private maxCrosswind: number;
  private maxTailwind: number;
  private planeModel: PLANE_TYPE;
  private callsign: string;
  private pilotAI: Pilot;

  constructor (args: {id: number, planeModel: PLANE_TYPE, approach: Approach, fuelEmergency?: boolean}) {
    this.position = args.approach.getPosition();
    this.status = STATUS.AIRBORNE;
    this.movement = new Movement(MOVEMENT_TYPE.CRUISING);
    this.id = args.id;
    this.heading = 0;
    this.fuelMinutes = 0;
    this.minRunwayLength = 0;
    this.maxCrosswind = 0;
    this.maxTailwind = 0;

    const planeTypeConstants = PlaneTypeConstants[args.planeModel];
    if (!planeTypeConstants) {
      throw new Error(`Invalid plane type: ${args.planeModel}`);
    }
    this.minRunwayLength = planeTypeConstants.minRunwayLength;
    this.maxCrosswind = planeTypeConstants.maxCrosswind;
    this.maxTailwind = planeTypeConstants.maxTailwind;
    this.planeModel = args.planeModel;

    const randomAirlineCallsign = Object.values(AIRLINE_CALLSIGNS)[Math.floor(Math.random() * Object.values(AIRLINE_CALLSIGNS).length)];
    const possibleCallsignsArray = PlaneTypeConstants[this.planeModel].possibleCallsigns;
    possibleCallsignsArray.push(randomAirlineCallsign);
    this.callsign = possibleCallsignsArray[Math.floor(Math.random() * possibleCallsignsArray.length)] + this.idToString();

    if (args.fuelEmergency) {
      this.fuelMinutes = 5; // Set fuel minutes to 5 for emergency
    } else {
      this.fuelMinutes = Math.floor(Math.random() * 50) + 10; // Random fuel minutes between 10 and 60
    }

    this.pilotAI = new Pilot();
    this.pilotAI.enterFromApproach(args.approach);
  }

  idToString(): string {
    const idString = this.id.toString();
    const paddedId = idString.padStart(4, '0');
    return  ` ${paddedId}`;
  }

  getPosition() {
    return this.position;
  }

  move(){
    this.position.move({speed: this.movement.getSpeed(), heading: this.movement.getHeading()})
  }

}