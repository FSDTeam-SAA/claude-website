export interface Subscription {
  _id: string;
  title: string;
  price: number;
  currency: string;
  description?: string;
  features: string[];
  paymentType: PaymentType;
  interval?: Interval;
  numberOfGames?: number | null;
  evaluationLimit?: number | null;
  status: "active" | "inactive";
  isActive: boolean;
  // totalSubscripeUser: any[];
  // totalSubscripeTeam: any[];
  // createdAt: string;
  updatedAt: string;
  __v: number;
}

/* ENUMS (recommended for safety) */

export type PaymentType =
  | "Combine_2026"
  | "Development"
  | "TeamGame"
  | "Individual"
  | "Evaluation";

export type Interval = "monthly" | "yearly";

export interface PaginationMeta {
  total: number
  page: number
  limit: number
}

export interface SubscriptionApiResponse {
  statusCode: number
  success: boolean
  message: string
  meta: PaginationMeta
  data: Subscription[]
}

