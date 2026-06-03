export interface Role {
  title: string;
  description: string;
}

export interface Stat {
  label: string;
  value: string | number;
}

export interface Capability {
  name: string;
  tags: string[];
}

export interface Article {
  title: string;
  url: string;
  publishedAt: string;
  summary: string;
}

export interface Hobby {
  name: string;
  description: string;
}

export interface Profile {
  name: string;
  tagline: string;
  roles: Role[];
  stats: Stat[];
  capabilities: Capability[];
  articles: Article[];
  hobbies: Hobby[];
}

export const profile: Profile = {
  name: "",
  tagline: "",
  roles: [],
  stats: [],
  capabilities: [],
  articles: [],
  hobbies: [],
};
