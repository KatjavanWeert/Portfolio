import ProjectVU from "./projects/ProjectVU";
import ProjectRP from "./projects/ProjectRP";
import ProjectCC from "./projects/ProjectCC";
import ProjectUD from "./projects/ProjectUD";
import ProjectPQ from "./projects/ProjectPQ";
import ProjectFE from "./projects/ProjectFE";
import ProjectBR from "./projects/ProjectBR";
import React, { useEffect, useState } from "react";
import styles from "./ProjectCarousel.module.css";

export default function ProjectCarousel() {
  const projects = [
    <ProjectVU />,
    <ProjectCC />,
    <ProjectBR />,
    <ProjectRP />,
    <ProjectUD />,
    <ProjectPQ />,
    <ProjectFE />,
  ];
  const [currentProject, setCurrentProject] = useState(0);

  function nextProject() {
    if (currentProject < projects.length - 1) {
      setCurrentProject(currentProject + 1);
    } else {
      setCurrentProject(0);
    }
  }
  function previousProject() {
    if (currentProject > 0) {
      setCurrentProject(currentProject - 1);
    } else {
      setCurrentProject(projects.length - 1);
    }
  }

  return (
    <>
      <div className={styles.carouselNavigator}>
        <div className={styles.arrow} onClick={previousProject}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 256 512"
          >
            <path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z" />
          </svg>
        </div>
        <div className={styles.arrow} onClick={nextProject}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 256 512"
          >
            <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
          </svg>
        </div>
      </div>
      <div className={styles.carouselBody}>{projects[currentProject]}</div>
    </>
  );
}
