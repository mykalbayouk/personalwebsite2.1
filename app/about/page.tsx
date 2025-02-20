import React from 'react';

const education = [
    {
        degree: 'Bachelor of Science in Computer Science',
        institution: 'University of Example',
        duration: '2015 to 2019'
    },
    {
        degree: 'Master of Science in Software Engineering',
        institution: 'Example Institute of Technology',
        duration: '2019 to 2021'
    }
];

const workExperience = [
    {
        title: 'Software Engineer',
        company: 'Tech Company A',
        duration: '2021 to Present'
    },
    {
        title: 'Intern',
        company: 'Tech Company B',
        duration: 'Summer 2020'
    }
];

const skills = [
    'JavaScript / TypeScript',
    'React / Redux',
    'Node.js',
    'Python',
    'SQL / NoSQL Databases'
];

const projects = [
    {
        name: 'Personal Website',
        description: 'A personal website to showcase my portfolio and blog.'
    },
    {
        name: 'Open Source Contributions',
        description: 'Contributions to various open source projects on GitHub.'
    }
];

const AboutPage: React.FC = () => {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>About Me</h1>
            <section>
                <h2>Education</h2>
                <ul>
                    {education.map((item, index) => (
                        <li key={index}>
                            <strong>{item.degree}</strong>
                            <br />
                            {item.institution} - {item.duration}
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <h2>Work Experience</h2>
                <ul>
                    {workExperience.map((item, index) => (
                        <li key={index}>
                            <strong>{item.title}</strong>
                            <br />
                            {item.company} - {item.duration}
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <h2>Skills</h2>
                <ul>
                    {skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </section>
            <section>
                <h2>Projects</h2>
                <ul>
                    {projects.map((project, index) => (
                        <li key={index}>
                            <strong>{project.name}</strong>
                            <br />
                            {project.description}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default AboutPage;