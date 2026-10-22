import React from "react";
import styles from "./ProjectsStyles.module.css";
import SoberStride from "../assets/SOBERSTRIDE.png";
import QuietMail from "../assets/Quietmail.png";
import Notifly from "../assets/Notifly.png";
import ProjectCard from "../../common/ProjectCard";
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle"> Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={SoberStride}
          link="https://github.com/jmcknight17/SoberStride"
          head="SoberStride (Full Stack)"
          summary="Sobriety support application"
        />
        <ProjectCard
          src={QuietMail}
          link="https://github.com/jmcknight17/QuietMail"
          head="QuietMail (Full Stack)"
          summary="Email management application" />
        <ProjectCard
          src={Notifly}
          link="https://github.com/jmcknight17/Notifly"
          head="Notifly (.NET Worker Service)"
          summary="Flight price tracking service" />
      </div>
    </section>
  );
}

export default Projects;
