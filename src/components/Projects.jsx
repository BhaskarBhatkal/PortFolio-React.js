import React from "react";
import Ems from "../assets/images/ems.png";
import VideoTubeImage from "../assets/images/VideoTube.jpg";
import blogImage from "../assets/images/BlogPic.jpg";
import todoImage from "../assets/images/TodoPic.jpg";

const projects = [
  {
    id: 1,
    name: "Blog App",
    technologies: "React js, Redux, Appwrite, Tailwind",
    image: blogImage,
    github: "https://github.com/BhaskarBhatkal/Blog-React.js",
    hostLink:
      "https://blog-react-js-git-main-bhaskarbhatkals-projects.vercel.app/",
  },

  {
    id: 2,
    name: "EMS",
    technologies: "React js, Context API, Tailwind",
    image: Ems,
    github:
      "https://github.com/BhaskarBhatkal/Employee-Management-System-React.js",
    hostLink:
      "https://employee-management-system-git-8b393a-bhaskarbhatkals-projects.vercel.app/",
  },
  {
    id: 3,
    name: "Todo App",
    technologies: "React js, Context API, Tailwind",
    image: todoImage,
    github: "https://github.com/BhaskarBhatkal/TodoList_ContextAPI",
    hostLink:
      "https://todo-list-context-api-git-main-bhaskarbhatkals-projects.vercel.app/",
  },
  {
    id: 4,
    name: "VideoTube",
    technologies: "Node js, Express js, MongoDB",
    image: VideoTubeImage,
    github: "https://github.com/BhaskarBhatkal/VideoTube_Backend",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-2 
              w-full h-36 object-cover"
              />
              <h3 className="text-2xl font-bold mb-1.5">{project.name}</h3>
              <p className="text-gray-400 mb-4 font-semibold">
                {project.technologies}
              </p>
              <a
                href={project.github}
                className="inline-block bg-gradient-to-r 
              from-[#0d898d] to-[#415479]  px-4 py-1.5  rounded-full text-[#ffffff] font-semibold "
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href={
                  project?.hostLink ||
                  "https://documenter.getpostman.com/view/31549650/2sA3BuVoXN"
                }
                className="inline-block bg-gradient-to-r 
              from-[#0d898d] to-[#415479] ml-2 px-4 py-1.5  rounded-full text-[#ffffff] font-semibold "
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.name === "VideoTube" ? "API - Link" : "App - Link"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
