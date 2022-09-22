import ProjectVU from "./projects/ProjectVU";
import ProjectRP from "./projects/ProjectRP";
import ProjectCC from "./projects/ProjectCC";
import ProjectUD from "./projects/ProjectUD";
import ProjectPQ from "./projects/ProjectPQ";
import ProjectFE from "./projects/ProjectFE";
import React, { useEffect, useState } from "react";
import styles from "./ProjectCarousel.module.css";

export default function ProjectCarousel() {
  const projects = [
    <ProjectVU />,
    <ProjectCC />,
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
        <span className={styles.arrow} onClick={previousProject}>
          &#9664;
        </span>
        <span className={styles.arrow} onClick={nextProject}>
          &#9654;
        </span>
      </div>
      <div className={"container"}>{projects[currentProject]}</div>
    </>
  );
}
