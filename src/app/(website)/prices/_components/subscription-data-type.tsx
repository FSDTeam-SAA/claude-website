export interface Subscription {
  _id: string
  title: string
  price: number
  currency: string
  evaluationLimit: number
  description?: string
  features: string[]
  paymentType?: "TeamGame" | "Individual" | "Evaluation"
  interval?: "monthly" | "yearly"
  numberOfGames: number | null
  isActive: boolean
  totalSubscripeUser: string[]
  totalSubscripeTeam: string[]
  createdAt: string
  updatedAt: string
  __v: number
}

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

