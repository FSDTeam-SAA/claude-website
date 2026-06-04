

export interface SimilarPlayersApiResponse {
  statusCode: number;
  success: boolean;
  message: string;
  data: SimilarPlayer[];
}

export interface SimilarPlayer {
  _id: string;
  role: string;
  profileImage?: string;
  position: string[];
  age: number;
  nationality: string;
  name: string;
  similarity: number;
  teamName?: string;
  goals?: number | string;
  assists?: number | string;
  lastTransfer?: LastTransfer;
}

export interface LastTransfer {
  _id: string;
  season: string;
  leftClubName: string;
  joinedclubName: string;
  joinedCountery: string;
}