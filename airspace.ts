import { Plane } from "./plane.ts";
import { Approach } from "./navigation.ts";
import { PLANE_TYPE } from "./enums.ts";

export class Airspace {
  private planes: Plane[];
  private approaches: Approach[];
  //private runways: Runway[];
  //private weather: Weather;
  private numberOfPlanesTotal: number;


  constructor() {
    this.planes = [];
    this.approaches = []
    //this.runways = [];
    //this.weather = new Weather();

  }

  addPlaneToApproach(args: {fuelEmergency?: boolean}): void {
    this.planes.push(new Plane({id: this.numberOfPlanesTotal, planeModel: this.getRandomPlaneType(), approach: this.getRandomApproach(), fuelEmergency: args.fuelEmergency || false}));
    this.incrementNumberOfPlanesTotal();
  }

  private incrementNumberOfPlanesTotal(): void {
    this.numberOfPlanesTotal++;
    if (this.numberOfPlanesTotal >= 1000) {
      this.numberOfPlanesTotal = 0;
    }
  }

  getPlanes(): Plane[] {
    return this.planes;
  }

  getNumberOfPlanesTotal(): number {
    return this.numberOfPlanesTotal;
  }

  private getRandomPlaneType(): PLANE_TYPE {
    const planeTypeKeys = Object.keys(PLANE_TYPE);
    const randomPlaneTypeKey = planeTypeKeys[Math.floor(Math.random() * planeTypeKeys.length)];
    const randomPlaneType = PLANE_TYPE[randomPlaneTypeKey as keyof typeof PLANE_TYPE];
    return randomPlaneType
  }

  private getRandomApproach(): Approach {
    const randomApproachKey = Math.floor(Math.random() * this.approaches.length)
    const randomApproach = this.approaches[randomApproachKey]
    return randomApproach
  }
}