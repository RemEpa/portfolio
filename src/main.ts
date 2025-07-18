import projectsData from "./data/projects.json";

import { renderProjects, type Project } from "./scripts/ui";
import { createDummyData } from "./scripts/genDummy";

function main() {
  let data: Project[] = projectsData;
  const projectsContainer = document.querySelector(
    "#projects-container"
  ) as HTMLElement | null;

  if (data.length < 4) {
    for (let i = data.length + 1; i <= 4; i++) {
      console.log(data.length);
      data = [...data, createDummyData(i)];
    }
  }

  if (projectsContainer) {
    renderProjects(projectsContainer, data);
  }
}

main();
