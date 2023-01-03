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

  function updateProject(increment) {
    setCurrentProject((previous) => {
      const next = previous + increment;
      if (next > projects.length - 1) {
        return 0;
      }
      if (next < 0) return projects.length - 1;
      return previous + increment;
    });
  }

  return (
    <>
      <div className={styles.carouselNavigator}>
        <div className={styles.arrow} onClick={() => updateProject(-1)}>
          <img src="/Arrow.svg"></img>
        </div>
        <div className={styles.arrow} onClick={() => updateProject(1)}>
          <img src="/Arrow.svg" style={{ transform: "scaleX(-1)" }}></img>
        </div>
      </div>
      <div className={styles.carouselBody}>{projects[currentProject]}</div>
    </>
  );
}
