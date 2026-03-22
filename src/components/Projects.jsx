import React from "react";
import { motion } from "framer-motion";

import ksh from "../assets/images/ksh-project.png";
import camping from "../assets/images/camping.jpg";
import olfactive from "../assets/images/olfactive.png";

const projects = [
  {
    title: "E-commerce Website",
    image: ksh,
    type: "College Project",
    tech: ["HTML5", "CSS3", "JavaScript", "Netlify"],
    live: "https://ksh-makeup.netlify.app/",
    code: "https://github.com/05Hanane04",
  },
  {
    title: "Camping App",
    image: camping,
    type: "Final Year Project",
    tech: ["React", "CSS3", "JavaScript", "Laravel", "MySQL"],
    live: "https://05hanane04.github.io/Camping-App/",
    code: "https://github.com/05Hanane04",
  },
  {
    title: "Olf'Active Portfolio Website",
    image: olfactive,
    type: "Internship Project",
    tech: ["React", "CSS3", "JavaScript", "Laravel", "UI/UX"],
    live: "https://olfactive-website.vercel.app",
    code: "https://github.com/05Hanane04",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="h2">Projects</h2>

      <div className="blog-card-group">
        {projects.map((project, index) => (
          <motion.div
            className="blog-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="blog-card-banner">
              <img
                src={project.image}
                alt={project.title}
                className="blog-banner-img"
              />
            </div>

            <div className="blog-content-wrapper">
              <button className="blog-topic text-tiny">{project.type}</button>

              <h3 className="h3">{project.title}</h3>

              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span className="tech" key={i}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                <a href={project.live} className="project-link">
                      <i class="fa-solid fa-globe"></i> Live
                </a>

                <a href={project.code} className="project-link">
                  <i className="fa-brands fa-github"></i> Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;