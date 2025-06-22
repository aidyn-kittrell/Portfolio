"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const ProjectData = [
    {
        id: 1,
        title: "NeuroSAM",
        description: "Project 1 Description",
        image: "/images/projects/1-placeholder.png",
        tag: ["All", "DS"],
        gitUrl: "https://github.com/wz-cutting-edge/Neuro-SAM",
        previewUrl: "/"
    },
    {
        id: 2,
        title: "Deep Digits Duel: MLP vs. CNN",
        description: "Project 2 Description",
        image: "/images/projects/2-placeholder.png",
        tag: ["All", "DS"],
        gitUrl: "https://github.com/aidyn-kittrell/Deep-Digits-Duel-MLP-vs-CNN",
        previewUrl: "/"
    },
    {
        id: 3,
        title: "Panther Hub",
        description: "Project 3 Description",
        image: "/images/projects/3-placeholder.png",
        tag: ["All", "SWE"],
        gitUrl: "https://github.com/aidyn-kittrell/Panther-Hub",
        previewUrl: "/"
    },
    {
        id: 4,
        title: "Bit of Life",
        description: "Project 4 Description",
        image: "/images/projects/4-placeholder.png",
        tag: ["All", "SWE"],
        gitUrl: "https://github.com/aidyn-kittrell/Bit-of-Life",
        previewUrl: "/"
    },
    {
        id: 5,
        title: "Scrimtistic",
        description: "Project 5 Description",
        image: "/images/projects/5-placeholder.png",
        tag: ["All", "DS"],
        gitUrl: "https://github.com/aidyn-kittrell/Scrimtistic",
        previewUrl: "/"
    }
]

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = ProjectData.filter((project) => 
        project.tag.includes(tag)
    );

    return (
        <section>
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12"> 
                My Projects
            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag 
                    onClick={handleTagChange} 
                    name="All" 
                    isSelected={tag === "All"}
                />
                <ProjectTag 
                    onClick={handleTagChange} 
                    name="SWE" 
                    isSelected={tag === "SWE"}
                />
                <ProjectTag 
                    onClick={handleTagChange} 
                    name="DS" 
                    isSelected={tag === "DS"}
                />
            </div>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project) => (
                    <ProjectCard 
                        key={project.id} 
                        title={project.title} 
                        description={project.description} 
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                    />
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;