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
        title: "MusiiConvert",
        description: " Use AI to generate sheet music from mp3 files",
        image: '/resources/images/projects/musii.png',
        technologies: ["Next.js", "Python", "Basic-Pitch"],
        githubUrl: "https://github.com/mykalbayouk/musiiconvert"
      },
      {
        id: 2,
        title: "Medical Record Chat App",
        description: "Chat with an AI about your medical records",
        image: '/resources/images/projects/mcr.png',
        technologies: ["Next.js", "TypeScript", "OpenAI GPT-4o"],
        githubUrl: "https://github.com/mykalbayouk/MedicalRecordChat"
      },
      {
        id: 3,
        title: "Pokédex App",
        description: "Recreation of the Pokédex from the Pokémon series",
        image: '/resources/images/projects/pokedex.png',
        technologies: ["Flutter", "PokeAPI"],
        githubUrl: "https://github.com/mykalbayouk/PokedexApp"
      },
      {
        id: 4,
        title: "Birbo",
        description: "Social Media web-app for nature lovers",
        image: '/resources/images/projects/birbo.png',
        technologies: ["React", "Next.js", "MongoDB"],
        githubUrl: "https://github.com/mykalbayouk/birbo",
      },
      {
        id: 5,
        title: "ComQuest",
        description: "Service Platform Mobile App that allows users to help each other",
        image: '/resources/images/projects/com.png',
        technologies: ["Android Studio", "FireBase", "Java"],
        githubUrl: "https://github.com/mykalbayouk/ComQuest"
      },
      {
        id: 6,
        title: "ItunesGUI",
        description: "Uses the iTunes API to give a gallery of different albums",
        image: '/resources/images/projects/itunes.png',
        technologies: ["Java", "Maven"],
        githubUrl: "https://github.com/mykalbayouk/iTunesGUIApp"
      },
      {
        id: 7,
        title: "DawgRider",
        description: "Ride Share App built in Android Studio",
        image: '/resources/images/projects/dawgrider.png',
        technologies: ["Android Studio", "FireBase", "Java"],
        githubUrl: "https://github.com/mykalbayouk/DawgRider"
      },
      {
        id: 8,
        title: "Puzzle RPG",
        description: "Puzzle RPG game built in Flutter",
        image: '/resources/images/projects/puz.png',
        technologies: ["Flutter", "Dart", "Flame"],
        githubUrl: "https://github.com/mykalbayouk/Puzzle_RPG"
      },
    ];
  
    public static get projects(): Project[] {
      return this._projects;
    }
  
    public static getProjectById(id: number): Project | undefined {
      return this._projects.find(project => project.id === id);
    }
  }