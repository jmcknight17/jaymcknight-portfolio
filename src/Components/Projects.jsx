import React from "react";
import styles from "./ProjectsStyles.module.css";
import SoberStride from "../assets/SOBERSTRIDE.png";
import viberr from "../assets/viberr.png";
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
        <ProjectCard src={viberr} link="github.com" head="N/A" summary="N/A" />
      </div>
    </section>
  );
}

export default Projects;
