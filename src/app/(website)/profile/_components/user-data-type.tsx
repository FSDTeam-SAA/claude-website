// ======================
// Root API Response
// ======================
export interface UserProfileApiResponse {
  statusCode: number
  success: boolean
  message: string
  data: UserProfileData
}

// ======================
// Data Wrapper
// ======================
export interface UserProfileData {
  user: User
  // stats: Stats
  reports: Report[]
  // transferHistory: TransferHistory[]
}

// ======================
// User Type
// ======================


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
  password: string;

  role: "admin" | "player" | "gk";
  provider: "credentials" | "google" | "facebook";

  profileImage: string;
  verified: boolean;
  phone: string;
  phoneCode: string;
  schoolName: string;
  nationality: string;
  position: string[];
  playingVideo: string[];

  isSubscription: boolean;
  subscription: string | null;
  subscriptionExpiry: string | null;

  createdAt: string; // ISO string
  updatedAt: string; // ISO string;
  lastLogin: string;

  birthdayPlace: string | null;
  category: string | null;
  citizenship: string | null;
  currentClub: string | null;

  dob: string; // ISO string
  age: number;

  foot: "left" | "right" | "both";
  gender: "male" | "female" | "other";

  gpa: string | null;
  hight: string | null;
  weight: string | null;
  agent: string
  inSchoolOrCollege: boolean;
  institute: "middle school" | "high school" | "college / university" | null;

  league: string | null;
  jerseyNumber: string | null;
  teamName: string | null;

  followers: string[];
  following: string[];

  socialMedia: SocialMedia[];

  __v: number;
}

