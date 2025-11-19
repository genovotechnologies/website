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
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  expertise: string[];
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