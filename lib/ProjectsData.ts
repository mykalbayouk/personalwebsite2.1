import { JSX } from "react";

export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
  }
  
  export class ProjectsData {
    static map(arg0: (project: any, index: any) => JSX.Element): import("react").ReactNode {
        throw new Error('Method not implemented.');
    }
    private static readonly _projects: Project[] = [
      {
        id: 1,
        title: "Musiiconvert",
        description: "Music file conversion tool",
        image: '/resources/images/projects/musii.png',
        technologies: ["Next.js", "TypeScript", "Node.js"],
        githubUrl: "https://github.com/yourusername/musiiconvert"
      },
      {
        id: 2,
        title: "Healthcare App",
        description: "Healthcare management system",
        image: '/resources/images/projects/mcr.png',
        technologies: ["React", "Node.js", "MongoDB"],
        githubUrl: "https://github.com/yourusername/healthcare-app"
      },
      {
        id: 3,
        title: "PokéApp",
        description: "A Pokémon information application",
        image: '/resources/images/projects/pokedex.png',
        technologies: ["React", "TypeScript", "Tailwind CSS"],
        githubUrl: "https://github.com/yourusername/pokeapp"
      },
    ];
  
    public static get projects(): Project[] {
      return this._projects;
    }
  
    public static getProjectById(id: number): Project | undefined {
      return this._projects.find(project => project.id === id);
    }
  }