import React from "react";
import TodoImage from "../assets/images/TodoPic.jpg";
import VideoTubeImage from "../assets/images/VideoTube.jpg";
import blogImage from "../assets/images/BlogPic.jpg";

const projects = [
  {
    id: 1,
    name: "Blog - App",
    technologies: "React js, Redux, Appwrite, Tailwind",
    image: blogImage,
    github: "https://github.com/BhaskarBhatkal/Blog-React.js",
  },
  {
    id: 2,
    name: "VideoTube",
    technologies: "Node js, Express js, MongoDB",
    image: VideoTubeImage,
    github: "https://github.com/BhaskarBhatkal/VideoTube_Backend",
  },
  {
    id: 3,
    name: "Todo - App",
    technologies: "React js, Context API, Tailwind",
    image: TodoImage,
    github: "https://github.com/BhaskarBhatkal/TodoList_ContextAPI",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 
              w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a
                href={project.github}
                className="inline-block bg-gradient-to-r 
              from-[#0d898d] to-[#415479]  px-4 py-2 rounded-full text-[#ffffff] font-semibold "
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
