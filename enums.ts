enum MOVEMENT_TYPE {
  LANDING,
  TAKEOFF,
  CRUISING,
  HOLDING,
  TAXIING,
  PARKING,
}

const MovementTypeConstants: Record<MOVEMENT_TYPE, {speed: number}> = {
  [MOVEMENT_TYPE.CRUISING]: {speed: 500},
  [MOVEMENT_TYPE.HOLDING]: {speed: 400},
  [MOVEMENT_TYPE.TAKEOFF]: {speed: 280},
  [MOVEMENT_TYPE.LANDING]: {speed: 240},
  [MOVEMENT_TYPE.TAXIING]: {speed: 30},
  [MOVEMENT_TYPE.PARKING]: {speed: 0},
}

enum STATUS {
  AIRBORNE,
  LANDED,
  CRASHED,
  PARKED,
  TAXIING,
  HOLDING,
  EMERGENCY,
  DIVERTED,
}

enum PLANE_TYPE {
  SMALL_PROP, // Cessna 172, Piper PA-28
  SMALL_JET, // Saab 340, Embraer EJet
  MEDIUM_JET, // Boeing 737, Airbus A320
  LARGE_JET, // Boeing 777, Airbus A350
}

enum AIRLINE_CALLSIGNS {
  SCANADIAN = 'Scandinavian',
  AIRFRANCE = 'Air France',
  AIRCANADA = 'Air Canada',
  DELTA = 'Delta',
  UNITED = 'United',
  SOUTHWEST = 'Southwest',
  JETBLUE = 'JetBlue',
  RYANAIR = 'Ryanair',
  EASYJET = 'EasyJet',
}

const PlaneTypeConstants: Record<PLANE_TYPE, { minRunwayLength: number; maxCrosswind: number; maxTailwind: number, possibleCallsigns: string[] }> = {
  [PLANE_TYPE.SMALL_PROP]: { minRunwayLength: 2000, maxCrosswind: 10, maxTailwind: 5 , possibleCallsigns: ['Cessna', 'Piper'] },
  [PLANE_TYPE.SMALL_JET]: { minRunwayLength: 3000, maxCrosswind: 20, maxTailwind: 10, possibleCallsigns: ['Saab', 'Embrerger'] },
  [PLANE_TYPE.MEDIUM_JET]: { minRunwayLength: 4000, maxCrosswind: 30, maxTailwind: 15, possibleCallsigns: ['Boeing', 'Airbus'] },
  [PLANE_TYPE.LARGE_JET]: { minRunwayLength: 5000, maxCrosswind: 40, maxTailwind: 20, possibleCallsigns: ['Boeing', 'Airbus'] },
};