export interface Feature {
  title: string;
  description: string;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  story: string[];
  features: Feature[];
  technologies: string[];
  github: string;
  live: string;
  thumbnail: string;
  screenshots: string[];
}
