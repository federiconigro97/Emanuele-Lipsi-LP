export enum ContentType {
  BLOG_POST = 'BLOG_POST',
  LINKEDIN_POST = 'LINKEDIN_POST',
  EMAIL_NEWSLETTER = 'EMAIL_NEWSLETTER'
}

export interface StrategicKeyword {
  term: string;
  intent: string;
  volume: string;
}

export interface MarketInsight {
  title: string;
  content: string;
  icon: string;
}

export interface IcpProfile {
  role: string;
  companyType: string;
  painPoints: string[];
  goals: string[];
}
