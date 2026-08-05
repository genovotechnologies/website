export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  color: string;
  textColor?: string;
  longDescription?: string;
  specs?: { label: string; value: string }[];
  githubUrl?: string;
  liveUrl?: string;
  architectureType?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  linkedin?: string;
  twitter?: string;
}

export interface ResearchPaper {
  title: string;
  description: string;
  metric: string;
  url?: string;
  date?: string;
  author?: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
  textColor: string;
  readTime: string;
}

export interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  tags: string[];
  description: string;
  requirements: string[];
  tagColor: string;
}