export interface GraphicColor {
  name: string;
  value: string;
}

export interface GraphicProject {
  id: number;
  category: string;

  name: string;
  projectType: string;
  description: string;

  challenge: string;

  research: string[];
  designProcess: string[];
  designDecisions: string[];
  finalOutcome: string[];

  tools: string[];

  colors: GraphicColor[];
  typography: string[];

  deliverables: string[];

  thumbnail: string;
  gallery: string[];

  figma?: string;
  behance?: string;
}
