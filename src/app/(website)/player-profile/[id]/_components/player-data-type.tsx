
export interface UserProfileApiResponse {
  statusCode: number
  success: boolean
  message: string
  data: UserProfile
}


export interface UserProfile {
  user: User
  attacking: AttackingStats[],
  rating: Rating[]
  gkstats: GKStats[]
  fouls: FoulsStats[]
  defensive: DefensiveStats[]
  distribution: DistributionStats[]
  setpieces: SetPiecesStats[]
  national: NationalStats[]
  reports: Reports[]
  transferHistory: TransferHistory[]
  gkDistributionStats: GKDistributionStats[]
  avarageRatting: AvarageRatting 
  semelierPlayer: SimilarPlayer[];
}


export interface SimilarPlayer {
  _id: string;
  name: string;
  profileImage: string;

  position: string[];

  game: number;
  avgRating: number;
  similarity: number;
  nationality: string;
  age: number;

  goals: number;
  assists: number;

  nationalTeam: NationalTeam;
  lastTransfer: LastTransfer;
}

export interface LastTransfer {
  season: string;
  leftClub: string;
  joinedClub: string;
  joinedClubCountery: string;
}

export interface NationalTeam {
  teamName: string;
  match: number;
  goals: number;
  flag: string;
}





export interface SocialMedia {
  _id: string;
  name: string;
  url: string;
}

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  provider: "credentials" | "google" | "github";
  profileImage: string;
  verified: boolean;

  position: string[];
  playingVideo: string[];

  isSubscription: boolean;
  subscription: string;
  subscriptionExpiry: string; // ISO date string

  createdAt: string;
  updatedAt: string;
  lastLogin: string;
  __v: number;

  birthdayPlace: string;
  category: string;
  citizenship: string;
  currentClub: string;
  dob: string; // ISO date string
  foot: "left" | "right" | "both";
  gender: "male" | "female" | "other";
  phone : string;
  gpa: string;
  hight: string;
  weight: string;
  schoolName: string;
  inSchoolOrCollege: boolean;
  institute: string;
  league: string;

  jerseyNumber: string;
  teamName: string;

  followers: string[];
  following: string[];

  age: number;

  socialMedia: SocialMedia[];

  agent: string;
}



export interface AttackingStats {
  _id: string
  gk: string

  goals: number
  assists: number

  shotsNsidePr: number
  shotsOutsidePa: number
  totalShots: number
  shotsOnTarget: number
  shootingAccuracy: number
  shotsOffTarget: number

  passesAccuracy: number
  takeOn: number

  createdAt: string
  updatedAt: string
  __v: number
}



export interface Rating {
  _id: string
  gk: string
  rating: number
  position: string[]
  numberOfGames: number
  minutes: number
  createdAt: string
  updatedAt: string
  __v: number
}


export interface GKStats {
  _id: string
  gk: string
  goalsConceded: number
  penaltKitkSave: number
  saves: number
  aerialControl: number
  catches: number
  deFensiveLineSupport: number
  parries: number
  createdAt: string
  updatedAt: string
  __v: number
}


export interface FoulsStats {
  _id: string
  gk: string
  fouls: number
  foulswon: number
  redCards: number
  yellowCards: number
  offside: number
  createdAt: string
  updatedAt: string
  __v: number
}

export interface DefensiveStats {
  _id: string
  gk: string
  tackleAttempts: number
  tackleSucceededPossession: number
  tackleSucceededNOPossession: number
  tackleFailed: number
  turnoverwon: number
  interceptions: number
  recoveries: number
  clearance: number
  totalBlocked: number
  shotBlocked: number
  crossBlocked: number
  mistakes: number
  aerialDuels: number
  phvsicalDuels: number
  ownGoals: number
  createdAt: string
  updatedAt: string
  __v: number
}


export interface SetPiecesStats {
  _id: string
  gk: string
  freekicks: number
  freekicksShots: number
  freekicksShotsonTarget: number
  penaltyKicks: number
  createdAt: string
  updatedAt: string
  __v: number
}

export interface NationalStats {
  _id: string
  gk: string
  flag: string
  teamName: string
  debut: string
  match: number
  goals: number
  category: string
  createdAt: string
  updatedAt: string
  __v: number
}


export interface Reports {
  _id: string
  gk: string
  date: string
  category: string
  gameTitle: string
  rating: number
  position: string[]
  minutesPlayed: number
  deFensiveSummary: string
  strengths: string
  offensiveSummary: string
  weaknesses: string
  distributionSummary: string
  generalComments: string
  createdAt: string
  updatedAt: string
  __v: number
}


export interface TransferHistory {
  _id: string
  gk: string
  season: string
  date: string
  leftClubName: string
  leftClub: string
  leftCountery: string
  joinedclubName: string
  joinedClub: string
  joinedCountery: string
  createdAt: string
  updatedAt: string
  __v: number
}

export interface DistributionStats {
  _id: string
  player: string

  passes: number
  passesinFinalThird: number
  passesinMiddleThird: number
  passesinOerensiveThird: number

  kevPasses: number
  longPasses: number
  mediumPasses: number
  shortPasses: number

  passesForward: number
  passesSidewavs: number
  passesBackward: number

  passesReceived: number
  crosses: number
  stepIn: number
  turnoverConceded: number

  mostPassesPlayerBetween: number
  passTheMost: string
  ballTheMost: string

  createdAt: string
  updatedAt: string
  __v: number
}

export interface GKDistributionStats {
  _id: string
  gk: string

  keyPasses: number
  mediumRangePasses: number
  passes: number
  shortPasses: number

  passesInFinalThird: number
  passesForward: number
  passesInMiddleThird: number
  passesSideways: number
  passesInDefensiveThird: number

  passesReceived: number
  longPasses: number

  createdAt: string
  updatedAt: string
  __v: number
}


export interface AvarageRatting {
  averageRating: number
  gamesNumber: number
  stars: number
}





