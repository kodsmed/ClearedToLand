enum ACTION {
  PROCEED,
  HOLD_AT,
  DESCEND,
  ASCEND,
  TAKEOFF,
  LAND,
}

class Pilot {
  private plane : Plane;
  private action: ACTION;
  private navTarget: NavPoint;

  Pilot(myAircraft: Plane) {
    this.plane = myAircraft;

  }

  enterFromApproach(approach: Approach){
    //Get heading by comparing the approach position and the navpoint position
    //update movement
  }
}