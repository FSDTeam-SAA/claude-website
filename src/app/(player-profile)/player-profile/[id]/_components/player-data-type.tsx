
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
  marketValue: MarketValueItem[];
}


export interface MarketValueItem {
  _id: string;
  gk: string;
  marketValue: number;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  __v: number;
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
  nationality: string;
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

  goals: string
  assists: string

  shotsNsidePr: string
  shotsOutsidePa: string
  totalShots: string
  shotsOnTarget: string
  shootingAccuracy: string
  shotsOffTarget: string

  passesAccuracy: string
  takeOn: string

  createdAt: string
  updatedAt: string
  __v: number
}



export interface Rating {
  _id: string
  gk: string
  date: string
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
  fouls: string
  foulswon: string
  redCards: string
  yellowCards: string
  offside: string
  createdAt: string
  updatedAt: string
  __v: number
}

export interface DefensiveStats {
  _id: string
  gk: string
  tackleAttempts: string
  tackleSucceededPossession: string
  tackleSucceededNOPossession: string
  tackleFailed: string
  turnoverwon: string
  interceptions: string
  recoveries: string
  clearance: string
  totalBlocked: string
  shotBlocked: string
  crossBlocked: string
  mistakes: string
  aerialDuels: string
  phvsicalDuels: string
  ownGoals: string
  createdAt: string
  updatedAt: string
  __v: number
}


export interface SetPiecesStats {
  _id: string
  gk: string
  freekicks: string
  freekicksShots: string
  freekicksShotsonTarget: string
  penaltyKicks: string
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
  match: string
  goals: string
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

  passes: string
  passesinFinalThird: string
  passesinMiddleThird: string
  passesinOerensiveThird: string

  kevPasses: string
  longPasses: string
  mediumPasses: string
  shortPasses: string

  passesForward: string
  passesSidewavs: string
  passesBackward: string

  passesReceived: string
  crosses: string
  stepIn: string
  turnoverConceded: string

  mostPassesPlayerBetween: string
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





