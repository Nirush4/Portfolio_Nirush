export interface Feature {
  title: string;
  description: string;
}

export interface Project {
  id: number;
  name: string;
  description: string;

  problem: string;

  uxProcess?: string[];
  figmaDesign?: string[];
  finalSolution?: string[];

  technologies?: string[];

  github?: string;
  live?: string;
  Figma?: string;

  thumbnail?: string;
  screenshots?: string[];
  category: string;
}
