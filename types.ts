export interface Slug {
  id: string;
  slug: string;
  destination_url: string;
  default_query: Record<string, string>;
  created_at: string;
  clicks_count: number;
  conversions_count: number;
}

export interface Click {
  id: string;
  slug_id: string;
  slug: string;
  video_id: string | null;
  ip: string;
  referrer: string;
  client_timestamp: string;
}

export interface Conversion {
  id: string;
  name: string;
  email: string;
  video_id: string;
  slug: string;
  utm_source?: string;
  utm_campaign?: string;
  created_at: string;
  revenue?: number; // Optional enhancement
}

export interface DashboardStats {
  totalClicks: number;
  totalConversions: number;
  conversionRate: number;
  recentActivity: Array<{ date: string; clicks: number; conversions: number }>;
}

export interface User {
  id: string;
  name: string;
  email: string;
}