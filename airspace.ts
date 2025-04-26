class Approach {
  private position: Position;
  private navTarget: NavPoint;

  Approach(args: {position: Position, navTarget: NavPoint}) {
    this.position = args.position
    this.navTarget = args.navTarget
  }

  getPosition() {
    return this.position
  }

  getNavTarget() {
    return this.navTarget
  }
}

class NavPoint {
  name: string;
  position: Position;

  NavPoint(args: {name: string, position:Position}) {
    this.name = args.name
    this.position = args.position
  }
}

class Airspace {
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

    // randomly select a plane type
    const planeTypeKeys = Object.keys(PLANE_TYPE);
    const randomPlaneTypeKey = planeTypeKeys[Math.floor(Math.random() * planeTypeKeys.length)];
    const randomPlaneType = PLANE_TYPE[randomPlaneTypeKey as keyof typeof PLANE_TYPE];
    const randomApproachKey = Math.floor(Math.random() * this.approaches.length)
    const randomApproach = this.approaches[randomApproachKey]

    this.planes.push(new Plane({id: this.numberOfPlanesTotal, planeModel: randomPlaneType, approach: randomApproach, fuelEmergency: args.fuelEmergency || false}));
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
}