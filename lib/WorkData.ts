import { JSX } from "react";

export interface Description {
    title: string;
    content: string;
    image?: string;
}

export interface Work {
    id: number;
    company: string;
    position: string;
    duration: string;
    description: string;
    descriptionLong: Description[];
    technologies: string[];
    location: string;
    image: string[];
}

export class WorkData {
    static map(arg0: (work: any, index: any) => JSX.Element): import("react").ReactNode {
        throw new Error('Method not implemented.');
    }
    private static readonly _work: Work[] = [
        {
            id: 1,
            company: "United Launch Alliance",
            position: "Information Technology Intern",
            duration: "June 2023 - August 2023",
            description: "Developed and maintained web applications using secure technologies. Collaborated with senior developers on client projects.",
            descriptionLong: [
                {
                    title: "Project Leadership",
                    content: "I led an SAP/UI5 project where I was responsible for developing and optimizing workflow processes. As part of this project, I presented key outcomes to over five senior managers, effectively communicating the impact and benefits of our work. This experience allowed me to refine my presentation skills and demonstrate the value of technical solutions to stakeholders.",
                    image: "/resources/images/work/delta.jpg"
                },
                {
                    title: "Technical Implementation",
                    content: "To enhance workflow efficiency, I utilized SAP, UI5, JavaScript, and Axure 9, leveraging these tools to develop user-friendly interfaces and improve system functionality. By integrating these technologies, I was able to streamline processes and create a more intuitive experience for end users. This required a strong understanding of both front-end development and enterprise resource planning (ERP) systems.",
                    image: "/resources/images/work/atlasLaunch.jpg"
                },
                {
                    title: "Version Control Management",
                    content: "I also implemented a structured Git workflow to ensure smooth collaboration across the team. This involved managing over 30 pull requests, reviewing and merging code changes, and facilitating more than 20 code reviews. By maintaining a disciplined version control process, I helped improve code quality, reduce conflicts, and keep development progress on track.",
                    image: "/resources/images/about/atlas.jpg"
                },
                {
                    title: "Project Management",
                    content: "In addition to managing the SAP/UI5 project, I successfully handled multiple concurrent projects, typically balancing between two and four at a time. Each project had different requirements and deadlines, requiring strong time management and adaptability. By prioritizing tasks effectively and staying organized, I was able to meet deadlines while maintaining high-quality work.",
                    image: "/resources/images/work/pikes.jpg"
                }
            ],
            technologies: [
                "SAP",
                "UI5",
                "JavaScript",
                "Git",
                "Axure RP 9"
            ],
            location: "Centennial, CO",
            image: ["/resources/images/work/ulaCover.jpg", "/resources/images/work/delta.jpg", "/resources/images/work/atlas.jpg", "/resources/images/work/pikes.jpg"],
        },
    ];

    public static get work(): Work[] {
        return this._work;
    }

    public static getWorkById(id: number): Work | undefined {
        return this._work.find(work => work.id === id);
    }
}