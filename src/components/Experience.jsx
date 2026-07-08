import React from "react";
import { motion } from "framer-motion";
const experiences = [
  {
    company: "Olf'Active",
    role: "Intern - Full Stack Developer",
    period: "March 2025",
    location: "Casablanca",
    description:
      "Developed a showcase website (portfolio) for the Olf'Active agency, from an already finalized UI/UX design. ",
    tech: ["React", "CSS3", "JavaScript", "Laravel", "MySQL"],
    link: "https://olfactive-website.vercel.app",
  },
  {
    company: "Orange Maroc",
    role: "Intern - Data Engineer",
    period: "July 2026",
    location: "Casablanca",
    description: "",
    tech: ["Web Scraping", "Python", "SQL", "Data Analysis"],
    link: "",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2 className="h2">Professional Experience</h2>

      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <motion.div
            className="exp-item"
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <span className="exp-dot">
              <i className="fa-solid fa-briefcase"></i>
            </span>

            <div className="exp-content">
              <div className="exp-header">
                <h3>{exp.role}</h3>
                <span className="exp-period">{exp.period}</span>
              </div>

              <p className="exp-company">
                {exp.company} {exp.location && `· ${exp.location}`}
              </p>

              <p className="exp-desc">{exp.description}</p>

              <div className="tech-stack exp-tech">
                {exp.tech.map((t, i) => (
                  <span className="tech" key={i}>
                    {t}
                  </span>
                ))}
              </div>

              {exp.link && (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link exp-link"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>{" "}
                  Voir le projet
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
export default Experience;
