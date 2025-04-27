import { Approach, Position } from "./navigation.ts";
import { STATUS, PLANE_TYPE, PlaneTypeConstants, AIRLINE_CALLSIGNS, MOVEMENT_TYPE, MovementTypeConstants  } from "./enums.ts";
import { Movement } from "./movement.ts";

export class Plane {
  // Properties
  private id: number;
  position: Position;
  movement: Movement;
  private fuelMinutes: number;
  private status: STATUS;
  private minRunwayLength: number;
  private maxCrosswind: number;
  private maxTailwind: number;
  private planeModel: PLANE_TYPE;
  private callsign: string;

  constructor (args: {id: number, planeModel: PLANE_TYPE, approach: Approach, fuelEmergency?: boolean}) {
    this.position = new Position (args.approach.getCoordinates())
    this.status = STATUS.AIRBORNE;
    this.movement = new Movement(MOVEMENT_TYPE.HOLDING);
    this.id = args.id;
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
  }

  idToString(): string {
    const idString = this.id.toString();
    const paddedId = idString.padStart(4, '0');
    return  ` ${paddedId}`;
  }

  getId() : number {
    return this.id
  }
}

